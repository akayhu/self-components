import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAtomicType } from '../fileUploader/fileUpload.js';
import Modal from '../modal/modal';
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import FontIcon from 'material-ui/FontIcon';
import getCroppedImg from './getCroppedImg';
import 'react-image-crop/dist/ReactCrop.css';
// import { uploadCroppedImage } from 'actions/document';
import { Tabs, Tooltip } from 'antd';
import './style.css';
import {
	ModalTitle,
	ModalButton,
	Loading,
	LightboxLoading,
} from './styledComponents';
import persistState from 'localStorage';
import { tagsMap, mediaTypeMap } from 'config/document';
import { pushSystemMessage } from 'actions/ui/systemMessage';

const TabPane = Tabs.TabPane;

const TriggerButton = styled.span`
	position: absolute;
	border-radius: 8px;
	background: #fff;
	cursor: pointer;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
	z-index: 300;
	${props => {
		if (props.buttonPosition) {
			return `top: calc(50% - 19px); left: calc(50% - 19px);`;
		} else {
			return `right: 20px; bottom: 20px;`;
		}
	}}
`;

const UploadPane = styled.div`
	position: relative;
	min-width: 480px;
	min-height: 270px;
	background: #f9f9f9;
	border: 2px dashed #d1d1d1;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1400;

	@media (max-width: 568px) {
		min-width: auto;
		width: 100%;
	}
`;

const LoadingWrapper = styled(LightboxLoading)`
	height: 200px;
`;

class CropUploader extends Component {
	static propTypes = {
		aspect: PropTypes.number.isRequired,
		width: PropTypes.number,
		height: PropTypes.number,
		fileId: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.oneOf([null, undefined]),
		]),
		oriFile: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.oneOf([null, undefined]),
		]),
		editable: PropTypes.bool.isRequired,
		buttonPosition: PropTypes.string,
		onBeforeProcessing: PropTypes.func,
		onStartProcessing: PropTypes.func,
		onFinishProcessing: PropTypes.func,
		templateType: PropTypes.string,
		mediaType: PropTypes.oneOf(Object.keys(mediaTypeMap)).isRequired,
		customProp: ({ mediaType, convertType }, propName, componentName) => {
			if (propName === 'convertType') {
				const convertTypeMap = tagsMap[mediaType];
				if (!convertTypeMap || !convertTypeMap.hasOwnProperty(convertType))
					throw new Error(`
					Invalid prop convertType supplied to ${componentName}.
				`);
			}
		},
	};

	static defaultProps = {
		editable: false,
		oriFile: null,
		fileId: null,
		mediaType: 'IMAGE',
		convertType: 'cover',
		templateType: 'def',
		isGallery: false,
	};

	constructor(props) {
		super(props);
		this.state = {
			oriFile: props.oriFile,
			fileId: props.fileId,
			mediaInfo: {
				mediaType: props.mediaType,
				convertType: props.convertType,
			},
			cropping: false,
			crop: {},
			open: false,
			activeKey: '1',
			loading: false,
			uploading: false,
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.oriFile !== prevState.oriFile && !prevState.open) {
			return {
				...prevState,
				oriFile: nextProps.oriFile,
				fileId: nextProps.fileId,
			};
		}

		return null;
	}

	open = () => {
		const { fileId, uploading } = this.state;
		let crop = this.state.crop || {};

		if (fileId) {
			const previousCrop = persistState.loadState(['crop', fileId]);
			if (previousCrop && !uploading) {
				crop = previousCrop;
			}
		}
		//TODO
		this.setState(state => ({
			open: true,
			activeKey: state.fileId ? '2' : '1', // 有上傳過圖片，自動切到調整圖片
			crop, // 讀取上次儲存的座標
			loading: state.fileId ? true : false,
		}));
	};

	openFile = () => {
		this.refs.fileInput.click();
	};

	fileInputSetState = (f, e2, AtomicType) => {
		this.setState({
			f: f,
			oriFile: e2.target.result,
			fileId: null,
			crop: {},
			cropping: false,
			activeKey: '2',
			mediaInfo: {
				mediaType: AtomicType,
				convertType:
					AtomicType !== 'IMAGE' ? AtomicType.toLowerCase() : 'cover',
			},
			uploading: AtomicType !== 'IMAGE' ? true : false,
			loading: AtomicType !== 'IMAGE' ? true : false,
		});
	};

	handleFileInput = e => {
		const files = Array.prototype.slice.call(e.target.files, 0);
		const { pushSystemMessage } = this.props;
		this.setState({ loading: true });

		files.forEach(f => {
			let AtomicType = getAtomicType(f.type);
			if (AtomicType) {
				if (AtomicType === 'IMAGE') {
					const reader = new FileReader();
					reader.readAsDataURL(f);
					reader.onload = e2 => {
						this.fileInputSetState(f, e2, AtomicType);
					};
				} else {
					pushSystemMessage(
						`不支援的檔案格式 ${AtomicType} 請再重新上傳!`,
						'error'
					);
					return false;
				}
			}
		});
	};

	onComplete = (crop, pixelCrop) => {
		this.pixelCrop = pixelCrop;
		this.setState({ crop });
	};

	onChange = crop => {
		this.setState({ crop });
	};

	onImageLoaded = image => {
		const crop = makeAspectCrop(
			{
				x: this.state.crop.x || 0,
				y: this.state.crop.y || 0,
				aspect: this.props.aspect,
				width: this.state.crop.width || 50,
			},
			image.naturalWidth / image.naturalHeight
		);

		this.setState({ crop, image, loading: false }, () => {
			const pixelCrop = {
				x: Math.round(image.naturalWidth * (crop.x / 100)),
				y: Math.round(image.naturalHeight * (crop.y / 100)),
				width: Math.round(image.naturalWidth * (crop.width / 100)),
				height: Math.round(image.naturalHeight * (crop.height / 100)),
			};
			this.onComplete(crop, pixelCrop);
		});
	};

	onFinishProcessing = ({ fileId, fileUrlMap, coordinate }) => {
		// 更新 or 新增 crop 物件到 localStorage
		persistState.saveState(['crop', fileId], this.state.crop);
		this.setState(
			{
				uploading: false,
				fileId,
				oriFile: fileUrlMap.origin[0],
			},
			() => {
				// hook: 完成所有上傳程序並提供 fileId & file URI
				if (typeof this.props.onFinishProcessing === 'function') {
					this.props.onFinishProcessing({ fileId, fileUrlMap, coordinate });
				}
			}
		);
	};

	handleFileUploadOnly = (f, coordinate, mediaType, convertType) => {
		// const {
		// 	uploadCroppedImage,
		// 	componentType,
		// 	getFileData,
		// 	onStartProcessing,
		// } = this.props;
		// 上傳 & 更新 fileId
		// uploadCroppedImage(f, {
		// 	contentType: f && f.type,
		// 	fileName: f && f.name,
		// 	fileId: null,
		// 	coordinate,
		// 	mediaType,
		// 	convertType,
		// 	componentType: componentType || '',
		// 	getFileData: getFileData || '', // 作品集判斷是否正在轉擋中用
		// 	onStartProcessing: onStartProcessing,
		// 	onFinishProcessing: this.onFinishProcessing,
		// });
	};

	handleSubmit = e => {
		const { image, f, loading, uploading, mediaInfo, crop } = this.state;
		if (loading || uploading) return;
		const {
			fileId,
			// componentType,
			// getFileData,
			// onStartProcessing,
			onBeforeProcessing,
			// uploadCroppedImage,
		} = this.props;
		const { convertType, mediaType } = mediaInfo;
		// const convertTypeMap = tagsMap[mediaType] || {};
		const dataURI = getCroppedImg(image, this.pixelCrop, '123');
		const coordinate = {
			ltx: this.pixelCrop.x,
			lty: this.pixelCrop.y,
			rbx: this.pixelCrop.x + this.pixelCrop.width,
			rby: this.pixelCrop.y + this.pixelCrop.height,
		};

		// let fileUrlMap = (convertTypeMap[convertType] || []).reduce(
		// 	(map, tag) => ({ ...map, [tag]: dataURI }),
		// 	{}
		// );

		// hook: 提供 data URI & 座標
		// onBeforeProcessing({
		// 	fileId: fileId,
		// 	fileUrlMap,
		// 	coordinate,
		// });

		// 上傳 & 更新 fileId
		// uploadCroppedImage(f, {
		// 	contentType: f && f.type,
		// 	fileName: f && f.name,
		// 	fileId: this.state.fileId,
		// 	coordinate,
		// 	mediaType,
		// 	convertType,
		// 	componentType: componentType || '',
		// 	getFileData: getFileData || '', // 作品集判斷是否正在轉擋中用
		// 	onStartProcessing: onStartProcessing,
		// 	onFinishProcessing: this.onFinishProcessing,
		// });

		// 調整圖片的話，更新 crop 物件到 localStorage
		if (this.state.fileId) {
			persistState.saveState(['crop', this.state.fileId], crop);
		}

		this.setState({ uploading: true, loading: true, open: false });
	};

	handleCancel = () => {
		this.pixelCrop = undefined;
		this.setState({
			cropping: false,
			open: false,
			activeKey: '1',
		});
	};

	onTabClick = value => this.setState({ activeKey: value });

	render() {
		const {
			className,
			editable,
			buttonPosition,
			children,
			componentType,
		} = this.props;
		const { oriFile, uploading, loading, mediaInfo } = this.state;

		return (
			<div className={`${className || ''} edit-wrapper`}>
				{editable && (
					<div className="crop-icon">
						<TriggerButton buttonPosition={buttonPosition}>
							<Tooltip
								placement="bottom"
								title={
									componentType && componentType === 'gallery'
										? '變更檔案'
										: '變更圖片'
								}
							>
								<i className="icon-crop_icon" onClick={this.open} />
							</Tooltip>
						</TriggerButton>
					</div>
				)}
				<div className="children-main">{children}</div>
				<input
					type="file"
					ref="fileInput"
					style={{ display: 'none' }}
					onChange={this.handleFileInput}
				/>
				{this.state.open && (
					<Modal className="modal-upload tag-position">
						<ModalTitle>圖像</ModalTitle>
						<Tabs
							activeKey={this.state.activeKey}
							onTabClick={this.onTabClick}
							defaultActiveKey="1"
							size="large"
						>
							<TabPane tab="上傳圖片" key="1" disabled={uploading}>
								<UploadPane>
									<ModalButton onClick={this.openFile}>選擇檔案</ModalButton>
								</UploadPane>
							</TabPane>
							<TabPane tab="圖片預覽" key="2" disabled={!oriFile}>
								<div className="crop-wrapper">
									{loading && (
										<LoadingWrapper>
											<h4>{uploading ? '上傳中 ...' : '讀取中 ...'}</h4>
											<Loading />
										</LoadingWrapper>
									)}
									<ReactCrop
										src={oriFile || ''}
										crop={this.state.crop}
										onImageLoaded={this.onImageLoaded}
										onComplete={this.onComplete}
										onChange={this.onChange}
										imageStyle={{ maxHeight: '60vh' }}
										style={loading ? { display: 'none' } : {}}
										keepSelection={true}
										crossorigin="anonymous"
									/>
								</div>
								{!loading && (
									<div className="submit-div">
										<ModalButton onClick={this.handleSubmit}>儲存</ModalButton>
									</div>
								)}
							</TabPane>
						</Tabs>
						<FontIcon
							className={`icon-icon_cancel`}
							style={{
								position: 'absolute',
								top: '20px',
								right: '20px',
								cursor: 'pointer',
							}}
							onClick={this.handleCancel}
						/>
					</Modal>
				)}
			</div>
		);
	}
}

export default connect(
	null,
	{ pushSystemMessage }
)(CropUploader);

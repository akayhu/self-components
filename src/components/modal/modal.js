import React, { PureComponent } from 'react';
import './style.css';
import styled from 'styled-components';

const ModalMain = styled.div`
	width: ${props => (props.width ? `${props.width}px` : '600px')};
`;

class Modal extends PureComponent {
	render() {
		const { propsClassName, children, width } = this.props;
		return (
			<ModalMain
				width={width}
				className={
					propsClassName
						? `${propsClassName} modal__container`
						: 'modal__container'
				}
			>
				{children}
			</ModalMain>
		);
	}
}

export default Modal;

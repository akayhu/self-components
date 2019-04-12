import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './modal';
import readme from './readme.md';
import './style.css';

const submit = () => {
	console.log('ok! submit');
};

const modal = storiesOf('UI Components|React Components/Modal 對話框', module);

modal
	.addDecorator(story => <div>{story()}</div>)
	.add(
		'<Modal> 對話框',
		() => (
			<Fragment>
				<Modal propsClassName="modal__upload modal__tag-position" width="800">
					<div className="modal__title">
						<h3>我是標題</h3>
					</div>
					<div className="modal__content">
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
						中間內容
						<br />
					</div>
					<div className="modal__button">
						<button onClick={submit}>確定</button>
					</div>
				</Modal>
				<div className="index__bg" />
			</Fragment>
		),
		{
			notes: { markdown: readme },
		}
	);

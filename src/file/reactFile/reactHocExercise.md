# React Higher Order Components (高階組件) 練習

- 需安裝 antd 套件

此範例為實際專案練習的 Sources Code，各檔案 Sources Code 位置可用關鍵字搜尋查詢。

### Method.js

```js
import React, { Component } from 'react';
import MoneyAmount from './MoneyAmount';

class ServiceItems extends Component {
	render() {
		const moneyData = 400;
		return <MoneyAmount title="金額" data={moneyData} />;
	}
}

export default ServiceItems;
```

### popoverData.js

```js
const treeData = [
	{
		title: 'Node1',
		value: '0-0',
		key: '0-0',
		children: [
			{
				title: 'Child Node1',
				value: '0-0-0',
				key: '0-0-0',
			},
		],
	},
	{
		title: 'Node2',
		value: '0-1',
		key: '0-1',
		children: [
			{
				title: 'Child Node2',
				value: '0-1-0',
				key: '0-1-0',
			},
			{
				title: 'Child Node3',
				value: '0-1-1',
				key: '0-1-1',
			},
		],
	},
	{
		title: 'Node3',
		value: '0-2',
		key: '0-2',
		children: [
			{
				title: 'Child Node4',
				value: '0-2-0',
				key: '0-2-0',
			},
			{
				title: 'Child Node5',
				value: '0-2-1',
				key: '0-2-1',
			},
			{
				title: 'Child Node6',
				value: '0-2-2',
				key: '0-2-2',
			},
		],
	},
	{
		title: 'Node4',
		value: '0-3',
		key: '0-3',
		children: [
			{
				title: 'Child Node7',
				value: '0-3-0',
				key: '0-3-0',
			},
			{
				title: 'Child Node8',
				value: '0-3-1',
				key: '0-3-1',
			},
			{
				title: 'Child Node9',
				value: '0-3-2',
				key: '0-3-2',
			},
			{
				title: 'Child Node10',
				value: '0-3-3',
				key: '0-3-3',
			},
		],
	},
];

const selectData = ['論件計酬', '時薪'];

export { treeData, selectData };
```

### var.scss

```css
/**
 * 顏色
 */
$white: #ffffff !default;
$black: #4a4a4a;

$gray-100: #f6f6f6 !default;
$gray-200: #dddddd !default;
$gray-300: #979797 !default;

$main-1: #f5b524 !default;
$main-1-hover: #dea118 !default;
$main-10: rgba(245, 181, 36, 0.1) !default;
$main-2: #00bada !default;
$main-2-hover: #009db7 !default;

$errorTip: #e66c6c !default;

/**
 * 文字大小
 * 計算器 https://www.w3schools.com/tags/ref_pxtoemconversion.asp
 */
$font_html: 16px !default; //rem root value for html element.
$font-base: 1rem !default;
$font-size-5: ($font-base * 0.3125) !default;
$font-size-6: ($font-base * 0.375) !default;
$font-size-7: ($font-base * 0.4375) !default;
$font-size-8: ($font-base * 0.5) !default;
$font-size-9: ($font-base * 0.5625) !default;
$font-size-10: ($font-base * 0.625) !default;
$font-size-12: ($font-base * 0.75) !default;
$font-size-13: ($font-base * 0.8125) !default;
$font-size-14: ($font-base * 0.875) !default;
$font-size-15: ($font-base * 0.9375) !default;
$font-size-16: ($font-base * 1) !default;
$font-size-17: ($font-base * 1.0625) !default;
$font-size-18: ($font-base * 1.125) !default;
$font-size-19: ($font-base * 1.1875) !default;
$font-size-20: ($font-base * 1.25) !default;
$font-size-23: ($font-base * 1.4375) !default;
$font-size-24: ($font-base * 1.5) !default;
$font-size-26: ($font-base * 1.6) !default;
$font-size-30: ($font-base * 2.45) !default;
$font-size-32: ($font-base * 2) !default;
$font-size-34: ($font-base * 2.125) !default;
$font-size-36: ($font-base * 2.25) !default;
$font-size-38: ($font-base * 2.375) !default;
$font-size-62: ($font-base * 3.875) !default;

$sidebar: 580px;
$message: 626px;

$breakpoint-s: 720px;
$breakpoint-m: 1120px;

$font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
	Ubuntu, 'Microsoft JhengHei', '微軟正黑體', Arial, sans-serif;
```

### ServiceItems.scss

```css
@import './var';

.main {
	position: relative;
	text-align: left;
	padding: 15px 15px 20px;
	border: 3px solid $gray-100;
	width: 33%;
	&:hover {
		border-radius: 6px;
		border: 3px solid $gray-200;
		padding: 15px 15px 20px;
	}
	.row {
		margin-top: 10px;
		font-size: $font-size-13;
	}
	:global {
		.ant-input {
			border: none;
			background: transparent;
			font-size: $font-size-20;
			color: $black;
			padding-left: 0;
			margin-bottom: 10px;
		}
		textarea.ant-input {
			font-size: $font-size-13;
		}
		.ant-select-enabled {
			position: relative;
			&::after {
				content: '∨';
				font-size: $font-size-10;
				position: absolute;
				right: 10px;
				top: 8px;
				color: $black;
			}
			&.ant-select-focused {
				&::after {
					content: '∧';
					position: absolute;
					right: 10px;
					top: 8px;
					color: $black;
				}
			}
		}
	}
	.img {
		height: 200px;
		margin-bottom: 15px;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
		:global {
			.edit-wrapper {
				width: 100%;
			}
			.children-main {
				img {
					width: 100%;
					height: 200px;
				}
			}
		}
	}
}
.data {
	cursor: pointer;
	color: $black;
}
.btnWrap {
	margin-top: 10px;
	text-align: right;
}
```

### ui/button.js

```js
import React from 'react';
import { Button } from 'antd';
import styles from './Button.scss';
import 'antd/dist/antd.css';

const Btn = ({ href, type, children, htmlType, onClick, loading }) => {
	const isDisagled = type === 'disabled' ? 'disabled' : '';
	return (
		<div className={`${styles.btn}`}>
			<Button
				type={type}
				href={href}
				disabled={isDisagled}
				htmlType={htmlType}
				onClick={onClick}
				loading={loading}
			>
				{children}
			</Button>
		</div>
	);
};

export default Btn;
```

### ui/Button.scss

```css
@import '../scss/var';

.btn {
	display: inline-block;
	:global {
		.ant-btn {
			border-radius: 16px !important;
			box-shadow: none !important;
			text-shadow: none !important;
			font-weight: normal !important;
			background-color: $white !important;
			border: 1px solid $gray-200 !important;
			color: $black;
			i {
				color: $gray-300;
			}
			&:hover {
				border: 1px solid $main-1 !important;
				color: $main-1 !important;
				i {
					color: $main-1 !important;
				}
			}
		}
		.ant-btn-disabled,
		.ant-btn.disabled,
		.ant-btn[disabled],
		.ant-btn-disabled:hover,
		.ant-btn.disabled:hover,
		.ant-btn[disabled]:hover,
		.ant-btn-disabled:focus,
		.ant-btn.disabled:focus,
		.ant-btn[disabled]:focus,
		.ant-btn-disabled:active,
		.ant-btn.disabled:active,
		.ant-btn[disabled]:active,
		.ant-btn-disabled.active,
		.ant-btn.disabled.active,
		.ant-btn[disabled].active {
			background-color: $gray-200 !important;
			border: 1px solid $gray-200 !important;
			color: $gray-300 !important;
		}
		.ant-btn-primary {
			background-color: $main-1 !important;
			border: 1px solid $main-1 !important;
			color: $white !important;
			&:hover {
				background-color: $main-1-hover !important;
				border: 1px solid $main-1-hover !important;
				color: $white !important;
			}
		}
		.ant-btn-danger {
			background-color: $main-2 !important;
			border: 1px solid $main-2 !important;
			color: $white !important;
			i {
				color: $white !important;
			}
			&:hover {
				background-color: $main-2-hover !important;
				border: 1px solid $main-2-hover !important;
				color: $white !important;
				i {
					color: $white !important;
				}
			}
		}
	}
}
```

### Row.js

```js
import React, { Component, Fragment } from 'react';
import { Col, Popover } from 'antd';
import RowHOC from './RowHOC';

class Row extends Component {
	render() {
		const { title, content, children, rowButton, isOpen } = this.props;

		return (
			<Fragment>
				<Popover
					content={content}
					title={`服務${title}`}
					trigger="click"
					placement="bottomLeft"
					visible={isOpen}
					onVisibleChange={rowButton}
				>
					<Col span={18} push={6}>
						{children}
					</Col>
				</Popover>
			</Fragment>
		);
	}
}

export const RowLayout = RowHOC(Row);
```

### ServiceItems.scss

```css
@import '../scss/var';

.main {
	position: relative;
	text-align: left;
	padding: 15px 15px 20px;
	border: 3px solid $gray-100;
	width: 33%;
	&:hover {
		border-radius: 6px;
		border: 3px solid $gray-200;
		padding: 15px 15px 20px;
	}
	.row {
		margin-top: 10px;
		font-size: $font-size-13;
	}
	:global {
		.ant-input {
			border: none;
			background: transparent;
			font-size: $font-size-20;
			color: $black;
			padding-left: 0;
			margin-bottom: 10px;
		}
		textarea.ant-input {
			font-size: $font-size-13;
		}
		.ant-select-enabled {
			position: relative;
			&::after {
				content: '∨';
				font-size: $font-size-10;
				position: absolute;
				right: 10px;
				top: 8px;
				color: $black;
			}
			&.ant-select-focused {
				&::after {
					content: '∧';
					position: absolute;
					right: 10px;
					top: 8px;
					color: $black;
				}
			}
		}
	}
	.img {
		height: 200px;
		margin-bottom: 15px;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
		:global {
			.edit-wrapper {
				width: 100%;
			}
			.children-main {
				img {
					width: 100%;
					height: 200px;
				}
			}
		}
	}
}
.data {
	cursor: pointer;
	color: $black;
}
.btnWrap {
	margin-top: 10px;
	text-align: right;
}
```

### RowHOC.js

```js
import React from 'react';
import { Row, Col } from 'antd';
import styles from './ServiceItems.scss';

const RowHOC = WrappedComponent => ({ children, ...props }) => (
	<Row className={styles.row}>
		<WrappedComponent {...props}>{children}</WrappedComponent>
		<Col span={6} pull={18}>
			服務{props.title}：
		</Col>
	</Row>
);

export default RowHOC;
```

### MoneyAmount.js

```js
import React, { Component, Fragment } from 'react';
import { selectData } from './popoverData.js';
import styles from './ServiceItems.scss';
import Button from '../ui/button';
import { RowLayout } from './Row';

const selectChange = (value, bool) => {
	console.log(`selected ${value} ${bool}`);
};

const options = selectData.map((item, index) => (
	<Option key={index} value={item}>
		{item}
	</Option>
));

const inputNumberChange = value => {
	console.log('changed', value);
};

const GetData = ({ data }) => (data ? `時薪 ${data} 元起` : '不拘');

class MoneyAmount extends Component {
	state = {
		value: this.props.data,
		isOpen: false,
	};

	handleCheck = () => {
		const { isOpen } = this.state;
		this.setState({ isOpen: !isOpen });
	};

	renderContent = (
		<Fragment>
			<Select defaultValue={selectData[0]} onChange={selectChange}>
				{options}
			</Select>{' '}
			台幣 <InputNumber defaultValue={0} onChange={inputNumberChange} /> 元起
			<div className={styles.btnWrap}>
				<Button onClick={this.handleCheck} type="primary">
					確認
				</Button>
			</div>
		</Fragment>
	);

	render() {
		const { title } = this.props;
		const { isOpen, value } = this.state;
		return (
			<RowLayout
				title={title}
				content={this.renderContent}
				isOpen={isOpen}
				rowButton={this.handleCheck}
			>
				<span className={styles.data}>
					<GetData data={value} />
				</span>
			</RowLayout>
		);
	}
}

export default MoneyAmount;
```

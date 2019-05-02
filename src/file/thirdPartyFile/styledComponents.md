# styled-components

styled components 是 React 在編寫 inline-css 的 library，應該還算新，感覺出來幾個月而已，它很特別的地方是它可以把你要用的元素透過 ES6 的字符串模板做出來，你不用再對每個類別或是 HTML 元素進行 Styling，它能讓你編寫 CSS 也像是在做 Component 一樣，把每個 CSS 都進行組件化。

![image](https://github.com/akayhu/self-components/blob/master/src/file/thirdPartyFile/image/styledComponents.png?raw=true)

官方網址：[https://www.styled-components.com/](https://www.styled-components.com/)

## 寫法用法參考

```js
const SectionOne = styled.section`
	height: 1750px;
	text-align: center;
	width: 100%;

	@media only screen and (min-width: 901px) {
		${({ sectionValue }) =>
			sectionValue > 350 &&
			sectionValue < 1201 &&
			css`
				position: fixed;
				top: -300px;
			`}

		${({ sectionValue }) =>
			sectionValue > 1201 &&
			css`
				position: fixed;
				top: ${({ sectionValue }) => `${890 - sectionValue}px`};
			`}
	}
`;
```

```js
const BehanceBlockDescription = styled.div`
	font-size: 12px;
	margin: 0 10px 10px;
	font-weight: 500;
	overflow: hidden;
	display: -webkit-box;
	line-height: 1.5;
	-webkit-line-clamp: 2;
	max-height: 34px;
	-webkit-box-orient: vertical;
`;
```

```js
const LightboxLoading = styled.div`
	position: relative;
	text-align: center;
	padding: 5em 2em;
`;

const LoadingWrapper = styled(LightboxLoading)`
	height: 200px;
`;
```

```js
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
		} else if (props.isMask && isMobile) {
			return `right: 20px; top: 16%;`;
		} else {
			return `right: 20px; bottom: 20px;`;
		}
	}}
`;
```

```js
const WebAppBody = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${props => (props.background ? props.background : '#fff')};
`;
```

```js
import { Spin, Icon } from 'antd';

const StyledSpin = styled(Spin)`
	width: 100%;
	text-align: center;
	&::after {
		content: ' ';
		height: 100%;
		display: inline-block;
		vertical-align: middle;
	}
`;

const Loading = () => (
	<StyledSpin
		indicator={
			<Icon
				type="loading"
				style={{ fontSize: 30, color: '#f5b523', height: 30, width: 30 }}
				spin
			/>
		}
	/>
);
```

```js
const CropImgMask = styled.div`
	position: absolute;
	top: 0;
	z-index: 11;
	height: 100%;
	width: 100%;
	${props => {
		switch (props.maskName) {
			case 'blackMask':
				return `
					background: rgba(0,0,0,${props.maskAlpha});
				`;
			case 'whiteMask':
				return `
					background: rgba(255,255,255,${props.maskAlpha});
				`;
			case 'blackGradientMask':
				return `
					background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,${
						props.maskAlpha
					}) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(0,0,0,${
						props.maskAlpha
					}) 100%); /* FF3.6-15 */
					background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(0,0,0,${
						props.maskAlpha
					}) 100%); /* Chrome10-25,Safari5.1-6 */
				`;
			case 'WhiteGradientMask':
				return `
					background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(255,255,255,${
						props.maskAlpha
					}) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
					background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(255,255,255,${
						props.maskAlpha
					}) 100%); /* FF3.6-15 */
					background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(255,255,255,${
						props.maskAlpha
					}) 100%); /* Chrome10-25,Safari5.1-6 */
				`;
			default:
				return `
					background: rgba(0,0,0,${props.maskAlpha});
				`;
		}
	}}
`;
```

註：如果拉出去寫成一隻共用擋，記得要 export 出去

```js
export {
	SectionOne,
	BehanceBlockDescription,
	LightboxLoading,
	LoadingWrapper,
	TriggerButton,
	WebAppBody,
	StyledSpin,
	Loading,
	CropImgMask,
};
```

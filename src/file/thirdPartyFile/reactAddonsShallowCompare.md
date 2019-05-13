# react-addons-shallow-compare

在[React.PureComponent](https://reactjs.org/docs/react-api.html#react.purecomponent)介紹之前，shallowCompare 通常用於實現與[PureRenderMixin](https://www.npmjs.com/package/react-addons-pure-render-mixin)使用 React 的 ES6 類時相同的功能。

如果你的 React 組件的渲染函數是“純粹的”（換句話說，它在給定相同的道具和狀態的情況下呈現相同的結果），你可以使用這個輔助函數在某些情況下提高性能。

> 注意： 這是一個遺留的 React 插件，不再維護。
>
> 我們不鼓勵在新代碼中使用它，但它存在向後兼容性。
>
> 建議使用遷移路徑[React.PureComponent](https://reactjs.org/docs/react-api.html#react.purecomponent)。

npm 網址：[https://www.npmjs.com/package/react-addons-shallow-compare](https://www.npmjs.com/package/react-addons-shallow-compare)

## 寫法用法參考

參考官方文件

```js
export class SampleComponent extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	render() {
		return <div className={this.props.className}>foo</div>;
	}
}
```

```js
import React, { Component } from 'react';
// import { isChrome, isChromium } from 'react-device-detect';
import shallowCompare from 'react-addons-shallow-compare'; // DEPERECATED: 這是 legacy module，日後 chrome 修正了 bug 再移除他

/**
 * HACK: Workaround HOC for chrome dragend issue
 * https://github.com/react-dnd/react-dnd/issues/1085
 *
 * TODO: 此 module 間接使得拖曳的效能變好了，日後移除時需重新調校拖曳效能
 */
export const withDelayRender = WrappedComponent =>
	class DelayRender extends Component {
		shouldComponentUpdate = (nextProps, nextState) => {
			// 非 chrome 瀏覽器不會有這層判斷
			// if (!isChrome && !isChromium) return true;

			if (shallowCompare(this, nextProps, nextState)) {
				// 若判斷需要重 render，延遲指定時間後呼叫 render
				setTimeout(() => {
					this.forceUpdate();
				}, 0);
			}
			// 一律回傳 false 避免立即呼叫 render
			return false;
		};

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
```

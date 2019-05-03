# react-css-modules

React CSS Modules 實現 CSS 模塊的自動映射。為每個 CSS 類分配一個具有全局唯一名稱的本地範圍標識符。CSS 模塊支持模塊化和可重用的 CSS！

npm 網址：[https://www.npmjs.com/package/react-css-modules](https://www.npmjs.com/package/react-css-modules)

## 寫法用法參考

```js
import CSSModules from 'react-css-modules';

export default CSSModules(CustomComponent, style, { allowMultiple: true });
```

```js
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './table.css';

class Table extends React.Component {
	render() {
		return (
			<div styleName="table">
				<div styleName="row">
					<div styleName="cell">A0</div>
					<div styleName="cell">B0</div>
				</div>
			</div>
		);
	}
}

export default CSSModules(Table, styles);
```

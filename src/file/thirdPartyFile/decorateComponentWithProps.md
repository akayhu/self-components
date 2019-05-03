# decorate-component-with-props

使用其他道具裝飾組件的簡單功能

npm 網址：[https://www.npmjs.com/package/decorate-component-with-props](https://www.npmjs.com/package/decorate-component-with-props)

## 寫法用法參考

參考 npm 文件

```js
import decorateComponentWithProps from 'decorate-component-with-props';

const props = {
	wine: 'red',
	beer: 'ipa',
	food: 'spaghetti',
};

MyDecoratedComponent = decorateComponentWithProps(MyComponent, props);

// MyDecoratedComponent will now be decorated with these props
```

```js
// 插入連結
openLinkPanel = () => {
	this.props.onOverrideContent(
		decorateComponentWithProps(LinkPanel, this.props)
	);
	this.props.onLinkPanelOpen();
};
```

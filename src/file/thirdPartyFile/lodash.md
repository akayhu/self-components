# lodash

該 Lodash 庫導出為 Node.js 的模塊。

npm 網址：[https://www.npmjs.com/package/lodash](https://www.npmjs.com/package/lodash)

## 寫法用法參考

參考 npm 文件

```js
import throttle from 'lodash/throttle';

if (body) {
	const targetNode =
		document.scrollingElement || document.documentElement || document.body;
	document.onscroll = throttle(this.act.bind(this, targetNode), 200);
} else {
	const targetNode =
		this.topNode.childNodes[0] ||
		document.scrollingElement ||
		document.documentElement ||
		document.body;
	targetNode.onscroll = throttle(this.act.bind(this, targetNode), 200);
}
```

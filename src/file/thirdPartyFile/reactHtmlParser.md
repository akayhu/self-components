# react-html-parser

用於將 HTML 字符串轉換為 React 組件的實用程序。避免使用 dangerouslySetInnerHTML 並將標準 HTML 元素，屬性和內聯樣式轉換為其 React 等效項。

npm 網址：[https://www.npmjs.com/package/react-html-parser](https://www.npmjs.com/package/react-html-parser)

## 寫法用法參考

```js
import React from 'react';
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from 'react-html-parser';

class HtmlComponent extends React.Component {
	render() {
		const html = '<div>Example HTML string</div>';
		return <div>{ReactHtmlParser(html)}</div>;
	}
}
```

# react-helmet

這個可重用的 React 組件將管理對文檔頭的所有更改。

Helmet 採用純 HTML 標記並輸出純 HTML 標記。這很簡單，React 初學友好。

npm 網址：[https://www.npmjs.com/package/react-helmet](https://www.npmjs.com/package/react-helmet)

## 寫法用法參考

參考文件

```js
import React from 'react';
import { Helmet } from 'react-helmet';

class Application extends React.Component {
	render() {
		return (
			<div className="application">
				<Helmet>
					<meta charSet="utf-8" />
					<title>My Title</title>
					<link rel="canonical" href="http://mysite.com/example" />
				</Helmet>
				...
			</div>
		);
	}
}
```

```js
renderSEOMeta = profile => {
	return (
		<Helmet>
			<title>{metaText.title}</title>
			<meta name="description" content={metaText.description} />
			<meta property="og:title" content={metaText.title} />
			<meta property="og:url" content={metaText.url} />
			<meta property="og:description" content={metaText.description} />
			<meta property="og:image" content={metaText.avatar} />
			<meta property="og:image:width" content={metaText.avatarSize} />
			<meta property="og:image:height" content={metaText.avatarSize} />
		</Helmet>
	);
};
```

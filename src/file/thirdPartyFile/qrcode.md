# qrcode.react

用於生成 QR 碼的 React 組件。

npm 網址：[https://www.npmjs.com/package/qrcode.react](https://www.npmjs.com/package/qrcode.react)

## 寫法用法參考

```js
var React = require('react');
var QRCode = require('qrcode.react');

React.render(<QRCode value="http://facebook.github.io/react/" />, mountNode);
```

```js
import QRCode from 'qrcode.react';

<QRCode value={`https:${generalConfig.siteUrl}/profile/${pid}`} />;
```

# react-device-detect

檢測設備，並根據檢測到的設備類型呈現視覺。

npm 網址：[https://www.npmjs.com/package/react-device-detect](https://www.npmjs.com/package/react-device-detect)

## 寫法用法參考

可參考官方文件

```js
import { isMobile } from 'react-device-detect';

const trigger = isMobile ? 'click' : 'hover';
```

```js
import { BrowserView, MobileView } from 'react-device-detect';

// render 內容
<WebAppContainer style={commonMode ? { paddingTop: '0' } : null}>
	{/* PC版呈現 */}
	<BrowserView>
		<EditorMain commonMode={commonMode} />
	</BrowserView>
	{/* Moble版呈現 */}
	<MobileView>
		<MobilePrompt commonMode={commonMode} />
		<EditorMain commonMode={commonMode} />
	</MobileView>
</WebAppContainer>;
```

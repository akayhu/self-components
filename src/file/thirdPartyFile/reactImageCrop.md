# react-image-crop

React 的圖像裁剪工具，沒有依賴關係。

npm 官方網址：[https://www.npmjs.com/package/react-image-crop](https://www.npmjs.com/package/react-image-crop)

## 寫法用法參考

參考官方文件

```js
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

<ReactCrop
	src={oriFile || ''}
	crop={this.state.crop}
	onImageLoaded={this.onImageLoaded}
	onComplete={this.onComplete}
	onChange={this.onChange}
	imageStyle={{ maxHeight: '60vh' }}
	style={loading ? { display: 'none' } : {}}
	keepSelection={true}
	crossorigin="anonymous"
/>;
```

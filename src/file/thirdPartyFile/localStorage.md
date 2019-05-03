# localStorage

效率低，但只使用純 JavaScript localStorage 實現符合 W3C 標準。
這是為了能夠對節點中的瀏覽器模塊運行單元測試等。

npm 官方網址：[https://www.npmjs.com/package/localStorage](https://www.npmjs.com/package/localStorage)

## 寫法用法參考

```js
var localStorage = require('localStorage'),
	myValue = { foo: 'bar', baz: 'quux' };
localStorage.setItem('myKey', JSON.stringify(myValue));
myValue = localStorage.getItem('myKey');
```

```js
import persistState from 'localStorage';

if (fileId) {
	const previousCrop = persistState.loadState(['crop', fileId]);
	if (previousCrop && !uploading) {
		crop = previousCrop;
	}
}

onFinishProcessing = ({ fileId, fileUrlMap, coordinate }) => {
	// 更新 or 新增 crop 物件到 localStorage
	persistState.saveState(['crop', fileId], this.state.crop);
	this.setState(
		{
			uploading: false,
			fileId,
			oriFile: fileUrlMap.origin[0],
		},
		() => {
			// hook: 完成所有上傳程序並提供 fileId & file URI
			if (typeof this.props.onFinishProcessing === 'function') {
				this.props.onFinishProcessing({ fileId, fileUrlMap, coordinate });
			}
		}
	);
};

persistState.saveState(['crop', fileId], this.state.crop);

// 調整圖片的話，更新 crop 物件到 localStorage
if (this.state.fileId) {
	persistState.saveState(['crop', this.state.fileId], crop);
}
```

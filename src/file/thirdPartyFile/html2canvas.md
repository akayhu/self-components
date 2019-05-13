# html2canvas

JavaScript HTML 渲染器

該腳本允許您直接在用戶瀏覽器上截取網頁或部分網頁的“屏幕截圖”。屏幕截圖基於 DOM，因此它可能不是真實表示的 100％準確，因為它沒有製作實際的屏幕截圖，而是根據頁面上可用的信息構建屏幕截圖。

npm 官方網址：[https://www.npmjs.com/package/html2canvas](https://www.npmjs.com/package/html2canvas)

## 寫法用法參考

參考官方文件

```js
html2canvas(document.body).then(function(canvas) {
	document.body.appendChild(canvas);
});
```

```js
import html2canvas from 'html2canvas';

// util，製作客製化區塊縮圖
updateCustomSnapshot = (blockType, uniKey) => {
	html2canvas(document.getElementById(uniKey))
		.then(canvas => {
			const url = canvas.toDataURL('image/jpeg');
			const f = fetch(url)
				.then(res => res.blob())
				.then(
					blob =>
						new File([blob], `custom-snapshot-${uniKey}.png`, {
							type: 'image/png',
						})
				)
				.then(file => file);
			return Promise.all([url, f]);
		})
		.then(([url, f]) => {
			this.props.uploadCroppedImage(f, {
				contentType: f.type,
				fileName: f.name,
				uniKey: uniKey,
				idModelName: 'snapshotFileId',
				urlModelName: 'snapshotFileUrlMap',
				coordinateModelName: 'snapshotCoordinate',
				onUpdateData: (index, keyPath, value) => {
					// 這個 function 不能帶 blockDataUpdateProcessStart 會導致無窮迴圈
					this.props.updateCard(uniKey, value, ['snapshotFileId']);
					const dataModel = this.props.dataEntity.get(uniKey).toJS();
					this.props.requestUpdateCustom({
						...dataModel,
						pid: this.props.user.get('pid'),
						customId: uniKey,
					});
				},
			});
		});
};
```

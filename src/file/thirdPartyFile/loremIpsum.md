# lorem-ipsum

常用於排版設計領域的拉丁文文章，主要目的是測試文章、或是文字在不同排版下看起來的效果

npm 官方網址：[https://www.npmjs.com/package/lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum)

## 寫法用法參考

```js
import loremIpsum from 'lorem-ipsum';

class GalleryAch extends Component {
	constructor(props) {
		this.sampleText = loremIpsum({ units: 'paragraphs' });
	}

	render = () => {
		return <DraftEditor sampleText={this.sampleText} />;
	};
}
```

# draft-js

Draft.js 是一個 JavaScript 富文本編輯器框架，為 React 構建，並由不可變模型支持。

- 可擴展和可定制：我們提供構建塊，以便創建從簡單文本樣式到嵌入式媒體的各種豐富的文本撰寫體驗。
- 聲明性富文本： Draft.js 無縫地適用於 React 應用程序，使用熟悉的聲明性 API 抽像出渲染，選擇和輸入行為的細節。
- 不可變編輯器狀態： Draft.js 模型使用 immutable-js 構建，提供具有功能狀態更新的 API，並積極利用數據持久性以實現可擴展內存使用。

npm 網址：[https://www.npmjs.com/package/draft-js](https://www.npmjs.com/package/draft-js)

## 寫法用法參考

參考 npm 官方文件

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

class MyEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editorState: EditorState.createEmpty() };
		this.onChange = editorState => this.setState({ editorState });
	}
	render() {
		return (
			<Editor editorState={this.state.editorState} onChange={this.onChange} />
		);
	}
}

ReactDOM.render(<MyEditor />, document.getElementById('container'));
```

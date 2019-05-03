# draft-convert

使用 HTML 擴展序列化和反序列化 Draft.js 內容

有關如何使用帶插件的 draft-convert 的更多信息，請參閱 draft-extend

npm 網址：[https://www.npmjs.com/package/draft-convert](https://www.npmjs.com/package/draft-convert)

## 寫法用法參考

參考 npm 官方文件

```js
// convert to HTML with blue text, paragraphs, and links
const html = convertToHTML({
	styleToHTML: style => {
		if (style === 'BOLD') {
			return <span style={{ color: 'blue' }} />;
		}
	},
	blockToHTML: block => {
		if (block.type === 'PARAGRAPH') {
			return <p />;
		}
	},
	entityToHTML: (entity, originalText) => {
		if (entity.type === 'LINK') {
			return <a href={entity.data.url}>{originalText}</a>;
		}
		return originalText;
	},
})(editorState.getCurrentContent());

// convert content state to HTML with functionality defined in the plugins applied
const html = compose(
	FirstPlugin,
	SecondPlugin,
	ThirdPlugin
)(convertToHTML)(editorState.getCurrentContent());
```

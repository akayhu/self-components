# draft-js-buttons

For the toolbar to work correctly, you must include the <Toolbar> component after the editor component:

npm 網址：[https://www.npmjs.com/package/draft-js-buttons](https://www.npmjs.com/package/draft-js-buttons)

## 寫法用法參考

參考 npm 官方文件

```js
import {
	ItalicButton,
	BoldButton,
	UnderlineButton,
	UnorderedListButton,
	OrderedListButton,
} from 'draft-js-buttons';

this.inlineToolbarPlugin = createInlineToolbarPlugin({
	structure: [
		BoldButton,
		ItalicButton,
		UnderlineButton,
		UnorderedListButton,
		OrderedListButton,
		props => (
			<LinkButton
				{...props}
				link={getLinkFromEditorState(this.state.editorState)}
				onSaveLink={this.handleSaveLink}
				onRemoveLink={this.handleRemoveLink}
				onLinkPanelOpen={this.handleLinkOpen}
				onLinkPanelClose={this.handleLinkClose}
			/>
		),
	],
});

this.plugins = [this.inlineToolbarPlugin, creatLinkPlugin()];
```

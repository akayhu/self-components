# react-autocomplete

React.js 的可訪問、可擴展的自動完成。

github 官方網址：[https://github.com/reactjs/react-autocomplete](https://github.com/reactjs/react-autocomplete)

## 寫法用法參考

參考 github 文件

查看[更多示例](https://reactcommunity.org/react-autocomplete/)，並立即使用[在線編輯器](http://jsbin.com/mipesawapi/edit?js,output)。

```js
<Autocomplete
	getItemValue={item => item.label}
	items={[{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }]}
	renderItem={(item, isHighlighted) => (
		<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
			{item.label}
		</div>
	)}
	value={value}
	onChange={e => (value = e.target.value)}
	onSelect={val => (value = val)}
/>
```

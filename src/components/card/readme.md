# Card Component 使用說明

列表有 RWD 效果，所以外面需再包一層 `div` 並給 `css` 為：

```css
 {
	flex-wrap: wrap;
	display: flex;
	align-content: flex-start;
}
```

如果只有單筆，外層則需要寬度限制它，`<Card>` 有往右推`25px`，可再自行清除

```js
<div style={{ width: '300px' }}>
	{' '}
	// 限制寬
	<Card
		key={data[0].index}
		link={data[0].link}
		linkTitle={data[0].linkTitle}
		userImage={data[0].userImage}
		bgImage={data[0].bgImage}
		userName={data[0].userName}
		introduction={data[0].introduction}
	/>
</div>
```

TODO：

code 優化

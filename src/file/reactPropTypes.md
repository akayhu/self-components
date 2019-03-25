# React 的 PropTypes 使用方法

propTypes 使用來規範元件 Props 的型別與必需狀態

```js
var Test = React.createClass({
	propTypes: {
		// required
		requiredFunc: React.PropTypes.func.isRequired,
		requiredAny: React.PropTypes.any.isRequired,
		// primitives, optional by default
		bool: React.PropTypes.bool,
		func: React.PropTypes.func,
		number: React.PropTypes.number,
		string: React.PropTypes.string,
	},
	render() {
		return <div />;
	},
});

var component = React.render(
	<Test requiredFunc="bar" bool="true" requiredAny="a" />,
	document.body
);
```

若沒有按照規範，會顯示警告

![image](https://github.com/akayhu/self-components/blob/master/src/file/image/warningPropTypes.png?raw=true)

## React.PropTypes 的種類

```js
React.PropTypes.array           // 陣列

React.PropTypes.bool.isRequired // Boolean 且必要。

React.PropTypes.func            // 函式

React.PropTypes.number          // 數字

React.PropTypes.object          // 物件

React.PropTypes.string          // 字串

React.PropTypes.node            // 任何類型的: numbers, strings, elements 或者任何這種類型的陣列

React.PropTypes.element         // React 元素

React.PropTypes.instanceOf(XXX) // 某種XXX類別的實體

React.PropTypes.oneOf(['foo', 'bar']) // 其中一個字串

React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]) // 其中一種格式類型

React.PropTypes.arrayOf(React.PropTypes.string)  // 某種類型的陣列(字串類型)

React.PropTypes.objectOf(React.PropTypes.string) // 具有某種屬性類型的物件(字串類型)

React.PropTypes.shape({                          // 是否符合指定格式的物件
  color: React.PropTypes.string,
  fontSize: React.PropTypes.number
});

React.PropTypes.any.isRequired  // 可以是任何格式，且必要。

// 自定義格式(當不符合的時候，會顯示Error)

// 不要用`console.warn` 或者 throw, 因为它在`oneOfType` 的情况下無效。

customPropType: function(props, propName, componentName) {
  if (!/^[0-9]/.test(props[propName])) {
    return new Error('Validation failed!');
  }
}
```

## getDefaultProps

當父元件沒有提供 props 的屬性時，可以採用 getDefaultProps，預設 props 屬性的方式，讓元件使用預設的設定值，確保有 props 帶入。

```js
var ComponentWithDefaultProps = React.createClass({
	getDefaultProps: function() {
		return {
			value: 'default value',
		};
	},
	/* ... */
});
```

## 出處

[http://jamestw.logdown.com/posts/257890-257890-reactjs-prop](http://jamestw.logdown.com/posts/257890-257890-reactjs-prop)

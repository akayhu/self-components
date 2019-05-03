# Recompose

Recompose 是一個 React utility 用於 function component 和 higher-order component。可以把它想為像是給 React 使用的 lodash。

React 中 Functional Component 雖然效能佳，但比起 Class Component 能做的事太少，於是就有神人開發了一個工具叫 Recompose，利用 Higher Order Component 的方式來加強 Functional Component 的功能。

npm 網址：[https://www.npmjs.com/package/recompose](https://www.npmjs.com/package/recompose)

## 你可以使用 Recompose 在 ... 提升 state 到 functional wrapper

`withState()` 和 `withReducer()` helper 提供一個很好的方式來表達 state 的更新：

```js
const enhance = withState('counter', 'setCounter', 0);
const Counter = enhance(({ counter, setCounter }) => (
	<div>
		Count: {counter}
		<button onClick={() => setCounter(n => n + 1)}>Increment</button>
		<button onClick={() => setCounter(n => n - 1)}>Decrement</button>
	</div>
));
```

或者是一個 Redux 風格的 reducer：

```js
const counterReducer = (count, action) => {
	switch (action.type) {
		case INCREMENT:
			return count + 1;
		case DECREMENT:
			return count - 1;
		default:
			return count;
	}
};

const enhance = withReducer('counter', 'dispatch', counterReducer, 0);
const Counter = enhance(({ counter, dispatch }) => (
	<div>
		Count: {counter}
		<button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
		<button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
	</div>
));
```

## 執行大部分 React 常見的 pattern

像是 componentFromProp() 和 withContext() helper 封裝常見的 React pattern 到一個簡單的 functional interface：

```js
const enhance = defaultProps({ component: 'button' })
const Button = enhance(componentFromProp('component'))

<Button /> // renders <button>
<Button component={Link} /> // renders <Link />
```

```js
const provide = store =>
	withContext({ store: PropTypes.object }, () => ({ store }));

// Apply 到 base component
// App 的子節點可以存取到 context.store
const AppWithContext = provide(store)(App);
```

## 優化 render 效能

不需要轉移寫一個新的 class 來實作 shouldComponentUpdate()。像是 pure() 和 onlyUpdateForKeys() 的 Recompose helper 會幫你完成：

```js
// 一個 render 成本很高的 component
const ExpensiveComponent = ({ propA, propB }) => {...}

// 相同的 component 的優化版本，使用 props 的 shallow comparison
// 效果相同於 extend React.PureComponent
const OptimizedComponent = pure(ExpensiveComponent)

// 更多的優化：如果指定的 props key 改變了才做更新
const HyperOptimizedComponent = onlyUpdateForKeys(['propA', 'propB'])(ExpensiveComponent)
```

## 與其他的 library 相互操作

Recompose helper 整合了非常棒的外部 library。像是 Relay、Redux 和 RxJS

```js
const enhance = compose(
	// 由 recompose-relay 所提供，這是 Recompose 版本的 Relay.createContainer()
	createContainer({
		fragments: {
			post: () => Relay.QL`
        fragment on Post {
          title,
          content
        }
      `,
		},
	}),
	flattenProp('post')
);

const Post = enhance(({ title, content }) => (
	<article>
		<h1>{title}</h1>
		<div>{content}</div>
	</article>
));
```

## 建立你自己的 library

許多 React library 重複實作了相同 utility，像是 shallowEqual() 和 getDisplayName()。Recompose 也提供了這些 utility 給你使用。

```js
// 任何 Recompose module 可以被獨立的被 import
import getDisplayName from 'recompose/getDisplayName';
ConnectedComponent.displayName = `connect(${getDisplayName(BaseComponent)})`;

// 或是甚至更好的：
import wrapDisplayName from 'recompose/wrapDisplayName';
ConnectedComponent.displayName = wrapDisplayName(BaseComponent, 'connect');

import toClass from 'recompose/toClass';
// 轉換一個 function component 成為一個 class component，例如，它可以給定一個 ref，
// 回傳 class component。
const ClassComponent = toClass(FunctionComponent);
```

## 出處

[https://neighborhood999.github.io/recompose/](https://neighborhood999.github.io/recompose/)

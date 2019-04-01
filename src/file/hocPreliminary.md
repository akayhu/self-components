# React Higher Order Components 初探觀念

高階組件是一個函數，能夠接受一個組件並返回一個新的組件。

### stateless component

ps.以下混雜使用 es6 解構、展開運算子(Spread Operator)寫法，在 react 中處理大量 props 很方便。

```js
// stateless component  預設props會作為參數
function NameCard(props) {
	return <h2>Hello,{props.name}</h2>;
}

// 接到一個參數的元件 然後加上props 回傳有加入props的元件
function Warpper(Item) {
	const props = { name: 'Chu' };
	return <Item {...props} />;
}

const element = Warpper(NameCard);

ReactDOM.render(element, document.getElementById('root'));

// 結果為：Hello,Chu
```

### HOC component

ps.es6 arrow function 產生 return function 邏輯

```js
const Wrapper = a => b => {
	console.log(a, b);
};

// babel 會編譯為如下
var Wrapper = function Wrapper(a) {
	return function(b) {
		console.log(a, b);
	};
};
```

接下來就改使用 return function 來傳遞額外資料

```js
// 建立 Person 元件
function Person(props) {
	const { name, age, status } = props;
	return (
		<h1>
			Hello, {name} is {age} years old,ohhh and so {status}
		</h1>
	);
}

// 建構包裹的function
const Warpper = child => props => {
	// 加入物件 status 判斷age 大於18 true=>產生old false =>產生young
	props = { ...props, status: props.age > 18 ? 'old' : 'young' };
	return child({ ...props });
};

const person1 = { name: 'ian', age: 28 };
const element = Warpper(Person)(person1);

ReactDOM.render(element, document.getElementById('root'));

// 結果為：Hello, ian is 28 years old,ohhhh so old
```

核心概念就是將元件包裹上我們想要增加的屬性，舉凡是 props、lifecycle 等等，我們可以將許多元件共用的函式，整理建立一個專門用來處理 HOC 的 function，然後各元件重複使用。redux 的 connect 也是同樣使用 HOC 的觀念，將 mapStateToProps、mapDispatchToProps 在處理成我們要的 props 傳遞給元件。

## 出處

[React Higher Order Components 初探觀念](https://iandays.com/2018/05/08/reacthoc/index.html)

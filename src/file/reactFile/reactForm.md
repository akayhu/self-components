# React 對表單元素的 prop 設置值

| 元件                        | 值                     | 改變回調   | 回調中的新值           |
| --------------------------- | ---------------------- | ---------- | ---------------------- |
| `<input type="text" />`     | `value="string"`       | `onChange` | `event.target.value`   |
| `<input type="checkbox" />` | `checked={boolean}`    | `onChange` | `event.target.checked` |
| `<input type="radio" />`    | `checked={boolean}`    | `onChange` | `event.target.checked` |
| `<textarea />`              | `value="string"`       | `onChange` | `event.target.value`   |
| `<select />`                | `value="option value"` | `onChange` | `event.target.value`   |

## 不受控制的

不受控制的輸入就像傳統的 HTML 表單輸入：

```js
class Form extends Component {
	render() {
		return (
			<div>
				<input type="text" />
			</div>
		);
	}
}
```

他們記得你輸入的內容。然後，您可以使用 ref 獲取其值。例如，在 onClick 按鈕的處理程序中：

```js
class Form extends Component {
	handleSubmitClick = () => {
		const name = this._name.value;
		// do something with `name`
	};

	render() {
		return (
			<div>
				<input type="text" ref={input => (this._name = input)} />
				<button onClick={this.handleSubmitClick}>Sign up</button>
			</div>
		);
	}
}
```

這是實現表單輸入的最簡單方法。但它並不那麼強大

## 受控制的

通常，呈現輸入的組件（也稱為表單組件）將其保存在 state：

```js
class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
		};
	}

	handleNameChange = event => {
		this.setState({ name: event.target.value });
	};

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.name}
					onChange={this.handleNameChange}
				/>
			</div>
		);
	}
}
```

（當然，它可以處於另一個組件的狀態，甚至可以處於單獨的狀態存儲中，如 Redux。）

每次鍵入新字符時都會 handleNameChange 被調用。它接受輸入的新值並將其設置為狀態。

- 它最初是一個空字符串 - ''。

- 您鍵入 a 並 handleNameChange 獲取 a 並調用 setState。然後重新呈現輸入以具有值 a。

- 你輸入 b。handleNameChange 獲取值 ab 並將其設置為狀態。現在再次重新渲染輸入 value="ab"。

這意味著您的數據（狀態）和 UI（輸入）始終保持同步。狀態為輸入提供值，輸入要求 Form 更改當前值。

## 受控與不受控優缺點

| 特徵                                                                                   | 不受控制 | 受控制 |
| -------------------------------------------------------------------------------------- | -------- | ------ |
| 一次性價值檢索（例如提交時）                                                           | V        | V      |
| [在提交時驗證](https://goshakkk.name/submit-time-validation-react/)                    | V        | V      |
| [即時現場驗證](https://goshakkk.name/instant-form-fields-validation-react/)            | X        | V      |
| [有條件地禁用提交按鈕](https://goshakkk.name/form-recipe-disable-submit-button-react/) | X        | V      |
| 強制執行輸入格式                                                                       | X        | V      |
| 一個數據的幾個輸入                                                                     | X        | V      |
| [動態輸入](https://goshakkk.name/array-form-inputs/)                                   | X        | V      |

## 出處

[React 中的受控和不受控制的表單輸入不必復雜](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

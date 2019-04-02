# React Life Cycle (React 16.3 版之後)

大致上可分類為 Mounting 增加、Updating 更新、Unmounting 移除增加。

![image](https://github.com/akayhu/self-components/blob/master/src/reactFile/image/react-life.png?raw=true)

PS：React 官方已經在 2018/03/27 宣告 不推薦使用：
`componentWillMount`、`componentWillReceiveProps`、`componentWillUpdate` 並且 react 16.3 版本以後這些 method 會加上前綴 UNSAFE\_，17 版本會丟棄。提醒使用的時候要特別小心。

## Mounting

Mounting 會在元件被建立時被執行。

```js
constructor();
```

這是 es6 的 class 語法糖，可以說是建構並初始化物件，這邊會繼承 React.Component，假設你元件要使用到 props，就必須這樣寫 super(props)來繼承父類別。這階段簡單說就是開始建立這個物件。如果你沒有要定義 state、或是在這邊綁定 method (另可以選用 arrow function 綁定 method)，就不需要用到 constructor。

```js
componentWillMount(); // 17版將丟棄
```

緊接在 constructor 後執行 componentWillMount，提醒只會在初始執行一次，移除後重新建立元件也不會在執行 componentWillMount。另外是唯一會在 server side render 時執行的 life Cycle method，關於 WillMount 最多的討論就是，在這邊擺放 fetch api 是否正確。

官方表示，因為 server side 會執行一次，client side 也會再多執行一次，造成重複要資料動作。另外在這邊做 async api 處理，是無法暫停 render 動作，你一樣要等 render 完成後，你還是必須等待類似 loading 空畫面跑出來，才能在更新畫面，所以會更推薦在 componentDidMount 做 fetch api。

```js
get­Derived­State­From­Props(nextProps, prevState) // 新增
```

get­Derived­State­From­Props 主要是對比到 componentWillReceiveProps，get­Derived­State­From­Props 帶有兩個參數 nextProps, prevState，更新後的 props，先前的 state，這個 method 會在初始 render 調用，還有父元件重新 render，也會調用到。

還有當你使用了 get­Derived­State­From­Props，要更新 state 就需要回傳物件，如果不更新就必須回傳 null。

PS：當你使用 get­Derived­State­From­Props，也同時使用 componentWillMount，WillMount 會不執行，並且 console 會傳出警告，另外就算改用 UNSAFE_componentWillMount 也不會執行。

```js
render();
```

執行 setState、更新父元件傳遞的 props，都會執行 render()，假設 shouldComponentUpdate()回傳 false，則是阻止 render 執行。使用 render 必須回傳 react element(JSX、createClass、react 元件)、或 Fragment、Portals(可以綁定 render 到其他 Dom root)、如果不回傳內容則回傳 boolean、或是 null。

然後使用 render 盡量保持 pure，例如盡量少在這邊額外處理 props 以及 state，在外面處理保持 render 內乾淨。

```js
componentDidMount();
```

componentDidMount 會在 render 執行完成後調用。這應該是最多人用到的生命週期，舉凡綁定 DOM 事件，執行 ajax，多半會在這邊使用。提醒在這邊使用 setState 會迫使 render 執行兩次，盡量在 constructor 內設定好初始 state，避免過多 render 執行。

另外提醒在這邊綁定 DOM eventListener，記得在 willUnMount 取消綁定 EventListener，如果重新 render 元件會再次執行 DidMount，造成過多的綁定事件。

## Updating

主要是在父元件更新傳遞的 props，或是元件中使用到 setState，會開始整個 Update 的生命週期。另外 setState({xxxx},callback)，則是會在整個週期執行完成才會執行 callback。

```js
componentWillReceiveProps(nextProps); // 17版將丟棄
```

componentWillReceiveProps(nextProps)，會回傳更新過的 props，並且可以使用 setState 來更新 state，提醒在這邊使用 setstate，並不會驅使重跑 componentWillReceiveProps，因為 ReceiveProps 只會在更新傳遞的 props 時被調用。

react 官方是創建 get­Derived­State­From­Prop 來替代掉 WillReceiveProps，主要明顯差異在於 get­Derived­State­From­Prop 必須使用 static，且會在 Mounting 階段執行， 但是會自動傳遞更新 state，而 componentWillReceiveProps 則是純粹執行， 不依靠 return 更新。

```js
static getDerivedStateFromProps(nextProps, prevState) // 新增
```

Updating 階段中，getDerivedStateFromProps 則是在父元件更新傳遞的 props 時調用，提醒一下這時候 this.props state 還會是未更新的。

```js
shouldComponentUpdate(nextProps, nextState);
```

執行 receive props 後調用，這時候 this.props state 還會是未更新的。主要是判斷元件是否要往下繼續執行 willUpdate、render、componentDidUpdate，如果回傳 false，則會中斷整個更新循環，回傳 true 則是繼續往下執行，默認值為 true。

一般會使用 shouldComponentUpdate 來優化效能，避免執行沒必要的 render。

```js
componentWillUpdate（nextProps, nextState) // 17版將丟棄
```

Update 到 render 前最後一個， 提醒在這邊使用 setState 的話，會導致重跑回 update 的生命週期，然後在跑到 componentWillUpdate，若沒有設定好判斷，就會再 setState，再重跑回一遍，變成反覆 infinite 執行。

```js
render;
```

Update 階段中開始處理 react 的畫面架構。提醒在這邊 setState 也同樣會重跑 Update，也同樣不建議在這邊執行 setState，容易產生無限迴圈。

其餘跟 Mounting 階段一樣，回傳 react element，或是 react 相關的物件。

```js
getSnapshotBeforeUpdate(prevProps, prevState); // 新增
```

能夠抓取 render 到執行渲染畫面更新前，所保持的畫面狀態，然後再傳第一個新值給 componentDidUpdate 當參數使用。

```js
componentDidUpdate(prevProps, prevState, snapshot);
```

Updating 階段最後一個執行，在畫面渲染更新後調用，新版本的還多加 getSnapshotBeforeUpdate 傳遞的參數。

在這邊可以處理 call api 動作，或是 setState，促使重新更新，但提醒記得要判斷執行時機，否則一樣會進入無限迴圈。

## Unmounting

移除的時候會執行這個生命週期

```js
componentWillUnmount();
```

元件要被移除的時候會執行，可以做清除綁定 eventlistener，或是清除 cookie、local storage 等等，提醒在這邊 setState 是不會重新執行 render。

以上就是關於 react 新版的生命週期，看過一遍後更能理解，在哪個階段做什麼處理會更適合。

## 元件渲染順序

大型開發滿常遇到這個問題，子元件先執行 render 還是父元件先，還有 lifeCycle 在父子元件的調用順序。稍微試跑了一下流程。
請查看 console [react life Cycle parents child order](https://codesandbox.io/s/5kpvvkqx7k)

- Mounting: 簡單講就是父元件先執行到 render 後，再來開始執行子元件的 Mounting 生命週期，最後執行完子元件的 componentDidMount 後，再回頭執行父元件的 componentDidMount。

- Updating: 父元件執行到 render 後，換子元件執行直到 getSnapshotBeforeUpdate()，會再回父元件執行 getSnapshotBeforeUpdate()，然後再執行子元件的 componentDidUpdate，再回父元件執行 componentDidUpdate。

- UnMounting: 父元件先執行 componentWillUnmount，再來是子元件執行。

以上就是關於 react 的新版生命週期，還有父子元件執行的順序。實際研究才發現各階段德每個 method 有許多細節，例如說 mounting 階段，componentWillMount 執行 fetch api，因為他只會在第一次 Mounting 被調用的特性，如果是抓取後續不會更新的資料，其實也是一種選擇，但今天如果你後面還可能會再次 call api，或許 componentDidMount 會更適合使用。

## 出處

[React Life Cycle 生命週期更新版，父子元件執行順序](https://iandays.com/2018/07/27/reactlife/index.html)

# React Life Cycle (React 16.3版之後)

大致上可分類為 Mounting增加、Updating更新、Unmounting移除增加。

PS：React 官方已經在 2018/03/27 宣告 不推薦使用：
`componentWillMount`、`componentWillReceiveProps`、`componentWillUpdate` 並且react 16.3版本以後這些method會加上前綴UNSAFE_，17版本會丟棄。提醒使用的時候要特別小心。

## Mounting

Mounting會在元件被建立時被執行。

```js
constructor()
```

這是es6的class語法糖，可以說是建構並初始化物件，這邊會繼承React.Component，假設你元件要使用到props，就必須這樣寫super(props)來繼承父類別。這階段簡單說就是開始建立這個物件。如果你沒有要定義state、或是在這邊綁定method (另可以選用arrow function綁定method)，就不需要用到constructor。

```js
componentWillMount() // 17版將丟棄
```

緊接在constructor後執行componentWillMount，提醒只會在初始執行一次，移除後重新建立元件也不會在執行componentWillMount。另外是唯一會在server side render時執行的life Cycle method，關於WillMount最多的討論就是，在這邊擺放fetch api是否正確。

官方表示，因為server side會執行一次，client side也會再多執行一次，造成重複要資料動作。另外在這邊做async api處理，是無法暫停render動作，你一樣要等render完成後，你還是必須等待類似loading空畫面跑出來，才能在更新畫面，所以會更推薦在componentDidMount做fetch api。

```js
get­Derived­State­From­Props(nextProps, prevState) // 新增
```

get­Derived­State­From­Props主要是對比到componentWillReceiveProps，get­Derived­State­From­Props帶有兩個參數nextProps, prevState，更新後的props，先前的state，這個method會在初始render調用，還有父元件重新render，也會調用到。

還有當你使用了get­Derived­State­From­Props，要更新state就需要回傳物件，如果不更新就必須回傳null。

PS：當你使用 get­Derived­State­From­Props，也同時使用componentWillMount，WillMount會不執行，並且console會傳出警告，另外就算改用UNSAFE_componentWillMount也不會執行。

```js
render()
```

執行setState、更新父元件傳遞的props，都會執行render()，假設shouldComponentUpdate()回傳false，則是阻止render執行。使用render必須回傳react element(JSX、createClass、react元件)、或Fragment、Portals(可以綁定render到其他Dom root)、如果不回傳內容則回傳boolean、或是null。

然後使用render盡量保持pure，例如盡量少在這邊額外處理props以及state，在外面處理保持render內乾淨。

```js
componentDidMount()
```

componentDidMount會在render執行完成後調用。這應該是最多人用到的生命週期，舉凡綁定DOM事件，執行ajax，多半會在這邊使用。提醒在這邊使用setState會迫使render執行兩次，盡量在constructor內設定好初始state，避免過多render執行。

另外提醒在這邊綁定DOM eventListener，記得在willUnMount取消綁定EventListener，如果重新render元件會再次執行DidMount，造成過多的綁定事件。

## Updating

主要是在父元件更新傳遞的props，或是元件中使用到setState，會開始整個Update的生命週期。另外setState({xxxx},callback)，則是會在整個週期執行完成才會執行callback。

```js
componentWillReceiveProps(nextProps) // 17版將丟棄
```

componentWillReceiveProps(nextProps)，會回傳更新過的props，並且可以使用setState來更新state，提醒在這邊使用setstate，並不會驅使重跑componentWillReceiveProps，因為ReceiveProps只會在更新傳遞的props時被調用。

react 官方是創建 get­Derived­State­From­Prop來替代掉WillReceiveProps，主要明顯差異在於get­Derived­State­From­Prop必須使用static，且會在Mounting階段執行，但是會自動傳遞更新state，而componentWillReceiveProps則是純粹執行，不依靠return更新。

```js
static getDerivedStateFromProps(nextProps, prevState) // 新增
```

Updating階段中，getDerivedStateFromProps則是在父元件更新傳遞的props時調用，提醒一下這時候this.props state還會是未更新的。

```js
shouldComponentUpdate(nextProps, nextState)
```

執行receive props後調用，這時候this.props state還會是未更新的。主要是判斷元件是否要往下繼續執行 willUpdate、render、componentDidUpdate，如果回傳false，則會中斷整個更新循環，回傳true則是繼續往下執行，默認值為true。

一般會使用shouldComponentUpdate來優化效能，避免執行沒必要的render。

```js
componentWillUpdate（nextProps, nextState) // 17版將丟棄
```

Update到render前最後一個，提醒在這邊使用setState的話，會導致重跑回update的生命週期，然後在跑到componentWillUpdate，若沒有設定好判斷，就會再setState，再重跑回一遍，變成反覆infinite執行。

```js
render
```
Update階段中開始處理react的畫面架構。提醒在這邊setState也同樣會重跑Update，也同樣不建議在這邊執行setState，容易產生無限迴圈。

其餘跟 Mounting階段一樣，回傳react element，或是react相關的物件。

```js
getSnapshotBeforeUpdate(prevProps, prevState) // 新增
```

能夠抓取render到執行渲染畫面更新前，所保持的畫面狀態，然後再傳第一個新值給componentDidUpdate當參數使用。

```js
componentDidUpdate(prevProps, prevState, snapshot)
```

Updating階段最後一個執行，在畫面渲染更新後調用，新版本的還多加getSnapshotBeforeUpdate傳遞的參數。

在這邊可以處理call api動作，或是setState，促使重新更新，但提醒記得要判斷執行時機，否則一樣會進入無限迴圈。

## Unmounting

移除的時候會執行這個生命週期

```js
componentWillUnmount()
```

元件要被移除的時候會執行，可以做清除綁定eventlistener，或是清除cookie、local storage等等，提醒在這邊setState是不會重新執行render。

以上就是關於react新版的生命週期，看過一遍後更能理解，在哪個階段做什麼處理會更適合。

## 元件渲染順序

大型開發滿常遇到這個問題，子元件先執行render還是父元件先，還有lifeCycle在父子元件的調用順序。稍微試跑了一下流程。
請查看console [react life Cycle parents child order](https://codesandbox.io/s/5kpvvkqx7k)

- Mounting: 簡單講就是父元件先執行到render後，再來開始執行子元件的Mounting生命週期，最後執行完子元件的componentDidMount後，再回頭執行父元件的componentDidMount。

- Updating: 父元件執行到render後，換子元件執行直到getSnapshotBeforeUpdate()，會再回父元件執行getSnapshotBeforeUpdate()，然後再執行子元件的componentDidUpdate，再回父元件執行componentDidUpdate。

- UnMounting: 父元件先執行componentWillUnmount，再來是子元件執行。

以上就是關於react的新版生命週期，還有父子元件執行的順序。實際研究才發現各階段德每個method有許多細節，例如說mounting階段，componentWillMount執行fetch api，因為他只會在第一次Mounting被調用的特性，如果是抓取後續不會更新的資料，其實也是一種選擇，但今天如果你後面還可能會再次call api，或許componentDidMount會更適合使用。

## 出處

[https://iandays.com/2018/07/27/reactlife/index.html](https://iandays.com/2018/07/27/reactlife/index.html)
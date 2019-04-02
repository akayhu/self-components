# JavaScript 七種陣列的處理方法

以下使用這份陣列資料來實作

```js
let people = [
	{
		name: '大中天',
		money: 500,
	},
	{
		name: '大小天',
		money: 3000,
	},
	{
		name: '大大天',
		money: 60000,
	},
	{
		name: '大中小',
		money: Infinity,
	},
];
```

## ForEach

除了 forEach 以外的幾個方法都會回傳陣列或一個值，在等號的左方如果放置一個變數，那麼此變數會是 `undefined` (沒有回傳任何值)。

```js
var forEachLoop = people.forEach(function(item, index, array) {
	console.log(item, index, array); // 物件, 索引, 全部陣列)
});

console.log(forEachLoop); // undefined
```

其它的方法都會回傳一個值或陣列，以此來說就會回傳原本的陣列值。

```js
var mapLoop = people.map(function(item, index, array) {
	return item;
});

console.log(mapLoop); // 與原本陣列資料相同
```

## Filter

`filter` 可以用來過濾陣列中符合條件的物件，以下範例中搜尋符合大於 5000 元的，只要將該物件中的回傳為 true，那麼就會回傳完整的物件。

```js
var filterEmpty = people.filter(function(item, index, array) {});

console.log(filterEmpty); // 沒有條件，會是一個空陣列

var filterMoneyThan5000 = people.filter(function(item, index, array) {
	return item.money > 5000; // 取得大於五千元
});

console.log(filterMoneyThan5000); // 大大天, 大中小 這兩個物件
```

## find

`find` 是用來搜尋陣列中符合條件的物件，且僅能有一個，當回傳 `true` 數量超過兩者以上，那會以第一個為優先，通常會適合搜尋來搜尋特定 id。

```js
var findEmpty = people.find(function(item, index, array) {});

console.log(findEmpty); // 沒有條件，會是 undefined

var findMoneyThan5000 = people.find(function(item, index, array) {
	return item.money > 5000; // 取得大於五千元
});

console.log(findMoneyThan5000); // 雖然答案有兩個，但只會回傳 '大大天' 這一個物件

var findJay = people.find(function(item, index, array) {
	return item.name === '大大天'; // 找到大大天
});

console.log(findJay);
```

## map

`map` 會回傳 return 的物件、值，功用上是用來處理陣列回傳新值產生一個新陣列，要特別注意回傳的值數量與原始陣列長度相同，所以留空的 return 則會產生 `undefined`。

```js
// 沒有 return 也會產生 undefined
var mapEmpty = people.map(function(item, index, array) {});
console.log(mapEmpty); // [undefined, undefined, undefined, undefined]

var everyoneAdd = people.map(function(item, index, array) {
	item.money = item.money + 500; // 每個 money + 500
	return item; // 回傳物件
});

console.log(everyoneAdd);
// 回傳每個處理後的數值，不過記得這是傳參考特性，會影響到原始的物件
// {name: "大中天", money: 1000}
// {name: "大小天", money: 3500}
// {name: "大大天", money: 60500}
// {name: "大中小", money: Infinity}

var mapMoneyThan5000 = people.map(function(item, index, array) {
	// 錯誤示範，長度不符合時
	if (item.money > 5000) {
		return item; // 取得大於五千元
	}
});

console.log(mapMoneyThan5000);

// [undefined, undefined, {name: "大大天", money: 60000}, {name: "大中小", money: Infinity} ]
```

## every

驗證全部的結果，當全部的值都為 true 時，則最終會得到 true；只要其中之一為 false，則回傳為 false。

```js
var ans = people.every(function(item, index, array) {
	return item.money > 10000;
});

console.log(ans); // false: 只要有部分不符合，則為 false

var ans2 = people.every(function(item, index, array) {
	return item.money > 300;
});

console.log(ans2); // true: 大家錢都有超過 300
```

## some

與前者類似，但只要部分為 true，則回傳為 true；全部為 false 則才會為 false。

```js
var ans = people.some(function(item, index, array) {
	return item.money > 10000;
});

console.log(ans); // false: 只要有部分符合，則為 true

var ans2 = people.some(function(item, index, array) {
	return item.money < 300;
});

console.log(ans2); // true: 大家錢都不少於 300
```

## reduce

`reduce` 是其中最為特別的，首先他回傳的參數與先前的不同，他會接收到前一個回傳的值供下一個物件使用，很適合用在累加與比對上，以下提供不同範例供參考。

- accumulator：前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
- currentValue：當前變數
- currentIndex：當前索引
- array：全部陣列

```js
var reduceEmpty = people.reduce(function(
	accumulator,
	currentValue,
	currentIndex,
	array
) {});
console.log(reduceEmpty);
```

可以透過與前一個相加的方式，累加陣列中所有的值。

```js
people.pop(); // 大中小的錢深不可測，先移除掉
var reducePlus = people.reduce(function(
	accumulator,
	currentValue,
	currentIndex,
	array
) {
	// 分別為前一個回傳值, 目前值, 當前索引值
	console.log(accumulator, currentValue, currentIndex);
	return accumulator + currentValue.money; // 與前一個值相加
},
0); // 傳入初始化值為 0

console.log(reducePlus); // 總和為 63500
```

也可以相互比對，取出最高的值。

```js
var reduceBestOne = people.reduce(function(
	accumulator,
	currentValue,
	currentIndex,
	array
) {
	console.log('reduce', accumulator, currentValue, currentIndex);
	return Math.max(accumulator, currentValue.money); // 與前一個值比較哪個大
},
0);

console.log(reduceBestOne); // 最大值為 60000
```

## 出處

[JavaScript 常用陣列方法](https://ithelp.ithome.com.tw/articles/10194206)

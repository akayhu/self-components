# Currying in JavaScript（柯里化）

Currying（柯里化），又稱為 parital application 或 partial evaluation，是個「將一個接受 n 個參數的 function，轉變成 n 個只接受一個參數的 function」的過程。

原理是將傳入 function 的參數，利用 closure（閉包）特性，將它們存放在另一個 function 中並當做回傳值，而這些 function 會形成一個鏈（chain），待最後參數傳入，完成運算。

這樣做的好處是

- 簡化參數的處理，基本上是一次處理一個參數，藉以提高程式的彈性和可讀性
- 將程式碼依功能拆解成更細的片段，有助於重複利用

這對於整理冗長程式碼、需要詳客製化的 function 和非同步呼叫的處理等有很大的幫助。

## 說明

假設有個 function，傳入被乘數和乘數之後可得到兩數相乘的結果

```js
function multiply(x, y) {
	return x * y;
}

multiply(3, 5); // 15
```

柯里化後就是這樣了…

```js
function curriedMultiply(x) {
	return function(y) {
		return x * y;
	};
}
```

假設固定被乘數為 3，接著會分別帶入乘數為 5 和 10 來取得運算結果。意即，3 _ 5 = 15，3 _ 10 = 10

```js
var multipleOfThreeAndNumberY = curriedMultiply(3);

multipleOfThreeAndNumberY(5); // 15
multipleOfThreeAndNumberY(10); // 30
```

## 備註

- curriedMultiply 並沒有計算結果，而是回傳一個 function 作為未來計算結果之用。 也就是說，待之後呼叫 multipleOfThreeAndNumberY 和 multipleOfFiveAndNumberY 傳入參數後才回傳計算結果。
- `multiply(x, y)` 等於 `curriedMultiply(x)(y)`

```js
multiply(3, 5); //15
curriedMultiply(3)(5); //15
```

以上這個簡單範例就呼應一開始所提到的柯里化的優點 - 將程式碼拆解成更細的片段，有助於重複利用。

再來看看另一個例子會覺得柯里化更好用 - 在非同步存取資料上的應用。

## Currying the Callback

在非同步資料存取上，一般來說，我們常將「讀取資料 」和「處理資料」兩件事寫在一起，導致程式碼的冗長與雜亂。例如像這個樣子…

```js
function fetchData(path, handler) {
	var xmlHttp = new XMLHttpRequest();
	var result = {};

	xmlHttp.open('GET', path, false);
	xmlHttp.send(null);
	result = JSON.parse(xmlHttp.responseText);
	handler(result.data);
}

function showResult(result) {
	console.log('The result is: ' + result);
}

var path = 'http://www.json-generator.com/api/json/get/bPQMSaHjsi?indent=2';
fetchData(path, showResult); // The result is: Hello, World!
```

若將負責處理資料的 callback 這個參數提出來（在這裡是 handler），就可改善程式碼如下。

```js
function curriedFetchData(path) {
	var xmlHttp = new XMLHttpRequest();
	var result = {};

	xmlHttp.open('GET', path, false);
	xmlHttp.send(null);
	result = JSON.parse(xmlHttp.responseText);

	return function(_callback) {
		_callback(result.data);
	};
}

function showResult(result) {
	console.log('The result is: ' + result);
}

var path = 'http://www.json-generator.com/api/json/get/bPQMSaHjsi?indent=2';
var getData = curriedFetchData(path);
getData(showResult); // The result is: Hello, World!
```

這看起來好像沒什麼，那麼再看看如果是這樣的話…

如果在循序讀取下，要取得兩筆資料-先取得第一筆，再取得第二筆，並一同做處理，剛剛尚未柯里化的的程式碼就會變得非常龐大複雜…

但柯里化後的程式處理起來就相對容易多了…這因為我們將「讀取資料 」和「處理資料」兩個動作拆開的緣故…就算是用 promise 而非 callback hell 也能更順手…

```js
var path1 =
	'http://www.json-generator.com/api/json/get/bPQMSaHjsi?indent=2&ver=1';
var path2 =
	'http://www.json-generator.com/api/json/get/bPQMSaHjsi?indent=2&ver=2';

var getData1 = curriedFetchData(path1);
var getData2 = curriedFetchData(path2);

getData1(function(result1) {
	getData2(function(result2) {
		console.log(result1 + ' ' + result2); //Hello, World! Hello, World!
	});
});
```

## 出處

[https://cythilya.github.io/2017/02/27/currying-in-javascript/](https://cythilya.github.io/2017/02/27/currying-in-javascript/)

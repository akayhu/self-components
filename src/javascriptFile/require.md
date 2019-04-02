# Javascript 的 require 模塊(ES6 以前)

### 為什麼有模塊概念

理想情況下，開發者只需要實現核心的業務邏輯，其他都可以加載別人已經寫好的模塊。

但是，Javascript 不是一種模塊化編程語言，在 es6 以前，它是不支持”類”（class），所以也就沒有”模塊”（module）了。

## require

Javascript 社區做了很多努力，在現有的運行環境中，實現”模塊”的效果。

### 原始寫法

模塊就是實現特定功能的一組方法。

只要把不同的函數（以及記錄狀態的變量）簡單地放在一起，就算是一個模塊。

```js
function m1() {
	//...
}
function m2() {
	//...
}
```

上面的函數 m1()和 m2()，組成一個模塊。使用的時候，直接調用就行了。

這種做法的缺點很明顯：”污染”了全局變量，無法保證不與其他模塊發生變量名衝突，而且模塊成員之間看不出直接關係。

### 對象寫法

為了解決上面的缺點，可以把模塊寫成一個對象，所有的模塊成員都放到這個對象裡面

```js
var module1 = new Object({
	_count: 0,
	m1: function() {
		//...
	},
	m2: function() {
		//...
	},
});
```

上面的函數 m1()和 m2(），都封裝在 module1 對象裡。使用的時候，就是調用這個對象的屬性

```js
module1.m1();
```

這樣的寫法會暴露所有模塊成員，內部狀態可以被外部改寫。比如，外部代碼可以直接改變內部計數器的值

```js
module._count = 1;
```

### 立即執行函數寫法

使用”立即執行函數”（Immediately-Invoked Function Expression，IIFE），可以達到不暴露私有成員的目的

```js
var module = (function() {
	var _count = 0;
	var m1 = function() {
		alert(_count);
	};
	var m2 = function() {
		alert(_count + 1);
	};

	return {
		m1: m1,
		m2: m2,
	};
})();
```

使用上面的寫法，外部代碼無法讀取內部的\_count 變量。

```js
console.info(module._count); //undefined
```

module 就是 Javascript 模塊的基本寫法。

## 出處

[徹底搞清楚 javascript 中的 require、import 和 export](https://www.cnblogs.com/libin-1/p/7127481.html)

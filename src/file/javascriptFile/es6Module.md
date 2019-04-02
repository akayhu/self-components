# ES6 Modules(export 和 import)

ES6 標準發布後，module 成為標準，標準使用是以 export 指令導出接口，以 import 引入模塊，但是在我們一貫的 node 模塊中，我們依然採用的是 CommonJS 規範，使用 require 引入模塊，使用 module.exports 導出接口。

## export 導出模塊

export 語法聲明用於導出函數、對象、指定文件（或模塊）的原始值

> 注意：在 node 中使用的是 exports,不要混淆了

export 有兩種模塊導出方式：`命名式導出（名稱導出）`和`默認導出（定義式導出）`，命名式導出每個模塊可以多個，而默認導出每個模塊僅一個。

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

- name1… nameN－導出的“標識符”。導出後，可以通過這個“標識符”在另一個模塊中使用 import 引用
- default－設置模塊的默認導出。設置後 import 不通過“標識符”而直接引用默認導入
- －繼承模塊並導出繼承模塊所有的方法和屬性
- as－重命名導出“標識符”
- from－從已經存在的模塊、腳本文件…導出

### 命名式導出

模塊可以通過 export 前綴關鍵詞聲明導出對象，導出對象可以是多個。這些導出對像用名稱進行區分，稱之為命名式導出。

```js
export { myFunction }; // 導出一個已定義的函數
export const foo = Math.sqrt(2); // 導出一個常量
```

我們可以使用\*和 from 關鍵字來實現的模塊的繼承：

```js
export * from 'article';
```

模塊導出時，可以指定模塊的導出成員。導出成員可以認為是類中的公有對象，而非導出成員可以認為是類中的私有對象：

```js
var name = 'IT筆錄';
var domain = 'http://itbilu.com';
export { name, domain }; // 相當於導出 {name:name, domain:domain}
```

模塊導出時，我們可以使用 as 關鍵字對導出成員進行重命名：

```js
var name = 'IT筆錄';
var domain = 'http://itbilu.com';
export { name as siteName, domain };
```

注意，下面的語法有嚴重錯誤的情況：

```js
// 錯誤演示
export 1; // 絕對不可以
 
var a = 100;
export a;
```

export 在導出接口的時候，必須與模塊內部的變量具有一一對應的關係。直接導出 1 沒有任何意義，也不可能在 import 的時候有一個變量與之對應

export a 雖然看上去成立，但是 a 的值是一個數字，根本無法完成解構，因此必須寫成 export {a}的形式。`即使a被賦值為一個function，也是不允許的`。而且，大部分風格都建議，模塊中最好在末尾用一個 export 導出所有的接口，例如：

```js
export { fun as default, a, b, c };
```

### 默認導出

默認導出也被稱做定義式導出。命名式導出可以導出多個值，但在在 import 引用時，也要使用相同的名稱來引用相應的值。而默認導出每個導出只有一個單一值，這個輸出可以是一個函數、類或其它類型的值，這樣在模塊 import 導入時也會很容易引用。

```js
export default function() {}; // 可以導出一個函數
export default class(){}; // 也可以出一個類
```

### 命名式導出與默認導出

默認導出可以理解為另一種形式的命名導出，默認導出可以認為是使用了 default 名稱的命名導出。

下面兩種導出方式是等價的：

```js
const D = 123;

export default D;
export { D as default };
```

### export 使用示例

使用名稱導出一個模塊時：

```js
// "my-module.js" 模塊
export function cube(x) {
	return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
export { foo };
```

在另一個模塊（腳本文件）中，我們可以像下面這樣引用：

```js
import { cube, foo } from 'my-module';
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

使用默認導出一個模塊時：

```js
// "my-module.js"模塊
export default function(x) {
	return x * x * x;
}
```

在另一個模塊（腳本文件）中，我們可以像下面這樣引用，相對名稱導出來說使用更為簡單：

```js
// 引用 "my-module.js"模塊
import cube from 'my-module';
console.log(cube(3)); // 27
```

## import 引入模塊

import 語法聲明用於從已導出的模塊、腳本中導入函數、對象、指定文件（或模塊）的原始值。

import 模塊導入與 export 模塊導出功能相對應，也存在兩種模塊導入方式：命名式導入（名稱導入）和默認導入（定義式導入）。

> import 的語法跟 require 不同，而且 import 必須放在文件的最開始，且前面不允許有其他邏輯代碼，這和其他所有編程語言風格一致。

```js
import defaultMember from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as name from "module-name";
import "module-name";
```

- name－從將要導入模塊中收到的導出值的名稱
- member, memberN－從導出模塊，導入指定名稱的多個成員
- defaultMember－從導出模塊，導入默認導出成員
- alias, aliasN－別名，對指定導入成員進行的重命名
- module-name－要導入的模塊。是一個文件名
- as－重命名導入成員名稱（“標識符”）
- from－從已經存在的模塊、腳本文件等導入

### 命名式導入

我們可以通過指定名稱，就是將這些成員插入到當作用域中。導出時，可以導入單個成員或多個成員：

注意，花括號裡面的變量與 export 後面的變量一一對應

```js
import { myMember } from 'my-module';
import { foo, bar } from 'my-module';
```

通過`*`符號，我們可以導入模塊中的全部屬性和方法。當導入模塊全部導出內容時，就是將導出模塊（’my-module.js’）所有的導出綁定內容，插入到當前模塊（’myModule’）的作用域中：

```js
import * as myModule from 'my-module';
```

導入模塊對象時，也可以使用 as 對導入成員重命名，以方便在當前模塊內使用：

```js
import { reallyReallyLongModuleMemberName as shortName } from 'my-module';
```

導入多個成員時，同樣可以使用別名：

```js
import {
	reallyReallyLongModuleMemberName as shortName,
	anotherLongModuleName as short,
} from 'my-module';
```

導入一個模塊，但不進行任何綁定：

```js
import 'my-module';
```

### 默認導入

在模塊導出時，可能會存在默認導出。同樣的，在導入時可以使用 import 指令導出這些默認值。

直接導入默認值：

```js
import myDefault from 'my-module';
```

也可以在命名空間導入和名稱導入中，同時使用默認導入：

```js
import myDefault, * as myModule from 'my-module'; // myModule 做為命名空間使用
// 或
import myDefault, { foo, bar } from 'my-module'; // 指定成員導入
```

### import 使用示例

```js
// --file.js--
function getJSON(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.onload = function() {
		callback(this.responseText);
	};
	xhr.open('GET', url, true);
	xhr.send();
}

export function getUsefulContents(url, callback) {
	getJSON(url, data => callback(JSON.parse(data)));
}

// --main.js--
import { getUsefulContents } from 'file';

getUsefulContents('http://itbilu.com', data => {
	doSomethingUseful(data);
});
```

## default 關鍵字

```js
// d.js
export default function() {}
 
// 等效於：
function a() {};
export {a as default};
```

在 import 的時候，可以這樣用：

```js
import a from './d';
// 等效於，或者說就是下面這種寫法的簡寫，是同一個意思
import { default as a } from './d';
```

這個語法糖的好處就是 import 的時候，可以省去花括號{}。

簡單的說，如果 import 的時候，你發現某個變量沒有花括號括起來（沒有\*號），那麼你在腦海中應該把它還原成有花括號的 as 語法。

所以，下面這種寫法你也應該理解了吧：

```js
import $, { each, map } from 'jquery';
```

import 後面第一個$是{defalut as $}的替代寫法。

## as 關鍵字

```js
// a.js
var a = function() {};
export { a as fun };

// b.js
import { fun as a } from './a';
a();
```

上面這段代碼，export 的時候，對外提供的接口是 fun，它是 a.js 內部 a 這個函數的別名，但是在模塊外面，認不到 a，只能認到 fun。

import 中的 as 就很簡單，就是你在使用模塊裡面的方法的時候，給這個方法取一個別名，好在當前的文件裡面使用。之所以是這樣，是因為有的時候不同的兩個模塊可能通過相同的接口，比如有一個 c.js 也通過了 fun 這個接口：

```js
// c.js
export function fun() {}
```

如果在 b.js 中同時使用 a 和 c 這兩個模塊，就必須想辦法解決接口重名的問題，as 就解決了。

## 出處

[徹底搞清楚 javascript 中的 require、import 和 export](https://www.cnblogs.com/libin-1/p/7127481.html)

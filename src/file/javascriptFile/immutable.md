# Immutable.js

Immutable.js 是 facebook 官方與 React 同期推出的 JS 發明之一，只是因為 React 太過於耀眼，Immutable 的光芒被遮蔽了而已，但絲毫不耽誤它的傳播。
React 是一個用狀態 state 管理 UI 的表現層，狀態 state 的內容、值直接決定 UI 的樣式、表現。然而狀態 state 的值卻難以把控，眾多的錯誤、bug、以及不理想都是由於狀態 state 的不按預期更改。
Immutable 就是用來解決這個問題的利器。

官方文件網址：[https://immutable-js.github.io/immutable-js/](https://immutable-js.github.io/immutable-js/)

## 痛點

在 React state 中，數據經常以 object 或 array 的形式存儲，然後將現有數據、後台新數據、用戶操作產生的數據組成下一個新的 state，緊接著 setState --> shouldComponentUpdate()。雖然在 setState 只需要傳入需要更新的數據，不需要傳入全部 state 值，同時還提供了 shouldComponentUpdate()這樣一個提高執行效率的大殺器，但使用起來並不簡單。 setState 前處理數據經常用到 Object.assign()、Array.concat()、 Object.freeze()等眾多方法處理引用類數據，以防數據被無意覆蓋或篡改。想想都累，緊接著，需要在 shouldComponentUpdate()中對比當前 state、props 與 nextstate、nextprops 的值，string number boolean 等值類型數據還好，可偏偏更多的數據是 Array 與 Object，深層對比 Object 、Array 便隨之而來，真是不知道處理對比損耗的性能和直接忽略去渲染哪個更合適一些。 。 。

## Immutable 可以做什麼

由於 Immutable 每次特點是每次都返回新的數據且數據生成後不可更改，即在此思路下，每次的數據更改不會影響到其與數據。也就降低了數據無意被修改、覆蓋的可能性。同時配備 Immutable 特殊的數據 hash 檢測機制，可以很輕易的對比兩個 Object、Array 數據對象。

```js
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 5;
console.log(obj2.a); // 5
console.log(obj1.a); // 5

let obj1 = { a: 1 };
let obj2 = Object.assign({}, obj1, { a: 5 });
console.log(obj2.a); // 5
console.log(obj1.a); // 1
```

看著就心累。 Immutable 解放了我 ​​ 們的天性。

```js
// 暫時不考慮實際api
let obj1 = Immutable.object({ a: 1 }); // 聲明一個immutable類型的object
let obj2 = Immutable.object(obj1); // 複製一個immutable類型的object
// 數據不可變，且總是返回新數據
obj2 = obj2.update({ a: 5 }); // 對數據的更改都將返回新的數據，並不影響原數據
console.log(obj2.a); // 5
console.log(obj1.a); // 1
```

看著還是調用了不少方法來完成這個操作，可如果習慣了之後就和 let 聲明變量一樣簡單，侵入血液，豈不是就不麻煩了。而且還完成了我們的需求。

Immutable 很好的幫我們解決了前面提到的一部分痛點，另一部分在後面繼續介紹。

## 卸下 Immutable 面紗

剛才在上一段代碼中為了便於理解，沒有使用真實的 api，只是模擬了一下便於書寫。
上面一段代碼轉換為真實代碼其實也很簡單

```js
let obj1 = Immutable.Map({ a: 1 }); // 聲明一個immutable類型的object
let obj2 = obj1.set('a', 5); // 數據不可變，且總是返回新數據
console.log(obj2.get('a')); // 5
console.log(obj1.get('a')); // 1
```

可以看出真實代碼更簡單，由於對 obj1 的更改不會真實作用在 obj1 身上，而是返回新的對像被 obj2 接收，代碼其實少了一行。同時 obj1、obj2 相對獨立，不會互相干擾。可能對 Map 還有所疑惑，在之後的 post 會詳細解釋 Immutable 的各種類型數據，並附有 Immutable 的全文文檔翻譯。

剛剛還提到一個 Immutable 利用 hash 來解決引用數據內部對比的問題。在 Immutable 內部也非常簡單的實現了，Object、Array 的深層對比。

```js
// immutable的object對比
let obj1 = Immutable.Map({ a: Immutable.Map({ a: 1 }) });
let obj2 = Immutable.Map({ a: Immutable.Map({ a: 1 }) });
let obj3 = Immutable.Map({ a: Immutable.Map({ a: 5 }) });
Immutable.is(obj1, obj2); // true
Immutable.is(obj1, obj3); // false

// plain js的object對比
let a = { a: { a: { a: 1 } } };
let b = { a: { a: { a: 1 } } };
let c = { a: { a: { a: 5 } } };
a === b; // false
a === c; // false
```

在 Immutable 的世界裡，對比一個 Object 與 Array 對象就是如此簡單，是不是在 shouldComponentUpdate( ) 簡直好用到不行。

## Immutable 不止這麼簡單

1、Immutable 幫我們降低了數據的更改風險，增加了我們對數據的可控性

2、Immutable 大部分 api 都是以函數式編程方式實現，便於現在函數式編程的大潮流。

3、Immutable 對數據的檢測機制更完善，並不是無腦的深複製，而是盡可能利用現有的數據，降低了內存的開銷。

4、Immutable 僅僅是一種數據格式的更改，使用過程中相當於一個簡單的對象(實際為類)，可以與任意框架、結構、插件搭配，不會產生衝突式危害。

## 優點

immutable.js 的優點是

- 效能佳（perfermance）
- 簡化變異的追蹤（mutation tracking）

效能佳（perfermance）
immutable.js 利用結構共享（structural sharing）的方式實作 persistent data structure。 所有的更新都會產生新值，但內部利用結構分享來大大減低記憶體的使用。 例如：假設要新加入一個值到一個長度為 1000 的陣列，它並非產生一個新的長度為 1001 的陣列，而是少部份的物件被建立－ 更改的部份新建立節點，而沒有更改的部份仍維持共享。

簡化變異的追蹤（mutation tracking）- Reference & Value Equality Check
在比對兩個物件是否相等時，不使用指標的比對（reference equality check），而是值的比對（value equality check）－減少了 reference equality check 所帶來的 recursive scan，因此效能較佳。

但由於 immutable.js 在實作上是把 JavaScript 物件外包一層糖衣做處理，這個產生的物件是 immutable 物件而非一般的 JavaScript 物件，因此若其它 library 是使用一般的 JavaScript 物件，交互使用上可能會產生一些困擾。

解法是使用另外的靜態類型檢查工具 / 系統（例如：TypeScript or Flow）或隱藏實作細節（例如：Redux）來處理。

可參考文件：[https://github.com/AllFE/blog/issues/2](https://github.com/AllFE/blog/issues/2)

## Immutable Map 與 List 共同點

查看官方文檔可得知，地圖與列表兩者的成員都是只有一個尺寸用來表示成員的個數。方法可以分為幾個大類

1，構造類，包含構造方法或者向目標類型轉換的方法

2，數據更改類：持久性變化與深度持續變化兩類，功能是更改集合內的某個數據

3，查看數據類：閱讀價值與深度閱讀價值兩類。

4，類型轉換類：轉換為 JavaScript 類型，轉換為集合併轉換為 Seq 三類

5，迭代類：迭代器類

6，比較類：價值平等類

7，類似原生 js 的方法類：其與幾個類，搜索值，縮小值，組合，創建子集，副作用

這幾個大類在兩者中都比較通用，並且絕大多數都是共有的相似的 API 接口。並且擁抱函數式編程且絕大多數對數據操作的方法與原生 JS 類似。

## 將原生 JS 轉為不可改變

常用的兩種方法

```js
Immutable.fromJS(plainJS); // 原生對象轉換為Map，原生Array轉換為List
Immutable.Map({}); // 將原生對象轉為Map
Immutable.List([]); // 將原生數組轉換為List
```

Immutable.fromJS（）的好處在於它會嵌套遞歸執行轉換，但地圖與列表不支持深層嵌套轉換。因此實際生產中需要選擇需要的方法進行轉換

## 將不可改變轉換為原生 JS

```js
ImmutableDate.toJS(); // 會自動判別Map與LIst並轉換為原生Object與Array
```

## 判斷兩個不可變數據是否相等

```js
// Immutable會根據內部的hash機制等來判斷兩個Immutable對像是否值相等，而不是引用相等
const map1 = Map({ a: 1, b: 1, c: 1 });
const map2 = Map({ a: 1, b: 1, c: 1 });
Immutable.is(map1, map2); // true

map1.equals(map2); // 也是利用Immutable.is但是提供單獨的書寫方式
list1.equals(list2);
```

## Map 詳解

### 建構 Map

```js
map0 = Immutable.Map() // 空Map
map1 = Immutable.Map({a:1}）// 不支持嵌套
map2 = Immutable.fromJS({a:{b:{c:1}}}) // 支持嵌套
```

### 判斷類型

```js
Immutable.Map.isMap(x); // true or false
```

### 數據獲取，更新與刪除

謹記 Map 中的關鍵都為字符串

```js
map1.get('a'); // 獲取鍵為的值
map2.getIn(['a', 'b', 'c']); // 深層遞歸獲取鍵為c的值類似於obj.a.b.c
map1.set('a', 2); // 設置或更新鍵a的值為2
map2.setIn(['a', 'b', 'c'], 2); // 深層遞歸獲設置或更新鍵c的值類似於obj.a.b.c
map1.has('a');
map2.has(['a', 'b', 'c']);
```

除了常規的原生 JS 中用。。。來獲取，更新數據的方式外，一成不變增加了一個更新方法用來通過函數方法更新數據

```js
map1.update('a', value => value + value);
map2.updateIn(['a', 'b', 'c'], value => value + value);
```

其中每個方法都有一個以在結尾的對應方法，他們的第一個參數是一個數組形式的查詢路徑，注意路徑中絕大多數應該是字符串類型，一定要記得加引號。

```js
// Map中Key的刪除也是非常簡單
map1.delete('a');
map2.deleteIn(['a', 'b', 'c']);
```

## Map 常用方法

### map 方法，便利操作

```js
Map({ a: 1, b: 2 }).map(x => 10 * x);
```

### filter 方法，類似於數組的 filter 數據篩選方法

```js
Map({ x: 1, y: 2, z: 3 }).filter((value, key) => value % 2 === 0);
```

### 三種迭代器方法 keys()，values()，entries()使用方法類似，只是默認傳入的參數不一樣

```js
let a = Immutable.Map({ x: 1, y: 2, z: 3 }).keys();
a.next();
a.next();
a.next();
a.next();
```

執行結果

```js
Object {value: "x", done: false}
Object {value: "y", done: false}
Object {value: "z", done: false}
Object {value: undefined, done: true}
```

### merge 方法：Map 的合併

類似於 Object.assign({}，obj1，obj2)這樣非常高頻的方法

```js
let b = Immutable.Map({ x: 1, y: 2, z: 3 });
let c = Immutable.Map({ xx: 1, yy: 2, zz: 3, x: 5 });
let d = b.merge(c);
```

## List 詳解

### 建構 List

```js
list0 = Immutable.List(); // 空Map
list1 = Immutable.List([1, 2, 3, 4, 5]); // 不支持嵌套
list2 = Immutable.fromJS([1, 2, 3, 4, 5, [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]]]); // 支持嵌套
```

### 判斷類型

```js
Immutable.List.isList(x); // true or false
```

### List 長度

```js
list1.size;
list1.count(); // 即使是一個懶惰的名單，調用計數方法也會返回正確的長度
```

### 數據獲取，更新與刪除

```js
list1.get(1); // 獲取索引為1的值
list2.getIn([1, 2, 3]); // 深層遞歸獲取索引路徑的值類似於數組[1] [2] [3]
list1.set(1, 2); // 設置或更新索引為1的值為2
list2.setIn([1, 2, 3], 2); // 深層遞歸設置或更新索引路徑的值類似於array [1] [2] [3] = 2
```

除了常規的原生 JS 中用[1][2] [3]來獲取，更新數據的方式外，不可變增加了一個更新方法用來通過函數方法更新數據

```js
list1.update(1, value => value + value);
list2.updateIn([1, 2, 3], value => value + value);
```

其中每個方法都有一個以在結尾的對應方法，他們的第一個參數是一個數組形式的查詢路徑。

```js
// 名單中關鍵的刪除也是非常簡單
list1.delete(1);
list2.deleteIn([1, 2, 3]);
```

## list 常用方法

### map 方法，便利操作

```js
List([1, 2, 3, 4, 5]).map(x => 10 * x);
```

### 過濾方法，類似於數組的過濾數據篩選方法

```js
List([1, 2, 3, 4, 5]).filter((value, key) => value % 2 === 0);
```

### 查找符合條件的第一個值

```js
// 返回的是值，而不是index
List([1, 2, 3, 4]).find(x => x > 1);
List([1, 2, 3, 4]).findLast(x => x > 1);
```

### 查找某個值

```js
// 返回第一個符合條件的指數
List([1, 2, 3, 4]).indexOf(2);
// 倒序進行查找
List([1, 2, 3, 4]).lastIndexOf(2);
```

### 三種迭代器方法 keys()，values()，entries()使用方法類似，只是默認傳入的參數不一樣

```js
let a = Immutable.List([1, 2, 3, 4, 5]).keys();
a.next();
a.next();
a.next();
a.next();
a.next();
a.next();
```

執行結果

```js
Object {value: 1, done: false}
Object {value: 2, done: false}
Object {value: 3, done: false}
Object {value: 4, done: false}
Object {value: 5, done: false}
Object {value: undefined, done: true}
```

### 尾部壓入，尾部壓出，頭部塞入與頭部取出方法

```js
List([1, 2, 3, 4]).push(5);
List([1, 2, 3, 4]).pop();
List([2, 3, 4]).unshift(1);
List([0, 1, 2, 3, 4]).shift();
```

### concat 方法：list 的合併

```js
let b = Immutable.list([1, 2, 3, 4]);
let c = Immutable.list([1, 2, 3, 4]);
let d = b.concat(c); // [ 1, 2, 3, 4, 1, 2, 3, 4 ]
```

### 覆蓋合併合併方法

```js
let b = Immutable.List([1, 2, 3, 4]);
let c = Immutable.List([7, 8]);
let d = b.merge(c); // [ 7, 8, 3, 4 ]
```

## 其他範例

```js
// 將 map1.b 改為 87
const { Map } = Immutable;
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 87);

console.log(
	map1.get('b'), // 2
	map2.get('b'), // 87
	map2.toJS() // { a: 1, b: 87, c: 3 }
);
```

```js
// 過濾掉奇數
// 加 1
// 並加總
const { List } = Immutable;
const list1 = List([1, 2, 3, 4, 5, 6]);
const list2 = list1.filter(x => x % 2 == 1).map(x => x + 1);
const sumList2 = list2.reduce((acc, x) => acc + x);

console.log(
	list2.toJS(), // [2, 4, 6]
	sumList2 // 12
);
```

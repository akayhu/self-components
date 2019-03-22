# JavaScript：使用 Array.map、Object.values 和 Object.keys 處理一連串的資料

使用 `Array.map`、`Object.values` 和 `Object.keys` 處理「物件中有物件」和「陣列中有物件」的情況。

### 物件中有物件

一個物件包含了一串物件。

範例如下，這裡有一串 ID 與名字。

```js
{
  "1234567890": {
    id: "1234567890",
    name: "Nina Ricci",
  },
  "2345678901": {
    id: "2345678901",
    name: "Hello Kitty",
  },
  "3456789012": {
    id: "3456789012",
    name: "Pusheen the cat",
  },
}
```

### 取得 key 的陣列

在這一連串資料下取得 key 的陣列。

- 使用 Object.keys 取得物件的鍵值，組成陣列後回傳。

```js
const idList = Object.keys(list);

idList // ["1234567890", "2345678901", "3456789012"]
```

### 取得 value 的陣列

在這一連串資料下取得 value 之特性屬性的陣列。

- 使用 Object.values 取得物件的 value，組成陣列。
- 承上，使用 Array.map 將陣列中的特定屬性值取出，組成新陣列後回傳。

```js
const nameList = Object.values(list).map(item => item.name);

nameList // ["Nina Ricci", "Hello Kitty", "Pusheen the cat"]
```

## 陣列中有物件 1

一個陣列包含了一串物件。

範例如下，這裡有一串 ID 與名字。

```js
const list = [
  {
    id: "1234567890",
    name: "Nina Ricci",
  },
  {
    id: "2345678901",
    name: "Hello Kitty",
  },
  {
    id: "3456789012",
    name: "Pusheen the cat",
  },
];
```

### 取得特性屬性值的陣列

取得 id。

- 使用 Array.map 迭代陣列，並將 callback 中的執行結果組成新陣列後回傳。
- 承上，在迭代陣列過程中，使用 Object.values 取得第一個屬性值，也就是 id 的值。

```js
const idList = list.map(item => Object.values(item)[0]); // 0 表示第一個屬性值

idList // ["1234567890", "2345678901", "3456789012"]
```

取得 name。

```js
const nameList = list.map(item => Object.values(item)[1]); // 1 表示第二個屬性值

nameList // ["Nina Ricci", "Hello Kitty", "Pusheen the cat"]
```

## 陣列中有物件 2

一個陣列包含了一串物件。

範例如下，這裡有一串 ID 與名字，key 是 ID，value 是名字。

```js
[
  {
    "1234567890": "Nina Ricci",
  },
  {
    "2345678901": "Hello Kitty",
  },
  {
    "3456789012": "Pusheen the cat",
  },
]
```

### 取得 key 的陣列

- 使用 Array.map 迭代陣列，並將 callback 中的執行結果組成新陣列後回傳為最終結果 idList。
- 使用 Object.keys 取得每個物件的鍵值，由於 Object.keys 會幫每個物件在取鍵值時建立一個陣列，因此要用 [0] 再取得內容，即字串後回傳結果。

```js
const idList = list.map(item => Object.keys(item)[0]);

idList // ["1234567890", "2345678901", "3456789012"]
```

### 取得 value 的陣列

- 使用 Array.map 迭代陣列，並將 callback 中的執行結果組成新陣列後回傳為最終結果 nameList。
- 使用 Object.values 取得每個物件的 value，由於 Object.value 會幫每個物件在取值時建立一個陣列，因此要用 [0] 再取得內容，即字串後回傳結果。


```js
const nameList = list.map(item => Object.values(item)[0]);

nameList // ["Nina Ricci", "Hello Kitty", "Pusheen the cat"]
```

## 出處

[https://cythilya.github.io/2018/06/17/array-and-object-handling/](https://cythilya.github.io/2018/06/17/array-and-object-handling/)
# JavaScript 正則表達式

JavaScript 的特性借鑑許多語言：

- 文法：Java

- 函式：Schema

- 原型繼承：Self

- 正則表達式：Perl

可處理正則表達式的方法：

- regexp.exec

- regexp.test

- string.match

- string.replace

- string.search

- string.split

## 範例

### Parse URL

這邊有個範例要找對應分配的 URL。

```js
var parse_url = /^(?:([A-Za-z+]:)?(\/(0,3))([0-9.\-A-Z-a-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "https://www.ora.com:80/goodparts?q#frament";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

var blanks = '  ';
var i;

for (i = 0; i < name.length; i += 1) {
  document.wrintIn(name[i] + ':' + 
    blanks.substring(name[i].length), result[i]);
}
```

使用 `parse_url` 的 `exec` 方法，傳入字串比對成功則回傳擷取自 url 的零碎字串陣列。

得到結果如下

- url: https://www.ora.com:80/goodparts?q#frament

- sheme: http

- slash: //

- host: www.ora.com:80

- port: 80

- path: goodparts

- query: q

- hash: fragment

現在讓我們開始解析 parse_ url ，

```js
var parse_url = /^(?:([A-Za-z+]:)?(\/(0,3))([0-9.\-A-Z-a-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
```

`^`：指出字串的開始，為一個定位點，阻止 exec 跳過不像 URL 的字首。

`(?:([A-Za-z+]:)?`：這個字段比對 scheme 名稱，名稱後面必須接:。

`(?:...)`：表示本段落非記憶集結，字尾? 表示該集結為選用集結。

`(...)`：括號表示一個記憶集結。選用：重複零或一次。

`[...]`：字元類組，以這次的[A-Za-z+]來說，就是包含二十六個大小寫字母。

`-`：指範圍連字號。

`+`：用於字元類組用於一或多次比對。這個群組緊接在:字元後，比對時將照字面如實比對。

記憶集結複製符合比對的文字，放到 result 變數中。每個記憶集結都拿到一個編號，假設某個記憶集結得到 1，符合這個記憶集結的文字複本會出現在 `result[1]`。

```js
(\/{0,3})
```

`\/` 比對是否有`/`斜線字元，它被\反斜線字元轉義，所以不會被翻譯為正規式實字的結尾。`{0,3}` 意指它前面的`/`可以出現 1~3次。

```js
([0-9.\-A-Za-z]+)
```

比對 host，由一個或多個英數字元，加上「.」或「-」組成。`-` 需做轉義，表示為`\-`，避免誤解為範圍連字號。

```js
(?::(/d+))?
```

比對 port，接在字元後的數字序列。`\d` 表示數字字元。一或多個數字則是第四個記憶集結。

```js
(?:\/([^?#]*))?
```

選用性集結，開頭為`/`。

字元類組 `[^?#]` 起始為`^`，代表類組包含所有字元，但`?`與`#`除外。`*`則表示前面的字元類組應出現零或多次。

```js
(?:\?([^#]*))?
```

以`?`起始的選用集結，它包含第六個記憶集結，負責比對零或多個字元（不含#）。

```js
(?:#(.*))?
```

以`#`起始，「.」用於比對任何字元，但行末字元除外。

```js
$
```

表示字串結尾，確保 URL 後沒有其他東西。

## Parse Number

```js
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test = function (num) {
    document.writeln(parse_number.test(num));
};
test('l'); //true
test('number'); //false
test('98.6'); //true
test('132.21.86.100'); //false
test('123.45E-67'); //true
test('123.45D-67'); //false
```

parse_number 可以分辨符合規格和不符合的字串，但看不出來哪裡不符合，那現在來分解：

```js
/^     $/I
```

看到定位點`^`和`$`，所以字串中的所有字元要跟正規式比對。

省略定位點，正規表示字串中是否包含數字；

有了定位點，正規表示字串中是否只有數字。

如果採用 `^`，可對出以數字起始的字串，

如果採用 `$`，可對出以數字結尾的字串。

i 找到相符合文字，忽略大小寫的差異，樣式中唯一一個字元就是 e，我們希望 e 也能找出 E，這個部分寫成 [Ee] 或 (?:E|e) ，也可以達到相同效果。

```js
-?
```

負號（-）後的字尾，表示負號為選用。

```js
\d+
```

`\d` 與`[0-9]` 相同，用來比對數字。字尾`+` 要求前面的數字出現一次或多次。

```js
(?:\.|d*)?
```

`(?:...)`表示一個非記憶集結。

```js
(?:...)
```

也是一個非記憶集結，可比對出 e 或 (E)，加上選用正負號，以及一或多個數字。

## 出處

[https://ithelp.ithome.com.tw/articles/10209312](https://ithelp.ithome.com.tw/articles/10209312)
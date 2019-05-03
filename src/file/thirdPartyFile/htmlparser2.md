# htmlparser2

HTML / XML / RSS 解析器。解析器可以處理流並提供回調接口。

npm 網址：[https://www.npmjs.com/package/htmlparser2](https://www.npmjs.com/package/htmlparser2)

## 寫法用法參考

參考 npm 文件

```js
var htmlparser = require('htmlparser2');
var parser = new htmlparser.Parser(
	{
		onopentag: function(name, attribs) {
			if (name === 'script' && attribs.type === 'text/javascript') {
				console.log('JS! Hooray!');
			}
		},
		ontext: function(text) {
			console.log('-->', text);
		},
		onclosetag: function(tagname) {
			if (tagname === 'script') {
				console.log("That's it?!");
			}
		},
	},
	{ decodeEntities: true }
);
parser.write(
	"Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>"
);
parser.end();

// Output (simplified):
// --> Xyz
// JS! Hooray!
// --> var foo = '<<bar>>';
// That's it?!
```

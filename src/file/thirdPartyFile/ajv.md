# ajv (另一個 JSON 模式驗證器)

Node.js 和瀏覽器的最快 JSON Schema 驗證器

npm 網址：[https://www.npmjs.com/package/ajv](https://www.npmjs.com/package/ajv)

## 寫法用法參考

參考官方文件

```js
var ajv = new Ajv({ removeAdditional: true });
var schema = {
	additionalProperties: false,
	properties: {
		foo: { type: 'number' },
		bar: {
			additionalProperties: { type: 'number' },
			properties: {
				baz: { type: 'string' },
			},
		},
	},
};

var data = {
	foo: 0,
	additional1: 1, // will be removed; `additionalProperties` == false
	bar: {
		baz: 'abc',
		additional2: 2, // will NOT be removed; `additionalProperties` != false
	},
};

var validate = ajv.compile(schema);

console.log(validate(data)); // true
console.log(data); // { "foo": 0, "bar": { "baz": "abc", "additional2": 2 }
```

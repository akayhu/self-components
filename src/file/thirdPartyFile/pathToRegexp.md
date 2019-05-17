# path-to-regexp

將路徑字符串/user/:name 轉換為正則表達式。

npm 網址：[https://www.npmjs.com/package/path-to-regexp](https://www.npmjs.com/package/path-to-regexp)

## 寫法用法參考

```js
const regexpNumbers = pathToRegexp('/icon-:foo(\\d+).png');
// keys = [{ name: 'foo', ... }]

regexpNumbers.exec('/icon-123.png');
//=> ['/icon-123.png', '123']

regexpNumbers.exec('/icon-abc.png');
//=> null

const regexpWord = pathToRegexp('/(user|u)');
// keys = [{ name: 0, ... }]

regexpWord.exec('/u');
//=> ['/u', 'u']

regexpWord.exec('/users');
//=> null
```

```js
const tokens = pathToRegexp.parse('/route/:foo/(.*)');

console.log(tokens[0]);
//=> "/route"

console.log(tokens[1]);
//=> { name: 'foo', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }

console.log(tokens[2]);
//=> { name: 0, prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '.*' }
```

```js
const toPath = pathToRegexp.compile('/user/:id');

toPath({ id: 123 }); //=> "/user/123"
toPath({ id: 'café' }); //=> "/user/caf%C3%A9"
toPath({ id: '/' }); //=> "/user/%2F"

toPath({ id: ':/' }); //=> "/user/%3A%2F"
toPath({ id: ':/' }, { encode: (value, token) => value }); //=> "/user/:/"

const toPathRepeated = pathToRegexp.compile('/:segment+');

toPathRepeated({ segment: 'foo' }); //=> "/foo"
toPathRepeated({ segment: ['a', 'b', 'c'] }); //=> "/a/b/c"

const toPathRegexp = pathToRegexp.compile('/user/:id(\\d+)');

toPathRegexp({ id: 123 }); //=> "/user/123"
toPathRegexp({ id: '123' }); //=> "/user/123"
toPathRegexp({ id: 'abc' }); //=> Throws `TypeError`.
```

```js
import pathToRegexp from 'path-to-regexp';

/**
 * 檢查是否為指定的 path
 * path 格式參照 pathToRegexp
 * @param {*} routes
 * @param {*} path
 */
const isValidRoute = (
	routes = [],
	path = window.location.href.replace(window.location.origin, '')
) => {
	for (let i = 0; i < routes.length; i++) {
		// null or array
		if (pathToRegexp(routes[i]).exec(path)) return true;
	}
	return false;
};
```

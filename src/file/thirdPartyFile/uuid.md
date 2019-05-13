# uuid

簡單，快速生成 RFC4122 UUIDS。

特徵：

支持版本 1,3,4 和 5 UUID
跨平台
使用加密強大的隨機數 API（如果可用）
零依賴，佔地面積小（......但不是很小）

[ 棄用警告：require('uuid')不推薦使用，在此模塊的 3.x 版之後將不再支持。相反，請使用 require('uuid/[v1|v3|v4|v5]')如下面的範例所示。]

npm 網址：[https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)

## 寫法用法參考

```js
const uuidv1 = require('uuid/v1');
uuidv1(); // ⇨ '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e'
```

```js
const uuidv3 = require('uuid/v3');

// ... using predefined DNS namespace (for domain names)
uuidv3('hello.example.com', uuidv3.DNS); // ⇨ '9125a8dc-52ee-365b-a5aa-81b0b3681cf6'

// ... using predefined URL namespace (for, well, URLs)
uuidv3('http://example.com/hello', uuidv3.URL); // ⇨ 'c6235813-3ba4-3801-ae84-e0a6ebb7d138'

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
uuidv3('Hello, World!', MY_NAMESPACE); // ⇨ 'e8b5a51d-11c8-3310-a6ab-367563f20686'
```

```js
const uuidv4 = require('uuid/v4');
uuidv4(); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'
```

```js
const uuidv5 = require('uuid/v5');

// ... using predefined DNS namespace (for domain names)
uuidv5('hello.example.com', uuidv5.DNS); // ⇨ 'fdda765f-fc57-5604-a269-52a7df8164ec'

// ... using predefined URL namespace (for, well, URLs)
uuidv5('http://example.com/hello', uuidv5.URL); // ⇨ '3bbcee75-cecc-5b56-8031-b6641c1ed1f1'

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
uuidv5('Hello, World!', MY_NAMESPACE); // ⇨ '630eb68f-e0fa-5ecc-887a-7c7a62614681'
```

```js
import uuidv4 from 'uuid/v4';

const targetUniKey =
	blockType !== 'custom'
		? targetConfig
			? targetConfig.get('uniKey')
			: uuidv4()
		: uuidv4();
```

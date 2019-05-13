# apollo-link-http (阿波羅鏈接，HTTP)

http 鏈接是最常見的 Apollo Link，一個用於 GraphQL 網絡的模塊化組件系統。如果您還沒有這樣做，請[閱讀 Apollo Link 文檔](https://www.apollographql.com/docs/link/#usage)以了解 Apollo Link 生態系統以及如何將此鏈接用於 Apollo Client 和 graphql-tools 等庫，或作為獨立客戶端。

http 鏈接是一個終止鏈接，它通過 http 連接從 GraphQL 端點獲取 GraphQL 結果。http 鏈接支持 POST 和 GET 請求，並且能夠基於每個查詢更改 http 選項。這可用於身份驗證，持久查詢，動態 uris 和其他粒度更新。

npm 網址：[https://www.npmjs.com/package/apollo-link-http](https://www.npmjs.com/package/apollo-link-http)

## 寫法用法參考

參考 npm 文件

```js
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: '/graphql' });
```

```js
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

/**
 * Client: graphQL 初始設定
 *
 * middleware & afterware => https://www.apollographql.com/docs/react/advanced/network-layer.html#linkMiddleware
 */
export const client = new ApolloClient({
	link: ApolloLink.from([
		// error log middleware
		onError(({ graphQLErrors, networkError }) => {
			if (graphQLErrors)
				graphQLErrors.map(({ message, locations, path }) =>
					console.error(
						`[GraphQL error]: Message: ${message}, Location: `,
						locations,
						`Path: `,
						path
					)
				);
			if (networkError) console.error(`[Network error]: ${networkError}`);
		}),
		new createHttpLink({
			uri: `${generalConfig.api}/graphql`,
			credentials: 'include',
		}),
	]),
	cache: new InMemoryCache(),
});
```

# apollo-cache-inmemory (阿波羅緩存 inmemory)

apollo-cache-inmemory 是 Apollo Client 2.0 的推薦緩存實現。InMemoryCache 是一個規範化的數據存儲，它支持所有 Apollo Client 1.0 的功能，而不依賴於 Redux。

在某些情況下，您可能需要直接操作緩存，例如在突變後更新存儲。我們將[在這裡](https://www.npmjs.com/package/apollo-cache-inmemory#recipes)介紹一些常見用例。

npm 網址：[https://www.npmjs.com/package/apollo-cache-inmemory](https://www.npmjs.com/package/apollo-cache-inmemory)

## 寫法用法參考

參考 npm 文件

```js
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

const cache = new InMemoryCache();

const client = new ApolloClient({
	link: new HttpLink(),
	cache,
});
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

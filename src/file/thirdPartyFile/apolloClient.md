# apollo-client

Apollo Client 是一個功能齊全的緩存 GraphQL 客戶端，集成了 React，Angular 等功能。它允許您輕鬆構建通過 GraphQL 獲取數據的 UI 組件。為了獲得最大價值 apollo-client，您應該將其與其中一個視圖層集成一起使用。

要開始使用 React 集成，請訪問我們的[React Apollo 文檔網站](https://www.apollographql.com/docs/react/)。

Apollo Client 還為[所有流行的前端框架](https://www.npmjs.com/package/apollo-client#learn-how-to-use-apollo-client-with-your-favorite-framework)提供了視圖層集成。為獲得最佳體驗，請確保為您選擇的前端框架使用視圖集成層。

Apollo Client 可用於任何想要使用 GraphQL 服務器數據的 JavaScript 前端。它的：

1. 可逐步採用，以便您可以將其放入現有的 JavaScript 應用程序中，並開始使用 GraphQL 作為 UI 的一部分。
2. 通用兼容，因此 Apollo 適用於任何構建設置，任何 GraphQL 服務器和任何 GraphQL 架構。
3. 開始使用非常簡單，因此您可以立即開始加載數據並稍後了解高級功能。
4. 可檢查且易於理解，以便您可以使用出色的開發人員工具來準確了解應用中發生的情況。
5. 專為交互式應用而構建，因此您的用戶可以立即進行更改並在 UI 中反映出來。
6. 小而靈活，所以你不會得到你不需要的東西。核心壓縮不到 25kb。
7. 社區驅動，因為 Apollo 是由社區驅動並服務於各種用例。一切都在公開計劃和發展。
8. 開始使用主頁，其中包含各種框架的很好示例。

npm 網址：[https://www.npmjs.com/package/apollo-client](https://www.npmjs.com/package/apollo-client)

## 寫法用法參考

參考 npm 文件

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

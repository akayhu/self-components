# react-apollo

React Apollo 允許您從 GraphQL 服務器獲取數據，並使用它在使用 React 框架構建複雜和反應式 UI 時使用它。React Apollo 可以在任何可以使用 React 的上下文中使用。在瀏覽器中，在 React Native 中，或在 Node.js 中，當您想要進行服務器端呈現時。

與 React 生態系統中的許多其他工具不同，React Apollo 不需要復雜的構建設置來啟動和運行。只要您擁有 GraphQL 服務器，就可以立即開始使用 React 構建應用程序。阿波羅反應出來的作品與兩個箱子[create-react-app](https://github.com/facebook/create-react-app)和[反應原住民](http://facebook.github.io/react-native/)與單個安裝並沒有額外的麻煩配置通天塔或其他 JavaScript 工具。

React Apollo 是：

1. 可逐步採用，以便您可以將其放入現有的 JavaScript 應用程序中，並開始使用 GraphQL 作為 UI 的一部分。
2. 通用兼容，因此 Apollo 適用於任何構建設置，任何 GraphQL 服務器和任何 GraphQL 架構。
3. 簡單易用，您可以立即開始加載數據並稍後了解高級功能。
4. 可檢查且易於理解，以便您可以使用出色的開發人員工具來準確了解應用中發生的情況。
5. 專為交互式應用而構建，因此您的用戶可以立即進行更改並在 UI 中反映出來。
6. 小而靈活，所以你不會得到你不需要的東西。核心壓縮不到 25kb。
7. 社區驅動，Apollo 由社區驅動，並提供各種用例。一切都在公開計劃和發展。

文件網址：[https://s3.amazonaws.com/apollo-docs-1.x/index.html](https://s3.amazonaws.com/apollo-docs-1.x/index.html)

npm 網址：[https://www.npmjs.com/package/react-apollo](https://www.npmjs.com/package/react-apollo)

## 寫法用法參考

參考文件

```js
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
	// By default, this client will send queries to the
	//  `/graphql` endpoint on the same host
	// Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
	// to a different host
	link: new HttpLink(),
	cache: new InMemoryCache(),
});
```

```js
import ApolloClient from 'apollo-boost';

const client = new ApolloClient();
```

```js
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
	<ApolloProvider client={client}>
		<MyRootComponent />
	</ApolloProvider>,
	document.getElementById('root')
);
```

```js
import { graphql } from 'react-apollo';

export default compose(
	withRouter,
	connect(
		mapStateToPorps,
		{
			printStart,
			mobileDrawerOpen,
			mobileDrawerClose,
			clearPreviousSimilar,
			fetchAllDataProcessStart,
			requestAddProfileVisitCount,
			profileDrawerOpen,
			profileDrawerClose,
		}
	),
	graphql(FETCH_NAMECARD, {
		name: 'fetchNamecard',
		skip: ({ source }) => source !== 'publish',
		options: ({ match }) => ({
			variables: {
				pid: match.params.pid,
			},
			fetchPolicy: 'network-only',
		}),
	}),
	graphql(FETCH_PUBLISH, {
		name: 'fetchPublish',
		skip: ({ source }) => source !== 'publish',
		options: ({ match }) => ({
			variables: {
				pid: match.params.pid,
				uuid: getURLQuery().t || '',
			},
			fetchPolicy: 'network-only',
		}),
	})
)(Profile);
```

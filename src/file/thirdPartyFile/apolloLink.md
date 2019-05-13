# apollo-link

apollo-link 是一個標準接口，用於修改 GraphQL 請求的控制流和獲取 GraphQL 結果，旨在提供一個能夠擴展的簡單 GraphQL 客戶端。目標用例如下 apollo-link 所示：

直接獲取查詢而不使用標準化緩存
Apollo Client 的網絡接口
Relay Modern 的網絡接口
抓取
Apollo Link 是在應用程序中創建新鏈接的界面。

客戶端將請求作為方法調用發送到鏈接，並且可以從服務器接收一個或多個（在訂閱的情況下）響應。使用 Observer 模式返迴響應

可以通過調用 next(result)觀察者來提供服務器的結果。在網絡/傳輸錯誤（不是 GraphQL 錯誤）的情況下，該 error(err)方法可用於指示不會收到響應。如果鏈接不支持多個響應，complete()則應調用以通知客戶端不再提供其他數據。

在中間鏈接的情況下，第二個參數 request(operation, forward)是指向的鏈接 forward(operation)。forward 返回一個 observable，它可以直接返回或訂閱。

npm 網址：[https://www.npmjs.com/package/apollo-link](https://www.npmjs.com/package/apollo-link)

## 寫法用法參考

參考 npm 文件

```js
forward(operation).subscribe({
	next: result => {
		handleTheResult(result);
	},
	error: error => {
		handleTheNetworkError(error);
	},
});
```

```js
import { ApolloLink, Observable } from 'apollo-link';

export class CustomApolloLink extends ApolloLink {
	request(operation /*, forward*/) {
		//Whether no one is listening anymore
		let unsubscribed = false;

		return new Observable(observer => {
			somehowGetOperationToServer(operation, (error, result) => {
				if (unsubscribed) return;
				if (error) {
					//Network error
					observer.error(error);
				} else {
					observer.next(result);
					observer.complete(); //If subscriptions not supported
				}
			});

			function unsubscribe() {
				unsubscribed = true;
			}

			return unsubscribe;
		});
	}
}
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

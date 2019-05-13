# graphql-tag

用於解析 GraphQL 查詢的有用實用程序。包括：

gql 一個 JavaScript 模板文字標記，用於將 GraphQL 查詢字符串解析為標準 GraphQL AST。
/loader 用於預處理查詢的 webpack 加載程序
graphql-tag 使用引擎蓋下的引用 graphql 庫作為對等依賴項，因此除了安裝此模塊之外，您還必須安裝 graphql-js。

npm 網址：[https://www.npmjs.com/package/graphql-tag](https://www.npmjs.com/package/graphql-tag)

## 寫法用法參考

參考 npm 文件

這是一個模板文字標記，可用於簡明地編寫一個被解析為標準 GraphQL AST 的 GraphQL 查詢：

```js
import gql from 'graphql-tag';

const query = gql`
	{
		user(id: 5) {
			firstName
			lastName
		}
	}
`;

// query is now a GraphQL syntax tree object
console.log(query);

// {
//   "kind": "Document",
//   "definitions": [
//     {
//       "kind": "OperationDefinition",
//       "operation": "query",
//       "name": null,
//       "variableDefinitions": null,
//       "directives": [],
//       "selectionSet": {
//         "kind": "SelectionSet",
//         "selections": [
//           {
//             "kind": "Field",
//             "alias": null,
//             "name": {
//               "kind": "Name",
//               "value": "user",
//               ...
```

```js
/**
 * Fragment
 */
export const Fragments = {
	blocks: gql`
		fragment BlockModel on Block {
			uniKey: blockId
			blockType: type
			templateType: template
			visibility
			mask
		}
	`,
	basic: gql`
		fragment UserInfoModel on UserInfo {
			userName
			introduction
			avatarFileId
			coverFileId
			avatarFileUrls
			coverFileUrls
			title
			organization
			location
		}
	`,
};

/**
 * Query
 */

// 取得指定 pid 基本資料
export const FETCH_USERINFO = gql`
	query fetchUserInfo($pid: Long!) {
		Namecard(pid: $pid) {
			pid
			basic {
				...UserInfoModel
			}
		}
	}
	${Fragments.basic}
`;
```

# react-router-dom

React Router 的 DOM 綁定

npm 網址：[https://www.npmjs.com/package/react-router-dom](https://www.npmjs.com/package/react-router-dom)

## 寫法用法參考

```js
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	color: #f5a623;
	:hover {
		color: #f5a623;
		text-decoration: underline;
	}
`;
```

```js
// using ES6 modules
import { BrowserRouter, Route, Link } from 'react-router-dom';

// using CommonJS modules
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Link = require('react-router-dom').Link;
```

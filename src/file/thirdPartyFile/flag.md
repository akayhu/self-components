# flag

功能標記使 React 和 Redux 變得簡單

功能標記對於大型客戶端應用程序是必需的。它們可以提高開發速度，並允許團隊在穩定之前測試新功能。為了 WANT 在應用程序中使用的功能標誌，他們應該是非常容易的添加和刪除。這意味著最小的鍋爐板，無需通過組件層次結構傳遞布爾支柱。這樣的事情可以用全局變量完成; 但是，它們生活在 React / Redux 生命週期之外，使它們更難控制。相反，這個庫會直接從 React 上下文中註入然後訪問功能標誌，而不會妨礙您。

npm 網址：[https://www.npmjs.com/package/flag](https://www.npmjs.com/package/flag)

## 寫法用法參考

參考官方文件

```js
const flags = {
	// properties can be nested objects
	features: {
		// they can be boolean
		useMyCoolNewThing: true,
	},
	config: {
		// they can be strings
		apiUrl: 'www.example.com/api',
	},
	// they can be numbers
	cool: 1,
	dude: 5,
	// they can be computed
	coolAndDude: flags => flags.cool + flags.dude,
	// they can be computed from other computed properties.
	// other computed properties are resolved for you, so that you do not
	// need to call it as a function.
	largeCoolAndDude: flags => flags.coolAndDude > 10,
};

import { Flag } from 'flag';

<Flag
	name="features.useMyCoolNewThing"
	render={() => <div>Rendered on truthy</div>}
	fallbackRender={() => <div>Rendered on falsy</div>}
/>;
```

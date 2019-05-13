# xstate

JavaScript 和 TypeScript [有限狀態機](https://en.wikipedia.org/wiki/Finite-state_machine)和現代 Web 的[狀態圖](http://www.inf.ed.ac.uk/teaching/courses/seoc/2005_2006/resources/statecharts.pdf)。

文件網址：[https://xstate.js.org/docs/](https://xstate.js.org/docs/)

npm 網址：[https://www.npmjs.com/package/xstate](https://www.npmjs.com/package/xstate)

## 寫法用法參考

參考文件

```js
import { Machine, interpret } from 'xstate';

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = Machine({
	id: 'toggle',
	initial: 'inactive',
	states: {
		inactive: { on: { TOGGLE: 'active' } },
		active: { on: { TOGGLE: 'inactive' } },
	},
});

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
	.onTransition(state => console.log(state.value))
	.start();
// => 'inactive'

toggleService.send('TOGGLE');
// => 'active'

toggleService.send('TOGGLE');
// => 'inactive'
```

```js
import { Machine } from 'xstate';
import { setPrivacyProcess, switchPrivacyProcess } from 'actions/profile';

const statechart = {
	key: 'privacy',
	initial: 'switchLoading',
	states: {
		// 顯示當前分享設定 loading
		switchLoading: {
			onEntry: [switchPrivacyProcess()],
			on: {
				SWITCH_PRIVACY: [
					{
						target: 'link',
						cond: (extendedState, event) => extendedState.privacy === 'LINK',
					},
					{
						target: 'public',
					},
				],
				PRIVACY_ERROR: 'error',
			},
		},
		public: {
			on: {
				SET_PRIVACY: 'setPrivacy',
			},
		},
		link: {
			on: {
				SET_PRIVACY: 'setPrivacy',
			},
		},
		// 更新資訊開放設定 loading
		setPrivacy: {
			onEntry: [setPrivacyProcess()],
			on: {
				SET_PRIVACY_SUCCESS: 'switchLoading',
				PRIVACY_ERROR: 'error',
			},
		},
		error: {},
	},
};

export default Machine(statechart);
```

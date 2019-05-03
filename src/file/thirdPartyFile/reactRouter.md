# react-router

React 的聲明性路由

npm 網址：[https://www.npmjs.com/package/react-router](https://www.npmjs.com/package/react-router)

## 寫法用法參考

參考 npm 文件

```js
import { Prompt } from 'react-router';

/**
 * NOTE:
 * 因為 react-router Prompt 並沒有處理瀏覽器 beforeunload 事件，也就是重新整理、上下一頁等功能
 * 看起來吵了很久都沒有 PR 被 merge，故需要自己手動補上
 * https://github.com/ReactTraining/react-router/pull/4372
 *
 * 另一個作法：自幹一個 Prompt
 * https://github.com/ReactTraining/react-router/issues/5405#issuecomment-430911738
 */

const handleBeforeUnload = ComposedComponent =>
  class BrowserPrompt extends Component {
    ...
  };

export default handleBeforeUnload(Prompt);
```

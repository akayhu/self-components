# Modal Component 使用說明

請在 `body` 內加上覆蓋全背景的 `div`，也可自行改寫 Modal Component。
帶入的內容可依專案需求面的呈現做調整，此內容為範例。

改寫 sources code 可參考如下：

```js
import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends PureComponent {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
		this.el.className = props.className || 'modal-container';
		this.el.onclick = e => e.preventPropagation;
	}
	componentDidMount() {
		modalRoot.appendChild(this.el);
	}
	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}
	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}

export default Modal;
```

改寫完在 `body` 內加上 `<div id="modal-root" />` 即可。

## 帶入參數說明

| 參數      | 說明              |
| --------- | ----------------- |
| propsName | 要帶入的 class 名 |
| width     | Modal 寬度        |

## TODO

關閉鈕、取消鈕

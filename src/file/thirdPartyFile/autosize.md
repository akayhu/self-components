# autosize

Autosize 是一個小型的獨立腳本，可自動調整 textarea 高度以適合文本。

npm 官方網址：[https://www.npmjs.com/package/autosize](https://www.npmjs.com/package/autosize)

## 寫法用法參考

```js
componentDidMount = () => {
  if (this.inputRef && this.inputRef.refs.input) {
    autosize(this.inputRef.refs.input);
  }
};

componentWillUnmount = () => {
  if (this.input && this.inputRef.refs.input) {
    autosize.destroy(this.inputRef.refs.input);
  }
};

componentDidUpdate() {
  this.inputRef &&
    this.inputRef.refs.input &&
    autosize.update(this.inputRef.refs.input);
}

render() => {
  return(
    <input ref={el => (this.inputRef = el)}></input>
  )
}
```

```js
// from a NodeList
autosize(document.querySelectorAll('textarea'));

// from a single Node
autosize(document.querySelector('textarea'));

// from a jQuery collection
autosize($('textarea'));
```

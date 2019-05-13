# react-scrollchor

一個 React 組件，用於滾動到#hash 具有平滑動畫的鏈接。Scrollchor 是一個有用組件的混合 Scroll 和 Anchor 笑話名稱。

Demo：[video](https://github.com/some-react-components/react-scrollchor/blob/example/demo/scrollchor.webm?raw=true)

example [page](https://some-react-components.github.io/react-scrollchor/) and [source code](https://github.com/some-react-components/react-scrollchor/tree/example)

## 寫法用法參考

參考官方文件

```js
import Scrollchor from 'react-scrollchor';

export default (props) => (
  <Page>

    <Navbar brand={brand} className="navbar-fixed-top">
      <NavItem><Scrollchor to="" className="nav-link">Home</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#sample-code" className="nav-link">Sample</Scrollchor></NavItem>
      <NavItem><Scrollchor to="#features" className="nav-link">Features</Scrollchor></NavItem>
      <NavItem><Scrollchor to="footer" className="nav-link">SignUp</Scrollchor></NavItem>
    </Navbar>


  <Section id="sample-code">

  </Section>

  <div id="features">

  </div>

  <footer id="footer">

  </footer>

</Page>
```

```js
import Scrollchor from 'react-scrollchor';

render() {
  return (
    <Fragment>
      <Scrollchor
        ref="scrollToAnchor"
        animate={{ offset: -125 }}
        to={this.state.targetId}
        disableHistory={true}
      />
      <WrappedComponent
        scrollToAnchor={this.scrollToAnchor}
        {...this.props}
      />
    </Fragment>
  );
}
```

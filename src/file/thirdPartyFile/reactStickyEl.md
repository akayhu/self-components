# react-sticky-el

Sticky library for React. (React 的粘性庫。)

npm 網址：[https://www.npmjs.com/package/react-sticky-el](https://www.npmjs.com/package/react-sticky-el)

Demos：[Basic](https://rawgit.com/gm0t/react-sticky-el/master/dist/examples/index.html)

## 寫法用法參考

參考官方文件

```js
import React, {Component} from 'react';
import Sticky from 'react-sticky-el';
...

class App extends Component ({
  render() {
    return (
      ...
        <Sticky>
          <header>
            ...
          </header>
        </Sticky>
      ...
    );
  },
});
```

```js
import React, {Component} from 'react';
import Sticky from 'react-sticky-el';
...

class App extends Component ({
  render() {
    return (
      <div>
        <p>....</p>
        <div className="scrollarea" style={{height: '200px', overflow: 'scroll'}}>
          <Sticky scrollElement=".scrollarea">
            <h1>Scroll pane</h1>
          </Sticky>
        </div>
        <p>....</p>
      </div>
    );
  },
});
```

```js
<Sticky
	boundaryElement={`.toolbar-all`}
	style={{ position: 'relative', zIndex: '10' }}
	topOffset={-45}
	bottomOffset={280}
	hideOnBoundaryHit={true}
>
	<ToolBarContainer toolbarPrompt={toolbarPrompt}>
		<ToolButton position="last" vertical={true} last={true}>
			<Tooltip placement="right" title="隱藏此區塊">
				<FontIcon
					className={`icon-icon_hibe`}
					onClick={this.onTriggerRemoveBlock}
				/>
			</Tooltip>
		</ToolButton>
	</ToolBarContainer>
</Sticky>
```

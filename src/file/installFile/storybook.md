# 安裝 Storybook 環境

## 『自己的 Storybook』安裝相關 Storybook 套件升版

```js
// 2019/4/24 devDependencies storybook 升版

@storybook/addon-a11y         ^5.0.8  →  ^5.0.10
@storybook/addon-actions      ^5.0.8  →  ^5.0.10
@storybook/addon-backgrounds  ^5.0.8  →  ^5.0.10
@storybook/addon-centered     ^5.0.8  →  ^5.0.10
@storybook/addon-jest         ^5.0.8  →  ^5.0.10
@storybook/addon-knobs        ^5.0.8  →  ^5.0.10
@storybook/addon-links        ^5.0.8  →  ^5.0.10
@storybook/addon-notes        ^5.0.8  →  ^5.0.10
@storybook/addon-options      ^5.0.8  →  ^5.0.10
@storybook/addon-storyshots   ^5.0.8  →  ^5.0.10
@storybook/addon-storysource  ^5.0.8  →  ^5.0.10
@storybook/addon-viewport     ^5.0.8  →  ^5.0.10
@storybook/addons             ^5.0.8  →  ^5.0.10
@storybook/react              ^5.0.8  →  ^5.0.10

// 目前 "storybook-addon-react-docgen": "^1.1.5" 版本之後套件 console.log 會噴錯，導致 propType 與 description 會抓不到資料。須待查問題
```

## Storybook 安裝

安裝 storybook
網址：https://storybook.js.org/

```js
npx -p @storybook/cli sb init
```

安裝 storybook 支援 Readme.md 格式
網址：https://github.com/tuchk4/storybook-readme

```js
npm install --save-dev storybook-readme
```

安裝 storybook 顯示紀錄 action 操作(addon-options)
網址：https://github.com/storybooks/storybook/tree/next/addons/actions

```js
npm i @storybook/addon-options
```

安裝 storybook 可以顯示 RWD 佈局(addon-viewport)
網址：https://github.com/storybooks/storybook/tree/next/addons/viewport

```js
npm i @storybook/addon-viewport
```

安裝 storybook 可以顯示 UI 中以交互方式編輯組件道具數據
網址：https://github.com/storybooks/storybook/tree/next/addons/knobs

```js
npm i @storybook/addon-knobs
```

安裝 storybook 支援 抓取 React Prop Type
網址：https://github.com/hipstersmoothie/storybook-addon-react-docgen

```js
npm i storybook-addon-react-docgen
```

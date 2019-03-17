# 安裝 Storybook 環境

## 『自己的 Storybook』安裝相關 Storybook 套件版號

```js
"devDependencies": {
  "@storybook/addon-actions": "^5.0.2",
  "@storybook/addon-backgrounds": "^5.0.2",
  "@storybook/addon-centered": "^5.0.2",
  "@storybook/addon-jest": "^5.0.2",
  "@storybook/addon-knobs": "^5.0.2",
  "@storybook/addon-links": "^5.0.2",
  "@storybook/addon-notes": "^5.0.2",
  "@storybook/addon-options": "^5.0.2",
  "@storybook/addon-storyshots": "^5.0.2",
  "@storybook/addon-storysource": "^5.0.2",
  "@storybook/addon-viewport": "^5.0.2",
  "@storybook/addons": "^5.0.2",
  "@storybook/react": "^5.0.2",
  "storybook-addon-react-docgen": "^1.1.5",
  "storybook-readme": "^5.0.0"
}

// 目前 "storybook-addon-react-docgen": "^1.1.5" 套件 console.log 會噴錯，導致 propType 與 description 會抓不到資料。
```

## Storybook安裝

安裝 storybook
網址：https://storybook.js.org/
```js
npx -p @storybook/cli sb init
```

安裝 storybook 支援 Readme.md格式
網址：https://github.com/tuchk4/storybook-readme
```js
npm install --save-dev storybook-readme
```

安裝 storybook 顯示紀錄action操作(addon-options)
網址：https://github.com/storybooks/storybook/tree/next/addons/actions
```js
npm i @storybook/addon-options
```

安裝 storybook 可以顯示RWD佈局(addon-viewport) 
網址：https://github.com/storybooks/storybook/tree/next/addons/viewport
```js
npm i @storybook/addon-viewport
```

安裝 storybook 可以顯示UI中以交互方式編輯組件道具數據
網址：https://github.com/storybooks/storybook/tree/next/addons/knobs
```js
npm i @storybook/addon-knobs
```

安裝 storybook 支援 抓取React Prop Type
網址：https://github.com/hipstersmoothie/storybook-addon-react-docgen
```js
npm i storybook-addon-react-docgen
```
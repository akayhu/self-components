# 安裝 Storybook 環境

## 目前 Storybook 版本

```jacascript
"devDependencies": {
  "@storybook/addon-actions": "^4.1.3",
  "@storybook/addon-knobs": "^4.1.11",
  "@storybook/addon-links": "^4.1.3",
  "@storybook/addon-options": "^4.1.11",
  "@storybook/addon-viewport": "^4.1.11",
  "@storybook/addons": "^4.1.3",
  "@storybook/react": "^4.1.3",
  "storybook-addon-react-docgen": "^1.0.4",
  "storybook-readme": "^4.0.5"
}
```

## Storybook安裝

安裝 storybook
網址：https://storybook.js.org/
```
npx -p @storybook/cli sb init
```

安裝 storybook 支援 Readme.md格式
網址：https://github.com/tuchk4/storybook-readme
```
npm install --save-dev storybook-readme
```

安裝 storybook 顯示紀錄action操作(addon-options)
網址：https://github.com/storybooks/storybook/tree/next/addons/actions
```
npm i @storybook/addon-options
```

安裝 storybook 可以顯示RWD佈局(addon-viewport) 
網址：https://github.com/storybooks/storybook/tree/next/addons/viewport
```
npm i @storybook/addon-viewport
```

安裝 storybook 可以顯示UI中以交互方式編輯組件道具數據
網址：https://github.com/storybooks/storybook/tree/next/addons/knobs
```
npm i @storybook/addon-knobs
```

安裝 storybook 支援 抓取React Prop Type
網址：https://github.com/hipstersmoothie/storybook-addon-react-docgen
```
npm i storybook-addon-react-docgen
```
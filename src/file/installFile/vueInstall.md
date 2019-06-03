# 安裝 Vue 開發環境

須先安裝 Node.js

最低需求：

- node 4
- npm 3

## 什麼 Vue-cli ?

[vue-cli](https://github.com/vuejs/vue-cli) 可以說是作者開發的 vue 懶人開發包，裡面包含有 5 種結構，從最基礎的 `simple` 到 `browserify` 以及 `webpack` 版本皆可以自由選擇。

### 安裝 vue-cli 在 command line 介面中執行：

```js
npm install -g vue-cli
```

> `-g` 是 `npm` 安裝語法將套件安裝在`全域環境`的意思。
> `npm`(內建) 是 `node.js` 安裝套件的管理工具之一，其他還有 facebook 的 `YARN`

### 安裝 webpack 在 command line 介面中執行：

```js
vue init webpack your-project-name
```

> `your-project-name` -> 只需命名你喜歡的 project 名稱，cli 將會幫你產生此資料夾，並安裝你選定的結構。

### 為什麼選用 webpack ?

主要想使用 `Hot-loader` 功能體驗快速反應的開發系統，與最新的自動化建構工具。

### 什麼是 Hot-loader ?

你可以想像成 live-reload 的進階版本，Hot-loader 會直接在畫面上更新，改變你剛剛改好的程式碼。

### 比較圖：

| 套件        | 功能         | 畫面更新 | 資料重新 load  |
| ----------- | ------------ | -------- | -------------- |
| live-reload | 幫你按 F5    | 是       | 資料須重新 key |
| Hot-loader  | 直接更新程式 | 是       | 資料會存在     |

> 想像一下我們開發一個功能，更改了顏色，我不需要從登入開始一步一步點到那個畫面，按下存檔的瞬間，它就幫我把顏色更新上去了！

### webpack 開發包選項：

因為我們的目標是 `學習 vue` 因此，我們將不選擇安裝 test 與 coding style.

> 如果是多人共同開發的專案中，還是建議使用 coding style 內建有 `airbnb` 選項。

選項：

- Project name learnVue
- Project decsription learnVue
- Auther hungjie19
- User ESLine to lint your code? `No`
- Pick an ESLine preset
- Setup unit tests with Karma + Mocha? `No`
- Setup e2e tests with Nigthwatch? `No`

經過以上詢問式設定，安裝完成 webpack 開發包的結構後：

1. 移動到開發包中：

```js
cd your-project-name
```

2. 透過 npm 安裝相依套件

```js
npm install
```

3. 執行開發版

```js
npm run dev
```

稍等一下 webpack 正在 build 與 setup server..

接著就可以在 `http://localhost:8080` 看到預設的 Vue Hello Page!

![image](https://github.com/akayhu/self-components/blob/master/src/file/installFile/image/vueHelloWord.png?raw=true)

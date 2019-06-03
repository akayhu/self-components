# Vue Computed

`computed` 這個 API 主要負責把原本需撰寫在 template 上面一連串的計算 model 的式子，收成一個類似於 data 的屬性，與 data 不同的地方在於 computed 在 data 改變後會立即回傳計算後的結果。

在 vue 框架設計中，會分門別類的區分各種功能，都有特定的收納地方，覺得撰寫與閱讀起來會很舒服。

> 單純的資料宣告就放在 data

> 需要經過計算才顯示的 data 就放在 computed !!

```js
<template>
  <div class="container">
    <!-- 公式撰寫在 template -->
    <h2>華氏：{{ celsius * 9/5 + 32 }} °F</h2>
    <!-- 公式收納在 computed -->
    <h2>華氏：{{ fahrenheit }} °F</h2>
    <div class="celsius">
      攝氏：<input type='number' v-model="celsius" /> °C
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      celsius: 0
    }
  },
  computed: {
    // ES6:
    fahrenheit () {
      // computed 計算後才會顯示到 template 上面。
      return this.celsius * 9/5 + 32;
    }
    // ES5:
    // fahrenheit: function () {
    //   return this.celsius * 9/5 + 32;
    // }
  }
}
</script>

<style>
  .celsius {
    font-size: 1.5em;
  }
</style>
```

computed 是一個 Object 建構子，其中 return 的結果將為此物件所顯示。

因此我們將使用者輸入的 `celsius` 數值計算後 `fahrenheit` 將得到轉換後的結果。

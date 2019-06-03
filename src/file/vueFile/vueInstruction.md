# Vue 指令與 methods

vue Directive & vue Option 介紹：

## [vue directive v-if](https://cn.vuejs.org/v2/api/index.html#v-if)

這是一個可以增加在 HTML tag 上面的判斷式，如果條件成立的時候，vue 將會幫你`繪出`元素。

```js
<h2 v-if="isCelsius">攝氏：{{ celsius }} °C</h2>
<h2 v-if="!isCelsius">華氏：{{ fahrenheit }} °F</h2>
```

當 `isCelsius = true` 的時候 vue 將會幫你繪出在瀏覽器上。

結果：`攝氏： °C`

## [vue directive v-show](https://cn.vuejs.org/v2/api/index.html#v-show)

這是一個可以增加在 HTML tag 上面的判斷式，如果條件成立的時候，vue 將會幫你`顯示`元素。

```js
<span v-show="!isCelsius">攝氏：</span>
<span v-show="isCelsius">華氏：</span>
```

當 `isCelsius = true` 的時候 vue 將會幫你顯示在畫面上。

結果：`華氏：`

再 HTML 上面可以觀察到，`不`成立條件的 DOM 被使用 display 隱藏了。

```js
<div style="display: none;">
```

到這邊可能會有一個疑問，到底 v-if 與 v-show 有什麼不同呢？

v-if: 當條件成立時，會在瀏覽器上繪製此元素。
v-show: 當條件`不`成立時，會使用隱藏的方式，不顯示元素。

### 比較圖：

| vue directive | 條件不成立時    |
| ------------- | --------------- |
| v-if          | 不繪製此 DOM    |
| v-show        | 依然存在 DMO 中 |

### 何時 if 何時 show ?

存不存再 DOM 將會對效能比較有直接關係，如果使用 v-show tag 上所綁定的 model 都會雙向的數值計算，雖然畫面上看不到，可是依然在瀏覽器上面改變畫面。

或者使用了 v-if 而此功能會頻繁的做切換，將會在瀏覽器上進行快速插入/刪除 DOM 的動作。

所以如果是包含著一個大區塊的判斷式會比較建議使用 `v-if` 而小型區、頻繁切換的條件或只是文字/ 顏色切換，可以使用 `v-show` 既可。

## [vue directive v-on](https://cn.vuejs.org/v2/api/index.html#v-on)

是 vue 包裝過的事件處理，舉凡最簡單的：

```js
onclick = 'dosomething();';
```

也要改成：

```js
v-on:click="dosomething"
```

當然這樣寫有點囉唆，因此有另一種寫法方便我們開發：

```js
@click="dosomething"
```

## [vue option methods](https://cn.vuejs.org/v2/api/index.html#methods)

是 vue 建構子當中存放 function 的地方，如 onclick 按下後執行的`函式`可以放在這個區域。

```js
methods: {
  temperatureConversio ( val ) {
    if ( this.isCelsius ) {
      alert('攝氏: ' + this.celsius );
    }
    else {
      alert('華氏: ' + this.fahrenheit );
    }
  }
}
```

## 參考範例

```js
<template>
  <div class="container">
    <h1>Temperature Conversion</h1>
    <!-- 切換模式按鈕 -->
    <input id="toggleTemperature" type="checkbox" v-model="isCelsius">
    <label for="toggleTemperature">切換：{{ toggleTemperature }}</label>

    <!-- 轉換顯示區域 -->
    <!-- v-if 條件不成立的區域，不會存在瀏覽器上 -->
    <h2 v-if="isCelsius">攝氏：{{ celsius }} °C</h2>
    <h2 v-if="!isCelsius">華氏：{{ fahrenheit }} °F</h2>

    <!-- 使用者輸入區域 -->
    <!-- v-show 條件不成立的區域會使用 style 隱藏，會存在瀏覽器上 -->
    <div class="celsius">
      <span v-show="!isCelsius">攝氏：</span>
      <span v-show="isCelsius">華氏：</span>
      <input type='number' v-model="userInput" /> °C
    </div>

    <!-- alert 顯示計算結果 -->
    <button @click="temperatureConversio( userInput );">
      Temperature Conversio
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInput: 0,
	  // 增加此變數紀錄目前是什麼模式。
      isCelsius: false,
    }
  },
  computed: {
    fahrenheit () {
      return this.userInput * 9/5 + 32;
    },
    celsius () {
      return (this.userInput - 32) * 5/9;
    },
    toggleTemperature () {
      return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    }
  },
  methods: {
    temperatureConversio ( val ) {
	  // val 是從 click 傳進來的 userInput 這是示範 function 傳值。
	  // 如果不傳值，直接使用 this.userInput 也可以。
	  // alert 的內容直接使用 computed 已經幫我計算好的結果。
      if ( this.isCelsius ) {
        alert('攝氏: ' + this.celsius );
      }
      else {
        alert('華氏: ' + this.fahrenheit );
      }
    }
  }
}
</script>

<style>
  .userInput {
    font-size: 30px;
  }
</style>
```

## javascript 中取得 data 或呼叫 methods ?

在 javascript 中如果 methods 需要拿 userInput 的 value 必須加上 `this`。

this 指向這個 vue 元件本身。

```js
methods: {
  temperatureConversio ( val ) {
    // 取得 data 資料
    alert( userInput ); // 錯誤
    alert( this.userInput ); // 正確

    // 呼叫其他 method
    someMethod();// 錯誤
    this.someMethod(); //正確
  },
  someMethod () {
      alert('call some method OK!');
  }
}
```

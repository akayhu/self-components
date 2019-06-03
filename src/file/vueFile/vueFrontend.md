# Vue 基礎介紹

重點：

- 數據綁定到 template
- 使用者輸入的值立即顯示在畫面上
- 使用 checkbox 做雙向綁定

## data

vue instance 可傳入選項物件，其中可設定 data（資料）。

data 是用來

- 儲存元件內部狀態或資料
- 和 v-model 合作實現雙向綁定

## 資料型別

data 可以是 object 或 function，但元件（component）的 data 只能是 function，這是因為元件內各自擁有自己的 data，而非共用的關係。

## 原理

在 observer 中，data 透過`Object.defineProperty()`為元件內屬性重新定義`getter`和`setter` method。當 data 被修改時，會透過`setter`通知變化，觸發 watcher 重新計算、更新與渲染 DOM element。

元件的 data 只能是 function。

## 數據綁定到 template

```js
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ hello }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      // data 這裡就是 model 存放一些資料
      // 這邊的資料與 tmplate 可以做雙向綁定
      msg: 'Welcome to Your Vue.js App',
      // 嘗試新增一個數據
      hello: 'Hello Vue 2.0 !'
    }
  }
}
</script>
```

由於 vue instance 重新設定了`getter`和`setter`方法，因此 `vm.$data.message` 完全等於 `vm.message`。

```js
vm.$data.message === vm.message; // true
```

### 注意

- 自訂屬性名稱不要使用`$`或`_`開頭，以免和 vue 所定義的屬性或 API 衝突。因此，對於使用`$`或`_`開頭命名的屬性，vue 都不會處理。
- 動態加入的屬性無法擁有 reactivity 的特性（例如：雙向綁定等），因此在建立實體前要先宣告所有會用到的屬性。
- 如果要對 data 做深拷貝（deep copy），可將 `vm.$data`傳入`JSON.parse(JSON.stringify())`。

## 使用者輸入的值立即顯示在畫面上

```js
<template>
  <div class="hello">
    // 也可以撰寫一些 javascript code
    <h3>{{ hello + ' and Ironman 2019' }}</h3>
    //  加一個 input 來嘗試今天的任務，雙向綁定
    //  修改 input 裡面的值，綁定的地方也會馬上更新!!
    <input type="text" v-model="hello" />
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      hello: 'Hello Vue 2.0 !'
    }
  }
}
</script>
```

## v-model

v-model 是綁定在表單元件或自訂元件上，為實現雙向綁定用的。表單元件像是`<input>`、`<select>`和`<textarea>`。

## 使用 checkbox 做雙向綁定

```js
<template>
  <div class="hello">
    // 使用 checkbox 來完成雙向綁定
    <input type="checkbox" v-model="toggle" />{{ toggle }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      toggle: false,
    }
  }
}
</script>
```

## Checkbox 複選框

使用`v-model` 綁定 toggle 的值：當 toggle 為 true，勾選此項目；當 toggle 為 false，不勾選此項目。

或依據給訂的值決定是否勾選，若 toggle 為 1 則勾選，若 toggle 為 2 則不勾選。

```js
<template>
  <div class="hello">
    // 使用 checkbox 來完成雙向綁定
    <input
      type="checkbox"
      v-model="toggle"
      :true-value="1"
      :false-value="2"
    />{{ toggle }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      toggle: 0,
    }
  }
}
</script>
```

將多個 checkbox 綁定到同一個群組。在這裡設定 group 為一個陣列，裡面存放勾選選項的 value 字串。例如，若 group 為 `["1", "2"]`，則勾選第一個和第二個複選框。

```js
<div id="app">
  <input type="checkbox" v-model="group" value="1" /><label>我是複選框 1</label>
  <input type="checkbox" v-model="group" value="2" /><label>我是複選框 2</label>
  <input type="checkbox" v-model="group" value="3" /><label>我是複選框 3</label>
  <div>group = {{ group }}</div>
</div>

<script>
export default {
  name: 'hello',
  data () {
    return {
      group: [],
    }
  }
}
</script>
```

# Vue Slot

Slot 是一種用於內容分配（Content Distribution / Transclusion）的元件，適用於複雜或巢狀元件的實作上，可以想像成是空間預留的方法，在迭代過程中再把內容塞進去。

有點像 AngularJS 的 directives

```js
<template>
  <div>
    <TestSlot :user-name="temperatureConversio()">
      <p slot="aaa" v-if="isCelsius">你知道我在等你嗎</p>
      <p slot="bbb" v-if="!isCelsius">我不知道</p>
    </TestSlot>
  </div>
</template>

<script>
import TestSlot from '@/components/testSlot';

export default {
  data () {
    return {
      isCelsius: false
    }
  },
  methods: {
    temperatureConversio (val) {
      if(this.isCelsius) {
        return '攝氏';
        console.log('攝氏： ' + this.celsius);
      } else {
        return '華氏';
        console.log('華氏： ' + this.fahrenheit);
      }
      this.someMethod();
    }
  },
  components: {
    TestSlot
  }
}
</script>
```

testSlot.vue

```js
<template>
  <div class="slot_class">
    我是Slot內容<br />
    <slot name="aaa"></slot>
    <slot name="bbb"></slot>
    <button @click="hello(userName)">say hi</button>
  </div>
</template>

<script>
export default {
  props: ['user-name'],
  methods: {
    hello (name) {
      alert('Hi! ' + name)
    }
  }
}
</script>

<style>
  .slot_class {
    background-color: aquamarine;
    color: brown;
    font-size: 18px;
    padding: 20px;
    width: 500px;
    margin: 20px auto;
  }
</style>
```

## 官方範例

Modal 範例： [Modal Component](https://vuejs.org/v2/examples/modal.html)

```js
<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">

           <slot name="footer">
              <!--
                  如果 slot 本身有包含內容，將會是預設樣式，
                  也就是說引用頁面如果不需要自己的 footer 將會出現以下樣式
                  如果崁入自己的 footer 這段將被覆蓋過去。
              -->
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>

          </div>
        </div>
      </div>
    </div>
  </transition>
</script>
```

這是一個彈跳視窗、modal 或稱 dialog 官方設計中把：`header`, `body`, `footer` 分別設計好
在使用的頁面就可以彈性的崁入需要的樣式。

如 body 有時候只需要一段文字詢問用者，或者需要 input 讓使用者在輸入一些資料等..。

而 footer 大概是放 `OK` 或 `cancel` 偶爾也有需要其他按鈕選項，就可以在自己的頁面中彈性加入。

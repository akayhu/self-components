# Vue 生命週期

![image](https://github.com/akayhu/self-components/blob/master/src/file/vueFile/img/vue-lifecycle.png?raw=true)

Vue.js 提供實體生命週期鉤子 (instance lifecycle hooks)，讓我們在 instance 不同時期做一些事情。這裡會使用一些 instance method 來強制進入鉤子。

```js
var vm = new Vue({
	beforeCreate: function() {
		//vue instance 被 constructor 建立前
		console.log('beforeCreate');
	},
	created: function() {
		//vue instance 被 constructor 建立後，在這裡完成 data binding
		console.log('created');
	},
	beforeMount: function() {
		//綁定 DOM 之前
		console.log('beforeMount');
	},
	mounted: function() {
		//綁定 DOM 之後
		console.log('mounted');
	},
	beforeUpdate: function() {
		//資料更新，但尚未更新 DOM
		console.log('beforeUpdate');
	},
	updated: function() {
		//因資料更新，而更新 DOM
		console.log('updated');
	},
	beforeDestroy: function() {
		//移除 vue instance 之前
		console.log('beforeDestroy');
	},
	destroyed: function() {
		//移除 vue instance 之後
		console.log('destroyed');
	},
});
```

- `beforeCreate`: 實例初始化立即叫用，這時還未創建實例，所以任何 Vue 實體中的設定(例如: `data` )都還未配置。
- `created`: 完成創建實例，這時 Vue 實體中的配置除了 `$el` 外已全部配置，而 `$el` 要在掛載模板後才會配置。
- `beforeMount`: 在 Vue 實體中的定義被掛載到目標元素之前叫用，這時的 `$el` 會是還未被 Vue 實體中的定義渲染的初始設定模板。
- `mounted`: Vue 實體上的設置已經安裝上模板，這時的 `$el` 是已經藉由實體中的定義渲染而成的真正的頁面。
- `beforeUpdate`: 當實體中的 data 產生變化後或是執行 [vm.\$forceUpdate()](https://vuejs.org/v2/api/#vm-forceUpdate) 叫用，這時的頁面還未被重渲染為改變後的畫面。
- `updated`: 在重新渲染頁面後叫用，這時的頁面已經被重渲染成改變後的畫面。
- `beforeDestroy`: 在此實體被銷毀前時叫用，這時實體還是擁有完整的功能。
- `destroyed`: 此實體被銷毀後叫用，這時實體中的任何定義( `data` 、 `methods`...等)都已被解除綁定，代表在此做的任何操作都會失效。

## beforeCreate, created

打開 console tab，一開始就會看到

```js
beforeCreate;
created;
```

執行`vm.$mount('#app')`，讓實體物件綁定 DOM。

```js
vm.$mount('#app');
```

執行結果

```js
beforeMount;
mounted;
```

在尚未綁定前會呼叫`beforeMount`，綁定後會呼叫`mounted`。

## beforeUpdate, updated

執行`vm.$forceUpdate()`或更新資料，來更新 DOM。

```js
vm.$forceUpdate();
```

或修改資料

```js
<div id="app">${message}</div>
```

```js
var vm = new Vue({
	el: '#app',
	delimiters: ['${', '}'],
	data: {
		message: 'Hello World!',
	},
	//省略
});

vm.message = 'Message updated!'; //修改資料
```

執行結果

```js
beforeUpdate;
updated;
```

在尚未更新前會呼叫`beforeUpdate`，更新後會呼叫`updated`。

## beforeDestroy, destroyed

銷毀 vm。

執行結果

```js
beforeDestroy;
destroyed;
```

在尚未移除前會呼叫`beforeDestroy`，移除後會呼叫`destroyed`。

### 備註

一般狀況使用`v-if`和`v-for`來控制資料即可，不需要用到`vm.$destroy()`。
如果是使用 server-side rendering，則除了`beforeCreate`和`created`，其他 method 都不會被呼叫。

總結以上，使用 vue instance 是因為它會幫我們在原本的 DOM element 上加料，意即，所有讓我們在開發時更方便的功能都是由 vue instance 幫我們加上去的，像是雙向綁定，而這樣經由 JavaScript 操作 DOM 的方式不得不歸功於 virtual DOM 讓我們能動手腳。

## 參考資料

[https://cythilya.github.io/2017/04/11/vue-instance/](https://cythilya.github.io/2017/04/11/vue-instance/)

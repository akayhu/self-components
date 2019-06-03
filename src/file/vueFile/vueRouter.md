# vue router

官方網址：[https://router.vuejs.org/zh/installation.html](https://router.vuejs.org/zh/installation.html)

用 Vue.js + Vue Router 創建單頁應用，是非常簡單的。使用 Vue.js，我們已經可以通過組合組件來組成應用程序，當你要把 Vue Router 添加進來，我們需要做的是，將組件 （組件）映射到路由（routes），然後告訴 Vue Router 在哪裡渲染它們。下面是個基本例子

## Router 設定

### main.js

```js
import Vue from 'vue';
import VueRouter from 'vue-router';

// init
Vue.use(VueRouter);

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/C2F.vue';
import App from './App.vue';

const router = new VueRouter({
	// 使用 HTML 5 模式
	mode: 'history',
	base: __dirname,
	// routre 表
	routes: [
		{
			path: '/hello',
			name: 'hello',
			component: Hello,
		},
		{
			path: '/c2f',
			name: 'c2f',
			component: CtoF,
		},
		// router 轉址
		{ path: '/*', redirect: '/hello' },
	],
});

new Vue({
	el: '#app',
	// router 掛載設定
	router,
	// app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
	render: h => h(App),
});
```

### app.vue 設定

```js
<template>
  <div>
    //
    //  router-link 就像
    //  <a href="/c2f">CtoF</a>
    //  :to 裡面是物件形式，描述要轉跳的目的與需要帶的參數
    //  目的：考可以用 path 或 name
    //  在 main.js router 我們是這樣設定的：
    //  {
    //    path: '/hello',
    //    name: 'hello',
    //    component: Hello
    //  },
    //
    <router-link :to="{path: '/hello'}">Hello</router-link>
    <router-link :to="{name: 'c2f'}">CtoF</router-link>

    // 轉跳後所載入的 component 最後會顯示在此 //
    <router-view></router-view>
  <div>
</template>
```

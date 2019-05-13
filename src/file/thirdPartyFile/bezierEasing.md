# bezier-easing

BezierEasing 提供了 Cubic Bezier 曲線緩動，它簡化了緩和功能（緩入，緩出，輕鬆進出，......任何其他自定義曲線），與 CSS Transitions 完全相同。

實現高效查找並不容易，因為它意味著將 X 坐標投影到貝塞爾曲線。這個微型庫使用快速啟發式（涉及二分法搜索，newton-raphson，採樣）來關注性能和精度。

> 它主要基於 Firefox 和 Chrome 中可用的實現（用於 CSS transition-timing-function 屬性）。

npm 官方網址：[https://www.npmjs.com/package/bezier-easing](https://www.npmjs.com/package/bezier-easing)

## 寫法用法參考

參考官方文件

```js
var easing = BezierEasing(0, 0, 1, 0.5);
// easing allows to project x in [0.0,1.0] range onto the bezier-curve defined by the 4 points (see schema below).
console.log(easing(0.0)); // 0.0
console.log(easing(0.5)); // 0.3125
console.log(easing(1.0)); // 1.0
```

```js
import BezierEasing from 'bezier-easing';

// 由貝茲曲線計算捲動速率
getScrollRate = () => {
	const validDirection = ['toTop', 'toBottom'];
	if (validDirection.indexOf(this.state.scrollDirection) === -1) return 0;

	// http://greweb.me/bezier-easing-editor/example/
	const curve = BezierEasing(1, 0, 1, 1);

	const delta =
		this.state.scrollDirection === 'toTop'
			? this.state.clientOffset.y / this.state.scrollTriggerThread // toTop
			: (window.innerHeight - this.state.clientOffset.y) /
			  this.state.scrollTriggerThread; // toBottom

	// 超過 thread 視為無效
	if (delta > 1 || delta < 0) return 0;

	return (1 - curve(delta)) * this.state.maxDelta;
};
```

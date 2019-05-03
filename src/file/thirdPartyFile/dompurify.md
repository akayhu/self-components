# dompurify

DOMPurify 是一種僅限 DOM，超快速，超級容忍的 XSS 消毒劑，適用於 HTML，MathML 和 SVG。

DOMPurify 清理 HTML 並防止 XSS 攻擊。您可以使用充滿臟 HTML 的字符串提供 DOMPurify，它將返回一個包含乾淨 HTML 的字符串。DOMPurify 將刪除包含危險 HTML 的所有內容，從而防止 XSS 攻擊和其他惡意。它也快死了。我們使用瀏覽器提供的技術並將其轉換為 XSS 過濾器。瀏覽器越快，DOMPurify 就越快。

npm 網址：[https://www.npmjs.com/package/dompurify](https://www.npmjs.com/package/dompurify)

## 寫法用法參考

參考 npm 文件

```js
const link = encodeURIComponent(
	DOMPurify.sanitize(value, { ALLOWED_TAGS: [], KEEP_CONTENT: true })
)
	.replace(/%2F/g, '/')
	.replace(/%3A/g, ':')
	.replace(/%20/g, '+');
```

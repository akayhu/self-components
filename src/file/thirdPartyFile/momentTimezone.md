# moment-timezone

IANA 時區數據庫+ Moment.js。

npm 網址：[https://www.npmjs.com/package/moment-timezone](https://www.npmjs.com/package/moment-timezone)

## 寫法用法參考

參考官方文件

```js
var june = moment('2014-06-01T12:00:00Z');
june.tz('America/Los_Angeles').format('ha z'); // 5am PDT
june.tz('America/New_York').format('ha z'); // 8am EDT
june.tz('Asia/Tokyo').format('ha z'); // 9pm JST
june.tz('Australia/Sydney').format('ha z'); // 10pm EST

var dec = moment('2014-12-01T12:00:00Z');
dec.tz('America/Los_Angeles').format('ha z'); // 4am PST
dec.tz('America/New_York').format('ha z'); // 7am EST
dec.tz('Asia/Tokyo').format('ha z'); // 9pm JST
dec.tz('Australia/Sydney').format('ha z'); // 11pm EST
```

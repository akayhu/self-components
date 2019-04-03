# process 對象

`process`對像是 Node 的一個全局對象，提供當前 Node 進程的信息。
它可以在腳本的任意位置使用，不必通過`require`命令加載。該對象部署了`EventEmitter`接口。

## 属性

`process`對象提供一系列屬性，用於返回系統信息。

- process.argv：返回一個數組，成員是當前進程的所有命令行參數。
- process.env：返回一個對象，成員為當前 Shell 的環境變量，比如 process.env.HOME。
- process.installPrefix：返回一個字符串，表示 Node 安裝路徑的前綴，比如/usr/local。相應地，Node 的執行文件目錄為/usr/local/bin/node。
- process.pid：返回一個數字，表示當前進程的進程號。
- process.platform：返回一個字符串，表示當前的操作系統，比如 Linux。
- process.title：返回一個字符串，默認值為 node，可以自定義該值。
- process.version：返回一個字符串，表示當前使用的 Node 版本，比如 v7.10.0。

`process`對像還有一些屬性，用來指向 Shell 提供的接口。

### process.stdout

process.stdout 屬性返回一個對象，表示標準輸出。該對象的 write 方法等同於 console.log，可用在標準輸出向用戶顯示內容。

```js
console.log = function(d) {
	process.stdout.write(d + '\n');
};
```

下面代碼表示將 ​​ 一個文件導向標準輸出。

```js
var fs = require('fs');

fs.createReadStream('wow.txt').pipe(process.stdout);
```

上面代碼中，由於`process.stdout`和`process.stdin`與其他進程的通信，都是流（stream）形式，所以必須通過`pipe`管道命令中介。

```js
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('wow.txt')
	.pipe(zlib.createGzip())
	.pipe(process.stdout);
```

上面代碼通過`pipe`方法，先將文件數據壓縮，然後再導向標準輸出。

### process.stdin

process.stdin 返回一個對象，表示標準輸入。

```js
process.stdin.pipe(process.stdout);
```

上面代碼表示將 ​​ 標準輸入導向標準輸出。

由於 stdin 和 stdout 都部署了 stream 接口，所以可以使用 stream 接口的方法。

```js
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	var chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write('data: ' + chunk);
	}
});

process.stdin.on('end', function() {
	process.stdout.write('end');
});
```

### stderr

`process.stderr`屬性指向標準錯誤。

### process.argv，process.execPath，process.execArgv

`process.argv`屬性返回一個數組，由命令行執行腳本時的各個參數組成。

它的第一個成員總是`node`，第二個成員是腳本文件名，其餘成員是腳本文件的參數。

請看下面的例子，新建一個腳本文件`argv.js`。

```js
// argv.js
console.log('argv: ', process.argv);
```

命令行下調用這個腳本，會得到以下結果。

```js
$ node argv.js a b c
[ 'node', '/path/to/argv.js', 'a', 'b', 'c' ]
```

上面代碼表示，`argv`返回數組的成員依次是命令行的各個部分，真正的參數實際上是從`process.argv[2]`開始。
要得到真正的參數部分，可以把`argv.js`改寫成下面這樣。

```js
// argv.js
var myArgs = process.argv.slice(2);
console.log(myArgs);
```

`process.execPath`屬性返回執行當前腳本的 Node 二進製文件的絕對路徑。

```js
> process.execPath
'/usr/local/bin/node'
>
```

`process.execArgv`屬性返回一個數組，成員是命令行下執行腳本時，在 Node 可執行文件與腳本文件之間的命令行參數。

```js
// script.js的代碼為
// console.log(process.execArgv);
$ node --harmony script.js --version
```

### process.env

`process.env`屬性返回一個對象，包含了當前 Shell 的所有環境變量。比如，`process.env.HOME`返回用戶的主目錄。

通常的做法是，新建一個環境變量`NODE_ENV`，用它確定當前所處的開發階段，生產階段設為`production`，開發階段設為`develop`或`staging`，然後在腳本中讀取`process.env.NODE_ENV`即可。

運行腳本時，改變環境變量，可以採用下面的寫法。

```js
$ export NODE_ENV=production && node app.js
// 或者
$ NODE_ENV=production node app.js
```

## 方法

process 對象提供以下方法：

- process.chdir()：切換工作目錄到指定目錄。
- process.cwd()：返回運行當前腳本的工作目錄的路徑。
- process.exit()：退出當前進程。
- process.getgid()：返回當前進程的組 ID（數值）。
- process.getuid()：返回當前進程的用戶 ID（數值）。
- process.nextTick()：指定回調函數在當前執行棧的尾部、下一次 Event Loop 之前執行。
- process.on()：監聽事件。
- process.setgid()：指定當前進程的組，可以使用數字 ID，也可以使用字符串 ID。
- process.setuid()：指定當前進程的用戶，可以使用數字 ID，也可以使用字符串 ID。

### process.cwd()，process.chdir()

`cwd`方法返回進程的當前目錄（絕對路徑），`chdir`方法用來切換目錄。

```js
> process.cwd()
'/home/aaa'

> process.chdir('/home/bbb')
> process.cwd()
'/home/bbb'
```

注意，`process.cwd()`與`__dirname`的區別。前者進程發起時的位置，後者是腳本的位置，兩者可能是不一致的。
比如，`node` `./code/program.js`，對於`process.cwd()`來說，返回的是當前目錄（.）；對於`__dirname`來說，返回是腳本所在目錄，即`./code/program.js`。

## process.nextTick()

`process.nextTick`將任務放到當前一輪事件循環（Event Loop）的尾部。

```js
process.nextTick(function() {
	console.log('下一次Event Loop即将开始!');
});
```

上面代碼可以用`setTimeout(f,0)`改寫，效果接近，但是原理不同。

```js
setTimeout(function() {
	console.log('已經到了下一輪Event Loop！');
}, 0);
```

`setTimeout(f,0)`是將任務放到下一輪事件循環的頭部，因此`nextTick`會比它先執行。
另外，`nextTick`的效率更高，因為不用檢查是否到了指定時間。

根據 Node 的事件循環的實現，基本上，進入下一輪事件循環後的執行順序如下。

1.setTimeout(f,0) 2.各种到期的回调函数
3.process.nextTick push(), sort(), reverse(), and splice()

### process.exit()

`process.exit`方法用來退出當前進程。它可以接受一個數值參數，如果參數大於 0，表示執行失敗；如果等於 0 表示執行成功。

```js
if (err) {
	process.exit(1);
} else {
	process.exit(0);
}
```

如果不帶有參數，`exit`方法的參數默認為 0。

注意，`process.exit()`很多時候是不需要的。因為如果沒有錯誤，一旦事件循環之中沒有待完成的任務，Node 本來就會退出進程，不需要調用`process.exit(0)`。
這時如果調用了，進程會立刻退出，不管有沒有異步任務還在執行，所以不如等 Node 自然退出。
另一方面，如果發生錯誤，Node 往往也會退出進程，也不一定要調用`process.exit(1)`。

```js
function printUsageStdout() {
	process.stdout.write('...some long text ...');
}

if (true) {
	printUsageToStdout();
	process.exit(1);
}
```

上面的代碼可能不會達到預期效果。因為`process.stdout`有時會變成異步，不能保證一定會在當前事件循環之中輸出所有內容，而`process.exit`會使當前進程立刻退出。

更安全的方法是使用`exitcode`屬性，指定退出狀態，然後再拋出一個錯誤。

```js
if (true) {
	printUsageToStdout();
	process.exitCode = 1;
	throw new Error('xx condition failed');
}
```

`process.exit()`執行時，會觸發`exit`事件。

### process.on()

`process`對象部署了 EventEmitter 接口，可以使用`on`方法監聽各種事件，並指定回調函數。

```js
process.on('uncaughtException', function(err) {
	console.error('got an error: %s', err.message);
	process.exit(1);
});

setTimeout(function() {
	throw new Error('fail');
}, 100);
```

上面代碼是`process`監聽 Node 的一個全局性事件`uncaughtException`，只要有錯誤沒有捕獲，就會觸發這個事件。

`process`支持的事件還有下面這些。

- data 事件：數據輸出輸入時觸發
- SIGINT 事件：接收到系統信號 SIGINT 時觸發，主要是用戶按 Ctrl + c 時觸發。
- SIGTERM 事件：系統發出進程終止信號 SIGTERM 時觸發
- exit 事件：進程退出前觸發

```js
process.on('SIGINT', function() {
	console.log('Got a SIGINT. Goodbye cruel world');
	process.exit(0);
});

// 也可以忽略這個信號
process.on('SIGINT', function() {
	console.log('Ignored Ctrl-C');
});
```

使用時，向該進程發出系統信號，就會導致進程退出。

```
$ kill -s SIGINT [process_id]
```

`SIGTERM`信號表示內核要求當前進程停止，進程可以自行停止，也可以忽略這個信號。

```js
var http = require('http');

var server = http.createServer(function(req, res) {
	// ...
});

process.on('SIGTERM', function() {
	server.close(function() {
		process.exit(0);
	});
});
```

上面代碼表示，進程接到`SIGTERM`信號之後，關閉服務器，然後退出進程。
需要注意的是，這時進程不會馬上退出，而是要回應完最後一個請求，處理完所有回調函數，然後再退出。

`exit`事件在 Node 進程退出前觸發。

```js
process.on('exit', function() {
	console.log('Goodbye');
});
```

### process.kill()

`process.kill`方法用來對指定 ID 的線程發送信號，默認為`SIGINT`信號。

```js
process.kill(process.pid, 'SIGTERM');
```

上面代碼用於殺死當前進程。

```js
process.on('SIGTERM', function() {
	console.log('terminating');
	process.exit(1);
});

setTimeout(function() {
	console.log('sending SIGTERM to process %d', process.pid);
	process.kill(process.pid, 'SIGTERM');
}, 500);

setTimeout(function() {
	console.log('never called');
}, 1000);
```

上面代碼中，500 毫秒後向當前進程發送 SIGTERM 信號（終結進程），因此 1000 毫秒後的指定事件不會被觸發。

## 事件

### exit 事件

當前進程退出時，會觸發 exit 事件，可以對該事件指定回調函數。

```js
process.on('exit', function() {
	fs.writeFileSync('/tmp/myfile', '需要保存到硬盤的信息');
});
```

下面是一個例子，進程退出時，顯示一段日誌。

```js
process.on('exit', code => console.log('exiting with code: ' + code));
```

注意，此時回調函數只能執行同步操作，不能包含異步操作，因為執行完回調函數，進程就會退出，無法監聽到回調函數的操作結果。

```js
process.on('exit', function(code) {
	// 不會執行
	setTimeout(function() {
		console.log('This will not run');
	}, 0);
});
```

上面代碼在`exit`事件的回調函數里面，指定了一個下一輪事件循環，所要執行的操作。這是無效的，不會得到執行。

### beforeExit 事件

beforeExit 事件在 Node 清空了 Event Loop 以後，再沒有任何待處理的任務時觸發。正常情況下，如果沒有任何待處理的任務，Node 進程會自動退出，設置 beforeExit 事件的監聽函數以後，就可以提供一個機會，再部署一些任務，使得 Node 進程不退出。

beforeExit 事件與 exit 事件的主要區別是，beforeExit 的監聽函數可以部署異步任務，而 exit 不行。

此外，如果是顯式終止程序（比如調用 process.exit()），或者因為發生未捕獲的錯誤，而導致進程退出，這些場合不會觸發 beforeExit 事件。因此，不能使用該事件替代 exit 事件。

### uncaughtException 事件

當前進程拋出一個沒有被捕捉的錯誤時，會觸發`uncaughtException`事件。

```js
process.on('uncaughtException', function(err) {
	console.error('An uncaught error occurred!');
	console.error(err.stack);
	throw new Error('未捕獲錯誤');
});
```

部署`uncaughtException`事件的監聽函數，是免於 Node 進程終止的最後措施，否則 Node 就要執行`process.exit()`。出於除錯的目的，並不建議發生錯誤後，還保持進程運行。

拋出錯誤之前部署的異步操作，還是會繼續執行。只有完成以後，Node 進程才會退出。

```js
process.on('uncaughtException', function(err) {
	console.log('Caught exception: ' + err);
});

setTimeout(function() {
	console.log('本行依然执行');
}, 500);

// 下面的表達式拋出錯誤
nonexistentFunc();
```

上面代碼中，拋出錯誤之後，此前 setTimeout 指定的回調函數亦然會執行。

### 信號事件

操作系統內核向 Node 進程發出信號，會觸發信號事件。實際開發中，主要對 SIGTERM 和 SIGINT 信號部署監聽函數，這兩個信號在非 Windows 平台會導致進程退出，但是只要部署了監聽函數，Node 進程收到信號後就不會退出。

```js
// 讀取標準輸入，這主要是為了不讓當前進程退出
process.stdin.resume();

process.on('SIGINT', function() {
	console.log('SIGINT信號，按Control-D退出');
});
```

上面代碼部署了 SIGINT 信號的監聽函數，當用戶按下 Ctrl-C 後，會顯示提示文字。

## 進程的退出碼

進程退出時，會返回一個整數值，表示退出時的狀態。這個整數值就叫做退出碼。下面是常見的 Node 進程退出碼。

- 0，正常退出
- 1，發生未捕獲錯誤
- 5，V8 執行錯誤
- 8，不正確的參數
- 128 + 信號值，如果 Node 接受到退出信號（比如 SIGKILL 或 SIGHUP），它的退出碼就是 128 加上信號值。由於 128 的二進制形式是 10000000, 所以退出碼的後七位就是信號值。

Bash 可以使用環境變量\$?，獲取上一步操作的退出碼。

```js
$ node nonexist.js
Error: Cannot find 'nonexist.js'

$ echo $?
1
```

上面代碼中，Node 執行一個不存在的腳本文件，結果報錯，退出碼就是 1。

## 參考鏈接

José F. Romaniello, [Graceful shutdown in node.js](https://joseoncode.com/2014/07/21/graceful-shutdown-in-node-dot-js/)

## 出處

[process 對象](http://javascript.ruanyifeng.com/nodejs/process.html)

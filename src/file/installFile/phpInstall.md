# 安裝 PHP Laravel 開發環境

先去安裝 macOS 缺少套件的管理工具[Homebrew](https://brew.sh/index_zh-tw)

![image](https://github.com/akayhu/self-components/blob/master/src/file/installFile/image/homebrew.png?raw=true)

或直接貼上下面指令安裝。

```js
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Homebrew 安裝完成後在用 Homebrew 軟體來安裝 PHP，指令如下：

```js
brew install php
```

確認 PHP 安裝

```js
php - v;
```

安裝 Composer

```js
brew install composer
```

開始建立 Laravel 專案

`laravel-project` 專名稱可自訂

```js
composer create-project laravel/laravel laravel-project -–prefer-dist
```

之後到專案目錄後安裝 node_modules

```js
npm install
```

再請動 server，指令如下：

```js
php artisan serve
```

啟動位置通常為`http://127.0.0.1:8000`，看畫面表示安裝成功！

![image](https://github.com/akayhu/self-components/blob/master/src/file/installFile/image/phpLaravel.png?raw=true)

# Apple Mac 安裝 Ruby 教學

先去安裝 macOS 缺少套件的管理工具[Homebrew](https://brew.sh/index_zh-tw)

![image](https://github.com/akayhu/self-components/blob/master/src/file/image/homebrew.png?raw=true)

或直接貼上下面指令安裝。

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

再安裝 [Ruby](https://www.ruby-lang.org/zh_tw/)

![image](https://github.com/akayhu/self-components/blob/master/src/file/image/ruby.png?raw=true)

指令如下：

```
brew install ruby
```

Ruby 安裝完後，只要 gem install 指令加上套件的名字，敲完按下 Enter 鍵，就自動會連上網路、下載套件、安裝套件，一氣呵成，指令如下：

```js
gem install travis // 安裝 travis
```

PS：如果安裝出現錯誤`You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.`，指令前面加上`sudo`試試。
```js
sudo gem install travis // 安裝 travis
```
# Apple Mac 安裝 Ruby 教學

1. 先去安裝 macOS 缺少套件的管理工具[Homebrew](https://brew.sh/index_zh-tw)，或直接貼上下面指令安裝。

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. 再安裝 Ruby，指令如下：

```
brew install ruby
```

3. Ruby 安裝完後，需要安裝 RubyGems 的 gem 組件，指令如下：

```
gem install travis
```
PS：如果安裝出現錯誤`You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.`，指令前面加上`sudo`試試。
```
sudo gem install travis
```
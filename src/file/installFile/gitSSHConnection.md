# Git 建立 SSH Key 教學

用 https 去連 github 的話，每次都會要你重新輸入密碼，建議使用 ssh 連線會比較安全，也比較有效率。

## 建立 SSH Key

Mac 方式顯示你的家目錄下有那些 ssh 的 key，`~` 代表 home 目錄

```js
$ ls ~/.ssh
```

沒有 ssh key 的話，可用下列語法產生 ssh key

```js
$ ssh-keygen -t rsa -C "{yourEmail}@gmail.com"
```

會叫你再輸入 passphrase (這個 key 的密碼)，可以不要輸入。會產生兩個檔案 id_rsa.pub(公鑰) 跟 id_rsa(私鑰)

顯示公鑰的檔案內容

```js
$ cat ~/.ssh/id_rsa.pub
```

到 github 個人檔案中將 ssh 的公鑰建立上去，title 取個可以識別的名字就好，將 cat 出來的內容，貼到 key 中

Windows 方式 只要你有 git bash 操作方法同上

## Hosts 設定

把 127.0.0.1 指向 domain，windows 請修改這隻檔案

```js
C:\Windows\System32\drivers\etc
```

mac 指令

```js
$ vim /etc/hosts
```

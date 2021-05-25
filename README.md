# 短網址產生器 shorten-url
一個發布於Heroku的縮短攏長網址的網頁應用程式。

可由以下專案連結進入網頁試用
專案連結：短網址產生器(https://young-dawn-29170.herokuapp.com/)

## 專案畫面
<h4> 專案首頁 </h4>
<img align="center" src="https://github.com/hazelisles/shorten-url/blob/master/url_index.JPG?raw=true" width="750"/>


## 環境建置與需求
* [Node.js](https://nodejs.org/en/): v14.16.1

## 安裝與執行步驟
1. 打開終端機將專案下載至本地執行
```
git clone https://github.com/hazelisles/shorten-url.git
``` 
2. 進入專案資料夾
```
cd shorten-url
```
3. 安裝專案需求套件
```
npm install 
npm i nodemon
```
4. 修改短網址設定
目前網址設定為發布於個人Heroku專用
需修改app.js檔案內
`https://young-dawn-29170.herokuapp.com/` => `http://localhost:3000`
儲存後，便可於本地伺服器使用

5. 啟動伺服器，執行專案
```
npm run dev
```
終端機顯示 `App start listening on 3000` 及 `MongoDB Connected!` 即成功啟動，可至 [http://localhost:3000](http://localhost:3000) 開始使用！

## 開發人員
[Hazel Chu](https://github.com/hazelisles)

# React 後臺管理系統

## Quick Start

1. 請先將後端 [go-boilerplate](https://github.com/fantasy9830/go-boilerplate) 或是 [laravel-boilerplate](https://github.com/fantasy9830/laravel-boilerplate) Run起來。

1. `git clone https://github.com/fantasy9830/react-boilerplate.git`

1. `cd react-boilerplate`

1. `npm install && npm start`

1. 測試用帳密：`demo:8888` or `demo2:8888`，兩者權限不同。

    **注意：記得把所有相關 [.env](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#what-other-env-files-can-be-used) 檔案中的 REACT_APP_AUTH_API_URL 修改成你後端的路徑。**

### build

* `npm run build`

### Routing

* `/src/layouts/menus.js`

### Auth

* 使用後端 [go-boilerplate](https://github.com/fantasy9830/go-boilerplate) 或是 [laravel-boilerplate](https://github.com/fantasy9830/laravel-boilerplate) 設定權限，對應`/src/layouts/menus.js`的key值。

## Features

* [x] Redux
* [x] React Router
* [x] Ant Design + Ant Design Pro
* [x] FortAwesome
* [x] Styled Components
* [x] i18next多國語系
* [x] 登入認證功能(JWT)
* [x] 權限管理功能
* [x] husky + lint-staged + prettier
* [ ] ~~RxJS + redux-observable~~
* [ ] ~~TypeScript~~

<h2 align="center">React Portfolio</h2>
<p align="center">
    <a href="https://snaillu.gitee.io/portfolio-react" target="_blank">线上地址</a>
    ·
    <a href="https://github.com/Snail-Lu/portfolio-react" target="_blank">仓库地址</a>
    ·
    <a href="https://github.com/Snail-Lu/portfolio-react/issues" target="_blank">建议意见</a>
</p>

## 简介

基于 `React 18` 搭建的项目集，项目中多为平时开发遇到的需求或有趣的 demo。

## 功能

-   DEMO
    -   指针时钟
    -   数字时钟
    -   音乐播放器
    -   贪吃蛇

## 目录结构

```
portfolio-react
├── README.md               # 说明文档
├── package.json
├── .gitignore
├── public                  # 静态资源
│   ├── favicon.ico
│   ├── index.html          # html模板
│   ├── manifest.json
│   └── robots.txt
└── src
    ├─ assets               # 静态资源
    │  └─ images
    │
    ├─ components           # 展示组件
    │  │
    │  ├─ Layout            # 页面布局组件
    │  │
    │  ├─ DemoLayout        # Demo详情布局组件
    │  │
    │  ├─ AudioPlayer       # 音乐播放器
    │  │
    │  ├─ DigitalClock      # 数字时钟
    │  │
    │  ├─ PointerClock      # 指针时钟
    │  │
    │  ├─ WindowsDesktop    # 仿window桌面
    │  │
    │  └─ TopNav            # 顶部导航
    │
    ├─ pages                # 页面
    │  │
    │  ├─ Home              # 首页
    │  │
    │  ├─ About             # About页面
    │  │
    │  ├─ DemoDetail        # demo详情页
    │  │
    │  ├─ DemoList          # demo列表页
    │  │
    │  ├─ Projects          # 项目列表页
    │  │
    │  └─ ...
    │
    ├─ redux                # redux目录
    │  ├─ actions.js          # action creator
    │  ├─ actionTypes.js      # action类型定义
    │  ├─ reducers.js         # reducer
    │  └─ store.js            # store
    │
    ├─ router               # 路由集中配置
    │  └─ index.js
    │
    ├─ utils                # 工具类
    │  └─ index.js
    ├─ index.js             # 入口js文件
    └─ index.scss           # 公用样式

```

## 基本使用

```bash
// 克隆代码
git clone https://github.com/Snail-Lu/portfolio-react.git

// 安装依赖
cd portfolio-react
npm install

// 本地运行
npm start

// 生产打包
npm run build

// 部署到 github pages
npm run deploy
```

## 相关参考文档

-   Create React App 文档 [中文](https://www.html.cn/create-react-app/docs/getting-started/) | [英文](https://create-react-app.dev/docs/getting-started)
-   React 文档 [中文](https://react.docschina.org/docs/getting-started.html) | [英文](https://reactjs.org/docs/getting-started.html)
-   React-router [中文(非最新版本)](http://react-guide.github.io/react-router-cn/index.html) | [英文](https://reacttraining.com/react-router/web/guides/quick-start)
-   Redux [中文](http://cn.redux.js.org) | [英文](https://redux.js.org/introduction/getting-started)
-   axios [中文](http://www.axios-js.com/zh-cn/docs/) | [英文](https://github.com/axios/axios)

# 机器人监控界面
此项目是机器人监控界面


## 主要用到的技术
nodejs的npm、webpack、react

## 推荐使用IDE

WebStorm

## 安装
首先安装node.js 下载地址：
```
https://nodejs.org/en/
```
使用windows自带的Powershell命令行，或者webstorm命令行执行如下命令
```
npm install
```
如果npm源太慢导致安装失败  那么推荐使用淘宝的注册源 直接运行 
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
然后使用如下命令：
```
cnpm install
```

## 启动
```
npm start
```
运行本命令后  会自动在当前默认浏览器打开一个窗口  项目就可以跑起来啦，修改代码后，浏览器能自动刷新
如果页面出现Cannot GET /错误,请先执行
```
npm run build 
```
打包命令，之后再执行npm start命令
## 打包部署
```
npm run build
```
打包之后会再当目录生成一个rebot文件夹，index.html就是入口文件

# 目录结构说明
+ .gitignore是忽略上传到git的配置文件
+ webpack.config.js当然就是webpack的配置了
+ package.json  就是我们整个项目要依赖的npm包的列表
+ src里面就是我们整个项目的源文件
+ index.html是我们依赖的页面
+ readme.md是项目的描述文件，即本描述文件

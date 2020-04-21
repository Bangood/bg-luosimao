# bg-luosimao
luosimao node sms module

# 实战系列之--从零开始实现集成开发npm包
## 1.初始化项目
首先在github上新建一个项目，然后clone到本地，切换到项目目录，执行：

```bash
$ npm init
```
 依次选择默认选项，完成npm包的初始化，然后根目录下会生成一个`pacage.json`文件。

## 2.使用commitizen来规范我们的commit

```bash
$ npm install -D commitizen cz-conventional-changelog
```
安装完依赖后，我们在`pacage.json`文件添加一个scripts:
```bash
"scripts": {
    "commit": "git-cz"
  }
```
然后在`pacage.json`添加以下配置：
```bash
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```
这时候我们就可以使用`commitizen`来格式化我们的commit了：
```bash
$ git add .
$ npm run commit
```

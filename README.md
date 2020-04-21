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
## 3.添加我们的逻辑代码
我们在根目录下创建一个名为`src`的文件夹，并在里面创建一个名为`index.js`的文件。
`index.js`的内容如下：
```javascript
const sendAPI = "https://sms-api.luosimao.com/v1/send.json";
const sendBatchAPI = "https://sms-api.luosimao.com/v1/send_batch.json";
import Axios from 'axios';
import QueryString from 'querystring'
export class BangoodLuosimao {
    constructor(key) {
        this.key = key;
    }
    async sendSms(mobile, message) {
        const data = {
            mobile,
            message
        }
        return await this.postToLuosimao(sendAPI, data)
    }
    
    async postToLuosimao(apiUrl, data) {
        const content = QueryString.stringify(data);
        const config = {
            method: 'POST',
            auth: {
                username: 'api',
                password: this.key
            },
            agent: false,
            rejectUnauthorized: false,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': content.length
            }
        }
        return await Axios.post(apiUrl, content, config);
    }
}
```
代码中用到了`axios`, `querystring`两个依赖库，请自行通过`npm`命令安装。
我们运行一下我们的代码：
```bash
$ node src/index.js
```
然后我们会发现，报错了`'SyntaxError: Unexpected token import'`,这是因为我们代码中用到了一些新的ES6特性，所以我们需要使用`Babel`对我们编写的ES6进行转换，`Babel`主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。




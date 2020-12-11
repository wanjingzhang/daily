# 微信小程序之使用less
## 用vscode开发微信小程序，建议安装的插件
[参考链接](https://www.jianshu.com/p/2a8e741b8c54)

---

## 在微信小程序中使用less/sass
[参考链接](https://www.jianshu.com/p/bbcad37ce34b)

---

# 上面两步已经可以开发微信小程序less版本了，但是有个bug，当你的公共的less文件修改了，其它引用的less不能自己重新编译新的wxss,所有需要使用下面工具

## 微信小程序实时将less编译为wxss
[参考链接](https://www.cnblogs.com/lml-lml/p/11433729.html)
### npm或者yarn全局安装wxss-cli

```
npm install -g wxss-cli
```

### 运行waxes-cli命令（mp_wx为小程序目录）

```
wxss ./mp_wx
wxss .\wxapp\
```
==实时监听mp_wx目录下的.css或者.less文件，转化为.wxss文件 .css或者.less文件可使用less语法 less转wxss文件不可逆==
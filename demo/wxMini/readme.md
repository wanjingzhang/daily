
1. behaviors 可以用来让多个页面有相同的数据字段和方法
 
1. Component 构造器的主要区别是：方法需要放在 methods: { } 里面。

1. 模块化定义 module.exports.sayHello = sayHello， 引用 var common = require('common.js')；

1. 全局的数据可以在 App()中设置 App({globalData: 1})，引用 var app = getApp()；app.globalData++；

1. API 以on开头，同步以sync结尾，如 wx.setStorageSync('key', 'value'),大部分都是异步方法如 wx.request

1. WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。

1. 双向绑定 model:value="{{value}}"
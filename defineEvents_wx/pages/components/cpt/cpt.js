Component({
    properties: {
      // 这里定义了num属性，属性值可以在组件使用时指定
      num: {          // num定义的就是点击每个按钮分别增加的数值,可以在调用组件的时候进行更改
        type: Number,
        value: 1
      }
    },
    data: {
      // 这里是一些组件内部数据
      counter: 0      // counter定义的是每个按钮上的数值
    },
    methods: {
      // 这里是一个自定义方法,每次点击按钮增加对应的数值
      _incrementCounter (e) {
        let num = this.data.num
        this.setData({
          counter: this.data.counter + num
        })
       // 微信小程序中是通过triggerEvent来给父组件传递信息的
        this.triggerEvent('increment', {num: num})  // 将num通过参数的形式传递给父组件
      }
    }
  })
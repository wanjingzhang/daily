Page({
  data: {
    logs: [],
    total: 0,  // 父组件中的数据total用以记录三个按钮总和
    pageValue:"abc",
  },
  incrementTotal (e) {    // 定义父组件的
    console.log(e.detail)    // 通过e.detail获取点击的那个对象
    var num = e.detail.num
    this.setData({
      total: this.data.total + e.detail.num
    })
  },
})
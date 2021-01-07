// custom-component.js
Component({
    properties: {
      myValue:String, 
    },
    methods: {
      update: function() {
        // 更新 myValue
        this.setData({
          myValue: 'leaf'
        })
      }
    }
  })
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    num:'',
    info:null,
    primarySize: 'default',
  },
  btnClick:function(){
    var _this = this;
    app.getExpressInfo(this.data.num+'',function(data){
      console.log(JSON.stringify(data));
      _this.setData({info:data});
    });
  },
  bindKeyInput: function (e) {
    this.setData({num:e.detail.value});
  },
  
})

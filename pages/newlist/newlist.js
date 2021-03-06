// pages/newlist/newlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topBars: [{
        id: 1,
        name: "段子",
        url : "../newlist/newlist"
      },
      {
        id: 2,
        name: "热图",
        url:"../Imglist/Imglist"
      },
      {
        id: 3,
        name: "视频"
      }
    ],
    selectType: 1,
    newsList: [],
  },

  selectBar(e) {
    var typeid = e.currentTarget.dataset.typeid;
    this.setData({
      selectType: typeid
    });
  },
  getNewsList() {
    var that = this;
    wx.request({
      url: 'http://192.168.1.102:8081/QBHappy/Index/0/1',
      success(res) {
        that.setData({
          newsList: res.data,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
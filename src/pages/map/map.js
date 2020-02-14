const app = getApp();

Page({
  data: {
    station: '人民广场',
    latitude: '31.233771',
    longitude: '121.474482'
  },

  onLoad: function (options) {
    this.setData({
      station: options.station,
      latitude: options.latitude,
      longitude: options.longitude
    });
  },
  
  onReady: function () {
    wx.setNavigationBarTitle({ title: this.data.station });
  }
})
const app = getApp();

Page({
  data: {
    city: 'sh',
    metroUrl: app.getMetroMapUrl('sh')
  },

  onLoad: function (options) {
    this.setData({
      city: options.city,
      metroUrl: app.getMetroMapUrl(options.city)
    });
  },

  onReady: function () {
    wx.setNavigationBarTitle({ title: app.getCityByKey(this.data.city).name });
  },

  onShareAppMessage: function () {
    return {
      title: app.getCityByKey(this.data.city).name,
      path: '/pages/index/index?purpose=metro&city=' + this.data.city
    }
  },

  tapFull: function (e) {
    wx.previewImage({
      current: this.data.metroUrl,
      urls: [this.data.metroUrl]
    });
  }
})
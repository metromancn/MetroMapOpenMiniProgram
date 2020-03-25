const app = getApp();

Page({
  data: {
    city: 'sh',
    planUrl: app.getMetroPlanUrl('sh'),
    moreUrl: app.getMetroMoreUrl('sh')
  },

  onLoad: function (options) {
    this.setData({
      city: options.city,
      planUrl: app.getMetroPlanUrl(options.city),
      moreUrl: app.getMetroMoreUrl(options.city)
    });
  },

  onReady: function () {
    wx.setNavigationBarTitle({ title: app.getCityByKey(this.data.city).name });
  },

  onShareAppMessage: function () {
    return {
      title: app.getCityByKey(this.data.city).name,
      path: '/pages/index/index?purpose=plan&city=' + this.data.city
    }
  },

  tapFull: function (e) {
    wx.previewImage({
      current: this.data.planUrl,
      urls: [this.data.planUrl]
    });
  },

  tapMore: function (e) {
    wx.previewImage({
      current: this.data.moreUrl,
      urls: [this.data.moreUrl]
    });
  }
})
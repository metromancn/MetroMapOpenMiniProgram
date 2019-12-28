const app = getApp();

Page({
  data: {
    city: 'sh',
    metroUrl: app.getMetroMapUrl('sh'),
    planUrl: app.getMetroPlanUrl('sh'),
    moreUrl: app.getMetroMoreUrl('sh')
  },

  onLoad: function (options) {
    this.setData({
      city: options.city,
      metroUrl: app.getMetroMapUrl(options.city),
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
      path: '/pages/index/index?purpose=metro&city=' + this.data.city
    }
  },

  tapFull: function (e) {
    wx.previewImage({
      current: this.data.metroUrl,
      urls: [this.data.metroUrl]
    });
  },

  tapPlan: function (e) {
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
  },

  tapMetroManMP: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wx3c618f2bd6a9d2f7',
      path: 'pages/index/index?purpose=index&city=' + this.data.city,
      success(res) {
        console.log(res);
      },
      fail(e) {
        console.log(e);
      }
    })
  },

  tapYunGuiTu: function (e) {
    wx.navigateToMiniProgram({
      appId: 'wx3297af3953a7312a',
      path: 'pages/index/index',
      success(res) {
        console.log(res);
      },
      fail(e) {
        console.log(e);
      }
    })
  }
})
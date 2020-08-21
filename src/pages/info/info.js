import Toast from '../../libs/vant/toast/toast';

const app = getApp();

Page({
  data: {
    city: 'sh',
    station: '人民广场',
    latitude: '31.233771',
    longitude: '121.474482',
    maxHeight: 603,
    maxMargin: 28,
    info: {}
  },

  onLoad: function (options) {
    var lat = this.data.latitude;
    var lng = this.data.longitude;
    if(options.latitude) lat = options.latitude;
    if(options.longitude) lng = options.longitude;
    this.setData({
      city: options.city,
      station: options.station,
      latitude: lat,
      longitude: lng,
      maxHeight: app.getMaxHeight(212),
      maxMargin: app.getMarinByDevice()
    });
  },
  
  onReady: function () {
    wx.setNavigationBarTitle({ title: this.data.station });
    Toast.loading({ mask: true, message: '查询中...' });
    const that = this;
    wx.request({
      method: 'POST',
      url: 'https://metroman.cn/api/metroman/info202005/',
      data: {
        city: this.data.city,
        station: this.data.station
      },
      success: function (res) {
        if (res.data) {
          if (res.data.Status === 'OK') {
            Toast.clear();
            const info = res.data.Result;
            if(info && info.Info && info.Info.length > 0) {
              const header = info.Info[0].Header;
              if (header.Latitude !== that.data.latitude || header.Longitude !== that.data.longitude) {
                that.setData({
                  latitude: header.Latitude,
                  longitude: header.Longitude
                });
              }
            }
            that.setData({
              maxHeight: app.getMaxHeight(212),
              maxMargin: app.getMarinByDevice(),
              info: res.data.Result
            });
          } else {
            if (res.data.Message) {
              Toast.clear();
              Toast(res.data.Message);
            } else {
              Toast.clear();
              Toast.fail('查询失败，未知错误');
            }
          }
        } else {
          Toast.clear();
          Toast.fail('查询失败，没有返回值');
        }
      },
      fail: function (res) {
        Toast.clear();
        Toast.fail('查询失败，请检查网络');
      }
    });
  },

  onShareAppMessage: function () {
    return {
      title: '[' + app.getCityObj().name + ']' + this.data.station,
      path: '/pages/index/index?purpose=info&city=' + this.data.city + '&station=' + this.data.station + '&latitude=' + this.data.latitude + '&longitude=' + this.data.longitude 
    }
  },
  
  tapMetro: function (e) {
    this.tapFull(e);
  },

  tapFull: function (e) {
    const info = this.data.info;
    if(info && info.Info && info.Info.length > 0) {
      var header = info.Info[0].Header;
      wx.navigateTo({ url: '../map/map?station=' + this.data.station + '&latitude=' + header.Latitude + '&longitude=' + header.Longitude });
    }
  }
})
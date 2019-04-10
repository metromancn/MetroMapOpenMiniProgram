const app = getApp();

Page({
  data: {
    cityList: app.globalData.cityList,
    inputVal: ''
  },

  onLoad: function (options) {
    if(options.purpose) {
      if(options.purpose === 'metro') {
        wx.navigateTo({ url: '../metro/metro?city=' + options.city });
      }
    }
    wx.getSystemInfo({
      success: function (res) {
        app.globalData.deviceInfo.windowWidth = res.windowWidth;
        app.globalData.deviceInfo.windowHeight = res.windowHeight;
      }
    });
  },

  onShareAppMessage: function () {
    return {
      title: '全国地铁线路图',
      path: '/pages/index/index'
    }
  },

  onChange: function (e) {
    const searchText = e.detail.toLowerCase().trim();
    var list = new Array();
    for(const obj of app.globalData.cityList) {
      if(searchText.length == 0 || obj.name.includes(searchText) || obj.pinyin.includes(searchText) || obj.py.includes(searchText) || obj.other.includes(searchText)) {
        list.push(obj);
      }
    }
    this.setData({
      cityList: list,
      inputVal: searchText
    });
  },

  tapCity: function (e) {
    try {
      var city = e.currentTarget.dataset.key;
      if (city) {
        wx.navigateTo({ url: '../metro/metro?city=' + city });
      }
    } catch (e) {
      console.log(e);
    }
  }
})
const app = getApp();

Page({
  data: {
    cityList: app.globalData.cityList,
    inputShowed: false,
    inputVal: ''
  },

  onLoad: function (options) {
    if(options.purpose) {
      if(options.purpose === 'metro') {
        wx.navigateTo({ url: '../metro/metro?city=' + options.city });
      } else if (options.purpose === 'plan') {
        wx.navigateTo({ url: '../plan/plan?city=' + options.city });
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

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  hideInput: function () {
    this.setData({
      cityList: app.globalData.cityList,
      inputShowed: false,
      inputVal: ''
    });
  },

  clearInput: function () {
    this.setData({
      cityList: app.globalData.cityList,
      inputVal: ''
    });
  },
  
  inputTyping: function (e) {
    const searchText = e.detail.value.toLowerCase().trim();
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
        var cityObj = app.getCityByKey(city);
        if (cityObj.now == '1') {
          wx.navigateTo({ url: '../metro/metro?city=' + city });
        } else {
          wx.navigateTo({ url: '../plan/plan?city=' + city });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
})
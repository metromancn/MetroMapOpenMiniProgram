import cityJS from './data/city';

const util = require('./utils/util.js');

App({
  onLaunch: function () {
  },

  globalData: {
    cityList: cityJS.cityList,
    deviceInfo: { windowWidth: 375, windowHeight: 603 }
  },
  
  getCityByKey: function (key) {
    var result;
    for (const obj of this.globalData.cityList) {
      if (obj.key === key) {
        result = obj;
        break;
      }
    }
    return result;
  },

  getMetroMapUrl: function (key) {
    var ver = util.toYMDHM(new Date()).substring(0, 11);
    return cityJS.metroMapUrl + 'routemap_' + key + '_cn.png?ver=' + ver;
  },
  
  getMaxHeight: function(val) {
    return this.globalData.deviceInfo.windowHeight - val;
  },
  
  getMarinByDevice: function () {
    var width = this.globalData.deviceInfo.windowWidth;
    var result = 28;
    if(width <= 320) {
      result = 8;
    } else if(width <= 360) {
      if (width % 2 === 0) {
        result = (width - 304) / 2;
      } else {
        result = (width - 304 - 1) / 2;
      }
    } else {
      result = 28;
    }
    return result;
  }
})
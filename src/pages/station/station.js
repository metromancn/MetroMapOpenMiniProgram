import Toast from '../../libs/vant/toast/toast';

const util = require('../../utils/util.js');
const app = getApp();

Page({
  data: {
    purpose: 1,
    city: 'sh',
    lineList: [],
    stationList: [],
    searchText: '',
    stationData: [],
    showNearbyToast: false,
    mainActiveIndex: 0,
    maxHeight: 0
  },

  //Event
  onLoad: function (options) {
    const cityKey = options.city;
    const cityPath = '../../data/' + cityKey + '.js';
    const cityData = require(cityPath);
    const lineList = cityData.default.lineList;
    const stationList = cityData.default.stationList;
    this.setData({
      purpose: options.purpose,
      city: options.city,
      lineList: lineList,
      stationList: stationList,
      maxHeight: app.getMaxHeight(44)
    });
    //
    var stationData = new Array();
    stationData.push(this.getHot());
    stationData.push(this.getNearby(null));
    stationData.push(this.getSearch(''));
    for(const line of lineList) {
      var list = new Array();
      for(const stationId of line.stations) {
        var station = stationList[stationId];
        if (!list.some(e => e.id === station.id)) {
          list.push({ id: station.id, text: station.name });
        }
      }
      stationData.push({ text: line.name, children: list });
    }
    this.setData({
      stationData: stationData
    });
    //
    this.checkLocation();
  },

  onClickNav({detail}) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
    if (detail.index == 1) {
      var stationData = this.data.stationData;
      if (stationData.length > 1) {
        if (stationData[1].children.length == 0) {
          if(this.data.showNearbyToast) {
            Toast('附近2公里没有车站');
          }
        }
      }
    }
  },

  onClickItem({detail}) {
    if(detail.id >= 10000) return;
    var station = this.data.stationList[detail.id];
    wx.navigateTo({ url: '../info/info?city=' + this.data.city + '&station=' + station.name + '&latitude=' + station.lat + '&longitude=' + station.lng });
  },

  //Hot
  getStationByName: function (name) {
    var result;
    for(const obj of this.data.stationList) {
      if(obj.name === name) {
        result = obj;
        break;
      }
    }
    return result;
  },
  
  getHistoryList: function () {
    return new Array();
  },
  
  getHotList: function () {
    var result = new Array();
    const hotObj = app.getHotByKey(this.data.city);
    for(const hot of hotObj.hot) {
      let obj = this.getStationByName(hot);
      if(obj) {
        result.push({ id: obj.id, text: obj.name });
      }
    }
    return result;
  },
  
  getHot: function () {
    var list = new Array();
    //
    var historyList = this.getHistoryList();
    if(historyList.length > 0) {
      list = list.concat(historyList);
      list.push({ id: 10000, text: '　' });
    }
    //
    var hotList = this.getHotList();
    for(const obj of hotList) {
      if(!list.some(e => e.id === obj.id)) {
        list.push(obj);
      }
    }
    return { text: '推荐车站', children: list };
  },
  
  //Nearby
  checkLocation() {
    const that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userLocation']) {
          that.refreshLocation();
        } else {
          wx.authorize({
            scope: 'scope.userLocation',
            success: function (res) {
              that.refreshLocation();
            }
          });
        }
      }
    });
  },
  
  refreshLocation() {
    const that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.refreshNearby(res);
      }
    })
  },

  getNearby: function (latlng) {
    var list = new Array();
    if(latlng) {
      var distanceList = new Array();
      const lat1 = latlng.latitude;
      const lng1 = latlng.longitude;
      for(const obj of this.data.stationList) {
        const lat2 = parseFloat(obj.lat);
        const lng2 = parseFloat(obj.lng);
        if(util.checkNearby(lat1, lng1, lat2, lng2)) {
          const distance = util.getDistance(lat1, lng1, lat2, lng2);
          if(distance < 2000) {
            distanceList.push({ station: obj, distance: distance });
          }
        }
      }
      distanceList.sort((obj1, obj2) => obj1.distance - obj2.distance);
      for(const obj of distanceList) {
        list.push({ id: obj.station.id, text: obj.station.name + ' - ' + obj.distance + '米' });
        if(list.length >= 10) break;
      }
    }
    return { text: '附近车站', children: list };
  },
  
  refreshNearby: function (latlng) {
    try {
      var stationData = this.data.stationData;
      if(stationData.length > 1) {
        stationData[1] = this.getNearby(latlng);
        if (stationData[1].children.length > 0) {
          this.setData({
            stationData: stationData,
            showNearbyToast: false
          });
        } else {
          this.setData({
            showNearbyToast: true
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  },

  //Search
  getSearch: function (e) {
    var list = new Array();
    if(e) {
      for(const obj of this.data.stationList) {
        if (obj.name.includes(e) || obj.pinyin.includes(e) || obj.py.includes(e)) {
          list.push({ id: obj.id, text: obj.name });
        }
      }
    }
    return { text: '搜索结果', children: list };
  },
  
  refreshSearch: function (e) {
    try {
      const searchText = e.detail.toLowerCase().trim();
      var stationData = this.data.stationData;
      if(stationData.length > 2) {
        stationData[2] = this.getSearch(searchText);
        this.setData({
          searchText: searchText,
          mainActiveIndex: 2,
          stationData: stationData
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
})
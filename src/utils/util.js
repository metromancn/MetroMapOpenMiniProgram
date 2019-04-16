//DateTime
const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

const fromYMDHM = str => {
  var year = parseInt(str.substring(0, 4), 10);
  var month = parseInt(str.substring(4, 6), 10) - 1;
  var day = parseInt(str.substring(6, 8), 10);
  var hour = parseInt(str.substring(8, 10), 10);
  var minute = parseInt(str.substring(10, 12), 10);
  return new Date(year, month, day, hour, minute);
}

const toYMDHM = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return [year, month, day].map(formatNumber).join('') + [hour, minute].map(formatNumber).join('');
}

const toYMD = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join('');
}

const toMD = date => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return month + '月' + day + '日';
}

const toHM = date => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return [hour, minute].map(formatNumber).join(':');
}

//Math
function toRadian(angle) {
  return angle * Math.PI / 180.0;
}

const checkNearby = (lat1, lng1, lat2, lng2) => {
  var diffLat = Math.abs(lat1 - lat2);
  var diffLng = Math.abs(lng1 - lng2);
  var diff = diffLat + diffLng;
  return diffLat < 0.03 && diffLng < 0.03 && diff < 0.03;
}

function getDistance( lat1,  lng1,  lat2,  lng2){
  var radLat1 = toRadian(lat1);
  var radLng1 = toRadian(lng1);
  var radLat2 = toRadian(lat2);
  var radLng2 = toRadian(lng2);
  var a = radLat1 - radLat2;
  var b = radLng1 - radLng2;
  var s = 2.0 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2.0), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2.0), 2)));
  s = s * 6378137.0;// EARTH_RADIUS;
  s = Math.round(s);
  return s;
}

//Export
module.exports = {
  formatTime: formatTime,
  fromYMDHM: fromYMDHM,
  toYMDHM: toYMDHM,
  toYMD: toYMD,
  toMD: toMD,
  toHM: toHM,
  checkNearby: checkNearby,
  getDistance: getDistance
}

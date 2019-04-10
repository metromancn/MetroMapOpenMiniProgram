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

module.exports = {
  formatTime: formatTime,
  fromYMDHM: fromYMDHM,
  toYMDHM: toYMDHM,
  toMD: toMD,
  toHM: toHM
}

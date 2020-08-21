export default {
  lineList: [
    { name: '1号线', color: '#00B248', stations: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ] },
    { name: '2号线', color: '#F77C21', stations: [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 14, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 3, 54, 55, 56 ] },
    { name: '3号线', color: '#0099FF', stations: [ 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 2, 77, 78, 79, 80, 81, 49, 8, 82, 83 ] },
    { name: '4号线', color: '#E71F19', stations: [ 84, 85, 7, 50, 81, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95 ] },
    { name: '5号线', color: '#A56DBC', stations: [ 30, 96, 97, 98, 99, 100, 101, 21, 102, 103, 23, 104, 105, 106, 107, 108, 109, 110, 111, 112, 90, 113, 114, 115, 116, 117, 118, 119, 71, 120, 121, 122, 123, 55 ] },
    { name: '6号线', color: '#5AC0C8', stations: [ 4, 78, 124, 125, 126, 127, 128, 90, 91, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146 ] },
    { name: '7号线', color: '#026BAF', stations: [ 147, 109, 148, 149, 150, 151, 152, 43, 153, 10, 154, 155, 82, 156, 85, 157, 158, 159, 52, 79, 160, 125, 161, 162, 163, 74, 122 ] },
    { name: '9号线', color: '#AD9299', stations: [ 100, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 10, 177, 47, 178, 179, 180, 87, 181, 126, 182, 161, 183, 77, 184, 185, 186, 187, 188 ] },
    { name: '10号线', color: '#FFA1CC', stations: [ 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 114, 202, 203, 204, 181, 205, 80, 6, 85, 84 ] },
    { name: '11号线', color: '#6F4070', stations: [ 206, 146, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 21, 217, 38, 173, 10, 49 ] }
  ],
  stationList: [
    { id: 0, name: '罗湖', pinyin: 'luohu', py: 'lh', lat: '22.532089', lng: '114.118662' },
    { id: 1, name: '国贸', pinyin: 'guomao', py: 'gm', lat: '22.539688', lng: '114.118899' },
    { id: 2, name: '老街', pinyin: 'laojie', py: 'lj', lat: '22.544241', lng: '114.116936' },
    { id: 3, name: '大剧院', pinyin: 'dajuyuan', py: 'djy', lat: '22.541813', lng: '114.107806' },
    { id: 4, name: '科学馆', pinyin: 'kexueguan', py: 'kxg', lat: '22.540624', lng: '114.094942' },
    { id: 5, name: '华强路', pinyin: 'huaqianglu', py: 'hql', lat: '22.540456', lng: '114.085125' },
    { id: 6, name: '岗厦', pinyin: 'gangxia', py: 'gx', lat: '22.534876', lng: '114.068071' },
    { id: 7, name: '会展中心', pinyin: 'huizhanzhongxin', py: 'hzzx', lat: '22.534767', lng: '114.061092' },
    { id: 8, name: '购物公园', pinyin: 'gouwugongyuan', py: 'gwgy', lat: '22.534644', lng: '114.053067' },
    { id: 9, name: '香蜜湖', pinyin: 'xiangmihu', py: 'xmh', lat: '22.5389', lng: '114.038637' },
    { id: 10, name: '车公庙', pinyin: 'chegongmiao', py: 'cgm', lat: '22.536759', lng: '114.028428' },
    { id: 11, name: '竹子林', pinyin: 'zhuzilin', py: 'zzl', lat: '22.533345', lng: '114.013918' },
    { id: 12, name: '侨城东', pinyin: 'qiaochengdong', py: 'qcd', lat: '22.532414', lng: '113.996655' },
    { id: 13, name: '华侨城', pinyin: 'huqiaocheng', py: 'hqc', lat: '22.533514', lng: '113.985357' },
    { id: 14, name: '世界之窗', pinyin: 'shijiezhichuang', py: 'sjzc', lat: '22.536893', lng: '113.974199' },
    { id: 15, name: '白石洲', pinyin: 'baishizhou', py: 'bsz', lat: '22.539618', lng: '113.967054' },
    { id: 16, name: '高新园', pinyin: 'gaoxinyuan', py: 'gxy', lat: '22.540242', lng: '113.953815' },
    { id: 17, name: '深大', pinyin: 'shenda', py: 'sd', lat: '22.538677', lng: '113.944159' },
    { id: 18, name: '桃园', pinyin: 'taoyuan', py: 'ty', lat: '22.532374', lng: '113.924825' },
    { id: 19, name: '大新', pinyin: 'daxin', py: 'dx', lat: '22.532245', lng: '113.915051' },
    { id: 20, name: '鲤鱼门', pinyin: 'liyumen', py: 'lym', lat: '22.532027', lng: '113.903067' },
    { id: 21, name: '前海湾', pinyin: 'qianhaiwan', py: 'qhw', lat: '22.537101', lng: '113.897896' },
    { id: 22, name: '新安', pinyin: 'xinan', py: 'xa', lat: '22.547456', lng: '113.894613' },
    { id: 23, name: '宝安中心', pinyin: 'baoanzhongxin', py: 'bazx', lat: '22.554571', lng: '113.887221' },
    { id: 24, name: '宝体', pinyin: 'baoti', py: 'bt', lat: '22.560743', lng: '113.880633' },
    { id: 25, name: '坪洲', pinyin: 'pingzhou', py: 'pz', lat: '22.568927', lng: '113.870698' },
    { id: 26, name: '西乡', pinyin: 'xixiang', py: 'xx', lat: '22.575138', lng: '113.863059' },
    { id: 27, name: '固戍', pinyin: 'gushu', py: 'gs', lat: '22.601389', lng: '113.846795' },
    { id: 28, name: '后瑞', pinyin: 'hourui', py: 'hr', lat: '22.628842', lng: '113.835422' },
    { id: 29, name: '机场东', pinyin: 'jichangdong', py: 'jcd', lat: '22.646983', lng: '113.822622' },
    { id: 30, name: '赤湾', pinyin: 'chiwan', py: 'cw', lat: '22.47906', lng: '113.897227' },
    { id: 31, name: '蛇口港', pinyin: 'shekougang', py: 'skg', lat: '22.476622', lng: '113.912323' },
    { id: 32, name: '海上世界', pinyin: 'haishangshijie', py: 'hssj', lat: '22.485108', lng: '113.915112' },
    { id: 33, name: '水湾', pinyin: 'shuiwan', py: 'sw', lat: '22.488389', lng: '113.919672' },
    { id: 34, name: '东角头', pinyin: 'dongjiaotou', py: 'djt', lat: '22.486332', lng: '113.931162' },
    { id: 35, name: '湾厦', pinyin: 'wanxia', py: 'wx', lat: '22.493365', lng: '113.938603' },
    { id: 36, name: '海月', pinyin: 'haiyue', py: 'hy', lat: '22.500408', lng: '113.937707' },
    { id: 37, name: '登良', pinyin: 'dengliang', py: 'dl', lat: '22.50915', lng: '113.9376' },
    { id: 38, name: '后海', pinyin: 'houhai', py: 'hh', lat: '22.517358', lng: '113.940248' },
    { id: 39, name: '科苑', pinyin: 'keyuan', py: 'ky', lat: '22.527023', lng: '113.946193' },
    { id: 40, name: '红树湾', pinyin: 'hongshuwan', py: 'hsw', lat: '22.525165', lng: '113.968429' },
    { id: 41, name: '侨城北', pinyin: 'qiaochengbei', py: 'qcb', lat: '22.543993', lng: '113.989144' },
    { id: 42, name: '深康', pinyin: 'shenkang', py: 'sk', lat: '22.546455', lng: '113.998843' },
    { id: 43, name: '安托山', pinyin: 'antuoshan', py: 'ats', lat: '22.548788', lng: '114.006224' },
    { id: 44, name: '侨香', pinyin: 'qiaoxiang', py: 'qx', lat: '22.549784', lng: '114.014368' },
    { id: 45, name: '香蜜', pinyin: 'xiangmi', py: 'xm', lat: '22.552782', lng: '114.023841' },
    { id: 46, name: '香梅北', pinyin: 'xiangmeibei', py: 'xmb', lat: '22.553852', lng: '114.032708' },
    { id: 47, name: '景田', pinyin: 'jingtian', py: 'jt', lat: '22.553416', lng: '114.04333' },
    { id: 48, name: '莲花西', pinyin: 'lianhuaxi', py: 'lhx', lat: '22.546673', lng: '114.050032' },
    { id: 49, name: '福田', pinyin: 'futian', py: 'ft', lat: '22.53987', lng: '114.052873' },
    { id: 50, name: '市民中心', pinyin: 'shiminzhongxin', py: 'smzx', lat: '22.540524', lng: '114.061188' },
    { id: 51, name: '岗厦北', pinyin: 'gangxiabei', py: 'gxb', lat: '22.540941', lng: '114.069235' },
    { id: 52, name: '华强北', pinyin: 'huaqiangbei', py: 'hqb', lat: '22.544432', lng: '114.086674' },
    { id: 53, name: '燕南', pinyin: 'yannan', py: 'yn', lat: '22.544542', lng: '114.092557' },
    { id: 54, name: '湖贝', pinyin: 'hubei', py: 'hb', lat: '22.544285', lng: '114.125435' },
    { id: 55, name: '黄贝岭', pinyin: 'huangbeiling', py: 'hbl', lat: '22.546093', lng: '114.13633' },
    { id: 56, name: '新秀', pinyin: 'xinxiu', py: 'xx', lat: '22.547693', lng: '114.14876' },
    { id: 57, name: '双龙', pinyin: 'shuanglong', py: 'sl', lat: '22.728802', lng: '114.277416' },
    { id: 58, name: '南联', pinyin: 'nanlian', py: 'nl', lat: '22.721984', lng: '114.265529' },
    { id: 59, name: '龙城广场', pinyin: 'longchengguangchang', py: 'lcgc', lat: '22.716917', lng: '114.254574' },
    { id: 60, name: '吉祥', pinyin: 'jixiang', py: 'jx', lat: '22.709494', lng: '114.244307' },
    { id: 61, name: '爱联', pinyin: 'ailian', py: 'al', lat: '22.697508', lng: '114.234404' },
    { id: 62, name: '大运', pinyin: 'dayun', py: 'dy', lat: '22.685719', lng: '114.228149' },
    { id: 63, name: '荷坳', pinyin: 'heao', py: 'ha', lat: '22.673088', lng: '114.224287' },
    { id: 64, name: '永湖', pinyin: 'yonghu', py: 'yh', lat: '22.659', lng: '114.218032' },
    { id: 65, name: '横岗', pinyin: 'henggang', py: 'hg', lat: '22.648455', lng: '114.208988' },
    { id: 66, name: '塘坑', pinyin: 'tangkeng', py: 'tk', lat: '22.639162', lng: '114.192728' },
    { id: 67, name: '六约', pinyin: 'liuyue', py: 'ly', lat: '22.63433', lng: '114.180647' },
    { id: 68, name: '丹竹头', pinyin: 'danzhutou', py: 'dzt', lat: '22.619753', lng: '114.148021' },
    { id: 69, name: '大芬', pinyin: 'dafen', py: 'df', lat: '22.614197', lng: '114.138354' },
    { id: 70, name: '木棉湾', pinyin: 'mumianwan', py: 'mmw', lat: '22.606987', lng: '114.130265' },
    { id: 71, name: '布吉', pinyin: 'buji', py: 'bj', lat: '22.601777', lng: '114.121564' },
    { id: 72, name: '草埔', pinyin: 'caopu', py: 'cp', lat: '22.584477', lng: '114.116451' },
    { id: 73, name: '水贝', pinyin: 'shuibei', py: 'sb', lat: '22.574035', lng: '114.124927' },
    { id: 74, name: '田贝', pinyin: 'tianbei', py: 'tb', lat: '22.567343', lng: '114.130045' },
    { id: 75, name: '翠竹', pinyin: 'cuizhu', py: 'cz', lat: '22.556187', lng: '114.129878' },
    { id: 76, name: '晒布', pinyin: 'shaibu', py: 'sb', lat: '22.549241', lng: '114.122669' },
    { id: 77, name: '红岭', pinyin: 'hongling', py: 'hl', lat: '22.549204', lng: '114.104573' },
    { id: 78, name: '通新岭', pinyin: 'tongxinling', py: 'txl', lat: '22.54912', lng: '114.096269' },
    { id: 79, name: '华新', pinyin: 'huaxin', py: 'hx', lat: '22.548991', lng: '114.086643' },
    { id: 80, name: '莲花村', pinyin: 'lianhuacun', py: 'lhc', lat: '22.54865', lng: '114.067814' },
    { id: 81, name: '少年宫', pinyin: 'shaoniangong', py: 'sng', lat: '22.548625', lng: '114.060883' },
    { id: 82, name: '石厦', pinyin: 'shixia', py: 'sx', lat: '22.52303', lng: '114.05361' },
    { id: 83, name: '益田', pinyin: 'yitian', py: 'yt', lat: '22.516283', lng: '114.050971' },
    { id: 84, name: '福田口岸', pinyin: 'futiankouan', py: 'ftka', lat: '22.515738', lng: '114.069275' },
    { id: 85, name: '福民', pinyin: 'fumin', py: 'fm', lat: '22.523171', lng: '114.064844' },
    { id: 86, name: '莲花北', pinyin: 'lianhuabei', py: 'lhb', lat: '22.560536', lng: '114.059402' },
    { id: 87, name: '上梅林', pinyin: 'shangmeilin', py: 'sml', lat: '22.568438', lng: '114.059407' },
    { id: 88, name: '民乐', pinyin: 'minle', py: 'ml', lat: '22.594164', lng: '114.04878' },
    { id: 89, name: '白石龙', pinyin: 'baishilong', py: 'bsl', lat: '22.601452', lng: '114.042528' },
    { id: 90, name: '深圳北站', pinyin: 'shenzhenbeizhan', py: 'szbz', lat: '22.610512', lng: '114.030286' },
    { id: 91, name: '红山', pinyin: 'hongshan', py: 'hs', lat: '22.621889', lng: '114.023457' },
    { id: 92, name: '上塘', pinyin: 'shangtang', py: 'st', lat: '22.637189', lng: '114.012718' },
    { id: 93, name: '龙胜', pinyin: 'longsheng', py: 'ls', lat: '22.644752', lng: '114.011991' },
    { id: 94, name: '龙华', pinyin: 'longhua', py: 'lh', lat: '22.651581', lng: '114.0224' },
    { id: 95, name: '清湖', pinyin: 'qinghu', py: 'qh', lat: '22.663908', lng: '114.036477' },
    { id: 96, name: '荔湾', pinyin: 'liwan', py: 'lw', lat: '22.497466', lng: '113.893874' },
    { id: 97, name: '铁路公园', pinyin: 'tielugongyuan', py: 'tlgy', lat: '22.50377', lng: '113.889003' },
    { id: 98, name: '妈湾', pinyin: 'mawan', py: 'mw', lat: '22.507636', lng: '113.886235' },
    { id: 99, name: '前湾公园', pinyin: 'qianwangongyuan', py: 'qwgy', lat: '22.51618', lng: '113.889496' },
    { id: 100, name: '前湾', pinyin: 'qianwan', py: 'qw', lat: '22.521829', lng: '113.895311' },
    { id: 101, name: '桂湾', pinyin: 'guiwan', py: 'gw', lat: '22.531719', lng: '113.897922' },
    { id: 102, name: '临海', pinyin: 'linhai', py: 'lh', lat: '22.54416', lng: '113.889309' },
    { id: 103, name: '宝华', pinyin: 'baohua', py: 'bh', lat: '22.549635', lng: '113.885088' },
    { id: 104, name: '翻身', pinyin: 'fanshen', py: 'fs', lat: '22.559688', lng: '113.893226' },
    { id: 105, name: '灵芝', pinyin: 'lingzhi', py: 'lz', lat: '22.568962', lng: '113.904158' },
    { id: 106, name: '洪浪北', pinyin: 'honglangbei', py: 'hlb', lat: '22.574544', lng: '113.910574' },
    { id: 107, name: '兴东', pinyin: 'xingdong', py: 'xd', lat: '22.581831', lng: '113.919007' },
    { id: 108, name: '留仙洞', pinyin: 'liuxiandong', py: 'lxd', lat: '22.580528', lng: '113.943957' },
    { id: 109, name: '西丽', pinyin: 'xili', py: 'xl', lat: '22.58065', lng: '113.954444' },
    { id: 110, name: '大学城', pinyin: 'daxuecheng', py: 'dxc', lat: '22.581942', lng: '113.965302' },
    { id: 111, name: '塘朗', pinyin: 'tanglang', py: 'tl', lat: '22.590091', lng: '113.999672' },
    { id: 112, name: '长岭陂', pinyin: 'changlingpi', py: 'clp', lat: '22.599385', lng: '114.010245' },
    { id: 113, name: '民治', pinyin: 'minzhi', py: 'mz', lat: '22.617547', lng: '114.040886' },
    { id: 114, name: '五和', pinyin: 'wuhe', py: 'wh', lat: '22.626826', lng: '114.060681' },
    { id: 115, name: '坂田', pinyin: 'bantian', py: 'bt', lat: '22.627482', lng: '114.070849' },
    { id: 116, name: '杨美', pinyin: 'yangmei', py: 'ym', lat: '22.626776', lng: '114.079971' },
    { id: 117, name: '上水径', pinyin: 'shangshuijing', py: 'ssj', lat: '22.622052', lng: '114.105356' },
    { id: 118, name: '下水径', pinyin: 'xiashuijing', py: 'xsj', lat: '22.614833', lng: '114.110631' },
    { id: 119, name: '长龙', pinyin: 'changlong', py: 'cl', lat: '22.608078', lng: '114.113839' },
    { id: 120, name: '百鸽笼', pinyin: 'baigelong', py: 'bgl', lat: '22.59545', lng: '114.130388' },
    { id: 121, name: '布心', pinyin: 'buxin', py: 'bx', lat: '22.581007', lng: '114.138048' },
    { id: 122, name: '太安', pinyin: 'taian', py: 'ta', lat: '22.573473', lng: '114.137126' },
    { id: 123, name: '怡景', pinyin: 'yijing', py: 'yj', lat: '22.555857', lng: '114.140112' },
    { id: 124, name: '体育中心', pinyin: 'tiyuzhongxin', py: 'tyzx', lat: '22.555817', lng: '114.095994' },
    { id: 125, name: '八卦岭', pinyin: 'bagualing', py: 'bgl', lat: '22.561861', lng: '114.093097' },
    { id: 126, name: '银湖', pinyin: 'yinhu', py: 'yh', lat: '22.568353', lng: '114.089796' },
    { id: 127, name: '翰岭', pinyin: 'hanling', py: 'hl', lat: '22.574297', lng: '114.068967' },
    { id: 128, name: '梅林关', pinyin: 'meilinguan', py: 'mlg', lat: '22.593', lng: '114.054247' },
    { id: 129, name: '上芬', pinyin: 'shangfen', py: 'sf', lat: '22.641638', lng: '114.015794' },
    { id: 130, name: '元芬', pinyin: 'yuanfen', py: 'yf', lat: '22.655737', lng: '114.005495' },
    { id: 131, name: '阳台山东', pinyin: 'yangtaishandong', py: 'ytsd', lat: '22.667974', lng: '113.991461' },
    { id: 132, name: '官田', pinyin: 'guantian', py: 'gt', lat: '22.68324', lng: '113.95213' },
    { id: 133, name: '上屋', pinyin: 'shangwu', py: 'sw', lat: '22.689456', lng: '113.937882' },
    { id: 134, name: '长圳', pinyin: 'changzhen', py: 'cz', lat: '22.725996', lng: '113.930607' },
    { id: 135, name: '凤凰城', pinyin: 'fenghuangcheng', py: 'fhc', lat: '22.74644', lng: '113.932067' },
    { id: 136, name: '光明大街', pinyin: 'guangmingdajie', py: 'gmdj', lat: '22.763299', lng: '113.943525' },
    { id: 137, name: '光明', pinyin: 'guangming', py: 'gm', lat: '22.772539', lng: '113.945156' },
    { id: 138, name: '科学公园', pinyin: 'kexuegongyuan', py: 'kxgy', lat: '22.777485', lng: '113.934105' },
    { id: 139, name: '楼村', pinyin: 'loucun', py: 'lc', lat: '22.775922', lng: '113.923419' },
    { id: 140, name: '红花山', pinyin: 'honghuashan', py: 'hhs', lat: '22.777409', lng: '113.907996' },
    { id: 141, name: '公明广场', pinyin: 'gongmingguangchang', py: 'gmgc', lat: '22.77667', lng: '113.893228' },
    { id: 142, name: '合水口', pinyin: 'heshuikou', py: 'hsk', lat: '22.781582', lng: '113.88135' },
    { id: 143, name: '薯田埔', pinyin: 'shutianpu', py: 'stp', lat: '22.781759', lng: '113.869029' },
    { id: 144, name: '松岗公园', pinyin: 'songganggongyuan', py: 'sggy', lat: '22.778129', lng: '113.848799' },
    { id: 145, name: '溪头', pinyin: 'xitou', py: 'xt', lat: '22.774627', lng: '113.837405' },
    { id: 146, name: '松岗', pinyin: 'songgang', py: 'sg', lat: '22.772225', lng: '113.829604' },
    { id: 147, name: '西丽湖', pinyin: 'xilihu', py: 'xlh', lat: '22.593576', lng: '113.965616' },
    { id: 148, name: '茶光', pinyin: 'chaguang', py: 'cg', lat: '22.574179', lng: '113.954262' },
    { id: 149, name: '珠光', pinyin: 'zhuguang', py: 'zg', lat: '22.568284', lng: '113.960549' },
    { id: 150, name: '龙井', pinyin: 'longjing', py: 'lj', lat: '22.564014', lng: '113.974674' },
    { id: 151, name: '桃源村', pinyin: 'taoyuancun', py: 'tyc', lat: '22.559882', lng: '113.981959' },
    { id: 152, name: '深云', pinyin: 'shenyun', py: 'sy', lat: '22.556551', lng: '113.993717' },
    { id: 153, name: '农林', pinyin: 'nonglin', py: 'nl', lat: '22.540439', lng: '114.018115' },
    { id: 154, name: '上沙', pinyin: 'shangsha', py: 'ss', lat: '22.524623', lng: '114.03549' },
    { id: 155, name: '沙尾', pinyin: 'shawei', py: 'sw', lat: '22.52081', lng: '114.042577' },
    { id: 156, name: '皇岗村', pinyin: 'huanggangcun', py: 'hgc', lat: '22.523147', lng: '114.059812' },
    { id: 157, name: '皇岗口岸', pinyin: 'huanggangkouan', py: 'hgka', lat: '22.521802', lng: '114.073959' },
    { id: 158, name: '赤尾', pinyin: 'chiwei', py: 'cw', lat: '22.53138', lng: '114.083599' },
    { id: 159, name: '华强南', pinyin: 'huaqiangnan', py: 'hqn', lat: '22.537212', lng: '114.086823' },
    { id: 160, name: '黄木岗', pinyin: 'huangmugang', py: 'hmg', lat: '22.555851', lng: '114.08728' },
    { id: 161, name: '红岭北', pinyin: 'honglingbei', py: 'hlb', lat: '22.562064', lng: '114.104299' },
    { id: 162, name: '笋岗', pinyin: 'sungang', py: 'sg', lat: '22.563406', lng: '114.111273' },
    { id: 163, name: '洪湖', pinyin: 'honghu', py: 'hh', lat: '22.566046', lng: '114.122447' },
    { id: 164, name: '梦海', pinyin: 'menghai', py: 'mh', lat: '22.518896', lng: '113.898863' },
    { id: 165, name: '怡海', pinyin: 'yihai', py: 'yh', lat: '22.514436', lng: '113.904474' },
    { id: 166, name: '荔林', pinyin: 'lilin', py: 'll', lat: '22.511865', lng: '113.913277' },
    { id: 167, name: '南油西', pinyin: 'nanyouxi', py: 'nyx', lat: '22.509159', lng: '113.918282' },
    { id: 168, name: '南油', pinyin: 'nanyou', py: 'ny', lat: '22.510443', lng: '113.925916' },
    { id: 169, name: '南山书城', pinyin: 'nanshanshucheng', py: 'nssc', lat: '22.519244', lng: '113.928673' },
    { id: 170, name: '深大南', pinyin: 'shendanan', py: 'sdn', lat: '22.525304', lng: '113.935341' },
    { id: 171, name: '粤海门', pinyin: 'yuehaimen', py: 'yhm', lat: '22.532687', lng: '113.94562' },
    { id: 172, name: '高新南', pinyin: 'gaoxinnan', py: 'gxn', lat: '22.532786', lng: '113.955748' },
    { id: 173, name: '红树湾南', pinyin: 'hongshuwannan', py: 'hswn', lat: '22.52302', lng: '113.971402' },
    { id: 174, name: '深湾', pinyin: 'shenwan', py: 'sw', lat: '22.5231', lng: '113.978525' },
    { id: 175, name: '深圳湾公园', pinyin: 'shenzhenwangongyuan', py: 'szwgy', lat: '22.521613', lng: '113.993138' },
    { id: 176, name: '下沙', pinyin: 'xiasha', py: 'xs', lat: '22.528912', lng: '114.024343' },
    { id: 177, name: '香梅', pinyin: 'xiangmei', py: 'xm', lat: '22.545377', lng: '114.03967' },
    { id: 178, name: '梅景', pinyin: 'meijing', py: 'mj', lat: '22.561032', lng: '114.037922' },
    { id: 179, name: '下梅林', pinyin: 'xiameilin', py: 'xml', lat: '22.565678', lng: '114.041741' },
    { id: 180, name: '梅村', pinyin: 'meicun', py: 'mc', lat: '22.568452', lng: '114.052416' },
    { id: 181, name: '孖岭', pinyin: 'maling', py: 'ml', lat: '22.568462', lng: '114.066825' },
    { id: 182, name: '泥岗', pinyin: 'nigang', py: 'ng', lat: '22.567809', lng: '114.097638' },
    { id: 183, name: '园岭', pinyin: 'yuanling', py: 'yl', lat: '22.556296', lng: '114.104494' },
    { id: 184, name: '红岭南', pinyin: 'honglingnan', py: 'hln', lat: '22.539927', lng: '114.104725' },
    { id: 185, name: '鹿丹村', pinyin: 'ludancun', py: 'ldc', lat: '22.535715', lng: '114.108598' },
    { id: 186, name: '人民南', pinyin: 'renminnan', py: 'rmn', lat: '22.535537', lng: '114.118147' },
    { id: 187, name: '向西村', pinyin: 'xiangxicun', py: 'xxc', lat: '22.539788', lng: '114.125764' },
    { id: 188, name: '文锦', pinyin: 'wenjin', py: 'wj', lat: '22.542268', lng: '114.130963' },
    { id: 189, name: '双拥街', pinyin: 'shuangyongjie', py: 'syj', lat: '22.698568', lng: '114.132818' },
    { id: 190, name: '平湖', pinyin: 'pinhu', py: 'ph', lat: '22.693064', lng: '114.123892' },
    { id: 191, name: '禾花', pinyin: 'hehua', py: 'hh', lat: '22.686512', lng: '114.120974' },
    { id: 192, name: '华南城', pinyin: 'huanancheng', py: 'hnc', lat: '22.676296', lng: '114.122283' },
    { id: 193, name: '木古', pinyin: 'mugu', py: 'mg', lat: '22.669821', lng: '114.122433' },
    { id: 194, name: '上李朗', pinyin: 'shangliliang', py: 'sll', lat: '22.65406', lng: '114.126982' },
    { id: 195, name: '凉帽山', pinyin: 'liangmaoshan', py: 'lms', lat: '22.646238', lng: '114.118377' },
    { id: 196, name: '甘坑', pinyin: 'gankeng', py: 'gk', lat: '22.647248', lng: '114.105524' },
    { id: 197, name: '雪象', pinyin: 'xuexiang', py: 'xx', lat: '22.656331', lng: '114.079969' },
    { id: 198, name: '岗头', pinyin: 'gangtou', py: 'gt', lat: '22.657297', lng: '114.072191' },
    { id: 199, name: '华为', pinyin: 'huawei', py: 'hw', lat: '22.650345', lng: '114.067031' },
    { id: 200, name: '贝尔路', pinyin: 'beierlu', py: 'bel', lat: '22.642919', lng: '114.066323' },
    { id: 201, name: '坂田北', pinyin: 'bantianbei', py: 'btb', lat: '22.635116', lng: '114.063361' },
    { id: 202, name: '光雅园', pinyin: 'guangyayuan', py: 'gyy', lat: '22.616624', lng: '114.060835' },
    { id: 203, name: '南坑', pinyin: 'nankeng', py: 'nk', lat: '22.611335', lng: '114.060663' },
    { id: 204, name: '雅宝', pinyin: 'yabao', py: 'yb', lat: '22.604957', lng: '114.060277' },
    { id: 205, name: '冬瓜岭', pinyin: 'donggualing', py: 'dgl', lat: '22.559285', lng: '114.06751' },
    { id: 206, name: '碧头', pinyin: 'bitou', py: 'bt', lat: '22.784491', lng: '113.819969' },
    { id: 207, name: '后亭', pinyin: 'houting', py: 'ht', lat: '22.752438', lng: '113.826771' },
    { id: 208, name: '沙井', pinyin: 'shajing', py: 'sj', lat: '22.730886', lng: '113.824457' },
    { id: 209, name: '马安山', pinyin: 'maanshan', py: 'mas', lat: '22.717012', lng: '113.817012' },
    { id: 210, name: '塘尾', pinyin: 'tangwei', py: 'tw', lat: '22.702087', lng: '113.817859' },
    { id: 211, name: '桥头', pinyin: 'qiaotou', py: 'qt', lat: '22.688151', lng: '113.810982' },
    { id: 212, name: '福永', pinyin: 'fuyong', py: 'fy', lat: '22.675214', lng: '113.806075' },
    { id: 213, name: '机场北', pinyin: 'jichangbei', py: 'jcb', lat: '22.651168', lng: '113.798148' },
    { id: 214, name: '机场', pinyin: 'jichang', py: 'jc', lat: '22.624076', lng: '113.813641' },
    { id: 215, name: '碧海湾', pinyin: 'bihaiwan', py: 'bhw', lat: '22.575105', lng: '113.856084' },
    { id: 216, name: '宝安', pinyin: 'baoan', py: 'ba', lat: '22.554577', lng: '113.880374' },
    { id: 217, name: '南山', pinyin: 'nanshan', py: 'ns', lat: '22.524103', lng: '113.923488' }
  ]
};
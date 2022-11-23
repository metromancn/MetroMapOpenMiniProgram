export default {
  lineList: [
    { name: '1号线', color: '#FDCB33', stations: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ] },
    { name: '2号线', color: '#1B93C9', stations: [ 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 8, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38 ] },
    { name: '3号线', color: '#FC843F', stations: [ 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 13, 49, 50, 51, 52, 53, 54, 15, 55, 56, 57, 58, 59, 60, 38, 61, 62, 63, 64, 65 ] },
    { name: '4号线', color: '#158745', stations: [ 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88 ] },
    { name: '5号线', color: '#FB3039', stations: [ 89, 90, 91, 92, 93, 30, 94, 95, 96, 97, 12, 98, 48, 99, 100, 101, 102, 86, 103, 104, 105, 106, 107, 108 ] },
    { name: '6号线', color: '#B84789', stations: [ 109, 110, 111, 112, 90, 113, 4, 114, 115, 27, 116, 117, 118, 11, 96, 119, 120, 121, 55, 53, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132 ] },
    { name: '7号线', color: '#80C658', stations: [ 133, 134, 135, 136, 137, 138, 139, 140, 16, 17, 141, 142, 41, 143, 144, 145, 82 ] },
    { name: '8号线', color: '#22B6B9', stations: [ 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 6, 156, 114, 157, 158, 159, 160, 24, 161, 162, 163, 46, 164, 165, 166, 167, 85 ] },
    { name: '9号线', color: '#5CD39C', stations: [ 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 63 ] },
    { name: '13号线', color: '#AFAC46', stations: [ 105, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187 ] },
    { name: '14号线', color: '#8F3232', stations: [ 38, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208 ] },
    { name: '18号线', color: '#1D65B9', stations: [ 209, 165, 210, 211, 143, 39, 212, 213 ] },
    { name: '21号线', color: '#425491', stations: [ 101, 214, 215, 88, 216, 217, 218, 219, 130, 220, 221, 222, 223, 208, 224, 225, 226, 227, 228, 229, 230 ] },
    { name: '22号线', color: '#D94715', stations: [ 231, 16, 232, 39 ] },
    { name: '广佛线', color: '#A1CC2E', stations: [ 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 0, 250, 251, 159, 252, 253, 21, 44 ] },
    { name: '佛山2号线', color: '#EF2237', stations: [ 254, 255, 256, 257, 258, 259, 260, 237, 261, 262, 263, 264, 265, 266, 267, 268, 269 ] },
    { name: 'APM线', color: '#67CDE8', stations: [ 47, 270, 271, 272, 273, 274, 275, 276, 54 ] },
    { name: '海珠电车线', color: '#ADCC6E', stations: [ 85, 277, 278, 279, 280, 281, 282, 283, 284, 285, 47 ] },
    { name: '黄埔有轨电车1号线', color: '#FC989A', stations: [ 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304 ] },
    { name: '南海有轨电车1号线', color: '#7BC7E9', stations: [ 245, 305, 306, 307, 308, 309, 310, 311, 312, 313 ] }
  ],
  stationList: [
    { id: 0, name: '西塱', pinyin: 'xilang', py: 'xl', lat: '23.065454', lng: '113.231985' },
    { id: 1, name: '坑口', pinyin: 'kengkou', py: 'kk', lat: '23.078584', lng: '113.232486' },
    { id: 2, name: '花地湾', pinyin: 'huadiwan', py: 'hdw', lat: '23.087143', lng: '113.234018' },
    { id: 3, name: '芳村', pinyin: 'fangcun', py: 'fc', lat: '23.098807', lng: '113.23578' },
    { id: 4, name: '黄沙', pinyin: 'huangsha', py: 'hs', lat: '23.109577', lng: '113.239676' },
    { id: 5, name: '长寿路', pinyin: 'changshoulu', py: 'csl', lat: '23.117932', lng: '113.24224' },
    { id: 6, name: '陈家祠', pinyin: 'chenjiaci', py: 'cjc', lat: '23.125722', lng: '113.246335' },
    { id: 7, name: '西门口', pinyin: 'ximenkou', py: 'xmk', lat: '23.125217', lng: '113.255682' },
    { id: 8, name: '公园前', pinyin: 'gongyuanqian', py: 'gyq', lat: '23.125455', lng: '113.264202' },
    { id: 9, name: '农讲所', pinyin: 'nongjiangsuo', py: 'njs', lat: '23.126567', lng: '113.275909' },
    { id: 10, name: '烈士陵园', pinyin: 'lieshilingyuan', py: 'lsly', lat: '23.126768', lng: '113.285394' },
    { id: 11, name: '东山口', pinyin: 'dongshankou', py: 'dsk', lat: '23.123984', lng: '113.295376' },
    { id: 12, name: '杨箕', pinyin: 'yangji', py: 'yj', lat: '23.127539', lng: '113.307571' },
    { id: 13, name: '体育西路', pinyin: 'tiyuxilu', py: 'tyxl', lat: '23.131165', lng: '113.321453' },
    { id: 14, name: '体育中心', pinyin: 'tiyuzhongxin', py: 'tyzx', lat: '23.135307', lng: '113.328381' },
    { id: 15, name: '广州东站', pinyin: 'guangzhoudongzhan', py: 'gzdz', lat: '23.150588', lng: '113.324772' },
    { id: 16, name: '广州南站', pinyin: 'guangzhounanzhan', py: 'gznz', lat: '22.988995', lng: '113.269111' },
    { id: 17, name: '石壁', pinyin: 'shibi', py: 'sb', lat: '22.994111', lng: '113.277952' },
    { id: 18, name: '会江', pinyin: 'huijiang', py: 'hj', lat: '23.013131', lng: '113.286382' },
    { id: 19, name: '南浦', pinyin: 'nanpu', py: 'np', lat: '23.033568', lng: '113.293527' },
    { id: 20, name: '洛溪', pinyin: 'luoxi', py: 'lx', lat: '23.04317', lng: '113.298746' },
    { id: 21, name: '南洲', pinyin: 'nanzhou', py: 'nz', lat: '23.064582', lng: '113.297663' },
    { id: 22, name: '东晓南', pinyin: 'dongxiaonan', py: 'dxn', lat: '23.071086', lng: '113.294419' },
    { id: 23, name: '江泰路', pinyin: 'jiangtailu', py: 'jtl', lat: '23.082192', lng: '113.280515' },
    { id: 24, name: '昌岗', pinyin: 'changgang', py: 'cg', lat: '23.090701', lng: '113.276909' },
    { id: 25, name: '江南西', pinyin: 'jiangnanxi', py: 'jnx', lat: '23.097066', lng: '113.27399' },
    { id: 26, name: '市二宫', pinyin: 'shiergong', py: 'seg', lat: '23.105976', lng: '113.269886' },
    { id: 27, name: '海珠广场', pinyin: 'haizhuguangchang', py: 'hzgc', lat: '23.114801', lng: '113.265307' },
    { id: 28, name: '纪念堂', pinyin: 'jiniantang', py: 'jnt', lat: '23.132471', lng: '113.263444' },
    { id: 29, name: '越秀公园', pinyin: 'yuxiugongyuan', py: 'yxgy', lat: '23.140245', lng: '113.261271' },
    { id: 30, name: '广州火车站', pinyin: 'guangzhouhuochezhan', py: 'gzhcz', lat: '23.14816', lng: '113.25657' },
    { id: 31, name: '三元里', pinyin: 'sanyuanli', py: 'syl', lat: '23.159402', lng: '113.256851' },
    { id: 32, name: '飞翔公园', pinyin: 'feixianggongyuan', py: 'fxgy', lat: '23.168997', lng: '113.26378' },
    { id: 33, name: '白云公园', pinyin: 'baiyuangongyuan', py: 'bygy', lat: '23.181649', lng: '113.270993' },
    { id: 34, name: '白云文化广场', pinyin: 'baiyunwenhuaguangchang', py: 'bywhgc', lat: '23.189713', lng: '113.275678' },
    { id: 35, name: '萧岗', pinyin: 'xiaogang', py: 'xg', lat: '23.19858', lng: '113.280697' },
    { id: 36, name: '江夏', pinyin: 'jiangxia', py: 'jx', lat: '23.211331', lng: '113.283564' },
    { id: 37, name: '黄边', pinyin: 'huangbian', py: 'hb', lat: '23.221636', lng: '113.287356' },
    { id: 38, name: '嘉禾望岗', pinyin: 'jiahewanggang', py: 'jhwg', lat: '23.237441', lng: '113.289226' },
    { id: 39, name: '番禺广场', pinyin: 'panyuguangchang', py: 'pygc', lat: '22.935532', lng: '113.385468' },
    { id: 40, name: '市桥', pinyin: 'shiqiao', py: 'sq', lat: '22.949787', lng: '113.361748' },
    { id: 41, name: '汉溪长隆', pinyin: 'hanxichanglong', py: 'hxcl', lat: '22.99377', lng: '113.329274' },
    { id: 42, name: '大石', pinyin: 'dashi', py: 'ds', lat: '23.018103', lng: '113.321706' },
    { id: 43, name: '厦滘', pinyin: 'xiajiao', py: 'xj', lat: '23.038055', lng: '113.320737' },
    { id: 44, name: '沥滘', pinyin: 'lijiao', py: 'lj', lat: '23.054917', lng: '113.319117' },
    { id: 45, name: '大塘', pinyin: 'datang', py: 'dt', lat: '23.077969', lng: '113.321694' },
    { id: 46, name: '客村', pinyin: 'kecun', py: 'kc', lat: '23.096211', lng: '113.320228' },
    { id: 47, name: '广州塔', pinyin: 'guangzhouta', py: 'gzt', lat: '23.106123', lng: '113.323637' },
    { id: 48, name: '珠江新城', pinyin: 'zhujiangxincheng', py: 'zjxc', lat: '23.119275', lng: '113.321191' },
    { id: 49, name: '石牌桥', pinyin: 'shipaiqiao', py: 'spq', lat: '23.133177', lng: '113.332411' },
    { id: 50, name: '岗顶', pinyin: 'gangding', py: 'gd', lat: '23.135108', lng: '113.340139' },
    { id: 51, name: '华师', pinyin: 'huashi', py: 'hs', lat: '23.140583', lng: '113.345564' },
    { id: 52, name: '五山', pinyin: 'wushan', py: 'ws', lat: '23.152978', lng: '113.351794' },
    { id: 53, name: '天河客运站', pinyin: 'tianhekeyunzhan', py: 'thkyz', lat: '23.170868', lng: '113.343216' },
    { id: 54, name: '林和西', pinyin: 'linhexi', py: 'lhx', lat: '23.141526', lng: '113.323923' },
    { id: 55, name: '燕塘', pinyin: 'yantang', py: 'yt', lat: '23.159957', lng: '113.327134' },
    { id: 56, name: '梅花园', pinyin: 'meihuayuan', py: 'mhy', lat: '23.175194', lng: '113.320495' },
    { id: 57, name: '京溪南方医院', pinyin: 'jingxinanfangyiyuan', py: 'jxnfyy', lat: '23.185334', lng: '113.326236' },
    { id: 58, name: '同和', pinyin: 'tonghe', py: 'th', lat: '23.197102', lng: '113.326233' },
    { id: 59, name: '永泰', pinyin: 'yongtai', py: 'yt', lat: '23.220662', lng: '113.304945' },
    { id: 60, name: '白云大道北', pinyin: 'baiyundadaobei', py: 'byddb', lat: '23.222382', lng: '113.29821' },
    { id: 61, name: '龙归', pinyin: 'longgui', py: 'lg', lat: '23.285489', lng: '113.30301' },
    { id: 62, name: '人和', pinyin: 'renhe', py: 'rh', lat: '23.33536', lng: '113.295908' },
    { id: 63, name: '高增', pinyin: 'gaozeng', py: 'gz', lat: '23.355199', lng: '113.295479' },
    { id: 64, name: '机场南（1号航站楼）', pinyin: 'jichangnan1haohangzhanlou', py: 'jcn1hhzl', lat: '23.38656', lng: '113.303034' },
    { id: 65, name: '机场北（2号航站楼）', pinyin: 'jichangbei2haohangzhanlou', py: 'jcb2hhzl', lat: '23.396161', lng: '113.305632' },
    { id: 66, name: '南沙客运港', pinyin: 'nanshakeyungang', py: 'nskyg', lat: '22.766282', lng: '113.610039' },
    { id: 67, name: '南横', pinyin: 'nanheng', py: 'nh', lat: '22.747919', lng: '113.59431' },
    { id: 68, name: '塘坑', pinyin: 'tangkeng', py: 'tk', lat: '22.753103', lng: '113.573105' },
    { id: 69, name: '大涌', pinyin: 'dachong', py: 'dc', lat: '22.760029', lng: '113.554721' },
    { id: 70, name: '广隆', pinyin: 'guanglong', py: 'gl', lat: '22.772375', lng: '113.540452' },
    { id: 71, name: '飞沙角', pinyin: 'feishajiao', py: 'fsj', lat: '22.781862', lng: '113.540752' },
    { id: 72, name: '金洲', pinyin: 'jinzhou', py: 'jz', lat: '22.792258', lng: '113.538971' },
    { id: 73, name: '蕉门', pinyin: 'jiaomen', py: 'jm', lat: '22.800748', lng: '113.527496' },
    { id: 74, name: '黄阁', pinyin: 'huangge', py: 'hg', lat: '22.824729', lng: '113.518787' },
    { id: 75, name: '黄阁汽车城', pinyin: 'huanggeqichecheng', py: 'hgqcc', lat: '22.835941', lng: '113.509573' },
    { id: 76, name: '庆盛', pinyin: 'qingsheng', py: 'qs', lat: '22.866999', lng: '113.490444' },
    { id: 77, name: '东涌', pinyin: 'dongchong', py: 'dc', lat: '22.885617', lng: '113.478975' },
    { id: 78, name: '低涌', pinyin: 'dichong', py: 'dc', lat: '22.919376', lng: '113.484946' },
    { id: 79, name: '海傍', pinyin: 'haibang', py: 'hb', lat: '22.939659', lng: '113.475476' },
    { id: 80, name: '石碁', pinyin: 'shiqi', py: 'sq', lat: '22.957369', lng: '113.465465' },
    { id: 81, name: '新造', pinyin: 'xinzao', py: 'xz', lat: '23.028281', lng: '113.415636' },
    { id: 82, name: '大学城南', pinyin: 'daxuechengnan', py: 'dxcn', lat: '23.04342', lng: '113.400431' },
    { id: 83, name: '大学城北', pinyin: 'daxuechengbei', py: 'dxcb', lat: '23.058098', lng: '113.385625' },
    { id: 84, name: '官洲', pinyin: 'guanzhou', py: 'gz', lat: '23.066798', lng: '113.37701' },
    { id: 85, name: '万胜围', pinyin: 'wanshengwei', py: 'wsw', lat: '23.097757', lng: '113.3847982' },
    { id: 86, name: '车陂南', pinyin: 'chebeinan', py: 'cbn', lat: '23.115928', lng: '113.389568' },
    { id: 87, name: '车陂', pinyin: 'chebei', py: 'cb', lat: '23.124482', lng: '113.395935' },
    { id: 88, name: '黄村', pinyin: 'huangcun', py: 'hc', lat: '23.131805', lng: '113.407269' },
    { id: 89, name: '滘口', pinyin: 'jiaokou', py: 'jk', lat: '23.113817', lng: '113.208454' },
    { id: 90, name: '坦尾', pinyin: 'tanwei', py: 'tw', lat: '23.125238', lng: '113.218379' },
    { id: 91, name: '中山八', pinyin: 'zhongshanba', py: 'zsb', lat: '23.126042', lng: '113.232724' },
    { id: 92, name: '西场', pinyin: 'xichang', py: 'xc', lat: '23.137401', lng: '113.238036' },
    { id: 93, name: '西村', pinyin: 'xicun', py: 'xc', lat: '23.141848', lng: '113.241759' },
    { id: 94, name: '小北', pinyin: 'xiaobei', py: 'xb', lat: '23.139455', lng: '113.276443' },
    { id: 95, name: '淘金', pinyin: 'taojin', py: 'tj', lat: '23.136364', lng: '113.286563' },
    { id: 96, name: '区庄', pinyin: 'ouzhuang', py: 'oz', lat: '23.13452', lng: '113.29679' },
    { id: 97, name: '动物园', pinyin: 'dongwuyuan', py: 'dwy', lat: '23.134416', lng: '113.307281' },
    { id: 98, name: '五羊邨', pinyin: 'wuyangcun', py: 'wyc', lat: '23.119948', lng: '113.314712' },
    { id: 99, name: '猎德', pinyin: 'leide', py: 'ld', lat: '23.118492', lng: '113.33273' },
    { id: 100, name: '潭村', pinyin: 'tancun', py: 'tc', lat: '23.117322', lng: '113.345819' },
    { id: 101, name: '员村', pinyin: 'yuancun', py: 'yc', lat: '23.115762', lng: '113.363654' },
    { id: 102, name: '科韵路', pinyin: 'keyunlu', py: 'kyl', lat: '23.119392', lng: '113.376863' },
    { id: 103, name: '东圃', pinyin: 'dongpu', py: 'dp', lat: '23.109392', lng: '113.401574' },
    { id: 104, name: '三溪', pinyin: 'sanxi', py: 'sx', lat: '23.104138', lng: '113.415685' },
    { id: 105, name: '鱼珠', pinyin: 'yuzhu', py: 'yz', lat: '23.100448', lng: '113.432261' },
    { id: 106, name: '大沙地', pinyin: 'dashadi', py: 'dsd', lat: '23.103457', lng: '113.446476' },
    { id: 107, name: '大沙东', pinyin: 'dashadong', py: 'dsd', lat: '23.106223', lng: '113.458498' },
    { id: 108, name: '文冲', pinyin: 'wenchong', py: 'wc', lat: '23.103832', lng: '113.468943' },
    { id: 109, name: '浔峰岗', pinyin: 'xunfenggang', py: 'xfg', lat: '23.164115', lng: '113.201963' },
    { id: 110, name: '横沙', pinyin: 'hengsha', py: 'hs', lat: '23.158058', lng: '113.206598' },
    { id: 111, name: '沙贝', pinyin: 'shabei', py: 'sb', lat: '23.152356', lng: '113.211404' },
    { id: 112, name: '河沙', pinyin: 'hesha', py: 'hs', lat: '23.135535', lng: '113.217337' },
    { id: 113, name: '如意坊', pinyin: 'ruyifang', py: 'ryf', lat: '23.114957', lng: '113.2312079' },
    { id: 114, name: '文化公园', pinyin: 'wenhuagongyuan', py: 'whgy', lat: '23.108964', lng: '113.249933' },
    { id: 115, name: '一德路', pinyin: 'yidelu', py: 'ydl', lat: '23.112852', lng: '113.257029' },
    { id: 116, name: '北京路', pinyin: 'beijinglu', py: 'bjl', lat: '23.118654', lng: '113.270039' },
    { id: 117, name: '团一大广场', pinyin: 'tuanyidaguangchang', py: 'tydgc', lat: '23.118105', lng: '113.278274' },
    { id: 118, name: '东湖', pinyin: 'donghu', py: 'dh', lat: '23.115114', lng: '113.288597' },
    { id: 119, name: '黄花岗', pinyin: 'huanghuagang', py: 'hhg', lat: '23.140912', lng: '113.299874' },
    { id: 120, name: '沙河顶', pinyin: 'shaheding', py: 'shd', lat: '23.147315', lng: '113.306952' },
    { id: 121, name: '天平架', pinyin: 'tianpingjia', py: 'tpj', lat: '23.159522', lng: '113.321356' },
    { id: 122, name: '长湴', pinyin: 'changban', py: 'cb', lat: '23.178497', lng: '113.349443' },
    { id: 123, name: '植物园', pinyin: 'zhiwuyuan', py: 'zwy', lat: '23.18819', lng: '113.364297' },
    { id: 124, name: '龙洞', pinyin: 'longdong', py: 'ld', lat: '23.19103', lng: '113.377773' },
    { id: 125, name: '柯木塱', pinyin: 'kemulang', py: 'kml', lat: '23.193397', lng: '113.395475' },
    { id: 126, name: '高塘石', pinyin: 'gaotangshi', py: 'gts', lat: '23.19101', lng: '113.410496' },
    { id: 127, name: '黄陂', pinyin: 'huangbei', py: 'hb', lat: '23.188328', lng: '113.433327' },
    { id: 128, name: '金峰', pinyin: 'jinfeng', py: 'jf', lat: '23.181345', lng: '113.451179' },
    { id: 129, name: '暹岗', pinyin: 'xiangang', py: 'xg', lat: '23.172547', lng: '113.459934' },
    { id: 130, name: '苏元', pinyin: 'suyuan', py: 'sy', lat: '23.171048', lng: '113.468485' },
    { id: 131, name: '萝岗', pinyin: 'luogang', py: 'lg', lat: '23.175171', lng: '113.481349' },
    { id: 132, name: '香雪', pinyin: 'xiangxue', py: 'xx', lat: '23.172429', lng: '113.50124' },
    { id: 133, name: '美的大道', pinyin: 'meididadao', py: 'mddd', lat: '22.944792', lng: '113.207715' },
    { id: 134, name: '北滘公园', pinyin: 'beijiaogongyuan', py: 'bjgy', lat: '22.930011', lng: '113.211878' },
    { id: 135, name: '美的', pinyin: 'meidi', py: 'md', lat: '22.933548', lng: '113.226834' },
    { id: 136, name: '南涌', pinyin: 'nanchong', py: 'nc', lat: '22.939338', lng: '113.238185' },
    { id: 137, name: '锦龙', pinyin: 'jinlong', py: 'jl', lat: '22.95315', lng: '113.24149' },
    { id: 138, name: '陈村', pinyin: 'chencun', py: 'cc', lat: '22.968067', lng: '113.236812' },
    { id: 139, name: '陈村北', pinyin: 'chencunbei', py: 'ccb', lat: '22.976147', lng: '113.24518' },
    { id: 140, name: '大洲', pinyin: 'dazhou', py: 'dz', lat: '22.983832', lng: '113.257261' },
    { id: 141, name: '谢村', pinyin: 'xiecun', py: 'xc', lat: '22.990604', lng: '113.295284' },
    { id: 142, name: '钟村', pinyin: 'zhongcun', py: 'zc', lat: '22.986417', lng: '113.316087' },
    { id: 143, name: '南村万博', pinyin: 'nancunwanbo', py: 'ncwb', lat: '23.004629', lng: '113.34733' },
    { id: 144, name: '员岗', pinyin: 'yuangang', py: 'yg', lat: '23.01559', lng: '113.363992' },
    { id: 145, name: '板桥', pinyin: 'banqiao', py: 'bq', lat: '23.016854', lng: '113.387702' },
    { id: 146, name: '滘心', pinyin: 'jiaoxin', py: 'jx', lat: '23.23449', lng: '113.217729' },
    { id: 147, name: '亭岗', pinyin: 'tinggang', py: 'tg', lat: '23.222383', lng: '113.220068' },
    { id: 148, name: '石井', pinyin: 'shijing', py: 'sj', lat: '23.211311', lng: '113.231344' },
    { id: 149, name: '小坪', pinyin: 'xiaoping', py: 'xp', lat: '23.200003', lng: '113.243041' },
    { id: 150, name: '石潭', pinyin: 'shitan', py: 'st', lat: '23.188654', lng: '113.241392' },
    { id: 151, name: '聚龙', pinyin: 'julong', py: 'jl', lat: '23.180917', lng: '113.23865' },
    { id: 152, name: '上步', pinyin: 'shangbu', py: 'sb', lat: '23.170911', lng: '113.2357' },
    { id: 153, name: '同德', pinyin: 'tongde', py: 'td', lat: '23.163652', lng: '113.23475' },
    { id: 154, name: '鹅掌坦', pinyin: 'ezhangtan', py: 'ezt', lat: '23.156609', lng: '113.23585' },
    { id: 155, name: '彩虹桥', pinyin: 'caihongqiao', py: 'chq', lat: '23.134688', lng: '113.245619' },
    { id: 156, name: '华林寺', pinyin: 'hualinsi', py: 'hls', lat: '23.117846', lng: '113.247153' },
    { id: 157, name: '同福西', pinyin: 'tongfuxi', py: 'tfx', lat: '23.101549', lng: '113.252398' },
    { id: 158, name: '凤凰新村', pinyin: 'fenghuangxincun', py: 'fhxc', lat: '23.094856', lng: '113.255919' },
    { id: 159, name: '沙园', pinyin: 'shayuan', py: 'sy', lat: '23.088834', lng: '113.260457' },
    { id: 160, name: '宝岗大道', pinyin: 'baogangdadao', py: 'bgdd', lat: '23.086008', lng: '113.269383' },
    { id: 161, name: '晓港', pinyin: 'xiaogang', py: 'xg', lat: '23.093254', lng: '113.28236' },
    { id: 162, name: '中大', pinyin: 'zhongda', py: 'zd', lat: '23.091821', lng: '113.293959' },
    { id: 163, name: '鹭江', pinyin: 'lujiang', py: 'lj', lat: '23.095326', lng: '113.308461' },
    { id: 164, name: '赤岗', pinyin: 'chigang', py: 'cg', lat: '23.096462', lng: '113.334814' },
    { id: 165, name: '磨碟沙', pinyin: 'modiesha', py: 'mds', lat: '23.098622', lng: '113.342611' },
    { id: 166, name: '新港东', pinyin: 'xingangdong', py: 'xgd', lat: '23.098705', lng: '113.358252' },
    { id: 167, name: '琶洲', pinyin: 'pazhou', py: 'pz', lat: '23.098424', lng: '113.366697' },
    { id: 168, name: '飞鹅岭', pinyin: 'feieling', py: 'fel', lat: '23.37824', lng: '113.155001' },
    { id: 169, name: '花都汽车城', pinyin: 'huaduqichecheng', py: 'hdqcc', lat: '23.379993', lng: '113.180192' },
    { id: 170, name: '广州北站', pinyin: 'guangzhoubeizhan', py: 'gzbz', lat: '23.376187', lng: '113.204606' },
    { id: 171, name: '花城路', pinyin: 'huachenglu', py: 'hcl', lat: '23.380107', lng: '113.21358' },
    { id: 172, name: '花果山公园', pinyin: 'huaguoshangongyuan', py: 'hgsgy', lat: '23.387542', lng: '113.21836' },
    { id: 173, name: '花都广场', pinyin: 'huaduguangchang', py: 'hdgc', lat: '23.401485', lng: '113.222823' },
    { id: 174, name: '马鞍山公园', pinyin: 'maanshangongyuan', py: 'masgy', lat: '23.399161', lng: '113.238015' },
    { id: 175, name: '莲塘', pinyin: 'liantang', py: 'lt', lat: '23.391677', lng: '113.244238' },
    { id: 176, name: '清㘵', pinyin: 'qingbu', py: 'qb', lat: '23.378442', lng: '113.250546' },
    { id: 177, name: '清塘', pinyin: 'qingtang', py: 'qt', lat: '23.372331', lng: '113.26259' },
    { id: 178, name: '裕丰围', pinyin: 'yufengwei', py: 'yfw', lat: '23.095092', lng: '113.454672' },
    { id: 179, name: '双岗', pinyin: 'shuanggang', py: 'sg', lat: '23.094144', lng: '113.475743' },
    { id: 180, name: '南海神庙', pinyin: 'nanhaishenmiao', py: 'nhsm', lat: '23.08313', lng: '113.497587' },
    { id: 181, name: '夏园', pinyin: 'xiayuan', py: 'xy', lat: '23.08313', lng: '113.519002' },
    { id: 182, name: '南岗', pinyin: 'nangang', py: 'ng', lat: '23.096355', lng: '113.542262' },
    { id: 183, name: '沙村', pinyin: 'shacun', py: 'sc', lat: '23.110644', lng: '113.57123' },
    { id: 184, name: '白江', pinyin: 'baijiang', py: 'bj', lat: '23.122209', lng: '113.595306' },
    { id: 185, name: '新塘', pinyin: 'xintang', py: 'xt', lat: '23.132115', lng: '113.605305' },
    { id: 186, name: '官湖', pinyin: 'guanhu', py: 'gh', lat: '23.137324', lng: '113.634015' },
    { id: 187, name: '新沙', pinyin: 'xinsha', py: 'xs', lat: '23.136865', lng: '113.649395' },
    { id: 188, name: '白云东平', pinyin: 'baiyundongping', py: 'bydp', lat: '23.251202', lng: '113.317835' },
    { id: 189, name: '夏良', pinyin: 'xialiang', py: 'xl', lat: '23.277704', lng: '113.323504' },
    { id: 190, name: '太和', pinyin: 'taihe', py: 'th', lat: '23.29928', lng: '113.347203' },
    { id: 191, name: '竹料', pinyin: 'zhuliao', py: 'zl', lat: '23.348498', lng: '113.368314' },
    { id: 192, name: '钟落潭', pinyin: 'zhongluotan', py: 'zlt', lat: '23.375659', lng: '113.400627' },
    { id: 193, name: '马沥', pinyin: 'mali', py: 'ml', lat: '23.393897', lng: '113.450366' },
    { id: 194, name: '新和', pinyin: 'xinhe', py: 'xh', lat: '23.413256', lng: '113.467045' },
    { id: 195, name: '太平', pinyin: 'taiping', py: 'tp', lat: '23.452094', lng: '113.491957' },
    { id: 196, name: '神岗', pinyin: 'shengang', py: 'sg', lat: '23.475119', lng: '113.517408' },
    { id: 197, name: '赤草', pinyin: 'chicao', py: 'cc', lat: '23.501212', lng: '113.560185' },
    { id: 198, name: '从化客运站', pinyin: 'conghuakeyunzhan', py: 'chkyz', lat: '23.531752', lng: '113.594698' },
    { id: 199, name: '东风', pinyin: 'dongfeng', py: 'df', lat: '23.566236', lng: '113.60082' },
    { id: 200, name: '红卫', pinyin: 'hongwei', py: 'hw', lat: '23.399233', lng: '113.487439' },
    { id: 201, name: '新南', pinyin: 'xinnan', py: 'xn', lat: '23.378279', lng: '113.494767' },
    { id: 202, name: '枫下', pinyin: 'fengxia', py: 'fx', lat: '23.363073', lng: '113.508264' },
    { id: 203, name: '知识城', pinyin: 'zhishicheng', py: 'zsc', lat: '23.350229', lng: '113.524121' },
    { id: 204, name: '何棠下', pinyin: 'hetangxia', py: 'htx', lat: '23.331591', lng: '113.543562' },
    { id: 205, name: '旺村', pinyin: 'wangcun', py: 'wc', lat: '23.322483', lng: '113.552204' },
    { id: 206, name: '汤村', pinyin: 'tangcun', py: 'tc', lat: '23.306635', lng: '113.565191' },
    { id: 207, name: '镇龙北', pinyin: 'zhenlongbei', py: 'zlb', lat: '23.288828', lng: '113.577336' },
    { id: 208, name: '镇龙', pinyin: 'zhenlong', py: 'zl', lat: '23.284507', lng: '113.592989' },
    { id: 209, name: '冼村', pinyin: 'xiancun', py: 'xc', lat: '23.126379', lng: '113.328089' },
    { id: 210, name: '龙潭', pinyin: 'longtan', py: 'lt', lat: '23.079885', lng: '113.341312' },
    { id: 211, name: '沙溪', pinyin: 'shaxi', py: 'sx', lat: '23.034327', lng: '113.33864' },
    { id: 212, name: '横沥', pinyin: 'hengli', py: 'hl', lat: '22.753538', lng: '113.510921' },
    { id: 213, name: '万顷沙', pinyin: 'wanqingsha', py: 'wqs', lat: '22.708494', lng: '113.56551' },
    { id: 214, name: '天河公园', pinyin: 'tianhegongyuan', py: 'thgy', lat: '23.123677', lng: '113.362464' },
    { id: 215, name: '棠东', pinyin: 'tangdong', py: 'td', lat: '23.130993', lng: '113.389329' },
    { id: 216, name: '大观南路', pinyin: 'daguannanlu', py: 'dgnl', lat: '23.144583', lng: '113.406946' },
    { id: 217, name: '天河智慧城', pinyin: 'tianhezhihuicheng', py: 'thzhc', lat: '23.163297', lng: '113.403164' },
    { id: 218, name: '神舟路', pinyin: 'shenzhoulu', py: 'szl', lat: '23.16523', lng: '113.431327' },
    { id: 219, name: '科学城', pinyin: 'kexuecheng', py: 'kxc', lat: '23.165664', lng: '113.449255' },
    { id: 220, name: '水西', pinyin: 'shuixi', py: 'sx', lat: '23.186741', lng: '113.478968' },
    { id: 221, name: '长平', pinyin: 'changping', py: 'cp', lat: '23.210389', lng: '113.489675' },
    { id: 222, name: '金坑', pinyin: 'jinkeng', py: 'jk', lat: '23.249401', lng: '113.526687' },
    { id: 223, name: '镇龙西', pinyin: 'zhenlongxi', py: 'zlx', lat: '23.278085', lng: '113.57379' },
    { id: 224, name: '中新', pinyin: 'zhongxin', py: 'zx', lat: '23.285329', lng: '113.613144' },
    { id: 225, name: '坑贝', pinyin: 'kengbei', py: 'kb', lat: '23.2788', lng: '113.642573' },
    { id: 226, name: '凤岗', pinyin: 'fenggang', py: 'fg', lat: '23.275962', lng: '113.670602' },
    { id: 227, name: '朱村', pinyin: 'zhucun', py: 'zc', lat: '23.272325', lng: '113.701405' },
    { id: 228, name: '山田', pinyin: 'shantian', py: 'st', lat: '23.276445', lng: '113.74454' },
    { id: 229, name: '钟岗', pinyin: 'zhonggang', py: 'zg', lat: '23.279317', lng: '113.792009' },
    { id: 230, name: '增城广场', pinyin: 'zengchengguangchang', py: 'zcgc', lat: '23.278049', lng: '113.81443' },
    { id: 231, name: '陈头岗', pinyin: 'chentougang', py: 'ctg', lat: '23.013231', lng: '113.265577' },
    { id: 232, name: '市广路', pinyin: 'shiguanglu', py: 'sgl', lat: '22.971433', lng: '113.336988' },
    { id: 233, name: '新城东', pinyin: 'xinchengdong', py: 'xcd', lat: '22.95866', lng: '113.140065' },
    { id: 234, name: '东平', pinyin: 'dongping', py: 'dp', lat: '22.965215', lng: '113.129342' },
    { id: 235, name: '世纪莲', pinyin: 'shijilian', py: 'sjl', lat: '22.965136', lng: '113.114021' },
    { id: 236, name: '澜石', pinyin: 'lanshi', py: 'ls', lat: '22.984496', lng: '113.107198' },
    { id: 237, name: '魁奇路', pinyin: 'kuiqilu', py: 'kql', lat: '22.993978', lng: '113.108614' },
    { id: 238, name: '季华园', pinyin: 'jihuayuan', py: 'jhy', lat: '23.010586', lng: '113.108524' },
    { id: 239, name: '同济路', pinyin: 'tongjilu', py: 'tjl', lat: '23.019107', lng: '113.108491' },
    { id: 240, name: '祖庙', pinyin: 'zumiao', py: 'zm', lat: '23.027081', lng: '113.1121' },
    { id: 241, name: '普君北路', pinyin: 'pujunbeilu', py: 'pjbl', lat: '23.027679', lng: '113.123906' },
    { id: 242, name: '朝安', pinyin: 'chaoan', py: 'ca', lat: '23.02767', lng: '113.13346' },
    { id: 243, name: '桂城', pinyin: 'guicheng', py: 'gc', lat: '23.031661', lng: '113.141432' },
    { id: 244, name: '南桂路', pinyin: 'nanguilu', py: 'ngl', lat: '23.034163', lng: '113.154131' },
    { id: 245, name: '礌岗', pinyin: 'leigang', py: 'lg', lat: '23.042635', lng: '113.155414' },
    { id: 246, name: '千灯湖', pinyin: 'qiandenghu', py: 'qdh', lat: '23.054837', lng: '113.155307' },
    { id: 247, name: '金融高新区', pinyin: 'jinronggaokequ', py: 'jrgkq', lat: '23.065834', lng: '113.158569' },
    { id: 248, name: '龙溪', pinyin: 'longxi', py: 'lx', lat: '23.06579', lng: '113.191042' },
    { id: 249, name: '菊树', pinyin: 'jushu', py: 'js', lat: '23.065836', lng: '113.212014' },
    { id: 250, name: '鹤洞', pinyin: 'hedong', py: 'hd', lat: '23.072292', lng: '113.239772' },
    { id: 251, name: '沙涌', pinyin: 'shachong', py: 'sc', lat: '23.083307', lng: '113.247024' },
    { id: 252, name: '燕岗', pinyin: 'yangang', py: 'yg', lat: '23.075142', lng: '113.27198' },
    { id: 253, name: '石溪', pinyin: 'shixi', py: 'sx', lat: '23.067596', lng: '113.286233' },
    { id: 254, name: '南庄', pinyin: 'nanzhuang', py: 'nz', lat: '22.982943', lng: '113.006558' },
    { id: 255, name: '湖涌', pinyin: 'huchong', py: 'hc', lat: '23.002844', lng: '113.011064' },
    { id: 256, name: '绿岛湖', pinyin: 'lvdaohu', py: 'ldh', lat: '23.00197', lng: '113.032061' },
    { id: 257, name: '智慧新城', pinyin: 'zhihuixincheng', py: 'zhxc', lat: '23.01112', lng: '113.055938' },
    { id: 258, name: '张槎', pinyin: 'zhangcha', py: 'zc', lat: '23.01111', lng: '113.068351' },
    { id: 259, name: '石湾', pinyin: 'shiwan', py: 'sw', lat: '23.00473', lng: '113.083629' },
    { id: 260, name: '沙岗', pinyin: 'shagang', py: 'sg', lat: '22.996681', lng: '113.094454' },
    { id: 261, name: '石梁', pinyin: 'shiliang', py: 'sl', lat: '22.992711', lng: '113.118862' },
    { id: 262, name: '湾华', pinyin: 'wanhua', py: 'wh', lat: '22.991985', lng: '113.131485' },
    { id: 263, name: '登洲', pinyin: 'dengzhou', py: 'dz', lat: '22.978962', lng: '113.149053' },
    { id: 264, name: '花卉世界', pinyin: 'huahuishijie', py: 'hhsj', lat: '22.973569', lng: '113.161214' },
    { id: 265, name: '仙涌', pinyin: 'xianchong', py: 'xc', lat: '22.983052', lng: '113.198207' },
    { id: 266, name: '石洲', pinyin: 'shizhou', py: 'sz', lat: '22.99044', lng: '113.215545' },
    { id: 267, name: '林岳西', pinyin: 'linyuexi', py: 'lyx', lat: '22.993798', lng: '113.237604' },
    { id: 268, name: '林岳东', pinyin: 'linyuedong', py: 'lyd', lat: '22.993906', lng: '113.249545' },
    { id: 269, name: '广州南站(佛山2)', pinyin: 'guangzhounanzhanfoshan2', py: 'gznzfs2', lat: '22.988277', lng: '113.265842' },
    { id: 270, name: '海心沙', pinyin: 'haixinsha', py: 'hsx', lat: '23.111554', lng: '113.324401' },
    { id: 271, name: '大剧院', pinyin: 'dajuyuan', py: 'djy', lat: '23.115407', lng: '113.324463' },
    { id: 272, name: '花城大道', pinyin: 'huachengdadao', py: 'hcdd', lat: '23.119105', lng: '113.324704' },
    { id: 273, name: '妇儿中心', pinyin: 'fuerzhongxin', py: 'fezx', lat: '23.123227', lng: '113.324481' },
    { id: 274, name: '黄埔大道', pinyin: 'huangpudadao', py: 'hpdd', lat: '23.126996', lng: '113.324495' },
    { id: 275, name: '天河南', pinyin: 'tianhenan', py: 'thn', lat: '23.131198', lng: '113.324491' },
    { id: 276, name: '体育中心南', pinyin: 'tiyuzhongxinnan', py: 'tyzxn', lat: '23.134363', lng: '113.324303' },
    { id: 277, name: '琶洲塔', pinyin: 'pazhouta', py: 'pzt', lat: '23.099177', lng: '113.376978' },
    { id: 278, name: '琶洲大桥南', pinyin: 'pazhoudaqiaonan', py: 'pzdqn', lat: '23.10427', lng: '113.375465' },
    { id: 279, name: '会展东', pinyin: 'huizhandong', py: 'hzd', lat: '23.103934', lng: '113.368835' },
    { id: 280, name: '会展中', pinyin: 'huizhanzhong', py: 'hzz', lat: '23.104170', lng: '113.362599' },
    { id: 281, name: '会展西', pinyin: 'huizhanxi', py: 'hzx', lat: '23.104323', lng: '113.356194' },
    { id: 282, name: '南风', pinyin: 'nanfeng', py: 'nf', lat: '23.105488', lng: '113.348705' },
    { id: 283, name: '琶醍', pinyin: 'pati', py: 'pt', lat: '23.107471', lng: '113.340141' },
    { id: 284, name: '猎德大桥南', pinyin: 'liededaqiaonan', py: 'lddqn', lat: '23.107373', lng: '113.335632' },
    { id: 285, name: '广州塔东', pinyin: 'guangzhoutadong', py: 'gztd', lat: '23.107022', lng: '113.327054' },
    { id: 286, name: '新丰路', pinyin: 'xinfenglu', py: 'xfl', lat: '23.199155', lng: '113.548898' },
    { id: 287, name: '贤江', pinyin: 'xianjiang', py: 'xj', lat: '23.202074', lng: '113.541882' },
    { id: 288, name: '贤江公园', pinyin: 'xianjianggongyuan', py: 'xjgy', lat: '23.207004', lng: '113.535466' },
    { id: 289, name: '贤江西', pinyin: 'xianjiangxi', py: 'xjx', lat: '23.211806', lng: '113.528567' },
    { id: 290, name: '岭头东', pinyin: 'lingtoudong', py: 'ltd', lat: '23.215992', lng: '113.519051' },
    { id: 291, name: '干部健康中心', pinyin: 'ganbujiankangzhongxin', py: 'gbjkzx', lat: '23.21754', lng: '113.513203' },
    { id: 292, name: '岭头', pinyin: 'lingtou', py: 'lt', lat: '23.21645', lng: '113.509577' },
    { id: 293, name: '长岭居小学', pinyin: 'changlingjuxiaoxue', py: 'cljxx', lat: '23.214735', lng: '113.502024' },
    { id: 294, name: '羌洞', pinyin: 'qiangdong', py: 'qd', lat: '23.21296', lng: '113.498768' },
    { id: 295, name: '地铁长平', pinyin: 'ditiechangping', py: 'dtcp', lat: '23.211205', lng: '113.49041' },
    { id: 296, name: '北师大实验学校', pinyin: 'beishidashiyanxuexiao', py: 'bsdsyxx', lat: '23.206139', lng: '113.492338' },
    { id: 297, name: '水西(黄埔有轨)', pinyin: 'shuixi', py: 'sx', lat: '23.199577', lng: '113.484216' },
    { id: 298, name: '峻泰路', pinyin: 'juntailu', py: 'jtl', lat: '23.19115', lng: '113.485669' },
    { id: 299, name: '地铁水西', pinyin: 'ditieshuixi', py: 'dtsx', lat: '23.188184', lng: '113.481501' },
    { id: 300, name: '会议中心', pinyin: 'huiyizhongxin', py: 'hyzx', lat: '23.182474', lng: '113.474275' },
    { id: 301, name: '市民广场', pinyin: 'shiminguangchang', py: 'smgc', lat: '23.178677', lng: '113.480723' },
    { id: 302, name: '线坑', pinyin: 'xiankeng', py: 'xk', lat: '23.176912', lng: '113.488319' },
    { id: 303, name: '区少年宫（萝岗）', pinyin: 'qushaoniangong', py: 'qsng', lat: '23.176349', lng: '113.492407' },
    { id: 304, name: '地铁香雪', pinyin: 'ditiexiangxue', py: 'dtxx', lat: '23.173893', lng: '113.499703' },
    { id: 305, name: '华翠路', pinyin: 'huacuilu', py: 'hcl', lat: '23.037109', lng: '113.162881' },
    { id: 306, name: '夏西', pinyin: 'xiaxi', py: 'xx', lat: '23.036121', lng: '113.169935' },
    { id: 307, name: '夏东', pinyin: 'xiadong', py: 'xd', lat: '23.034907', lng: '113.179237' },
    { id: 308, name: '康怡公园', pinyin: 'kangyigongyuan', py: 'kygy', lat: '23.03427', lng: '113.188668' },
    { id: 309, name: '平西', pinyin: 'pingxi', py: 'px', lat: '23.030306', lng: '113.193024' },
    { id: 310, name: '平南', pinyin: 'pingnan', py: 'pn', lat: '23.024836', lng: '113.198356' },
    { id: 311, name: '玉器街', pinyin: 'yuqijie', py: 'yqj', lat: '23.027541', lng: '113.205402' },
    { id: 312, name: '中区', pinyin: 'zhongqu', py: 'zq', lat: '23.031091', lng: '113.218202' },
    { id: 313, name: '三山新城北', pinyin: 'sanshanxinchengbei', py: 'ssxcb', lat: '23.025621', lng: '113.230046' }
  ]
};
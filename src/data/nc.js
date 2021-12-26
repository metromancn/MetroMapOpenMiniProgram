export default {
  lineList: [
    { name: '1号线', color: '#FB1929', stations: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ] },
    { name: '2号线', color: '#FDCB33', stations: [ 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 7, 40, 41, 42, 43, 44, 12, 45, 46, 47, 48, 49 ] },
    { name: '3号线', color: '#3270D7', stations: [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 11, 63, 43, 64, 65, 66, 67, 68, 69 ] },
    { name: '4号线', color: '#27A04A', stations: [ 70, 71, 72, 73, 74, 31, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 61, 85, 46, 13, 86, 64, 87, 88, 89, 90, 91, 92, 93 ] }
  ],
  stationList: [
    { id: 0, name: '双港', pinyin: 'shuanggang', py: 'sg', lat: '28.743096', lng: '115.861132' },
    { id: 1, name: '孔目湖', pinyin: 'kongmuhu', py: 'kmh', lat: '28.732871', lng: '115.857935' },
    { id: 2, name: '长江路', pinyin: 'changjianglu', py: 'cjl', lat: '28.717492', lng: '115.879602' },
    { id: 3, name: '珠江路', pinyin: 'zhujianglu', py: 'zjl', lat: '28.707499', lng: '115.875847' },
    { id: 4, name: '庐山南大道', pinyin: 'lushannandadao', py: 'lsndd', lat: '28.701378', lng: '115.86567' },
    { id: 5, name: '绿茵路', pinyin: 'lvyinlu', py: 'lyl', lat: '28.69759', lng: '115.858048' },
    { id: 6, name: '卫东', pinyin: 'weidong', py: 'wd', lat: '28.690866', lng: '115.848977' },
    { id: 7, name: '地铁大厦', pinyin: 'ditiedasha', py: 'dtds', lat: '28.683913', lng: '115.852815' },
    { id: 8, name: '秋水广场', pinyin: 'qiushuiguangchang', py: 'qsgc', lat: '28.681098', lng: '115.859958' },
    { id: 9, name: '滕王阁', pinyin: 'tengwangge', py: 'twg', lat: '28.673295', lng: '115.877767' },
    { id: 10, name: '万寿宫', pinyin: 'wanshougong', py: 'wsg', lat: '28.675093', lng: '115.885873' },
    { id: 11, name: '八一馆', pinyin: 'bayiguan', py: 'byg', lat: '28.675672', lng: '115.891543' },
    { id: 12, name: '八一广场', pinyin: 'bayiguangchang', py: 'bygc', lat: '28.675135', lng: '115.903388' },
    { id: 13, name: '丁公路北', pinyin: 'dinggonglubei', py: 'dglb', lat: '28.673933', lng: '115.913486' },
    { id: 14, name: '师大南路', pinyin: 'shidananlu', py: 'sdnl', lat: '28.674036', lng: '115.924196' },
    { id: 15, name: '彭家桥', pinyin: 'pengjiaqiao', py: 'pjq', lat: '28.674229', lng: '115.933407' },
    { id: 16, name: '谢家村', pinyin: 'xiejiacun', py: 'xjc', lat: '28.674262', lng: '115.940697' },
    { id: 17, name: '青山湖大道', pinyin: 'qingshanhudadao', py: 'qshdd', lat: '28.674361', lng: '115.948835' },
    { id: 18, name: '高新大道', pinyin: 'gaoxindadao', py: 'gxdd', lat: '28.674418', lng: '115.960374' },
    { id: 19, name: '艾溪湖西', pinyin: 'aixihuxi', py: 'axhx', lat: '28.674427', lng: '115.973683' },
    { id: 20, name: '艾溪湖东', pinyin: 'aixihudong', py: 'axhd', lat: '28.6747', lng: '115.993467' },
    { id: 21, name: '太子殿', pinyin: 'taizidian', py: 'tzd', lat: '28.67502', lng: '116.011197' },
    { id: 22, name: '奥体中心', pinyin: 'aotizhongxin', py: 'atzx', lat: '28.674484', lng: '116.024736' },
    { id: 23, name: '瑶湖西', pinyin: 'yaohuxi', py: 'yhx', lat: '28.672111', lng: '116.038351' },
    { id: 24, name: '南路', pinyin: 'nanlu', py: 'nl', lat: '28.552716', lng: '115.789281' },
    { id: 25, name: '大岗', pinyin: 'dagang', py: 'dg', lat: '28.560613', lng: '115.789356' },
    { id: 26, name: '生米', pinyin: 'shengmi', py: 'sm', lat: '28.571831', lng: '115.790839' },
    { id: 27, name: '九龙湖南', pinyin: 'jiulonghunan', py: 'jlhn', lat: '28.579689', lng: '115.793414' },
    { id: 28, name: '市民中心', pinyin: 'shiminzhongxin', py: 'smzx', lat: '28.593429', lng: '115.796179' },
    { id: 29, name: '鹰潭街', pinyin: 'yingtanjie', py: 'ytj', lat: '28.599048', lng: '115.798982' },
    { id: 30, name: '国博', pinyin: 'guobo', py: 'gb', lat: '28.608223', lng: '115.795871' },
    { id: 31, name: '西站南广场', pinyin: 'xizhannanguangchang', py: 'xzngc', lat: '28.619035', lng: '115.790903' },
    { id: 32, name: '南昌西站', pinyin: 'nanchangxizhan', py: 'ncxz', lat: '28.623405', lng: '115.79336' },
    { id: 33, name: '龙岗', pinyin: 'longgang', py: 'lg', lat: '28.623151', lng: '115.802995' },
    { id: 34, name: '国体中心', pinyin: 'guotizhongxin', py: 'gtzx', lat: '28.622369', lng: '115.816728' },
    { id: 35, name: '卧龙山', pinyin: 'wolongshan', py: 'wls', lat: '28.631594', lng: '115.822444' },
    { id: 36, name: '岭北', pinyin: 'lingbei', py: 'lb', lat: '28.641033', lng: '115.830139' },
    { id: 37, name: '前湖大道', pinyin: 'qianhudadao', py: 'qhdd', lat: '28.651852', lng: '115.834935' },
    { id: 38, name: '学府大道东', pinyin: 'xuefudadaodong', py: 'xfddd', lat: '28.659233', lng: '115.839119' },
    { id: 39, name: '翠苑路', pinyin: 'cuiyuanlu', py: 'cyl', lat: '28.672624', lng: '115.846672' },
    { id: 40, name: '雅苑路', pinyin: 'yayuanlu', py: 'yyl', lat: '28.692075', lng: '115.857358' },
    { id: 41, name: '红谷中大道', pinyin: 'hongguzhongdadao', py: 'hgzdd', lat: '28.691708', lng: '115.867003' },
    { id: 42, name: '阳明公园', pinyin: 'yangminggongyuan', py: 'ymgy', lat: '28.687981', lng: '115.891283' },
    { id: 43, name: '青山路口', pinyin: 'qingshanlukou', py: 'qslk', lat: '28.686117', lng: '115.902065' },
    { id: 44, name: '福州路', pinyin: 'fuzhoulu', py: 'fzl', lat: '28.680649', lng: '115.903277' },
    { id: 45, name: '永叔路', pinyin: 'yongshulu', py: 'ysl', lat: '28.666821', lng: '115.905327' },
    { id: 46, name: '丁公路南', pinyin: 'dinggonglunan', py: 'dgln', lat: '28.663983', lng: '115.912904' },
    { id: 47, name: '南昌火车站', pinyin: 'nanchanghuochezhan', py: 'nchcz', lat: '28.663196', lng: '115.920991' },
    { id: 48, name: '顺外', pinyin: 'shunwai', py: 'sw', lat: '28.663677', lng: '115.928104' },
    { id: 49, name: '辛家庵', pinyin: 'xinjiaan', py: 'xja', lat: '28.659337', lng: '115.939552' },
    { id: 50, name: '银三角北', pinyin: 'yinsanjiaobei', py: 'ysjb', lat: '28.520857', lng: '115.93492' },
    { id: 51, name: '斗门', pinyin: 'doumen', py: 'dm', lat: '28.528775', lng: '115.927978' },
    { id: 52, name: '柏岗', pinyin: 'baigang', py: 'bg', lat: '28.544327', lng: '115.918194' },
    { id: 53, name: '沥山', pinyin: 'lishan', py: 'ls', lat: '28.556503', lng: '115.915941' },
    { id: 54, name: '振兴大道', pinyin: 'zhenxingdadao', py: 'zxdd', lat: '28.576912', lng: '115.912186' },
    { id: 55, name: '邓埠', pinyin: 'dengbu', py: 'db', lat: '28.589499', lng: '115.90989' },
    { id: 56, name: '八大山人', pinyin: 'badashanren', py: 'bdsr', lat: '28.60231', lng: '115.908388' },
    { id: 57, name: '施尧', pinyin: 'shiyao', py: 'sy', lat: '28.616363', lng: '115.907765' },
    { id: 58, name: '江铃', pinyin: 'jiangling', py: 'jl', lat: '28.625292', lng: '115.907293' },
    { id: 59, name: '京家山', pinyin: 'jingjiashan', py: 'jjs', lat: '28.637741', lng: '115.906564' },
    { id: 60, name: '十字街', pinyin: 'shizijie', py: 'szj', lat: '28.654821', lng: '115.905598' },
    { id: 61, name: '绳金塔', pinyin: 'shengjinta', py: 'sjt', lat: '28.658869', lng: '115.901564' },
    { id: 62, name: '六眼井', pinyin: 'liuyanjing', py: 'lyj', lat: '28.669864', lng: '115.893904' },
    { id: 63, name: '墩子塘', pinyin: 'dunzitang', py: 'dzt', lat: '28.685', lng: '115.894751' },
    { id: 64, name: '上沙沟', pinyin: 'shangshagou', py: 'ssg', lat: '28.694271', lng: '115.912325' },
    { id: 65, name: '青山湖西', pinyin: 'qingshanhuxi', py: 'qshx', lat: '28.693414', lng: '115.923301' },
    { id: 66, name: '国威路', pinyin: 'guoweilu', py: 'gwl', lat: '28.687174', lng: '115.941014' },
    { id: 67, name: '火炬广场', pinyin: 'huojuguangchang', py: 'hjgc', lat: '28.688078', lng: '115.94846' },
    { id: 68, name: '梁万', pinyin: 'liangwan', py: 'lw', lat: '28.690261', lng: '115.960519' },
    { id: 69, name: '京东大道', pinyin: 'jingdongdadao', py: 'jddd', lat: '28.692577', lng: '115.972879' },
    { id: 70, name: '白马山', pinyin: 'baimashan', py: 'bms', lat: '28.631873', lng: '115.721522' },
    { id: 71, name: '裕丰街', pinyin: 'yufengjie', py: 'yfj', lat: '28.622907', lng: '115.72886' },
    { id: 72, name: '璜溪', pinyin: 'huangxi', py: 'hx', lat: '28.621175', lng: '115.741906' },
    { id: 73, name: '中堡', pinyin: 'zhongbao', py: 'zb', lat: '28.623246', lng: '115.754867' },
    { id: 74, name: '礼庄山', pinyin: 'lizhuangshan', py: 'lzs', lat: '28.625563', lng: '115.771561' },
    { id: 75, name: '怀玉山大道', pinyin: 'huaiyushandadao', py: 'hysdd', lat: '28.615203', lng: '115.799413' },
    { id: 76, name: '安丰', pinyin: 'anfeng', py: 'af', lat: '28.608789', lng: '115.813827' },
    { id: 77, name: '东新', pinyin: 'dongxin', py: 'dx', lat: '28.59791', lng: '115.839169' },
    { id: 78, name: '新洪城大市场', pinyin: 'xinhongchengdashichang', py: 'xhcdsc', lat: '28.603618', lng: '115.848867' },
    { id: 79, name: '丁家洲', pinyin: 'dingjiazhou', py: 'djz', lat: '28.618453', lng: '115.854475' },
    { id: 80, name: '观洲', pinyin: 'guanzhou', py: 'gz', lat: '28.630611', lng: '115.861717' },
    { id: 81, name: '云天路', pinyin: 'yuntianlu', py: 'ytl', lat: '28.639689', lng: '115.868173' },
    { id: 82, name: '灌婴路', pinyin: 'guanyinglu', py: 'gyl', lat: '28.647165', lng: '115.8724' },
    { id: 83, name: '南昌大桥东', pinyin: 'nanchangdaqiaodong', py: 'ncdqd', lat: '28.655413', lng: '115.877443' },
    { id: 84, name: '桃苑', pinyin: 'taoyuan', py: 'ty', lat: '28.659612', lng: '115.890682' },
    { id: 85, name: '坛子口', pinyin: 'tanzikou', py: 'tzk', lat: '28.657221', lng: '115.91008' },
    { id: 86, name: '人民公园', pinyin: 'renmingongyuan', py: 'rmgy', lat: '28.684981', lng: '115.912312' },
    { id: 87, name: '起凤路', pinyin: 'qifenglu', py: 'qfl', lat: '28.702439', lng: '115.916979' },
    { id: 88, name: '七里', pinyin: 'qili', py: 'ql', lat: '28.709854', lng: '115.927815' },
    { id: 89, name: '民园路西', pinyin: 'minyuanluxi', py: 'mylx', lat: '28.718181', lng: '115.946279' },
    { id: 90, name: '火炬', pinyin: 'huoju', py: 'hj', lat: '28.716883', lng: '115.960624' },
    { id: 91, name: '北沥', pinyin: 'beili', py: 'bl', lat: '28.715471', lng: '115.972962' },
    { id: 92, name: '科技城', pinyin: 'kejicheng', py: 'kjc', lat: '28.715434', lng: '115.981974' },
    { id: 93, name: '鱼尾洲', pinyin: 'yuweizhou', py: 'ywz', lat: '28.709506', lng: '116.001887' }
  ]
};
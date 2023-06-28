export default {
  lineList: [
    { name: '1号线', color: '#FB3039', stations: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ] },
    { name: '2号线', color: '#22ABFB', stations: [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 6, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41 ] },
    { name: '3号线/西环线', color: '#7FC147', stations: [ 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 9, 57, 58, 59, 60, 33, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72 ] },
    { name: '4号线', color: '#AF6AC9', stations: [ 73, 74, 75, 76, 77, 78, 79, 80, 81, 27, 82, 83, 55, 84, 11, 85, 86, 87, 88, 38, 89, 90, 40, 41, 91 ] },
    { name: '5号线', color: '#FDCB48', stations: [ 92, 93, 94, 95, 96, 88, 97, 98, 99, 35, 100, 101, 102, 103, 66, 104, 105, 106 ] },
    { name: '6号线', color: '#4065CD', stations: [ 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 80, 4, 120, 121, 31, 122, 60, 99, 36, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134 ] },
    { name: '磁浮线', color: '#FC4F7B', stations: [ 135, 136, 137 ] }
  ],
  stationList: [
    { id: 0, name: '开福区政府', pinyin: 'kaifuquzhengfu', py: 'kfqzf', lat: '28.26204', lng: '112.985391' },
    { id: 1, name: '马厂', pinyin: 'machang', py: 'mc', lat: '28.251262', lng: '112.988706' },
    { id: 2, name: '北辰三角洲', pinyin: 'beichensanjiaozhou', py: 'bcsjz', lat: '28.236234', lng: '112.983561' },
    { id: 3, name: '开福寺', pinyin: 'kaifusi', py: 'kfs', lat: '28.222442', lng: '112.979549' },
    { id: 4, name: '文昌阁', pinyin: 'wenchangge', py: 'wcg', lat: '28.212724', lng: '112.978176' },
    { id: 5, name: '培元桥', pinyin: 'peiyuanqiao', py: 'pyq', lat: '28.206191', lng: '112.976427' },
    { id: 6, name: '五一广场', pinyin: 'wuyiguangchang', py: 'wygc', lat: '28.195346', lng: '112.976341' },
    { id: 7, name: '黄兴广场', pinyin: 'huangxingguangchang', py: 'hxgc', lat: '28.189443', lng: '112.976416' },
    { id: 8, name: '南门口', pinyin: 'nanmenkou', py: 'nmk', lat: '28.183492', lng: '112.976185' },
    { id: 9, name: '侯家塘', pinyin: 'houjiatang', py: 'hjt', lat: '28.173792', lng: '112.982135' },
    { id: 10, name: '南湖路', pinyin: 'nanhulu', py: 'nhl', lat: '28.166098', lng: '112.985584' },
    { id: 11, name: '黄土岭', pinyin: 'huangtuling', py: 'htl', lat: '28.160072', lng: '112.985359' },
    { id: 12, name: '涂家冲', pinyin: 'tujiachong', py: 'tjc', lat: '28.153167', lng: '112.984779' },
    { id: 13, name: '铁道学院', pinyin: 'tiedaoxueyuan', py: 'tdxy', lat: '28.136158', lng: '112.987317' },
    { id: 14, name: '友谊路', pinyin: 'youyilu', py: 'yyl', lat: '28.123635', lng: '112.986893' },
    { id: 15, name: '省政府', pinyin: 'shengzhengfu', py: 'szf', lat: '28.111178', lng: '112.987494' },
    { id: 16, name: '桂花坪', pinyin: 'guihuaping', py: 'ghp', lat: '28.099225', lng: '112.98833' },
    { id: 17, name: '大托', pinyin: 'datuo', py: 'dt', lat: '28.082567', lng: '112.989183' },
    { id: 18, name: '中信广场', pinyin: 'zhongxinguangchang', py: 'zxgc', lat: '28.073706', lng: '112.98972' },
    { id: 19, name: '尚双塘', pinyin: 'shangshuangtang', py: 'sst', lat: '28.06192', lng: '112.992246' },
    { id: 20, name: '梅溪湖西', pinyin: 'meixihuxi', py: 'mxhx', lat: '28.185898', lng: '112.881901' },
    { id: 21, name: '麓云路', pinyin: 'luyunlu', py: 'lyl', lat: '28.190853', lng: '112.892029' },
    { id: 22, name: '文化艺术中心', pinyin: 'wenhuayishuzhongxin', py: 'whyszx', lat: '28.196702', lng: '112.900455' },
    { id: 23, name: '梅溪湖东', pinyin: 'meixihudong', py: 'mxhd', lat: '28.201676', lng: '112.908169' },
    { id: 24, name: '望城坡(汽车西站)', pinyin: 'wangchengpoqichexizhan', py: 'wcpqcxz', lat: '28.207481', lng: '112.9137' },
    { id: 25, name: '金星路', pinyin: 'jinxinglu', py: 'jxl', lat: '28.206063', lng: '112.928575' },
    { id: 26, name: '西湖公园', pinyin: 'xihugongyuan', py: 'xhgy', lat: '28.202635', lng: '112.939889' },
    { id: 27, name: '溁湾镇', pinyin: 'yingwanzhen', py: 'ywz', lat: '28.197586', lng: '112.951445' },
    { id: 28, name: '橘子洲', pinyin: 'juzizhou', py: 'jzz', lat: '28.195603', lng: '112.962505' },
    { id: 29, name: '湘江中路', pinyin: 'xiangjiangzhonglu', py: 'xjzl', lat: '28.195238', lng: '112.969354' },
    { id: 30, name: '芙蓉广场', pinyin: 'furongguangchang', py: 'frgc', lat: '28.194902', lng: '112.984621' },
    { id: 31, name: '迎宾路口', pinyin: 'yinbinlukou', py: 'yblk', lat: '28.194803', lng: '112.992158' },
    { id: 32, name: '袁家岭', pinyin: 'yuanjialing', py: 'yjl', lat: '28.194552', lng: '113.000645' },
    { id: 33, name: '长沙火车站', pinyin: 'changshahuochezhan', py: 'cshcz', lat: '28.193626', lng: '113.011089' },
    { id: 34, name: '锦泰广场', pinyin: 'jintaiguangchang', py: 'jtgc', lat: '28.191862', lng: '113.01758' },
    { id: 35, name: '万家丽广场', pinyin: 'wanjialiguangchang', py: 'wjlgc', lat: '28.191559', lng: '113.030176' },
    { id: 36, name: '人民东路', pinyin: 'renmindonglu', py: 'rmdl', lat: '28.184169', lng: '113.038694' },
    { id: 37, name: '长沙大道', pinyin: 'changshadadao', py: 'csdd', lat: '28.168309', lng: '113.044472' },
    { id: 38, name: '沙湾公园', pinyin: 'shawangongyuan', py: 'swgy', lat: '28.157601', lng: '113.044914' },
    { id: 39, name: '杜花路', pinyin: 'duhualu', py: 'dhl', lat: '28.146287', lng: '113.056458' },
    { id: 40, name: '长沙火车南站', pinyin: 'changshahuochenanzhan', py: 'cshcnz', lat: '28.146942', lng: '113.065055' },
    { id: 41, name: '光达', pinyin: 'guangda', py: 'gd', lat: '28.148006', lng: '113.085058' },
    { id: 42, name: '湘潭北站', pinyin: 'xiangtanbeizhan', py: 'xtbz', lat: '27.963953', lng: '112.942274' },
    { id: 43, name: '船形山', pinyin: 'chuanxingshan', py: 'cxs', lat: '27.979981', lng: '112.949624' },
    { id: 44, name: '黄家湾', pinyin: 'huangjiawan', py: 'hjw', lat: '27.990639', lng: '112.947097' },
    { id: 45, name: '双湖', pinyin: 'shuanghu', py: 'sh', lat: '28.026402', lng: '112.92764' },
    { id: 46, name: '坪塘', pinyin: 'pingtang', py: 'pt', lat: '28.043372', lng: '112.912405' },
    { id: 47, name: '红桥', pinyin: 'hongqiao', py: 'hq', lat: '28.059127', lng: '112.909401' },
    { id: 48, name: '桐溪', pinyin: 'tongxi', py: 'tx', lat: '28.075487', lng: '112.908285' },
    { id: 49, name: '大王山', pinyin: 'dawangshan', py: 'dws', lat: '28.088776', lng: '112.91674' },
    { id: 50, name: '山塘', pinyin: 'shantang', py: 'st', lat: '28.098833', lng: '112.925803' },
    { id: 51, name: '洋湖湿地', pinyin: 'yanghushidi', py: 'yhsd', lat: '28.114684', lng: '112.938747' },
    { id: 52, name: '洋湖新城', pinyin: 'yanghuxincheng', py: 'yhxc', lat: '28.128707', lng: '112.945179' },
    { id: 53, name: '阳光', pinyin: 'yangguang', py: 'yg', lat: '28.141404', lng: '112.937025' },
    { id: 54, name: '中南大学', pinyin: 'zhongnandaxue', py: 'zndx', lat: '28.154194', lng: '112.937669' },
    { id: 55, name: '阜埠河', pinyin: 'fubuhe', py: 'fbh', lat: '28.166308', lng: '112.947503' },
    { id: 56, name: '灵官渡', pinyin: 'lingguandu', py: 'lgd', lat: '28.179256', lng: '112.970527' },
    { id: 57, name: '东塘', pinyin: 'dongtang', py: 'dt', lat: '28.169675', lng: '112.992907' },
    { id: 58, name: '桂花公园', pinyin: 'guihuagongyuan', py: 'ghgy', lat: '28.170498', lng: '113.00148' },
    { id: 59, name: '阿弥岭', pinyin: 'emiling', py: 'eml', lat: '28.174612', lng: '113.00811' },
    { id: 60, name: '朝阳村', pinyin: 'chaoyangcun', py: 'cyc', lat: '28.185005', lng: '113.010833' },
    { id: 61, name: '烈士公园东', pinyin: 'lieshigongyuandong', py: 'lsgyd', lat: '28.20813', lng: '113.008954' },
    { id: 62, name: '丝茅冲', pinyin: 'simaochong', py: 'smc', lat: '28.223701', lng: '113.006991' },
    { id: 63, name: '四方坪', pinyin: 'sifangping', py: 'sfp', lat: '28.230814', lng: '113.007029' },
    { id: 64, name: '雅雀湖', pinyin: 'yaquehu', py: 'yqh', lat: '28.237322', lng: '113.013841' },
    { id: 65, name: '长沙大学', pinyin: 'changshadaxue', py: 'csdx', lat: '28.240932', lng: '113.031104' },
    { id: 66, name: '月湖公园北', pinyin: 'yuehugongyuanbei', py: 'yhgyb', lat: '28.242214', lng: '113.0409' },
    { id: 67, name: '湘龙', pinyin: 'xianglong', py: 'xl', lat: '28.245664', lng: '113.060979' },
    { id: 68, name: '星沙', pinyin: 'xingsha', py: 'xs', lat: '28.245631', lng: '113.086873' },
    { id: 69, name: '松雅湖(南)', pinyin: 'songyahunan', py: 'syhn', lat: '28.245423', lng: '113.103524' },
    { id: 70, name: '星沙文体中心', pinyin: 'xingshawentizhongxin', py: 'xswtzx', lat: '28.245494', lng: '113.111506' },
    { id: 71, name: '螺丝塘', pinyin: 'luositang', py: 'lst', lat: '28.245532', lng: '113.123051' },
    { id: 72, name: '广生', pinyin: 'guangsheng', py: 'gs', lat: '28.244969', lng: '113.135582' },
    { id: 73, name: '罐子岭', pinyin: 'guanziling', py: 'gzl', lat: '28.294866', lng: '112.923146' },
    { id: 74, name: '月亮岛西', pinyin: 'yueliangdaoxi', py: 'yldx', lat: '28.287308', lng: '112.929562' },
    { id: 75, name: '湘江新城', pinyin: 'xiangjiangxincheng', py: 'xjxc', lat: '28.281687', lng: '112.933692' },
    { id: 76, name: '汉王陵公园', pinyin: 'hanwanglinggongyuan', py: 'hwlgy', lat: '28.267721', lng: '112.947522' },
    { id: 77, name: '福元大桥西', pinyin: 'fuyuandaqiaoxi', py: 'fydqx', lat: '28.253244', lng: '112.958701' },
    { id: 78, name: '茶子山', pinyin: 'chazishan', py: 'czs', lat: '28.242696', lng: '112.959495' },
    { id: 79, name: '观沙岭', pinyin: 'guanshaling', py: 'gsl', lat: '28.23055', lng: '112.952473' },
    { id: 80, name: '六沟垅', pinyin: 'liugoulong', py: 'lgl', lat: '28.219675', lng: '112.954594' },
    { id: 81, name: '望月湖', pinyin: 'wangyuehu', py: 'wyh', lat: '28.206623', lng: '112.955917' },
    { id: 82, name: '湖南师大', pinyin: 'hunanshida', py: 'hnsd', lat: '28.186265', lng: '112.948149' },
    { id: 83, name: '湖南大学', pinyin: 'hunandaxue', py: 'hndx', lat: '28.179692', lng: '112.946562' },
    { id: 84, name: '碧沙湖', pinyin: 'bishahu', py: 'bsh', lat: '28.164456', lng: '112.967773' },
    { id: 85, name: '砂子塘', pinyin: 'shazitang', py: 'szt', lat: '28.162432', lng: '112.994341' },
    { id: 86, name: '赤岗岭', pinyin: 'chigangling', py: 'cgl', lat: '28.159707', lng: '113.005431' },
    { id: 87, name: '树木岭', pinyin: 'shumuling', py: 'sml', lat: '28.156378', lng: '113.02146' },
    { id: 88, name: '圭塘', pinyin: 'guitang', py: 'gt', lat: '28.157513', lng: '113.031051' },
    { id: 89, name: '粟塘', pinyin: 'sutang', py: 'st', lat: '28.157664', lng: '113.052402' },
    { id: 90, name: '平阳', pinyin: 'pingyang', py: 'py', lat: '28.152197', lng: '113.057069' },
    { id: 91, name: '杜家坪', pinyin: 'dujiaping', py: 'djp', lat: '28.141516', lng: '113.093751' },
    { id: 92, name: '毛竹塘', pinyin: 'maozhutang', py: 'mzt', lat: '28.095202', lng: '113.036752' },
    { id: 93, name: '板塘冲', pinyin: 'bantangchong', py: 'btc', lat: '28.116306', lng: '113.039423' },
    { id: 94, name: '大塘', pinyin: 'datang', py: 'dt', lat: '28.130988', lng: '113.03644' },
    { id: 95, name: '雨花区政府', pinyin: 'yuhuaquzhengfu', py: 'yhqzf', lat: '28.137554', lng: '113.035082' },
    { id: 96, name: '木桥', pinyin: 'muqiao', py: 'mq', lat: '28.148717', lng: '113.030887' },
    { id: 97, name: '高桥南', pinyin: 'gaoqiaonan', py: 'gqn', lat: '28.167077', lng: '113.029573' },
    { id: 98, name: '高桥北', pinyin: 'gaoqiaobei', py: 'gqb', lat: '28.176194', lng: '113.030067' },
    { id: 99, name: '芙蓉区政府', pinyin: 'furongquzhengfu', py: 'frqzf', lat: '28.184226', lng: '113.030383' },
    { id: 100, name: '马王堆', pinyin: 'mawangdui', py: 'mwd', lat: '28.200043', lng: '113.031129' },
    { id: 101, name: '火炬村', pinyin: 'huojucun', py: 'hjc', lat: '28.208477', lng: '113.031193' },
    { id: 102, name: '鸭子铺', pinyin: 'yazipu', py: 'yzp', lat: '28.225031', lng: '113.036075' },
    { id: 103, name: '马栏山', pinyin: 'malanshan', py: 'mls', lat: '28.231676', lng: '113.040774' },
    { id: 104, name: '白茅铺', pinyin: 'baimaopu', py: 'bmp', lat: '28.250325', lng: '113.048734' },
    { id: 105, name: '土桥', pinyin: 'tuqiao', py: 'tq', lat: '28.26381', lng: '113.056018' },
    { id: 106, name: '水渡河', pinyin: 'shuiduhe', py: 'sdh', lat: '28.279845', lng: '113.063958' },
    { id: 107, name: '谢家桥', pinyin: 'xiejiaqiao', py: 'xjq', lat: '28.172069', lng: '112.835794' },
    { id: 108, name: '象鼻窝', pinyin: 'xiangbiwo', py: 'xbw', lat: '28.172561', lng: '112.853217' },
    { id: 109, name: '中塘', pinyin: 'zhongtang', py: 'zt', lat: '28.182018', lng: '112.863646' },
    { id: 110, name: '一师范西校区', pinyin: 'yishifanxixiaoqu', py: 'ysfxxq', lat: '28.193063', lng: '112.864719' },
    { id: 111, name: '长庆', pinyin: 'changqing', py: 'cq', lat: '28.201162', lng: '112.862884' },
    { id: 112, name: '和馨园', pinyin: 'hexinyuan', py: 'hxy', lat: '28.214649', lng: '112.861521' },
    { id: 113, name: '长丰', pinyin: 'changfeng', py: 'cf', lat: '28.220774', lng: '112.872019' },
    { id: 114, name: '麓谷体育公园', pinyin: 'lugutiyugongyuan', py: 'lgtygy', lat: '28.22', lng: '112.881885' },
    { id: 115, name: '麓谷公园', pinyin: 'lugugongyuan', py: 'lggy', lat: '28.218128', lng: '112.896304' },
    { id: 116, name: '涧塘', pinyin: 'jiantang', py: 'jt', lat: '28.218497', lng: '112.91045' },
    { id: 117, name: '湖南工商大学', pinyin: 'hunangongshangdaxue', py: 'hngsdx', lat: '28.219281', lng: '112.922069' },
    { id: 118, name: '白鸽咀', pinyin: 'baigezui', py: 'bgz', lat: '28.21783', lng: '112.934595' },
    { id: 119, name: '湘雅三医院', pinyin: 'xiangyasanyiyuan', py: 'xysyy', lat: '28.218128', lng: '112.943071' },
    { id: 120, name: '湘雅医院', pinyin: 'xiangyayiyuan', py: 'xyyy', lat: '28.213534', lng: '112.987982' },
    { id: 121, name: '烈士公园南', pinyin: 'lieshigongyuannan', py: 'lsgyn', lat: '28.204646', lng: '112.991244' },
    { id: 122, name: '窑岭湘雅二医院', pinyin: 'yaolingxiangyaeryiyuan', py: 'ylxyeyy', lat: '28.185885', lng: '112.99626' },
    { id: 123, name: '花桥', pinyin: 'huaqiao', py: 'hq', lat: '28.184731', lng: '113.048659' },
    { id: 124, name: '隆平水稻博物馆', pinyin: 'longpingshuidaobowuguan', py: 'lpsdbwg', lat: '28.190557', lng: '113.05883' },
    { id: 125, name: '农科院农大', pinyin: 'nongkeyuannongda', py: 'nkynd', lat: '28.191388', lng: '113.079393' },
    { id: 126, name: '东湖', pinyin: 'donghu', py: 'dh', lat: '28.193639', lng: '113.095888' },
    { id: 127, name: '韶光', pinyin: 'shaoguang', py: 'sg', lat: '28.195928', lng: '113.107175' },
    { id: 128, name: '龙华', pinyin: 'longhua', py: 'lh', lat: '28.200191', lng: '113.129046' },
    { id: 129, name: '檀木桥', pinyin: 'tanmuqiao', py: 'tmq', lat: '28.201885', lng: '113.150154' },
    { id: 130, name: '曹家坪', pinyin: 'caojiaping', py: 'cjp', lat: '28.203549', lng: '113.17144' },
    { id: 131, name: '龙峰', pinyin: 'longfeng', py: 'lf', lat: '28.202187', lng: '113.183886' },
    { id: 132, name: '大路村', pinyin: 'dalucun', py: 'dlc', lat: '28.202036', lng: '113.205548' },
    { id: 133, name: '木马塅', pinyin: 'mumaduan', py: 'mmd', lat: '28.195701', lng: '113.211824' },
    { id: 134, name: '黄花机场T1T2', pinyin: 'huanghuajichangt1t2', py: 'hhjct1t2', lat: '28.190821', lng: '113.218003' },
    { id: 135, name: '高铁', pinyin: 'gaotie', py: 'gt', lat: '28.148803', lng: '113.06738' },
    { id: 136, name: '榔梨', pinyin: 'langli', py: 'll', lat: '28.160779', lng: '113.133341' },
    { id: 137, name: '机场', pinyin: 'jichang', py: 'jc', lat: '28.191672', lng: '113.219048' }
  ]
};
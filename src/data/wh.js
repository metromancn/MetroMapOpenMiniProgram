export default {
  lineList: [
    { name: '1号线', color: '#1C79C6', stations: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ] },
    { name: '2号线', color: '#FFA6D5', stations: [ 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 19, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68 ] },
    { name: '3号线', color: '#E8BD72', stations: [ 37, 69, 70, 71, 72, 73, 74, 75, 76, 77, 43, 78, 79, 80, 13, 81, 82, 83, 84, 85, 86, 87, 88, 89 ] },
    { name: '4号线', color: '#99CC33', stations: [ 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 51, 52, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 81, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123 ] },
    { name: '6号线', color: '#037D3B', stations: [ 88, 124, 125, 126, 127, 128, 129, 130, 131, 106, 132, 133, 134, 135, 47, 20, 136, 76, 137, 138, 139, 140, 40, 141, 142, 143, 144 ] },
    { name: '7号线', color: '#FF9800', stations: [ 142, 145, 146, 79, 44, 147, 76, 21, 148, 149, 150, 49, 151, 102, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163 ] },
    { name: '8号线', color: '#9AC2CE', stations: [ 164, 37, 165, 166, 167, 74, 22, 168, 169, 170, 97, 171, 172, 173, 174, 175, 176, 54, 177, 178, 179, 180, 181, 156, 182, 183 ] },
    { name: '11号线', color: '#FFCC00', stations: [ 63, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196 ] },
    { name: '阳逻线', color: '#C63283', stations: [ 70, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211 ] }
  ],
  stationList: [
    { id: 0, name: '径河', pinyin: 'jinghe', py: 'jh', lat: '30.659032', lng: '114.120825' },
    { id: 1, name: '三店', pinyin: 'sandian', py: 'sd', lat: '30.649064', lng: '114.120793' },
    { id: 2, name: '码头潭公园', pinyin: 'matoutangongyuan', py: 'mttgy', lat: '30.632776', lng: '114.123105' },
    { id: 3, name: '东吴大道', pinyin: 'dongwudadao', py: 'dwdd', lat: '30.624975', lng: '114.128566' },
    { id: 4, name: '五环大道', pinyin: 'wuhuandadao', py: 'whdd', lat: '30.617699', lng: '114.138881' },
    { id: 5, name: '额头湾', pinyin: 'etouwan', py: 'etw', lat: '30.618475', lng: '114.15593' },
    { id: 6, name: '竹叶海', pinyin: 'zhuyehai', py: 'zyh', lat: '30.615071', lng: '114.16388' },
    { id: 7, name: '舵落口', pinyin: 'duoluokou', py: 'dlk', lat: '30.609912', lng: '114.169448' },
    { id: 8, name: '古田一路', pinyin: 'gutianyilu', py: 'gtyl', lat: '30.604529', lng: '114.183052' },
    { id: 9, name: '古田二路', pinyin: 'gutianerlu', py: 'gtel', lat: '30.597538', lng: '114.196656' },
    { id: 10, name: '古田三路', pinyin: 'gutiansanlu', py: 'gtsl', lat: '30.593373', lng: '114.204762' },
    { id: 11, name: '古田四路', pinyin: 'gutiansilu', py: 'gtsl', lat: '30.589365', lng: '114.211531' },
    { id: 12, name: '汉西一路', pinyin: 'hanxiyilu', py: 'hxyl', lat: '30.5855', lng: '114.218811' },
    { id: 13, name: '宗关', pinyin: 'zongguan', py: 'zg', lat: '30.581039', lng: '114.225699' },
    { id: 14, name: '太平洋', pinyin: 'taipingyang', py: 'tpy', lat: '30.574025', lng: '114.240727' },
    { id: 15, name: '硚口路', pinyin: 'qiaokoulu', py: 'qkl', lat: '30.571557', lng: '114.25044' },
    { id: 16, name: '崇仁路', pinyin: 'chongrenlu', py: 'crl', lat: '30.573908', lng: '114.261914' },
    { id: 17, name: '利济北路', pinyin: 'lijibeilu', py: 'ljbl', lat: '30.577432', lng: '114.270105' },
    { id: 18, name: '友谊路', pinyin: 'youyilu', py: 'yyl', lat: '30.580868', lng: '114.278415' },
    { id: 19, name: '循礼门', pinyin: 'xunlimen', py: 'xlm', lat: '30.584923', lng: '114.286387' },
    { id: 20, name: '大智路', pinyin: 'dazhilu', py: 'dzl', lat: '30.591902', lng: '114.29435' },
    { id: 21, name: '三阳路', pinyin: 'sanyanglu', py: 'syl', lat: '30.598738', lng: '114.301322' },
    { id: 22, name: '黄浦路', pinyin: 'huangpulu', py: 'hpl', lat: '30.607895', lng: '114.307792' },
    { id: 23, name: '头道街', pinyin: 'toudaojie', py: 'tdj', lat: '30.617822', lng: '114.313913' },
    { id: 24, name: '二七路', pinyin: 'erqilu', py: 'eql', lat: '30.625028', lng: '114.31873' },
    { id: 25, name: '徐州新村', pinyin: 'xuzhouxincun', py: 'xzxc', lat: '30.631167', lng: '114.322925' },
    { id: 26, name: '丹水池', pinyin: 'danshuichi', py: 'dsc', lat: '30.643389', lng: '114.33' },
    { id: 27, name: '新荣', pinyin: 'xinrong', py: 'xr', lat: '30.6559', lng: '114.334528' },
    { id: 28, name: '堤角', pinyin: 'dijiao', py: 'dj', lat: '30.665858', lng: '114.338256' },
    { id: 29, name: '滕子岗', pinyin: 'tengzigang', py: 'tzg', lat: '30.674506', lng: '114.341462' },
    { id: 30, name: '滠口新城', pinyin: 'shekouxincheng', py: 'skxc', lat: '30.684536', lng: '114.342342' },
    { id: 31, name: '汉口北', pinyin: 'hankoubei', py: 'hkb', lat: '30.711941', lng: '114.329489' },
    { id: 32, name: '天河机场', pinyin: 'tianhejichang', py: 'thjc', lat: '30.770656', lng: '114.216592' },
    { id: 33, name: '航空总部', pinyin: 'hangkongzongbu', py: 'hkzb', lat: '30.732485', lng: '114.227254' },
    { id: 34, name: '宋家岗', pinyin: 'songjiagang', py: 'sjg', lat: '30.723125', lng: '114.237296' },
    { id: 35, name: '巨龙大道', pinyin: 'julongdadao', py: 'jldd', lat: '30.711115', lng: '114.254902' },
    { id: 36, name: '盘龙城', pinyin: 'panlongcheng', py: 'plc', lat: '30.700252', lng: '114.259529' },
    { id: 37, name: '宏图大道', pinyin: 'hongtudadao', py: 'htdd', lat: '30.666746', lng: '114.279196' },
    { id: 38, name: '常青城', pinyin: 'changqingcheng', py: 'cqc', lat: '30.658777', lng: '114.255066' },
    { id: 39, name: '金银潭', pinyin: 'jinyintan', py: 'jyt', lat: '30.65041', lng: '114.242808' },
    { id: 40, name: '常青花园', pinyin: 'changqinghuayuan', py: 'cqhy', lat: '30.640211', lng: '114.242384' },
    { id: 41, name: '长港路', pinyin: 'changganglu', py: 'cgl', lat: '30.627171', lng: '114.246016' },
    { id: 42, name: '汉口火车站', pinyin: 'hankouhuochezhan', py: 'hkhcz', lat: '30.615446', lng: '114.254953' },
    { id: 43, name: '范湖', pinyin: 'fanhu', py: 'fh', lat: '30.607694', lng: '114.259204' },
    { id: 44, name: '王家墩东', pinyin: 'wangjiadundong', py: 'wjdd', lat: '30.594082', lng: '114.26326' },
    { id: 45, name: '青年路', pinyin: 'qingnianlu', py: 'qnl', lat: '30.585752', lng: '114.26474' },
    { id: 46, name: '中山公园', pinyin: 'zhongshangongyuan', py: 'zsgy', lat: '30.581983', lng: '114.27283' },
    { id: 47, name: '江汉路', pinyin: 'jianghanlu', py: 'jhl', lat: '30.580349', lng: '114.291462' },
    { id: 48, name: '积玉桥', pinyin: 'jiyuqiao', py: 'jyq', lat: '30.561301', lng: '114.308666' },
    { id: 49, name: '螃蟹岬', pinyin: 'pangxiejia', py: 'pxj', lat: '30.553336', lng: '114.317459' },
    { id: 50, name: '小龟山', pinyin: 'xiaoguishan', py: 'xgs', lat: '30.551105', lng: '114.32653' },
    { id: 51, name: '洪山广场', pinyin: 'hongshanguangchang', py: 'hsgc', lat: '30.545205', lng: '114.336272' },
    { id: 52, name: '中南路', pinyin: 'zhongnanlu', py: 'znl', lat: '30.537485', lng: '114.332898' },
    { id: 53, name: '宝通寺', pinyin: 'baotongsi', py: 'bts', lat: '30.530337', lng: '114.341272' },
    { id: 54, name: '街道口', pinyin: 'jiedaokou', py: 'jdk', lat: '30.526622', lng: '114.353353' },
    { id: 55, name: '广埠屯', pinyin: 'guangbutun', py: 'gbt', lat: '30.522445', lng: '114.364199' },
    { id: 56, name: '虎泉', pinyin: 'huquan', py: 'hq', lat: '30.513439', lng: '114.369472' },
    { id: 57, name: '杨家湾', pinyin: 'yangjiawan', py: 'yjw', lat: '30.505115', lng: '114.382706' },
    { id: 58, name: '光谷广场', pinyin: 'guangguguangchang', py: 'gggc', lat: '30.506039', lng: '114.398902' },
    { id: 59, name: '珞雄路', pinyin: 'luoxionglu', py: 'lxl', lat: '30.506963', lng: '114.404813' },
    { id: 60, name: '华中科技大学', pinyin: 'huazhongkejidaxue', py: 'hzkjdx', lat: '30.507416', lng: '114.414233' },
    { id: 61, name: '光谷大道', pinyin: 'guanggudadao', py: 'ggdd', lat: '30.506547', lng: '114.423809' },
    { id: 62, name: '佳园路', pinyin: 'jiayuanlu', py: 'jyl', lat: '30.500026', lng: '114.430906' },
    { id: 63, name: '武汉东站', pinyin: 'wuhandongzhan', py: 'whdz', lat: '30.487393', lng: '114.431812' },
    { id: 64, name: '黄龙山路', pinyin: 'huanglongshanlu', py: 'hlsl', lat: '30.477518', lng: '114.430181' },
    { id: 65, name: '金融港北', pinyin: 'jinronggangbei', py: 'jrgb', lat: '30.461964', lng: '114.420407' },
    { id: 66, name: '秀湖', pinyin: 'xiuhu', py: 'xh', lat: '30.447749', lng: '114.42103' },
    { id: 67, name: '藏龙东街', pinyin: 'canglongdongjie', py: 'cldj', lat: '30.437038', lng: '114.42964' },
    { id: 68, name: '佛祖岭', pinyin: 'fozuling', py: 'fzl', lat: '30.438675', lng: '114.439768' },
    { id: 69, name: '市民之家', pinyin: 'shiminzhijia', py: 'smzj', lat: '30.66131', lng: '114.296802' },
    { id: 70, name: '后湖大道', pinyin: 'houhudadao', py: 'hhdd', lat: '30.650288', lng: '114.304112' },
    { id: 71, name: '兴业路', pinyin: 'xingyelu', py: 'xyl', lat: '30.641139', lng: '114.304191' },
    { id: 72, name: '二七小路', pinyin: 'erqixiaolu', py: 'eqxl', lat: '30.628754', lng: '114.307777' },
    { id: 73, name: '罗家庄', pinyin: 'luojiazhuang', py: 'ljz', lat: '30.623617', lng: '114.303955' },
    { id: 74, name: '赵家条', pinyin: 'zhaojiatiao', py: 'zjt', lat: '30.617865', lng: '114.297065' },
    { id: 75, name: '惠济二路', pinyin: 'huijierlu', py: 'hjel', lat: '30.61298', lng: '114.291424' },
    { id: 76, name: '香港路', pinyin: 'xiangganglu', py: 'xgl', lat: '30.605155', lng: '114.284689' },
    { id: 77, name: '菱角湖', pinyin: 'lingjiaohu', py: 'ljh', lat: '30.604135', lng: '114.275811' },
    { id: 78, name: '云飞路', pinyin: 'yunfeilu', py: 'yfl', lat: '30.605164', lng: '114.252132' },
    { id: 79, name: '武汉商务区', pinyin: 'wuhanshangwuqu', py: 'whswq', lat: '30.597596', lng: '114.246878' },
    { id: 80, name: '双墩', pinyin: 'shuangdun', py: 'sd', lat: '30.586587', lng: '114.231879' },
    { id: 81, name: '王家湾', pinyin: 'wangjiawan', py: 'wjw', lat: '30.562113', lng: '114.210188' },
    { id: 82, name: '龙阳村', pinyin: 'longyangcun', py: 'lyc', lat: '30.552879', lng: '114.206317' },
    { id: 83, name: '陶家岭', pinyin: 'taojialing', py: 'tjl', lat: '30.54558', lng: '114.201838' },
    { id: 84, name: '四新大道', pinyin: 'sixindadao', py: 'sxdd', lat: '30.533655', lng: '114.193593' },
    { id: 85, name: '汉阳客运站', pinyin: 'hanyangkeyunzhan', py: 'hykyz', lat: '30.527802', lng: '114.189048' },
    { id: 86, name: '三角湖', pinyin: 'sanjiaohu', py: 'sjh', lat: '30.516513', lng: '114.179687' },
    { id: 87, name: '体育中心', pinyin: 'tiyuzhongxin', py: 'tyzx', lat: '30.50604', lng: '114.170964' },
    { id: 88, name: '东风公司', pinyin: 'dongfenggongsi', py: 'dfgs', lat: '30.500104', lng: '114.166049' },
    { id: 89, name: '沌阳大道', pinyin: 'zhuanyangdadao', py: 'zydd', lat: '30.489408', lng: '114.157139' },
    { id: 90, name: '武汉火车站', pinyin: 'wuhanhuochezhan', py: 'whhcz', lat: '30.607422', lng: '114.424414' },
    { id: 91, name: '杨春湖', pinyin: 'yangchunhu', py: 'ych', lat: '30.605316', lng: '114.416357' },
    { id: 92, name: '工业四路', pinyin: 'gongyesilu', py: 'gysl', lat: '30.607995', lng: '114.405832' },
    { id: 93, name: '仁和路', pinyin: 'renhelu', py: 'rhl', lat: '30.60516', lng: '114.389084' },
    { id: 94, name: '园林路', pinyin: 'yuanlinlu', py: 'yll', lat: '30.599563', lng: '114.376708' },
    { id: 95, name: '罗家港', pinyin: 'luojiagang', py: 'ljg', lat: '30.593764', lng: '114.371285' },
    { id: 96, name: '铁机路', pinyin: 'tiejilu', py: 'tjl', lat: '30.583905', lng: '114.368884' },
    { id: 97, name: '岳家嘴', pinyin: 'yuejiazui', py: 'yjz', lat: '30.576637', lng: '114.361556' },
    { id: 98, name: '东亭', pinyin: 'dongting', py: 'dt', lat: '30.570279', lng: '114.355814' },
    { id: 99, name: '青鱼嘴', pinyin: 'qingyuzui', py: 'qyz', lat: '30.563734', lng: '114.349865' },
    { id: 100, name: '楚河汉街', pinyin: 'chuhehanjie', py: 'chhj', lat: '30.553798', lng: '114.341451' },
    { id: 101, name: '梅苑小区', pinyin: 'meiyuanxiaoqu', py: 'myxq', lat: '30.530975', lng: '114.326195' },
    { id: 102, name: '武昌火车站', pinyin: 'wuchanghuochezhan', py: 'wchcz', lat: '30.530783', lng: '114.316191' },
    { id: 103, name: '首义路', pinyin: 'shouyilu', py: 'syl', lat: '30.533491', lng: '114.309359' },
    { id: 104, name: '复兴路', pinyin: 'fuxinglu', py: 'fxl', lat: '30.534306', lng: '114.301565' },
    { id: 105, name: '拦江路', pinyin: 'lanjianglu', py: 'ljl', lat: '30.542923', lng: '114.269008' },
    { id: 106, name: '钟家村', pinyin: 'zhongjiacun', py: 'zjc', lat: '30.549289', lng: '114.266144' },
    { id: 107, name: '汉阳火车站', pinyin: 'hanyanghuochezhan', py: 'hyhcz', lat: '30.551747', lng: '114.252842' },
    { id: 108, name: '五里墩', pinyin: 'wulidun', py: 'wld', lat: '30.553973', lng: '114.241082' },
    { id: 109, name: '七里庙', pinyin: 'qilimiao', py: 'qlm', lat: '30.556698', lng: '114.23119' },
    { id: 110, name: '十里铺', pinyin: 'shilipu', py: 'slp', lat: '30.559379', lng: '114.219271' },
    { id: 111, name: '玉龙路', pinyin: 'yulonglu', py: 'yll', lat: '30.564514', lng: '114.201385' },
    { id: 112, name: '永安堂', pinyin: 'yongantang', py: 'yat', lat: '30.566454', lng: '114.188907' },
    { id: 113, name: '孟家铺', pinyin: 'mengjiapu', py: 'mjp', lat: '30.564996', lng: '114.173904' },
    { id: 114, name: '黄金口', pinyin: 'huangjinkou', py: 'hjk', lat: '30.564063', lng: '114.145381' },
    { id: 115, name: '新天', pinyin: 'xintian', py: 'xt', lat: '30.552208', lng: '114.126304' },
    { id: 116, name: '集贤', pinyin: 'jixian', py: 'jx', lat: '30.550101', lng: '114.11226' },
    { id: 117, name: '知音', pinyin: 'zhiyin', py: 'zy', lat: '30.556846', lng: '114.091747' },
    { id: 118, name: '新农', pinyin: 'xinnong', py: 'xn', lat: '30.560523', lng: '114.074785' },
    { id: 119, name: '凤凰路', pinyin: 'fenghuanglu', py: 'fhl', lat: '30.563424', lng: '114.06029' },
    { id: 120, name: '蔡甸广场', pinyin: 'caidianguangchang', py: 'cdgc', lat: '30.57305', lng: '114.041708' },
    { id: 121, name: '临嶂大道', pinyin: 'linzhangdadao', py: 'lzdd', lat: '30.571821', lng: '114.028565' },
    { id: 122, name: '新庙村', pinyin: 'xinmiaocun', py: 'xmc', lat: '30.579839', lng: '114.009349' },
    { id: 123, name: '柏林', pinyin: 'bailin', py: 'bl', lat: '30.58225', lng: '113.994865' },
    { id: 124, name: '车城东路', pinyin: 'chechengdonglu', py: 'ccdl', lat: '30.495558', lng: '114.179989' },
    { id: 125, name: '江城大道', pinyin: 'jiangchengdadao', py: 'jcdd', lat: '30.496399', lng: '114.202219' },
    { id: 126, name: '老关村', pinyin: 'laoguancun', py: 'lgc', lat: '30.492923', lng: '114.225919' },
    { id: 127, name: '国博中心南', pinyin: 'guobozhongxinnan', py: 'gbzxn', lat: '30.503776', lng: '114.234491' },
    { id: 128, name: '国博中心北', pinyin: 'guobozhongxinbei', py: 'gbzxb', lat: '30.510579', lng: '114.242634' },
    { id: 129, name: '前进村', pinyin: 'qianjincun', py: 'qjc', lat: '30.520164', lng: '114.253374' },
    { id: 130, name: '建港', pinyin: 'jiangang', py: 'jg', lat: '30.526617', lng: '114.259696' },
    { id: 131, name: '马鹦路', pinyin: 'mayinglu', py: 'myl', lat: '30.537871', lng: '114.266785' },
    { id: 132, name: '琴台', pinyin: 'qintai', py: 'qt', lat: '30.557535', lng: '114.266278' },
    { id: 133, name: '武胜路', pinyin: 'wushenglu', py: 'wsl', lat: '30.569464', lng: '114.268944' },
    { id: 134, name: '汉正街', pinyin: 'hanzhengjie', py: 'hzj', lat: '30.571229', lng: '114.274662' },
    { id: 135, name: '六渡桥', pinyin: 'liuduqiao', py: 'ldq', lat: '30.574993', lng: '114.28427' },
    { id: 136, name: '苗栗路', pinyin: 'miaolilu', py: 'mll', lat: '30.598803', lng: '114.289951' },
    { id: 137, name: '三眼桥', pinyin: 'sanyanqiao', py: 'syq', lat: '30.610318', lng: '114.275741' },
    { id: 138, name: '唐家墩', pinyin: 'tangjiadun', py: 'tjd', lat: '30.617661', lng: '114.271272' },
    { id: 139, name: '石桥', pinyin: 'shiqiao', py: 'sq', lat: '30.630552', lng: '114.265323' },
    { id: 140, name: '杨汊湖', pinyin: 'yangchahu', py: 'ych', lat: '30.63583', lng: '114.261053' },
    { id: 141, name: '轻工大学', pinyin: 'qinggongdaxue', py: 'qgdx', lat: '30.639682', lng: '114.234397' },
    { id: 142, name: '园博园北', pinyin: 'yuanboyuanbei', py: 'ybyb', lat: '30.637924', lng: '114.222896' },
    { id: 143, name: '金银湖', pinyin: 'jinyinhu', py: 'jyh', lat: '30.639308', lng: '114.204936' },
    { id: 144, name: '金银湖公园', pinyin: 'jinyinhugongyuan', py: 'jyhgy', lat: '30.636901', lng: '114.180897' },
    { id: 145, name: '园博园', pinyin: 'yuanboyuan', py: 'yby', lat: '30.618316', lng: '114.225872' },
    { id: 146, name: '常码头', pinyin: 'changmatou', py: 'cmt', lat: '30.60465', lng: '114.234788' },
    { id: 147, name: '取水楼', pinyin: 'qushuilou', py: 'qsl', lat: '30.597636', lng: '114.274651' },
    { id: 148, name: '徐家棚(7号线)', pinyin: 'xujiapeng', py: 'xjp', lat: '30.588699', lng: '114.33182' },
    { id: 149, name: '湖北大学', pinyin: 'hubeidaxue', py: 'hbdx', lat: '30.577806', lng: '114.329469' },
    { id: 150, name: '新河街', pinyin: 'xinhejie', py: 'xhj', lat: '30.562559', lng: '114.317109' },
    { id: 151, name: '小东门', pinyin: 'xiaodongmen', py: 'xdm', lat: '30.54501', lng: '114.318456' },
    { id: 152, name: '瑞安街', pinyin: 'ruianjie', py: 'raj', lat: '30.51491', lng: '114.314193' },
    { id: 153, name: '建安街', pinyin: 'jiananjie', py: 'jaj', lat: '30.504022', lng: '114.313751' },
    { id: 154, name: '湖工大', pinyin: 'hugongda', py: 'hgd', lat: '30.483651', lng: '114.31337' },
    { id: 155, name: '板桥', pinyin: 'banqiao', py: 'bq', lat: '30.474305', lng: '114.313461' },
    { id: 156, name: '野芷湖', pinyin: 'yezhihu', py: 'yzh', lat: '30.461962', lng: '114.319201' },
    { id: 157, name: '新路村', pinyin: 'xinlucun', py: 'xlc', lat: '30.441656', lng: '114.318375' },
    { id: 158, name: '大花岭', pinyin: 'dahualing', py: 'dhl', lat: '30.412343', lng: '114.320107' },
    { id: 159, name: '江夏客厅', pinyin: 'jiangxiaketing', py: 'jxkt', lat: '30.389334', lng: '114.321679' },
    { id: 160, name: '谭鑫培公园', pinyin: 'tanxinpeigongyuan', py: 'txpgy', lat: '30.370545', lng: '114.322039' },
    { id: 161, name: '北华街', pinyin: 'beihuajie', py: 'bhj', lat: '30.358102', lng: '114.323573' },
    { id: 162, name: '纸坊大街', pinyin: 'zhifangdajie', py: 'zfdj', lat: '30.344784', lng: '114.324561' },
    { id: 163, name: '青龙山地铁小镇', pinyin: 'qinglongshanditiexiaozhen', py: 'qlsdtxz', lat: '30.318796', lng: '114.333985' },
    { id: 164, name: '金潭路', pinyin: 'jintanlu', py: 'jtl', lat: '30.677201', lng: '114.284045' },
    { id: 165, name: '塔子湖', pinyin: 'tazihu', py: 'tzh', lat: '30.652607', lng: '114.280351' },
    { id: 166, name: '中一路', pinyin: 'zhongyilu', py: 'zyl', lat: '30.6383', lng: '114.281385' },
    { id: 167, name: '竹叶山', pinyin: 'zhuyeshan', py: 'zys', lat: '30.62532', lng: '114.2871' },
    { id: 168, name: '徐家棚(8号线)', pinyin: 'xujiapeng', py: 'xjp', lat: '30.591952', lng: '114.335948' },
    { id: 169, name: '徐东', pinyin: 'xudong', py: 'xd', lat: '30.587968', lng: '114.346237' },
    { id: 170, name: '汪家墩', pinyin: 'wangjiadun', py: 'wjd', lat: '30.584412', lng: '114.351154' },
    { id: 171, name: '梨园', pinyin: 'liyuan', py: 'ly', lat: '30.574833', lng: '114.370084' },
    { id: 172, name: '省博湖北日报', pinyin: 'shengbohubeiribao', py: 'sbhbrb', lat: '30.564181', lng: '114.364718' },
    { id: 173, name: '中南医院', pinyin: 'zhongnanyiyuan', py: 'znyy', lat: '30.556744', lng: '114.356455' },
    { id: 174, name: '水果湖', pinyin: 'shuiguohu', py: 'sgh', lat: '30.551672', lng: '114.346241' },
    { id: 175, name: '洪山路', pinyin: 'hongshanlu', py: 'hsl', lat: '30.545389', lng: '114.343731' },
    { id: 176, name: '小洪山', pinyin: 'xiaohongshan', py: 'xhs', lat: '30.535871', lng: '114.352024' },
    { id: 177, name: '马房山', pinyin: 'mafangshan', py: 'mfs', lat: '30.514116', lng: '114.350189' },
    { id: 178, name: '文治街', pinyin: 'wenzhijie', py: 'wzj', lat: '30.500362', lng: '114.344332' },
    { id: 179, name: '文昌路', pinyin: 'wenchanglu', py: 'wcl', lat: '30.491986', lng: '114.330019' },
    { id: 180, name: '省农科院', pinyin: 'shengnongkeyuan', py: 'snky', lat: '30.484136', lng: '114.325883' },
    { id: 181, name: '马湖', pinyin: 'mahu', py: 'mh', lat: '30.472495', lng: '114.325223' },
    { id: 182, name: '黄家湖地铁小镇', pinyin: 'huangjiahuditiexiaozhen', py: 'hjhdtxz', lat: '30.436758', lng: '114.298044' },
    { id: 183, name: '军运村', pinyin: 'junyuncun', py: 'jyc', lat: '30.427397', lng: '114.295018' },
    { id: 184, name: '湖口', pinyin: 'hukou', py: 'hk', lat: '30.487943', lng: '114.448722' },
    { id: 185, name: '光谷同济医院', pinyin: 'guanggutongjiyiyuan', py: 'ggtjyy', lat: '30.485281', lng: '114.466403' },
    { id: 186, name: '光谷生物园', pinyin: 'guanggushengwuyuan', py: 'ggswy', lat: '30.487629', lng: '114.48122' },
    { id: 187, name: '光谷四路', pinyin: 'guanggusilu', py: 'ggsl', lat: '30.489173', lng: '114.492002' },
    { id: 188, name: '光谷五路', pinyin: 'guangguwulu', py: 'ggwl', lat: '30.485124', lng: '114.502956' },
    { id: 189, name: '光谷六路', pinyin: 'guangguliulu', py: 'ggll', lat: '30.48505', lng: '114.51287' },
    { id: 190, name: '豹澥', pinyin: 'baoxie', py: 'bx', lat: '30.488739', lng: '114.522912' },
    { id: 191, name: '光谷七路', pinyin: 'guangguqilu', py: 'ggql', lat: '30.488452', lng: '114.534091' },
    { id: 192, name: '长岭山', pinyin: 'changlingshan', py: 'cls', lat: '30.487648', lng: '114.563167' },
    { id: 193, name: '未来一路', pinyin: 'weilaiyilu', py: 'wlyl', lat: '30.484597', lng: '114.585139' },
    { id: 194, name: '未来三路', pinyin: 'weilaisanlu', py: 'wlsl', lat: '30.486473', lng: '114.606007' },
    { id: 195, name: '左岭', pinyin: 'zuoling', py: 'zl', lat: '30.488138', lng: '114.620652' },
    { id: 196, name: '葛店南站', pinyin: 'gediannanzhan', py: 'gdnz', lat: '30.489441', lng: '114.661459' },
    { id: 197, name: '百步亭花园路', pinyin: 'baibutinghuayuanlu', py: 'bbthyl', lat: '30.654378', lng: '114.315477' },
    { id: 198, name: '新荣客运站', pinyin: 'xinrongkeyunzhan', py: 'xrkyz', lat: '30.657581', lng: '114.332729' },
    { id: 199, name: '幸福湾', pinyin: 'xingfuwan', py: 'xfw', lat: '30.672107', lng: '114.344091' },
    { id: 200, name: '朱家河', pinyin: 'zhujiahe', py: 'zjh', lat: '30.68013', lng: '114.364653' },
    { id: 201, name: '谌家矶', pinyin: 'shenjiaji', py: 'sjj', lat: '30.683872', lng: '114.373102' },
    { id: 202, name: '青龙', pinyin: 'qinglong', py: 'ql', lat: '30.705478', lng: '114.390397' },
    { id: 203, name: '高车', pinyin: 'gaoche', py: 'gc', lat: '30.713605', lng: '114.409011' },
    { id: 204, name: '武湖', pinyin: 'wuhu', py: 'wh', lat: '30.707009', lng: '114.429997' },
    { id: 205, name: '沙口', pinyin: 'shakou', py: 'sk', lat: '30.709223', lng: '114.47773' },
    { id: 206, name: '军民村', pinyin: 'junmincun', py: 'jmc', lat: '30.70998', lng: '114.515227' },
    { id: 207, name: '武生院', pinyin: 'wushengyuan', py: 'wsy', lat: '30.70855', lng: '114.525698' },
    { id: 208, name: '阳逻', pinyin: 'yangluo', py: 'yl', lat: '30.703569', lng: '114.553035' },
    { id: 209, name: '阳逻开发区', pinyin: 'yangluokaifaqu', py: 'ylkfq', lat: '30.701594', lng: '114.567766' },
    { id: 210, name: '施岗', pinyin: 'shigang', py: 'sg', lat: '30.706253', lng: '114.600907' },
    { id: 211, name: '金台', pinyin: 'jintai', py: 'jt', lat: '30.71367', lng: '114.619112' }
  ]
};
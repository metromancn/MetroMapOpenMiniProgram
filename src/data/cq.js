export default {
  lineList: [
    { name: '1号线', color: '#F91E34', stations: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ] },
    { name: '2号线', color: '#0E9E3A', stations: [ 2, 25, 26, 27, 28, 29, 30, 31, 6, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47 ] },
    { name: '3号线', color: '#3366CC', stations: [ 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 4, 29, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83 ] },
    { name: '空港线', color: '#4B84DD', stations: [ 82, 84, 85, 86, 87, 88, 89 ] },
    { name: '4号线', color: '#FF9900', stations: [ 90, 91, 92, 93, 94, 95, 96, 97 ] },
    { name: '5号线', color: '#00A2DB', stations: [ 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 9, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118 ] },
    { name: '6号线', color: '#FD67A3', stations: [ 119, 120, 121, 122, 123, 1, 124, 125, 126, 127, 128, 66, 129, 106, 105, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142 ] },
    { name: '国博线', color: '#FF88B9', stations: [ 134, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154 ] },
    { name: '10号线', color: '#7E1FC1', stations: [ 155, 127, 156, 71, 91, 157, 158, 159, 160, 161, 162, 83, 163, 164, 165, 166, 167, 147, 148 ] },
    { name: '环线', color: '#D6BD7C', stations: [ 168, 169, 170, 171, 172, 173, 105, 174, 175, 90, 71, 176, 126, 177, 178, 123, 179, 180, 60, 181, 182, 183, 184, 185, 186, 187, 188, 111, 189, 190, 168 ] },
    { name: '4号线环线直通快线', color: '#D6BD7C', stations: [ 168, 169, 105, 90, 91, 92, 97 ] }
  ],
  stationList: [
    { id: 0, name: '朝天门', pinyin: 'chaotianmen', py: 'ctm', lat: '29.566312', lng: '106.587373' },
    { id: 1, name: '小什字', pinyin: 'xiaoshizi', py: 'xsz', lat: '29.560073', lng: '106.583543' },
    { id: 2, name: '较场口', pinyin: 'jiaochangkou', py: 'jck', lat: '29.553223', lng: '106.571827' },
    { id: 3, name: '七星岗', pinyin: 'qixinggang', py: 'qxg', lat: '29.554865', lng: '106.563072' },
    { id: 4, name: '两路口', pinyin: 'lianglukou', py: 'llk', lat: '29.552626', lng: '106.549339' },
    { id: 5, name: '鹅岭', pinyin: 'eling', py: 'el', lat: '29.548034', lng: '106.53389' },
    { id: 6, name: '大坪', pinyin: 'daping', py: 'dp', lat: '29.540679', lng: '106.518827' },
    { id: 7, name: '石油路', pinyin: 'shiyoulu', py: 'syl', lat: '29.53814', lng: '106.508248' },
    { id: 8, name: '歇台子', pinyin: 'xietaizi', py: 'xtz', lat: '29.535545', lng: '106.498356' },
    { id: 9, name: '石桥铺', pinyin: 'shiqiaopu', py: 'sqp', lat: '29.532791', lng: '106.484886' },
    { id: 10, name: '高庙村', pinyin: 'gaomiaocun', py: 'gmc', lat: '29.536641', lng: '106.469329' },
    { id: 11, name: '马家岩', pinyin: 'majiayan', py: 'mjy', lat: '29.545037', lng: '106.467972' },
    { id: 12, name: '小龙坎', pinyin: 'xiaolongkan', py: 'xlk', lat: '29.553867', lng: '106.468433' },
    { id: 13, name: '沙坪坝(1)', pinyin: 'shapingba', py: 'spb', lat: '29.556629', lng: '106.45925' },
    { id: 14, name: '杨公桥', pinyin: 'yanggongqiao', py: 'ygq', lat: '29.561762', lng: '106.450323' },
    { id: 15, name: '烈士墓', pinyin: 'lieshimu', py: 'lsm', lat: '29.567473', lng: '106.445688' },
    { id: 16, name: '磁器口', pinyin: 'ciqikou', py: 'cqk', lat: '29.576767', lng: '106.446482' },
    { id: 17, name: '石井坡', pinyin: 'shijingpo', py: 'sjp', lat: '29.589438', lng: '106.444251' },
    { id: 18, name: '双碑', pinyin: 'shuangbei', py: 'sb', lat: '29.606084', lng: '106.444258' },
    { id: 19, name: '赖家桥', pinyin: 'laijiaqiao', py: 'ljq', lat: '29.610374', lng: '106.381429' },
    { id: 20, name: '微电园', pinyin: 'weidianyuan', py: 'wdy', lat: '29.609758', lng: '106.36275' },
    { id: 21, name: '陈家桥', pinyin: 'chenjiaqiao', py: 'cjq', lat: '29.607417', lng: '106.328289' },
    { id: 22, name: '大学城', pinyin: 'daxuecheng', py: 'dxc', lat: '29.607435', lng: '106.308763' },
    { id: 23, name: '尖顶坡', pinyin: 'jiandingpo', py: 'jdp', lat: '29.607332', lng: '106.292952' },
    { id: 24, name: '璧山', pinyin: 'bishan', py: 'bs', lat: '29.612281', lng: '106.232607' },
    { id: 25, name: '临江门', pinyin: 'linjiangmen', py: 'ljm', lat: '29.558293', lng: '106.574236' },
    { id: 26, name: '黄花园', pinyin: 'huanghuayuan', py: 'hhy', lat: '29.563407', lng: '106.564832' },
    { id: 27, name: '大溪沟', pinyin: 'daxigou', py: 'dxg', lat: '29.566197', lng: '106.5584' },
    { id: 28, name: '曾家岩', pinyin: 'zengjiayan', py: 'zjy', lat: '29.566496', lng: '106.550075' },
    { id: 29, name: '牛角沱', pinyin: 'niujiaotuo', py: 'njt', lat: '29.56071', lng: '106.542586' },
    { id: 30, name: '李子坝', pinyin: 'liziba', py: 'lzb', lat: '29.552917', lng: '106.537661' },
    { id: 31, name: '佛图关', pinyin: 'fotuguan', py: 'ftg', lat: '29.54938', lng: '106.531487' },
    { id: 32, name: '袁家岗', pinyin: 'yuanjiagang', py: 'yjg', lat: '29.528816', lng: '106.513731' },
    { id: 33, name: '谢家湾(2)', pinyin: 'xiejiawan', py: 'xjw', lat: '29.520442', lng: '106.51769' },
    { id: 34, name: '杨家坪', pinyin: 'yangjiaping', py: 'yjp', lat: '29.507912', lng: '106.513849' },
    { id: 35, name: '动物园', pinyin: 'dongwuyuan', py: 'dwy', lat: '29.500069', lng: '106.509343' },
    { id: 36, name: '大堰村', pinyin: 'dayancun', py: 'dyc', lat: '29.499658', lng: '106.499172' },
    { id: 37, name: '马王场', pinyin: 'mawangchang', py: 'mwc', lat: '29.496086', lng: '106.488722' },
    { id: 38, name: '平安', pinyin: 'pingan', py: 'pa', lat: '29.488746', lng: '106.485031' },
    { id: 39, name: '大渡口', pinyin: 'dadukou', py: 'ddk', lat: '29.481854', lng: '106.478197' },
    { id: 40, name: '新山村', pinyin: 'xinshancun', py: 'xsc', lat: '29.472005', lng: '106.476403' },
    { id: 41, name: '天堂堡', pinyin: 'tiantangbao', py: 'ttb', lat: '29.466644', lng: '106.472251' },
    { id: 42, name: '建桥', pinyin: 'jianqiao', py: 'jq', lat: '29.44995', lng: '106.474708' },
    { id: 43, name: '金家湾', pinyin: 'jinjiawan', py: 'jjw', lat: '29.437839', lng: '106.475529' },
    { id: 44, name: '刘家坝', pinyin: 'liujiaba', py: 'ljb', lat: '29.427523', lng: '106.482696' },
    { id: 45, name: '白居寺', pinyin: 'baijusi', py: 'bjs', lat: '29.414608', lng: '106.491923' },
    { id: 46, name: '大江', pinyin: 'dajiang', py: 'dj', lat: '29.384145', lng: '106.501074' },
    { id: 47, name: '鱼洞', pinyin: 'yudong', py: 'yd', lat: '29.375894', lng: '106.505874' },
    { id: 48, name: '金竹', pinyin: 'jinzhu', py: 'jz', lat: '29.375575', lng: '106.523928' },
    { id: 49, name: '鱼胡路', pinyin: 'yuhulu', py: 'yhl', lat: '29.377669', lng: '106.539141' },
    { id: 50, name: '学堂湾', pinyin: 'xuetangwan', py: 'xtw', lat: '29.398011', lng: '106.543111' },
    { id: 51, name: '大山村', pinyin: 'dashancun', py: 'dsc', lat: '29.412797', lng: '106.543669' },
    { id: 52, name: '花溪', pinyin: 'huaxi', py: 'hx', lat: '29.432179', lng: '106.550299' },
    { id: 53, name: '岔路口', pinyin: 'chalukou', py: 'clk', lat: '29.44853', lng: '106.554591' },
    { id: 54, name: '九公里', pinyin: 'jiugongli', py: 'jgl', lat: '29.458495', lng: '106.559086' },
    { id: 55, name: '麒龙', pinyin: 'qilong', py: 'ql', lat: '29.466952', lng: '106.562594' },
    { id: 56, name: '八公里', pinyin: 'bagongli', py: 'bgl', lat: '29.478141', lng: '106.565899' },
    { id: 57, name: '重庆交通大学', pinyin: 'chongqingjiaotongdaxue', py: 'cqjtdx', lat: '29.488676', lng: '106.572744' },
    { id: 58, name: '六公里', pinyin: 'liugongli', py: 'lgl', lat: '29.497797', lng: '106.573323' },
    { id: 59, name: '重庆工商大学', pinyin: 'chongqinggongshangdaxue', py: 'cqgsdx', lat: '29.507349', lng: '106.573865' },
    { id: 60, name: '四公里', pinyin: 'sigongli', py: 'sgl', lat: '29.516667', lng: '106.576134' },
    { id: 61, name: '南坪', pinyin: 'nanping', py: 'np', lat: '29.525932', lng: '106.56989' },
    { id: 62, name: '工贸', pinyin: 'gongmao', py: 'gm', lat: '29.53157', lng: '106.563367' },
    { id: 63, name: '铜元局', pinyin: 'tongyuanju', py: 'tyj', lat: '29.536126', lng: '106.551522' },
    { id: 64, name: '华新街', pinyin: 'huaxinjie', py: 'hxj', lat: '29.563968', lng: '106.537113' },
    { id: 65, name: '观音桥', pinyin: 'guanyinqiao', py: 'gyq', lat: '29.573505', lng: '106.532436' },
    { id: 66, name: '红旗河沟', pinyin: 'hongqihegou', py: 'hqhg', lat: '29.585326', lng: '106.526245' },
    { id: 67, name: '嘉州路', pinyin: 'jiazhoulu', py: 'jzl', lat: '29.595457', lng: '106.522147' },
    { id: 68, name: '郑家院子', pinyin: 'zhengjiayuanzi', py: 'zjyz', lat: '29.599506', lng: '106.529936' },
    { id: 69, name: '唐家院子', pinyin: 'tangjiayuanzi', py: 'tjyz', lat: '29.599301', lng: '106.540407' },
    { id: 70, name: '狮子坪', pinyin: 'shiziping', py: 'szp', lat: '29.601465', lng: '106.54914' },
    { id: 71, name: '重庆北站南广场', pinyin: 'chongqingbeizhannanguangchang', py: 'cqbzngc', lat: '29.606029', lng: '106.550127' },
    { id: 72, name: '龙头寺', pinyin: 'longtousi', py: 'lts', lat: '29.616775', lng: '106.549623' },
    { id: 73, name: '童家院子', pinyin: 'tongjiayuanzi', py: 'tjyz', lat: '29.628461', lng: '106.555052' },
    { id: 74, name: '金渝', pinyin: 'jinyu', py: 'jy', lat: '29.635418', lng: '106.570652' },
    { id: 75, name: '金童路', pinyin: 'jintonglu', py: 'jtl', lat: '29.64336', lng: '106.567379' },
    { id: 76, name: '鸳鸯', pinyin: 'yuanyang', py: 'yy', lat: '29.661348', lng: '106.560116' },
    { id: 77, name: '园博园', pinyin: 'yuanboyuan', py: 'yby', lat: '29.674642', lng: '106.563774' },
    { id: 78, name: '翠云', pinyin: 'cuiyun', py: 'cy', lat: '29.685872', lng: '106.572744' },
    { id: 79, name: '长福路', pinyin: 'changfulu', py: 'cfl', lat: '29.687549', lng: '106.588515' },
    { id: 80, name: '回兴', pinyin: 'huixing', py: 'hx', lat: '29.690308', lng: '106.605767' },
    { id: 81, name: '双龙', pinyin: 'shuanglong', py: 'sl', lat: '29.697857', lng: '106.618728' },
    { id: 82, name: '碧津', pinyin: 'bijin', py: 'bj', lat: '29.711158', lng: '106.632632' },
    { id: 83, name: '江北机场T2航站楼', pinyin: 'jiangbeijichangt2hangzhanlou', py: 'jbjct2hzl', lat: '29.717662', lng: '106.634317' },
    { id: 84, name: '双凤桥', pinyin: 'shuangfengqiao', py: 'sfq', lat: '29.728944', lng: '106.632618' },
    { id: 85, name: '空港广场', pinyin: 'konggangguangchang', py: 'kggc', lat: '29.736341', lng: '106.633584' },
    { id: 86, name: '高堡湖', pinyin: 'gaobaohu', py: 'gbh', lat: '29.751887', lng: '106.642969' },
    { id: 87, name: '观月路', pinyin: 'guanyuelu', py: 'gyl', lat: '29.774938', lng: '106.652785' },
    { id: 88, name: '莲花', pinyin: 'lianhua', py: 'lh', lat: '29.785522', lng: '106.655884' },
    { id: 89, name: '举人坝', pinyin: 'jurenba', py: 'jrb', lat: '29.79138', lng: '106.667445' },
    { id: 90, name: '民安大道', pinyin: 'minandadao', py: 'madd', lat: '29.608952', lng: '106.529072' },
    { id: 91, name: '重庆北站北广场', pinyin: 'chongqingbeizhanbeiguangchang', py: 'cqbzbgc', lat: '29.612923', lng: '106.551186' },
    { id: 92, name: '头塘', pinyin: 'toutang', py: 'tt', lat: '29.608261', lng: '106.573332' },
    { id: 93, name: '保税港', pinyin: 'baoshuigang', py: 'bsg', lat: '29.617048', lng: '106.583418' },
    { id: 94, name: '寸滩', pinyin: 'cuntan', py: 'ct', lat: '29.62183', lng: '106.606145' },
    { id: 95, name: '黑石子', pinyin: 'heishizi', py: 'hsz', lat: '29.624698', lng: '106.620961' },
    { id: 96, name: '太平冲', pinyin: 'taipingchong', py: 'tpc', lat: '29.60588', lng: '106.641513' },
    { id: 97, name: '唐家沱', pinyin: 'tangjiatuo', py: 'tjt', lat: '29.605703', lng: '106.659135' },
    { id: 98, name: '园博中心', pinyin: 'yuanbozhongxin', py: 'ybzx', lat: '29.675315', lng: '106.560433' },
    { id: 99, name: '丹鹤', pinyin: 'danhe', py: 'dh', lat: '29.666683', lng: '106.55097' },
    { id: 100, name: '湖霞街', pinyin: 'huxiajia', py: 'hxj', lat: '29.659812', lng: '106.538578' },
    { id: 101, name: '重光', pinyin: 'chongguang', py: 'cg', lat: '29.649141', lng: '106.530043' },
    { id: 102, name: '和睦路', pinyin: 'hemulu', py: 'hml', lat: '29.629689', lng: '106.53345' },
    { id: 103, name: '人和', pinyin: 'renhe', py: 'rh', lat: '29.623333', lng: '106.522249' },
    { id: 104, name: '幸福广场', pinyin: 'xingfuguangchang', py: 'xfgc', lat: '29.616613', lng: '106.508071' },
    { id: 105, name: '冉家坝', pinyin: 'ranjiaba', py: 'rjb', lat: '29.598629', lng: '106.498801' },
    { id: 106, name: '大龙山', pinyin: 'dalongshan', py: 'dls', lat: '29.589489', lng: '106.498776' },
    { id: 107, name: '大石坝', pinyin: 'dashiba', py: 'dsb', lat: '29.570904', lng: '106.495136' },
    { id: 108, name: '石新路', pinyin: 'shixinlu', py: 'sxl', lat: '29.526056', lng: '106.477794' },
    { id: 109, name: '巴山', pinyin: 'bashan', py: 'bs', lat: '29.520483', lng: '106.467902' },
    { id: 110, name: '凤西路', pinyin: 'fengxilu', py: 'fxl', lat: '29.513565', lng: '106.452689' },
    { id: 111, name: '重庆西站', pinyin: 'chongqingxizhan', py: 'cqxz', lat: '29.500408', lng: '106.43916' },
    { id: 112, name: '华岩寺', pinyin: 'huayansi', py: 'hys', lat: '29.493881', lng: '106.445962' },
    { id: 113, name: '华成路', pinyin: 'huachenglu', py: 'hcl', lat: '29.482123', lng: '106.454137' },
    { id: 114, name: '半山', pinyin: 'banshan', py: 'bs', lat: '29.470733', lng: '106.449787' },
    { id: 115, name: '中梁山', pinyin: 'zhongliangshan', py: 'zls', lat: '29.459507', lng: '106.446109' },
    { id: 116, name: '金建路', pinyin: 'jinjianlu', py: 'jjl', lat: '29.442506', lng: '106.442035' },
    { id: 117, name: '华岩中心', pinyin: 'huayanzhongxin', py: 'hyzx', lat: '29.429173', lng: '106.440436' },
    { id: 118, name: '跳磴', pinyin: 'tiaodeng', py: 'td', lat: '29.408118', lng: '106.437497' },
    { id: 119, name: '茶园', pinyin: 'chayuan', py: 'cy', lat: '29.487556', lng: '106.642632' },
    { id: 120, name: '邱家湾', pinyin: 'qiujiawan', py: 'qjw', lat: '29.497919', lng: '106.649604' },
    { id: 121, name: '长生桥', pinyin: 'changshengqiao', py: 'csq', lat: '29.510992', lng: '106.65793' },
    { id: 122, name: '刘家坪', pinyin: 'liujiaping', py: 'ljp', lat: '29.524735', lng: '106.655655' },
    { id: 123, name: '上新街', pinyin: 'shangxinjie', py: 'sxj', lat: '29.556172', lng: '106.597076' },
    { id: 124, name: '大剧院', pinyin: 'dajuyuan', py: 'djy', lat: '29.569667', lng: '106.576906' },
    { id: 125, name: '江北城', pinyin: 'jiangbeicheng', py: 'jbc', lat: '29.575883', lng: '106.571962' },
    { id: 126, name: '五里店', pinyin: 'wulidian', py: 'wld', lat: '29.585193', lng: '106.565125' },
    { id: 127, name: '红土地', pinyin: 'hongtudi', py: 'htd', lat: '29.584001', lng: '106.551243' },
    { id: 128, name: '黄泥塝', pinyin: 'huangnibang', py: 'hnb', lat: '29.588524', lng: '106.538132' },
    { id: 129, name: '花卉园', pinyin: 'huahuiyuan', py: 'hhy', lat: '29.583243', lng: '106.512951' },
    { id: 130, name: '光电园', pinyin: 'guangdianyuan', py: 'gdy', lat: '29.616182', lng: '106.499454' },
    { id: 131, name: '大竹林', pinyin: 'dazhulin', py: 'dzl', lat: '29.628158', lng: '106.478275' },
    { id: 132, name: '康庄', pinyin: 'kangzhuang', py: 'kz', lat: '29.634704', lng: '106.479005' },
    { id: 133, name: '九曲河', pinyin: 'jiuquhe', py: 'jch', lat: '29.654025', lng: '106.482867' },
    { id: 134, name: '礼嘉', pinyin: 'lijia', py: 'lj', lat: '29.667263', lng: '106.488017' },
    { id: 135, name: '金山寺', pinyin: 'jinshansi', py: 'jss', lat: '29.679363', lng: '106.492094' },
    { id: 136, name: '曹家湾', pinyin: 'caojiawan', py: 'cjw', lat: '29.72104', lng: '106.494326' },
    { id: 137, name: '蔡家', pinyin: 'caijia', py: 'cj', lat: '29.73603', lng: '106.492266' },
    { id: 138, name: '向家岗', pinyin: 'xiangjiagang', py: 'xjg', lat: '29.739216', lng: '106.472954' },
    { id: 139, name: '龙凤溪', pinyin: 'longfengxi', py: 'lfx', lat: '29.789546', lng: '106.403882' },
    { id: 140, name: '状元碑', pinyin: 'zhuangyuanbei', py: 'zyb', lat: '29.803195', lng: '106.398839' },
    { id: 141, name: '西南大学', pinyin: 'xinandaxue', py: 'xndx', lat: '29.816258', lng: '106.423699' },
    { id: 142, name: '北碚', pinyin: 'beibei', py: 'bb', lat: '29.825331', lng: '106.437463' },
    { id: 143, name: '欢乐谷', pinyin: 'huanlegu', py: 'hlg', lat: '29.668995', lng: '106.508818' },
    { id: 144, name: '黄茅坪', pinyin: 'huangmaoping', py: 'hmp', lat: '29.676117', lng: '106.531606' },
    { id: 145, name: '高义口', pinyin: 'gaoyikou', py: 'gyk', lat: '29.702624', lng: '106.528044' },
    { id: 146, name: '国博中心', pinyin: 'guobozhongxin', py: 'gbzx', lat: '29.71649', lng: '106.545554' },
    { id: 147, name: '悦来', pinyin: 'yuelai', py: 'yl', lat: '29.725472', lng: '106.547914' },
    { id: 148, name: '王家庄', pinyin: 'wangjiazhuang', py: 'wjz', lat: '29.743538', lng: '106.545643' },
    { id: 149, name: '清溪河', pinyin: 'qingxihe', py: 'qxh', lat: '29.763586', lng: '106.547744' },
    { id: 150, name: '刘家院子', pinyin: 'liujiayuanzi', py: 'ljyz', lat: '29.781243', lng: '106.554138' },
    { id: 151, name: '思源', pinyin: 'siyuan', py: 'sy', lat: '29.806978', lng: '106.547615' },
    { id: 152, name: '复兴', pinyin: 'fuxing', py: 'fx', lat: '29.822542', lng: '106.548259' },
    { id: 153, name: '红岩坪', pinyin: 'hongyanping', py: 'hyp', lat: '29.831217', lng: '106.548796' },
    { id: 154, name: '沙河坝', pinyin: 'shaheba', py: 'shb', lat: '29.84231', lng: '106.557443' },
    { id: 155, name: '鲤鱼池', pinyin: 'liyuchi', py: 'lyc', lat: '29.574013', lng: '106.550154' },
    { id: 156, name: '龙头寺公园', pinyin: 'longtousigongyuan', py: 'ltsgy', lat: '29.598644', lng: '106.550562' },
    { id: 157, name: '民心佳园', pinyin: 'minxinjiayuan', py: 'mxjy', lat: '29.626645', lng: '106.567599' },
    { id: 158, name: '三亚湾', pinyin: 'sanyawan', py: 'syw', lat: '29.638348', lng: '106.584808' },
    { id: 159, name: '上湾路', pinyin: 'shangwanlu', py: 'swl', lat: '29.649836', lng: '106.608878' },
    { id: 160, name: '环山公园', pinyin: 'huanshangongyuan', py: 'hsgy', lat: '29.658905', lng: '106.622081' },
    { id: 161, name: '长河', pinyin: 'changhe', py: 'ch', lat: '29.674045', lng: '106.629419' },
    { id: 162, name: '江北机场T3航站楼', pinyin: 'jiangbeijichangt3hangzhanlou', py: 'jbjct3hzl', lat: '29.708446', lng: '106.655265' },
    { id: 163, name: '渝北广场', pinyin: 'yubeiguangchang', py: 'ybgc', lat: '29.718537', lng: '106.629795' },
    { id: 164, name: '鹿山', pinyin: 'lushan', py: 'ls', lat: '29.720587', lng: '106.608321' },
    { id: 165, name: '中央公园东', pinyin: 'zhongyanggongyuandong', py: 'zygyd', lat: '29.723694', lng: '106.593515' },
    { id: 166, name: '中央公园', pinyin: 'zhongyanggongyuan', py: 'zygy', lat: '29.72373', lng: '106.583698' },
    { id: 167, name: '中央公园西', pinyin: 'zhongyanggongyuanxi', py: 'zygyx', lat: '29.723749', lng: '106.572282' },
    { id: 168, name: '重庆图书馆', pinyin: 'chongqingtushuguan', py: 'cqtsg', lat: '29.532221', lng: '106.455463' },
    { id: 169, name: '沙坪坝(环)', pinyin: 'shapingba', py: 'spb', lat: '29.556088', lng: '106.459398' },
    { id: 170, name: '重庆大学', pinyin: 'chongqingdaxue', py: 'cqdx', lat: '29.568173', lng: '106.46307' },
    { id: 171, name: '玉带山', pinyin: 'yudaishan', py: 'yds', lat: '29.580713', lng: '106.476095' },
    { id: 172, name: '南桥寺', pinyin: 'nanqiaosi', py: 'nqs', lat: '29.590389', lng: '106.482404' },
    { id: 173, name: '体育公园', pinyin: 'tiyugongyuan', py: 'tygy', lat: '29.598822', lng: '106.4875' },
    { id: 174, name: '动步公园', pinyin: 'dongbugongyuan', py: 'dbgy', lat: '29.603151', lng: '106.504838' },
    { id: 175, name: '洪湖东路', pinyin: 'honghudonglu', py: 'hhdl', lat: '29.607647', lng: '106.512412' },
    { id: 176, name: '渝鲁', pinyin: 'yulu', py: 'yl', lat: '29.595991', lng: '106.559496' },
    { id: 177, name: '弹子石', pinyin: 'danzishi', py: 'dzs', lat: '29.585836', lng: '106.592347' },
    { id: 178, name: '涂山', pinyin: 'tushan', py: 'ts', lat: '29.575983', lng: '106.600587' },
    { id: 179, name: '海棠溪', pinyin: 'haitangxi', py: 'htx', lat: '29.534487', lng: '106.587093' },
    { id: 180, name: '罗家坝', pinyin: 'luojiaba', py: 'ljb', lat: '29.526245', lng: '106.583005' },
    { id: 181, name: '南湖', pinyin: 'nanhu', py: 'nh', lat: '29.516853', lng: '106.556237' },
    { id: 182, name: '海峡路', pinyin: 'haixialu', py: 'hxl', lat: '29.518843', lng: '106.546514' },
    { id: 183, name: '谢家湾(环)', pinyin: 'xiejiawan', py: 'xjw', lat: '29.520449', lng: '106.517696' },
    { id: 184, name: '奥体中心', pinyin: 'aotizhongxin', py: 'atzx', lat: '29.523119', lng: '106.502436' },
    { id: 185, name: '陈家坪', pinyin: 'chenjiaping', py: 'cjp', lat: '29.524128', lng: '106.489905' },
    { id: 186, name: '彩云湖', pinyin: 'caiyunhu', py: 'cyh', lat: '29.516173', lng: '106.471751' },
    { id: 187, name: '二郎', pinyin: 'erlang', py: 'el', lat: '29.505044', lng: '106.462138' },
    { id: 188, name: '华龙', pinyin: 'hualong', py: 'hl', lat: '29.495452', lng: '106.451765' },
    { id: 189, name: '上桥', pinyin: 'shangqiao', py: 'sq', lat: '29.517623', lng: '106.44229' },
    { id: 190, name: '凤鸣山', pinyin: 'fengmingshan', py: 'fms', lat: '29.524354', lng: '106.448309' }
  ]
};
// 目的地数据
export const destinations = [
  {
    id: 1,
    name: '敦煌',
    description: '丝绸之路上的明珠，以莫高窟闻名于世',
    image: '/images/mogao-caves.jpg',
    region: '西北',
    isOverseas: false,
    coordinates: { lat: 40.1421, lng: 94.6618 },
    routes: [
      {
        id: 'r1',
        name: '莫高窟一日游',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索世界文化遗产莫高窟，感受丝路艺术的璀璨',
        waypoints: [
          {
            id: 1,
            name: '莫高窟',
            description: '世界文化遗产，佛教艺术宝库',
            coordinates: [94.8184, 40.0359]
          },
          {
            id: 2,
            name: '数字展示中心',
            description: '通过数字技术了解莫高窟的历史与艺术',
            coordinates: [94.8074, 40.0521]
          }
        ]
      },
      {
        id: 'r2',
        name: '鸣沙山月牙泉探险',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '体验沙漠奇观，感受大漠孤烟的意境',
        waypoints: [
          {
            id: 1,
            name: '月牙泉',
            description: '沙漠中的绿洲奇迹',
            coordinates: [94.6733, 40.0916]
          },
          {
            id: 2,
            name: '鸣沙山',
            description: '体验滑沙和骑骆驼的乐趣',
            coordinates: [94.6789, 40.0921]
          }
        ]
      },
      {
        id: 'r3',
        name: '丝路文化深度游',
        theme: '历史遗迹',
        duration: '2天',
        difficulty: '中等',
        description: '深入了解敦煌的丝路历史和佛教文化',
        waypoints: [
          {
            id: 1,
            name: '敦煌博物馆',
            description: '了解敦煌历史文化的重要场所',
            coordinates: [94.6618, 40.1421]
          },
          {
            id: 2,
            name: '阳关遗址',
            description: '古代丝绸之路的重要关口',
            coordinates: [94.1314, 40.0403]
          },
          {
            id: 3,
            name: '玉门关遗址',
            description: '见证汉代军事防御体系的历史遗迹',
            coordinates: [93.8403, 40.3574]
          }
        ]
      },
      {
        id: 'r4',
        name: '大漠摄影之旅',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '困难',
        description: '深入戈壁大漠，捕捉最美的敦煌光影',
        waypoints: [
          {
            id: 1,
            name: '党河大峡谷',
            description: '壮观的自然地貌和地质奇观',
            coordinates: [94.4891, 40.0851]
          },
          {
            id: 2,
            name: '雅丹地貌',
            description: '魔鬼城般的自然景观',
            coordinates: [93.7623, 40.4213]
          },
          {
            id: 3,
            name: '七里镇遗址',
            description: '古代驿站遗址，见证丝路繁华',
            coordinates: [94.5732, 40.1845]
          }
        ]
      },
      {
        id: 'r5',
        name: '敦煌美食文化游',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝敦煌特色美食，体验当地饮食文化',
        waypoints: [
          {
            id: 1,
            name: '沙洲夜市',
            description: '品尝各式敦煌小吃',
            coordinates: [94.6612, 40.1425]
          },
          {
            id: 2,
            name: '敦煌美食文化街',
            description: '体验传统手工美食制作',
            coordinates: [94.6623, 40.1418]
          },
          {
            id: 3,
            name: '驼铃餐厅',
            description: '品尝正宗的丝路美食',
            coordinates: [94.6635, 40.1412]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '稻城亚丁',
    description: '被誉为"最后的香格里拉"，雪山、草甸、湖泊构成绝美风景',
    image: '/images/yading.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 29.0377, lng: 100.3024 },
    routes: [
      {
        id: 'r3',
        name: '亚丁景区探索',
        theme: '自然风光',
        duration: '3天',
        difficulty: '中等',
        description: '探索被誉为"最后的香格里拉"的亚丁三大神山',
        waypoints: [
          {
            id: 1,
            name: '亚丁村',
            description: '亚丁景区的门户，补给站',
            coordinates: [100.3024, 29.0377]
          },
          {
            id: 2,
            name: '冲古寺',
            description: '观赏三座神山的最佳位置',
            coordinates: [100.3215, 29.0452]
          },
          {
            id: 3,
            name: '洛绒牛场',
            description: '高山牧场，可以远眺夏诺多吉',
            coordinates: [100.3412, 29.0521]
          },
          {
            id: 4,
            name: '五色海',
            description: '高原湖泊，呈现不同的颜色',
            coordinates: [100.3589, 29.0634]
          }
        ]
      },
      {
        id: 'r4',
        name: '高原摄影之旅',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '捕捉高原上最美的光影，拍摄震撼人心的风光照片',
        waypoints: [
          {
            id: 1,
            name: '海子山',
            description: '高原湖群，日落摄影的绝佳地点',
            coordinates: [100.2156, 29.1245]
          },
          {
            id: 2,
            name: '红草地',
            description: '秋季红如丹霞的奇特景观',
            coordinates: [100.2845, 29.0892]
          },
          {
            id: 3,
            name: '牛奶海',
            description: '乳白色的高原湖泊，如同牛奶般纯净',
            coordinates: [100.2812, 28.3734]
          }
        ]
      },
      {
        id: 'r7',
        name: '稻城古镇文化游',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索稻城古镇，体验藏族传统文化',
        waypoints: [
          {
            id: 1,
            name: '稻城古镇',
            description: '保存完好的藏族特色建筑群',
            coordinates: [100.2982, 29.0371]
          },
          {
            id: 2,
            name: '傍河街',
            description: '体验当地民俗和美食的好去处',
            coordinates: [100.2991, 29.0382]
          },
          {
            id: 3,
            name: '稻城白塔',
            description: '藏传佛教圣地，可俯瞰全城',
            coordinates: [100.3012, 29.0392]
          }
        ]
      },
      {
        id: 'r9',
        name: '高原户外探险',
        theme: '户外冒险',
        duration: '4天',
        difficulty: '困难',
        description: '挑战高海拔徒步，体验极限运动的刺激',
        waypoints: [
          {
            id: 1,
            name: '日瓦乡',
            description: '徒步探险的起点，补给站',
            coordinates: [100.3182, 28.4521]
          },
          {
            id: 2,
            name: '长草坪',
            description: '高原草甸，野营的理想地点',
            coordinates: [100.2891, 28.3921]
          },
          {
            id: 3,
            name: '央迈勇',
            description: '藏语意为文殊菩萨，海拔5958米',
            coordinates: [100.2891, 28.3547]
          }
        ]
      },
      {
        id: 'r10',
        name: '藏族民俗体验',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '感受独特的藏族文化与传统',
        waypoints: [
          {
            id: 1,
            name: '藏族村寨',
            description: '体验藏族人民的传统生活',
            coordinates: [100.2982, 29.0375]
          },
          {
            id: 2,
            name: '贡嘎郎吉岭寺',
            description: '藏传佛教寺院，感受宗教文化',
            coordinates: [100.2967, 29.0392]
          },
          {
            id: 3,
            name: '藏族艺术中心',
            description: '欣赏藏族歌舞表演',
            coordinates: [100.2945, 29.0412]
          }
        ]
      },
      {
        id: 'r11',
        name: '藏乡美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗的藏族特色美食',
        waypoints: [
          {
            id: 1,
            name: '藏餐厅',
            description: '品尝正宗藏族美食',
            coordinates: [100.2982, 29.0375]
          },
          {
            id: 2,
            name: '青稞酒坊',
            description: '品尝传统青稞酒',
            coordinates: [100.2967, 29.0392]
          },
          {
            id: 3,
            name: '稻城美食街',
            description: '汇集各类当地特色美食',
            coordinates: [100.2945, 29.0412]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '丽江',
    description: '纳西古城，雪山下的柔美时光',
    image: '/images/lijiang.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 26.8721, lng: 100.2299 },
    routes: [
      {
        id: 'r13',
        name: '玉龙雪山探险',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '困难',
        description: '挑战玉龙雪山，体验高原雪景与冰川地貌',
        waypoints: [
          {
            id: 1,
            name: '玉龙雪山游客中心',
            description: '了解雪山地貌与安全须知',
            coordinates: [100.1823, 27.1001]
          },
          {
            id: 2,
            name: '云杉坪',
            description: '欣赏原始云杉林，适应高原环境',
            coordinates: [100.1789, 27.1123]
          },
          {
            id: 3,
            name: '冰川公园',
            description: '观赏千年冰川遗迹',
            coordinates: [100.1756, 27.1245]
          }
        ]
      },
      {
        id: 'r14',
        name: '古城文化探索',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '深入了解丽江古城的历史文化与纳西传统',
        waypoints: [
          {
            id: 1,
            name: '木府',
            description: '探访纳西族土司府邸',
            coordinates: [100.2334, 26.8712]
          },
          {
            id: 2,
            name: '四方街',
            description: '感受古城商业文化中心',
            coordinates: [100.2341, 26.8718]
          },
          {
            id: 3,
            name: '黑龙潭公园',
            description: '欣赏纳西园林建筑',
            coordinates: [100.2289, 26.8891]
          }
        ]
      },
      {
        id: 'r15',
        name: '纳西音乐之旅',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '聆听纳西古乐，体验传统音乐文化',
        waypoints: [
          {
            id: 1,
            name: '东巴文化研究院',
            description: '了解纳西族东巴文化',
            coordinates: [100.2312, 26.8734]
          },
          {
            id: 2,
            name: '古乐演奏厅',
            description: '欣赏纳西古乐表演',
            coordinates: [100.2321, 26.8728]
          },
          {
            id: 3,
            name: '纳西乐器博物馆',
            description: '了解传统乐器的历史',
            coordinates: [100.2331, 26.8722]
          }
        ]
      },
      {
        id: 'r16',
        name: '茶马古道摄影',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '沿着茶马古道，拍摄最美的人文风景',
        waypoints: [
          {
            id: 1,
            name: '白沙古镇',
            description: '保存完好的明代壁画',
            coordinates: [100.1312, 26.8234]
          },
          {
            id: 2,
            name: '束河古镇',
            description: '茶马古道重要驿站',
            coordinates: [100.2123, 26.9123]
          },
          {
            id: 3,
            name: '拉市海',
            description: '高原湿地自然保护区',
            coordinates: [100.1523, 26.9012]
          }
        ]
      },
      {
        id: 'r17',
        name: '丽江美食探索',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝纳西族特色美食，感受丽江饮食文化',
        waypoints: [
          {
            id: 1,
            name: '七一街',
            description: '丽江最热闹的美食街',
            coordinates: [100.2345, 26.8718]
          },
          {
            id: 2,
            name: '纳西美食文化馆',
            description: '体验纳西族传统美食制作',
            coordinates: [100.2352, 26.8712]
          },
          {
            id: 3,
            name: '古城酒吧街',
            description: '品尝特色小吃和当地美酒',
            coordinates: [100.2338, 26.8725]
          }
        ]
      },
      {
        id: 'r18',
        name: '自然风光游',
        theme: '自然风光',
        duration: '2天',
        difficulty: '中等',
        description: '探索丽江周边的自然美景与生态环境',
        waypoints: [
          {
            id: 1,
            name: '蓝月谷',
            description: '欣赏钙化池与蓝色湖水',
            coordinates: [100.2456, 27.0912]
          },
          {
            id: 2,
            name: '虎跳峡',
            description: '观赏世界级峡谷地貌',
            coordinates: [100.1789, 27.1678]
          },
          {
            id: 3,
            name: '玉水寨',
            description: '探访东巴圣地，观赏自然景观',
            coordinates: [100.2567, 26.9234]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: '西双版纳',
    description: '热带雨林与傣族文化交相辉映的天堂',
    image: '/images/xishuangbanna.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 22.0017, lng: 100.7947 },
    routes: [
      {
        id: 'r7',
        name: '热带雨林探索',
        theme: '自然风光',
        duration: '2天',
        difficulty: '中等',
        description: '探索西双版纳独特的热带雨林生态系统',
        waypoints: [
          {
            id: 1,
            name: '原始森林公园',
            description: '保存完好的热带雨林，可以观察到丰富的野生动植物',
            coordinates: [100.7947, 22.0017]
          },
          {
            id: 2,
            name: '野象谷',
            description: '亚洲象的自然栖息地，可以近距离观察野象',
            coordinates: [100.8156, 22.0245]
          },
          {
            id: 3,
            name: '望天树景区',
            description: '攀爬观景台，俯瞰热带雨林',
            coordinates: [100.7934, 22.0145]
          }
        ]
      },
      {
        id: 'r8',
        name: '傣族文化探索',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索独特的傣族文化与传统',
        waypoints: [
          {
            id: 1,
            name: '曼听公园',
            description: '傣族园林建筑的代表，充满傣族文化特色',
            coordinates: [100.7892, 21.9945]
          },
          {
            id: 2,
            name: '总佛寺',
            description: '西双版纳最大的佛教寺院',
            coordinates: [100.7998, 21.9892]
          },
          {
            id: 3,
            name: '傣族文化博物馆',
            description: '了解傣族历史文化发展',
            coordinates: [100.8123, 21.9978]
          }
        ]
      },
      {
        id: 'r16',
        name: '民俗风情体验',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '体验傣族人民的传统生活方式',
        waypoints: [
          {
            id: 1,
            name: '傣族村寨',
            description: '参观传统傣族建筑与生活',
            coordinates: [100.7989, 22.0234]
          },
          {
            id: 2,
            name: '傣族园',
            description: '体验傣族歌舞表演',
            coordinates: [100.7945, 22.0201]
          },
          {
            id: 3,
            name: '傣医馆',
            description: '了解传统傣医药文化',
            coordinates: [100.7967, 22.0212]
          }
        ]
      },
      {
        id: 'r18',
        name: '茶文化之旅',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '探索普洱茶的起源与制作工艺',
        waypoints: [
          {
            id: 1,
            name: '勐海茶厂',
            description: '了解普洱茶的制作工艺',
            coordinates: [100.4523, 21.9678]
          },
          {
            id: 2,
            name: '古茶园',
            description: '参观百年古茶树',
            coordinates: [100.4567, 21.9712]
          },
          {
            id: 3,
            name: '茶文化博物馆',
            description: '了解普洱茶的历史文化',
            coordinates: [100.4589, 21.9734]
          }
        ]
      },
      {
        id: 'r19',
        name: '边境风情摄影',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '拍摄独特的边境风光与民族文化',
        waypoints: [
          {
            id: 1,
            name: '打洛口岸',
            description: '中缅边境口岸风光',
            coordinates: [100.1234, 21.5678]
          },
          {
            id: 2,
            name: '曼听公园',
            description: '傣族园林建筑',
            coordinates: [100.7923, 22.0156]
          },
          {
            id: 3,
            name: '澜沧江畔',
            description: '拍摄湄公河上游风光',
            coordinates: [100.7956, 22.0189]
          }
        ]
      },
      {
        id: 'r20',
        name: '傣味美食探索',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗的傣族特色美食',
        waypoints: [
          {
            id: 1,
            name: '告庄美食街',
            description: '集中了各种傣族小吃',
            coordinates: [100.7978, 22.0223]
          },
          {
            id: 2,
            name: '傣味餐厅',
            description: '品尝正宗傣族菜',
            coordinates: [100.7956, 22.0201]
          },
          {
            id: 3,
            name: '夜市',
            description: '体验当地特色小吃',
            coordinates: [100.7934, 22.0178]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: '张家界',
    description: '三千奇峰，秀美山水，阿凡达取景地',
    image: '/images/zhangjiajie.jpg',
    region: '华中',
    isOverseas: false,
    coordinates: { lat: 29.1170, lng: 110.4793 },
    routes: [
      {
        id: 'r9',
        name: '国家森林公园探索',
        theme: '自然风光',
        duration: '2天',
        difficulty: '中等',
        description: '探索张家界独特的奇峰林立的自然景观',
        waypoints: [
          {
            id: 1,
            name: '黄石寨',
            description: '观赏奇峰林立的最佳位置',
            coordinates: [110.4682, 29.3245]
          },
          {
            id: 2,
            name: '金鞭溪',
            description: '溪水潺潺，两岸风景秀丽',
            coordinates: [110.4789, 29.3156]
          },
          {
            id: 3,
            name: '袁家界',
            description: '阿凡达取景地，云雾缭绕的空中花园',
            coordinates: [110.4892, 29.3478]
          }
        ]
      },
      {
        id: 'r10',
        name: '天门山探险',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '高',
        description: '挑战世界最长的高空索道和玻璃栈道',
        waypoints: [
          {
            id: 1,
            name: '天门山索道',
            description: '世界最长的高空客运索道',
            coordinates: [110.4734, 29.0512]
          },
          {
            id: 2,
            name: '天门洞',
            description: '世界最高的天然穿山洞',
            coordinates: [110.4678, 29.0489]
          },
          {
            id: 3,
            name: '玻璃栈道',
            description: '刺激的高空玻璃栈道',
            coordinates: [110.4712, 29.0498]
          }
        ]
      },
      {
        id: 'r21',
        name: '武陵仙境探索',
        theme: '自然风光',
        duration: '2天',
        difficulty: '中等',
        description: '探索张家界最经典的景区，感受大自然的鬼斧神工',
        waypoints: [
          {
            id: 1,
            name: '天子山',
            description: '观赏云海日出的绝佳地点',
            coordinates: [110.4789, 29.3245]
          },
          {
            id: 2,
            name: '袁家界',
            description: '《阿凡达》取景地',
            coordinates: [110.4812, 29.3267]
          },
          {
            id: 3,
            name: '金鞭溪',
            description: '溪流两岸风景优美',
            coordinates: [110.4734, 29.3189]
          }
        ]
      },
      {
        id: 'r22',
        name: '极限运动体验',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '困难',
        description: '体验张家界的极限运动项目',
        waypoints: [
          {
            id: 1,
            name: '大峡谷玻璃桥',
            description: '世界最高最长的玻璃桥',
            coordinates: [110.4567, 29.3123]
          },
          {
            id: 2,
            name: '百龙天梯',
            description: '世界最高的户外电梯',
            coordinates: [110.4678, 29.3234]
          },
          {
            id: 3,
            name: '云天渡',
            description: '高空跳伞和滑索',
            coordinates: [110.4789, 29.3345]
          }
        ]
      },
      {
        id: 'r23',
        name: '土家风情游',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '体验土家族的传统文化与生活方式',
        waypoints: [
          {
            id: 1,
            name: '土家风情园',
            description: '了解土家族传统文化',
            coordinates: [110.4823, 29.3278]
          },
          {
            id: 2,
            name: '十里画廊',
            description: '欣赏自然与人文景观',
            coordinates: [110.4845, 29.3289]
          },
          {
            id: 3,
            name: '溪布街',
            description: '品尝土家族美食',
            coordinates: [110.4867, 29.3301]
          }
        ]
      },
      {
        id: 'r24',
        name: '摄影创作之旅',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '捕捉张家界最美的自然与人文景观',
        waypoints: [
          {
            id: 1,
            name: '黄石寨',
            description: '日出云海摄影地',
            coordinates: [110.4912, 29.3312]
          },
          {
            id: 2,
            name: '宝峰湖',
            description: '山水倒影摄影地',
            coordinates: [110.4934, 29.3334]
          },
          {
            id: 3,
            name: '天门山',
            description: '悬崖峭壁摄影地',
            coordinates: [110.4956, 29.3356]
          }
        ]
      },
      {
        id: 'r25',
        name: '湘西美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝张家界特色的湘西美食',
        waypoints: [
          {
            id: 1,
            name: '老街',
            description: '传统湘西小吃聚集地',
            coordinates: [110.4978, 29.3378]
          },
          {
            id: 2,
            name: '土家菜馆',
            description: '品尝正宗土家族美食',
            coordinates: [110.4989, 29.3389]
          },
          {
            id: 3,
            name: '夜市',
            description: '体验地道夜市美食',
            coordinates: [110.4999, 29.3399]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '九寨沟',
    description: '童话世界般的五彩湖泊与原始森林',
    image: '/images/jiuzhaigou.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 33.2600, lng: 103.9165 },
    routes: [
      {
        id: 'r11',
        name: '九寨沟景区探索',
        theme: '自然风光',
        duration: '2天',
        difficulty: '中等',
        description: '探索九寨沟独特的五彩湖泊和原始森林',
        waypoints: [
          {
            id: 1,
            name: '五花海',
            description: '九寨沟最美的彩池，色彩斑斓',
            coordinates: [103.9245, 33.2512]
          },
          {
            id: 2,
            name: '珍珠滩瀑布',
            description: '宽阔的钙华瀑布群',
            coordinates: [103.9256, 33.2589]
          },
          {
            id: 3,
            name: '树正群海',
            description: '高原湖群，湖水清澈见底',
            coordinates: [103.9389, 33.2712]
          }
        ]
      },
      {
        id: 'r12',
        name: '藏羌文化之旅',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索九寨沟独特的藏羌文化',
        waypoints: [
          {
            id: 1,
            name: '甲蕃古城',
            description: '千年古城，藏羌文化交融之地',
            coordinates: [103.8912, 33.2712]
          },
          {
            id: 2,
            name: '九寨沟藏文化博物馆',
            description: '了解九寨沟的藏族历史文化',
            coordinates: [103.8845, 33.2689]
          },
          {
            id: 3,
            name: '白马藏寨',
            description: '体验当地藏族人的生活',
            coordinates: [103.8867, 33.2701]
          }
        ]
      },
      {
        id: 'r26',
        name: '原始森林探险',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '困难',
        description: '徒步探索九寨沟原始区域',
        waypoints: [
          {
            id: 1,
            name: '原始森林保护区',
            description: '体验原始森林生态系统',
            coordinates: [103.9434, 33.2756]
          },
          {
            id: 2,
            name: '箭竹海',
            description: '穿越原始箭竹林，观察野生动物活动',
            coordinates: [103.9456, 33.2778]
          },
          {
            id: 3,
            name: '黑湖',
            description: '神秘的高原湖泊，周围环绕原始森林',
            coordinates: [103.9478, 33.2801]
          }
        ]
      },
      {
        id: 'r27',
        name: '藏羌民俗体验',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '深入体验藏羌民族的传统生活方式',
        waypoints: [
          {
            id: 1,
            name: '藏寨',
            description: '参与藏族传统歌舞表演，品尝酥油茶',
            coordinates: [103.9301, 33.2623]
          },
          {
            id: 2,
            name: '羌寨',
            description: '体验羌族刺绣制作，了解羌族建筑特色',
            coordinates: [103.9323, 33.2645]
          },
          {
            id: 3,
            name: '民俗文化广场',
            description: '欣赏藏羌传统歌舞表演，参与互动体验',
            coordinates: [103.9345, 33.2667]
          }
        ]
      },
      {
        id: 'r28',
        name: '高山摄影之旅',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '捕捉九寨沟四季不同的自然美景',
        waypoints: [
          {
            id: 1,
            name: '诺日朗瀑布',
            description: '拍摄壮观的瀑布群，最佳时间为上午9-11点',
            coordinates: [103.9312, 33.2489]
          },
          {
            id: 2,
            name: '长海观景台',
            description: '拍摄九寨沟最深最大的海子，日出时分最佳',
            coordinates: [103.9165, 33.2600]
          },
          {
            id: 3,
            name: '日则沟观景台',
            description: '观赏日出日落的绝佳位置，可拍摄全景',
            coordinates: [103.9412, 33.2734]
          }
        ]
      },
      {
        id: 'r29',
        name: '九寨味道',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝九寨沟地区特色的藏羌美食',
        waypoints: [
          {
            id: 1,
            name: '藏式餐厅',
            description: '品尝青稞酒、酥油茶、藏式糌粑',
            coordinates: [103.9278, 33.2534]
          },
          {
            id: 2,
            name: '羌族美食街',
            description: '尝试羌族特色腊肉、洋芋糍粑',
            coordinates: [103.9289, 33.2545]
          },
          {
            id: 3,
            name: '九寨美食文化园',
            description: '体验藏羌特色美食制作，品尝农家土特产',
            coordinates: [103.9301, 33.2556]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: '黄山',
    description: '奇松、怪石、云海、温泉，山水画般的仙境',
    image: '/images/huangshan.jpg',
    region: '华东',
    isOverseas: false,
    coordinates: { lat: 30.1733, lng: 118.1416 },
    routes: [
      {
        id: 'r31',
        name: '黄山经典探索',
        theme: '自然风光',
        duration: '2天',
        difficulty: '中等',
        description: '探索黄山最经典的景观，包括奇松、怪石和云海',
        waypoints: [
          {
            id: 1,
            name: '光明顶',
            description: '黄山观日出、云海的最佳位置，360度全景观景台',
            coordinates: [118.1567, 30.1289]
          },
          {
            id: 2,
            name: '飞来石',
            description: '重达360吨的巨石，悬空于峭壁之上，蔚为壮观',
            coordinates: [118.1589, 30.1301]
          },
          {
            id: 3,
            name: '迎客松',
            description: '黄山最著名的松树，树龄超过1000年',
            coordinates: [118.1612, 30.1323]
          }
        ]
      },
      {
        id: 'r32',
        name: '徽州文化探索',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '深入探索徽州古村落的建筑与文化遗产',
        waypoints: [
          {
            id: 1,
            name: '宏村',
            description: '世界文化遗产，牛形村落布局，徽派建筑精华',
            coordinates: [117.9812, 29.9745]
          },
          {
            id: 2,
            name: '西递',
            description: '明清徽商故里，保存完好的徽州古村落',
            coordinates: [117.9934, 29.9867]
          },
          {
            id: 3,
            name: '徽州古城',
            description: '体验徽州传统文化，参观徽州文化博物馆',
            coordinates: [118.0056, 29.9989]
          }
        ]
      },
      {
        id: 'r33',
        name: '黄山摄影创作',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '在不同时节捕捉黄山的绝美景色，包括日出、云海、奇松',
        waypoints: [
          {
            id: 1,
            name: '北海景区',
            description: '日出、云海摄影的绝佳地点，晨光中的云海尤为壮观',
            coordinates: [118.1634, 30.1345]
          },
          {
            id: 2,
            name: '西海大峡谷',
            description: '层峦叠嶂的峡谷风光，最佳拍摄时间为上午9-11点',
            coordinates: [118.1656, 30.1367]
          },
          {
            id: 3,
            name: '始信峰',
            description: '奇松怪石的集中地，适合日落时分拍摄剪影',
            coordinates: [118.1678, 30.1389]
          }
        ]
      },
      {
        id: 'r34',
        name: '黄山登山挑战',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '困难',
        description: '挑战黄山最具代表性的登山路线，体验险峻山景',
        waypoints: [
          {
            id: 1,
            name: '云谷寺',
            description: '东线登山起点，古寺庙建筑与自然景观的完美结合',
            coordinates: [118.1701, 30.1412]
          },
          {
            id: 2,
            name: '天都峰',
            description: '黄山第一高峰，海拔1810米，需要攀爬陡峭台阶',
            coordinates: [118.1723, 30.1434]
          },
          {
            id: 3,
            name: '莲花峰',
            description: '黄山三大主峰之一，以险峻著称，需要较强体力',
            coordinates: [118.1745, 30.1456]
          }
        ]
      },
      {
        id: 'r35',
        name: '养生温泉之旅',
        theme: '休闲度假',
        duration: '2天',
        difficulty: '简单',
        description: '享受黄山温泉，放松身心，感受大自然的馈赠',
        waypoints: [
          {
            id: 1,
            name: '汤口温泉',
            description: '黄山脚下最著名的温泉，富含多种矿物质',
            coordinates: [118.1567, 30.1478]
          },
          {
            id: 2,
            name: '醉温泉',
            description: '历史悠久的温泉，相传李白曾在此饮酒作诗',
            coordinates: [118.1589, 30.1501]
          },
          {
            id: 3,
            name: '紫云峰温泉',
            description: '环境优美的野外温泉，可以边泡温泉边赏景',
            coordinates: [118.1612, 30.1523]
          }
        ]
      },
      {
        id: 'r36',
        name: '徽州美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗的徽州美食，感受徽州饮食文化',
        waypoints: [
          {
            id: 1,
            name: '徽州古街',
            description: '品尝徽州毛豆腐、臭鳜鱼等特色小吃',
            coordinates: [118.1634, 30.1545]
          },
          {
            id: 2,
            name: '黄山老街',
            description: '尝试徽州火腿、石耳等传统美食',
            coordinates: [118.1656, 30.1567]
          },
          {
            id: 3,
            name: '徽菜文化馆',
            description: '了解徽菜历史，品尝徽州特色农家菜',
            coordinates: [118.1678, 30.1589]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: '桂林',
    description: '漓江山水甲天下，喀斯特地貌的代表',
    image: '/images/guilin.jpg',
    region: '华南',
    isOverseas: false,
    coordinates: { lat: 25.2736, lng: 110.2907 },
    routes: [
      {
        id: 'r36',
        name: '漓江精华游',
        theme: '自然风光',
        duration: '2天',
        difficulty: '简单',
        description: '探索漓江最精华的自然景观，感受"桂林山水甲天下"的魅力',
        waypoints: [
          {
            id: 1,
            name: '象鼻山',
            description: '桂林市标志性景点，观赏漓江风光',
            coordinates: [110.2845, 25.2789]
          },
          {
            id: 2,
            name: '兴坪古镇',
            description: '20元人民币背景图取景地，欣赏漓江最美弯道',
            coordinates: [110.2867, 25.2812]
          },
          {
            id: 3,
            name: '阳朔西街',
            description: '体验地道桂林文化，品尝特色小吃',
            coordinates: [110.2889, 25.2834]
          }
        ]
      },
      {
        id: 'r37',
        name: '漓江竹筏漂流',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '中等',
        description: '乘坐传统竹筏，近距离欣赏漓江两岸的喀斯特地貌',
        waypoints: [
          {
            id: 1,
            name: '杨堤码头',
            description: '漓江精华段起点，准备竹筏和安全装备',
            coordinates: [110.4512, 24.9123]
          },
          {
            id: 2,
            name: '九马画山',
            description: '漓江标志性景点，山形酷似九匹骏马奔腾',
            coordinates: [110.4623, 24.8956]
          },
          {
            id: 3,
            name: '兴坪码头',
            description: '漂流终点，可观赏著名的黄布倒影',
            coordinates: [110.4734, 24.8789]
          }
        ]
      },
      {
        id: 'r38',
        name: '山水摄影之旅',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '探访桂林最佳摄影地，捕捉喀斯特地貌的绝美瞬间',
        waypoints: [
          {
            id: 1,
            name: '老寨山日出',
            description: '拍摄漓江晨雾和日出，最佳时间为清晨5-7点',
            coordinates: [110.2978, 25.2923]
          },
          {
            id: 2,
            name: '相公山',
            description: '俯瞰整个阳朔城区，日落时分风光最美',
            coordinates: [110.3001, 25.2945]
          },
          {
            id: 3,
            name: '十里画廊',
            description: '骑行拍摄田园风光，最佳时间为下午3-5点',
            coordinates: [110.3023, 25.2967]
          }
        ]
      },
      {
        id: 'r39',
        name: '岩壁探险',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '困难',
        description: '挑战世界级攀岩胜地，体验极限运动的刺激',
        waypoints: [
          {
            id: 1,
            name: '月亮山攀岩场',
            description: '适合初学者的经典路线，配备专业教练指导',
            coordinates: [110.3045, 25.2989]
          },
          {
            id: 2,
            name: '白马山',
            description: '中高级攀岩路线，需要一定攀岩经验',
            coordinates: [110.3067, 25.3012]
          },
          {
            id: 3,
            name: '老寨山',
            description: '专业级攀岩场地，提供多条具有挑战性的路线',
            coordinates: [110.3089, 25.3034]
          }
        ]
      },
      {
        id: 'r40',
        name: '桂林古韵之旅',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '探索桂林千年历史文化，感受古城底蕴',
        waypoints: [
          {
            id: 1,
            name: '靖江王府',
            description: '明代藩王府邸，了解桂林历史文化',
            coordinates: [110.3112, 25.3056]
          },
          {
            id: 2,
            name: '独秀峰',
            description: '桂林城徽，登顶俯瞰全城风光',
            coordinates: [110.3134, 25.3078]
          },
          {
            id: 3,
            name: '叠彩山',
            description: '欣赏山水园林，探访古代题刻',
            coordinates: [110.3156, 25.3101]
          }
        ]
      },
      {
        id: 'r41',
        name: '桂林味道',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝地道桂林美食，体验独特的饮食文化',
        waypoints: [
          {
            id: 1,
            name: '正阳步行街',
            description: '品尝各种桂林小吃',
            coordinates: [110.3178, 25.3123]
          },
          {
            id: 2,
            name: '南溪山市场',
            description: '探访当地菜市场，了解桂林饮食文化',
            coordinates: [110.3201, 25.3145]
          },
          {
            id: 3,
            name: '古城酒吧街',
            description: '品尝特色小吃和当地美酒',
            coordinates: [110.3223, 25.3167]
          }
        ]
      }
    ]
  },
  {
    id: 9,
    name: '西安',
    description: '中国的首都，历史文化名城',
    image: '/images/xian.jpg',
    region: '西北',
    isOverseas: false,
    coordinates: { lat: 34.3416, lng: 108.9398 },
    routes: [
      {
        id: 'r42',
        name: '古都文化探索',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '探索千年古都的历史文化，感受大唐盛世的辉煌',
        waypoints: [
          {
            id: 1,
            name: '大雁塔',
            description: '唐代佛教文化地标，可登塔俯瞰古城全景',
            coordinates: [108.9671, 34.2225]
          },
          {
            id: 2,
            name: '碑林博物馆',
            description: '中国最大的碑刻艺术博物馆，珍藏历代碑刻',
            coordinates: [108.9456, 34.2584]
          },
          {
            id: 3,
            name: '大唐芙蓉园',
            description: '唐代皇家园林复原，晚间有盛唐歌舞表演',
            coordinates: [108.9789, 34.2198]
          }
        ]
      },
      {
        id: 'r43',
        name: '兵马俑探秘',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '简单',
        description: '探访世界第八大奇迹，揭秘秦始皇陵兵马俑',
        waypoints: [
          {
            id: 1,
            name: '兵马俑一号坑',
            description: '最大规模的兵马俑坑，展示秦军主力军阵',
            coordinates: [109.2786, 34.3845]
          },
          {
            id: 2,
            name: '兵马俑博物馆',
            description: '了解兵马俑的发掘历史和考古价值',
            coordinates: [109.2798, 34.3856]
          },
          {
            id: 3,
            name: '秦始皇陵',
            description: '参观秦始皇陵遗址公园，了解秦朝历史',
            coordinates: [109.2534, 34.3823]
          }
        ]
      },
      {
        id: 'r44',
        name: '古城墙骑行',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '中等',
        description: '骑行明代古城墙，360度环览古都风貌',
        waypoints: [
          {
            id: 1,
            name: '南门城墙',
            description: '最具代表性的城门，古城墙骑行起点',
            coordinates: [108.9478, 34.2468]
          },
          {
            id: 2,
            name: '东门瓮城',
            description: '保存完好的瓮城建筑，观赏城墙建筑特色',
            coordinates: [108.9623, 34.2642]
          },
          {
            id: 3,
            name: '西门角楼',
            description: '登楼远眺古城全景，欣赏日落美景',
            coordinates: [108.9345, 34.2589]
          }
        ]
      },
      {
        id: 'r45',
        name: '大唐夜游',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验西安绚丽的夜景和现代都市魅力',
        waypoints: [
          {
            id: 1,
            name: '大雁塔北广场',
            description: '欣赏音乐喷泉表演，感受现代西安活力',
            coordinates: [108.9671, 34.2245]
          },
          {
            id: 2,
            name: '大唐不夜城',
            description: '体验盛唐风情，欣赏灯光秀表演',
            coordinates: [108.9701, 34.2215]
          },
          {
            id: 3,
            name: '钟鼓楼广场',
            description: '观赏古建筑夜景，品味古都夜生活',
            coordinates: [108.9423, 34.2598]
          }
        ]
      },
      {
        id: 'r46',
        name: '关中古镇游',
        theme: '民俗体验',
        duration: '2天',
        difficulty: '简单',
        description: '探访关中古镇，体验陕西民俗文化',
        waypoints: [
          {
            id: 1,
            name: '华清宫',
            description: '参观唐代皇家温泉，了解唐玄宗与杨贵妃的传奇',
            coordinates: [109.2178, 34.3456]
          },
          {
            id: 2,
            name: '大皮院',
            description: '体验关中民居建筑，了解当地生活习俗',
            coordinates: [109.2201, 34.3478]
          },
          {
            id: 3,
            name: '回民街',
            description: '体验西安穆斯林文化，品尝特色小吃',
            coordinates: [108.9378, 34.2634]
          }
        ]
      },
      {
        id: 'r47',
        name: '长安味道',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝地道西安美食，体验千年饮食文化',
        waypoints: [
          {
            id: 1,
            name: '回民街',
            description: '品尝羊肉泡馍、肉夹馍、biangbiang面等特色小吃',
            coordinates: [108.9378, 34.2634]
          },
          {
            id: 2,
            name: '德发长',
            description: '体验百年老店，品尝正宗水饺和锅贴',
            coordinates: [108.9401, 34.2656]
          },
          {
            id: 3,
            name: '永兴坊',
            description: '品尝陕西特色小吃，体验关中美食文化',
            coordinates: [108.9423, 34.2678]
          }
        ]
      },
      {
        id: 'r54',
        name: '故宫深度游',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '深度探访紫禁城，感受600年皇家文化',
        waypoints: [
          {
            id: 1,
            name: '午门',
            description: '故宫正门，体验皇家威严，了解明清历史',
            coordinates: [116.3974, 39.9163]
          },
          {
            id: 2,
            name: '太和殿',
            description: '故宫最高大殿，明清皇帝登基、大朝会之地',
            coordinates: [116.3972, 39.9189]
          },
          {
            id: 3,
            name: '宁寿宫',
            description: '清代皇帝居所，体验皇室日常生活',
            coordinates: [116.3968, 39.9215]
          }
        ]
      },
      {
        id: 'r55',
        name: '长城探险',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '中等',
        description: '登临八达岭长城，体验万里长城的雄伟壮观',
        waypoints: [
          {
            id: 1,
            name: '八达岭长城',
            description: '最负盛名的长城段落，保存最完好',
            coordinates: [116.0169, 40.3544]
          },
          {
            id: 2,
            name: '长城博物馆',
            description: '了解长城历史文化，观赏长城文物',
            coordinates: [116.0189, 40.3567]
          },
          {
            id: 3,
            name: '长城脚下的公社',
            description: '体验长城文创园区，品尝特色美食',
            coordinates: [116.0209, 40.3589]
          }
        ]
      },
      {
        id: 'r56',
        name: '胡同文化',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '探访北京胡同，体验老北京生活方式',
        waypoints: [
          {
            id: 1,
            name: '南锣鼓巷',
            description: '体验传统胡同文化，品尝老北京小吃',
            coordinates: [116.4033, 39.9375]
          },
          {
            id: 2,
            name: '什刹海',
            description: '荷花池畔，体验老北京休闲生活',
            coordinates: [116.3881, 39.9402]
          },
          {
            id: 3,
            name: '国子监街',
            description: '古代最高学府，感受传统文化氛围',
            coordinates: [116.4177, 39.9474]
          }
        ]
      },
      {
        id: 'r57',
        name: '现代北京',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '领略现代北京的时尚魅力',
        waypoints: [
          {
            id: 1,
            name: '三里屯',
            description: '时尚商圈，体验现代都市生活',
            coordinates: [116.4542, 39.9339]
          },
          {
            id: 2,
            name: '798艺术区',
            description: '当代艺术中心，感受文艺氛围',
            coordinates: [116.4956, 39.9847]
          },
          {
            id: 3,
            name: '国家大剧院',
            description: '现代建筑艺术，欣赏高雅艺术',
            coordinates: [116.3833, 39.9033]
          }
        ]
      },
      {
        id: 'r58',
        name: '皇家园林',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '游览北京皇家园林，感受自然与人文的完美融合',
        waypoints: [
          {
            id: 1,
            name: '颐和园',
            description: '最大皇家园林，欣赏昆明湖景色',
            coordinates: [116.2755, 39.9988]
          },
          {
            id: 2,
            name: '圆明园',
            description: '探访历史遗迹，感受历史沧桑',
            coordinates: [116.2989, 40.0089]
          },
          {
            id: 3,
            name: '北海公园',
            description: '千年皇家园林，观赏白塔景色',
            coordinates: [116.3903, 39.9263]
          }
        ]
      },
      {
        id: 'r59',
        name: '京味美食',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗北京美食，体验老字号文化',
        waypoints: [
          {
            id: 1,
            name: '全聚德',
            description: '品尝百年老字号北京烤鸭',
            coordinates: [116.4012, 39.9145]
          },
          {
            id: 2,
            name: '护国寺小吃',
            description: '体验传统北京小吃文化',
            coordinates: [116.3734, 39.9467]
          },
          {
            id: 3,
            name: '东来顺',
            description: '享受传统涮羊肉，感受老北京饮食文化',
            coordinates: [116.4156, 39.9289]
          }
        ]
      }
    ]
  },
  {
    id: 10,
    name: '三亚',
    description: '阳光、沙滩、海浪，热带海滨度假胜地',
    image: '/images/sanya.jpg',
    region: '华南',
    isOverseas: false,
    coordinates: { lat: 18.2526, lng: 109.5127 },
    routes: [
      {
        id: 'r48',
        name: '海湾度假',
        theme: '休闲度假',
        duration: '3天',
        difficulty: '简单',
        description: '体验三亚顶级海湾度假区，尽享阳光与海滩',
        waypoints: [
          {
            id: 1,
            name: '亚龙湾',
            description: '东方夏威夷，水质清澈，沙滩细腻，适合游泳和日光浴',
            coordinates: [109.6417, 18.1906]
          },
          {
            id: 2,
            name: '海棠湾',
            description: '国家海岸，拥有全球最大免税店和多家奢华酒店',
            coordinates: [109.7523, 18.2673]
          },
          {
            id: 3,
            name: '大东海',
            description: '三亚市区最近的海湾，配套设施完善，夜景迷人',
            coordinates: [109.5087, 18.2207]
          }
        ]
      },
      {
        id: 'r49',
        name: '海上运动',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '中等',
        description: '体验刺激的海上运动项目，感受热带海洋的魅力',
        waypoints: [
          {
            id: 1,
            name: '蜈支洲岛',
            description: '体验潜水、帆船、海钓等多种海上运动',
            coordinates: [109.7634, 18.3167]
          },
          {
            id: 2,
            name: '西岛',
            description: '享受海上摩托、拖伞等刺激项目',
            coordinates: [109.4523, 18.2434]
          },
          {
            id: 3,
            name: '大小洞天',
            description: '探索海蚀地貌，体验海边攀岩',
            coordinates: [109.2634, 18.2256]
          }
        ]
      },
      {
        id: 'r50',
        name: '热带雨林探秘',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '探索热带雨林生态系统，感受海南原始自然风光',
        waypoints: [
          {
            id: 1,
            name: '亚龙湾热带天堂森林公园',
            description: '空中栈道观景，俯瞰三亚全景',
            coordinates: [109.6523, 18.1956]
          },
          {
            id: 2,
            name: '呀诺达雨林文化旅游区',
            description: '体验热带雨林探险，观赏珍稀植物',
            coordinates: [109.6012, 18.2234]
          },
          {
            id: 3,
            name: '南山寺',
            description: '参观108米海上观音像，欣赏日落美景',
            coordinates: [109.2845, 18.2789]
          }
        ]
      },
      {
        id: 'r51',
        name: '三亚千古情',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '了解海南黎苗文化，欣赏特色民俗表演',
        waypoints: [
          {
            id: 1,
            name: '三亚千古情景区',
            description: '观看大型实景演出，了解海南历史文化',
            coordinates: [109.5234, 18.2567]
          },
          {
            id: 2,
            name: '槟榔谷',
            description: '探访黎苗族文化，体验少数民族风情',
            coordinates: [109.5456, 18.2789]
          },
          {
            id: 3,
            name: '大小洞天',
            description: '游览道教文化遗址，了解海南历史',
            coordinates: [109.2634, 18.2256]
          }
        ]
      },
      {
        id: 'r52',
        name: '浪漫夜游',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验三亚迷人夜景，感受热带海滨城市魅力',
        waypoints: [
          {
            id: 1,
            name: '三亚湾',
            description: '漫步椰梦长廊，欣赏落日余晖',
            coordinates: [109.5087, 18.2207]
          },
          {
            id: 2,
            name: '凤凰岛',
            description: '游览帆船港，欣赏奢华游艇夜景',
            coordinates: [109.5234, 18.2345]
          },
          {
            id: 3,
            name: '亚特兰蒂斯水世界',
            description: '体验夜场水上娱乐，观赏海洋生物',
            coordinates: [109.7523, 18.2673]
          }
        ]
      },
      {
        id: 'r53',
        name: '海鲜美食',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝三亚新鲜海鲜，体验热带水果盛宴',
        waypoints: [
          {
            id: 1,
            name: '第一市场',
            description: '选购新鲜海鲜，体验当地市场文化',
            coordinates: [109.5012, 18.2234]
          },
          {
            id: 2,
            name: '海鲜广场',
            description: '品尝各式海鲜美食，享受烹饺服务',
            coordinates: [109.5234, 18.2456]
          },
          {
            id: 3,
            name: '热带水果市场',
            description: '品尝当季热带水果，体验水果采摘',
            coordinates: [109.5456, 18.2678]
          }
        ]
      }
    ]
  },
  {
    id: 11,
    name: '北京',
    description: '中国的首都，历史文化名城',
    image: '/images/beijing.jpg',
    region: '华北',
    isOverseas: false,
    coordinates: { lat: 39.9042, lng: 116.4074 },
    routes: [
      {
        id: 'r37',
        name: '古都文化之旅',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '探索北京的历史文化遗产',
        waypoints: [
          {
            id: 1,
            name: '故宫',
            description: '中国最大的古代宫殿建筑群',
            coordinates: [116.3972, 39.9169]
          },
          {
            id: 2,
            name: '天安门广场',
            description: '世界最大的城市广场',
            coordinates: [116.3912, 39.9054]
          },
          {
            id: 3,
            name: '天坛',
            description: '明清两代帝王祭天的场所',
            coordinates: [116.4074, 39.8822]
          }
        ]
      },
      {
        id: 'r38',
        name: '长城探索之旅',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '中等',
        description: '登临万里长城，感受历史的雄伟',
        waypoints: [
          {
            id: 1,
            name: '八达岭长城',
            description: '最著名的长城景区',
            coordinates: [116.0169, 40.3544]
          },
          {
            id: 2,
            name: '慕田峪长城',
            description: '风景优美的长城景区',
            coordinates: [116.5681, 40.4309]
          }
        ]
      }
    ]
  },
  {
    id: 12,
    name: '上海',
    description: '中国的经济中心，现代化都市',
    image: '/images/shanghai.jpg',
    region: '华东',
    isOverseas: false,
    coordinates: { lat: 31.2304, lng: 121.4737 },
    routes: [
      {
        id: 'r39',
        name: '魔都风情游',
        theme: '城市观光',
        duration: '2天',
        difficulty: '简单',
        description: '体验上海的现代都市魅力',
        waypoints: [
          {
            id: 1,
            name: '外滩',
            description: '欣赏黄浦江两岸的建筑群',
            coordinates: [121.4902, 31.2397]
          },
          {
            id: 2,
            name: '东方明珠',
            description: '上海的标志性建筑',
            coordinates: [121.4952, 31.2396]
          },
          {
            id: 3,
            name: '南京路步行街',
            description: '著名的商业街，体验繁华都市生活',
            coordinates: [121.4737, 31.2366]
          }
        ]
      },
      {
        id: 'r40',
        name: '江南文化之旅',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索上海的传统文化',
        waypoints: [
          {
            id: 1,
            name: '豫园',
            description: '明代古典园林，体验江南园林艺术',
            coordinates: [121.4923, 31.2273]
          },
          {
            id: 2,
            name: '田子坊',
            description: '创意艺术街区，体验老上海风情',
            coordinates: [121.4709, 31.2141]
          },
          {
            id: 3,
            name: '新天地',
            description: '石库门建筑群，展现上海近代历史',
            coordinates: [121.4758, 31.2197]
          }
        ]
      }
    ]
  },
  {
    id: 13,
    name: '杭州',
    description: '上有天堂，下有苏杭，西湖风光秀丽',
    image: '/images/hangzhou.jpg',
    region: '华东',
    isOverseas: false,
    coordinates: { lat: 30.2741, lng: 120.1551 },
    routes: [
      {
        id: 'r60',
        name: '西湖文化游',
        theme: '文化探索',
        duration: '2天',
        difficulty: '中等',
        description: '探索西湖十景，需要较多步行',
        waypoints: [
          {
            id: 1,
            name: '雷峰塔',
            description: '登塔俯瞰西湖全景，需登高',
            coordinates: [120.1489, 30.2331]
          },
          {
            id: 2,
            name: '岳王庙',
            description: '缅怀民族英雄，了解南宋历史',
            coordinates: [120.1523, 30.2423]
          },
          {
            id: 3,
            name: '灵隐寺',
            description: '山间古刹，需爬山',
            coordinates: [120.1234, 30.2456]
          }
        ]
      },
      {
        id: 'r61',
        name: '西湖漫步',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '轻松漫步西湖景区',
        waypoints: [
          {
            id: 1,
            name: '断桥残雪',
            description: '平缓景区，适合散步',
            coordinates: [120.1567, 30.2589]
          },
          {
            id: 2,
            name: '苏堤春晓',
            description: '平坦柳堤，轻松游览',
            coordinates: [120.1456, 30.2478]
          },
          {
            id: 3,
            name: '花港观鱼',
            description: '赏花观鱼，平缓园区',
            coordinates: [120.1345, 30.2367]
          }
        ]
      },
      {
        id: 'r62',
        name: '茶园探访',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '困难',
        description: '徒步茶园山区，需要体力',
        waypoints: [
          {
            id: 1,
            name: '龙井村',
            description: '山地茶园，需爬山',
            coordinates: [120.1234, 30.2234]
          },
          {
            id: 2,
            name: '九溪烟树',
            description: '山间小径，地形陡峭',
            coordinates: [120.1456, 30.2456]
          },
          {
            id: 3,
            name: '龙井问茶',
            description: '山顶茶室，路程较远',
            coordinates: [120.1345, 30.2345]
          }
        ]
      },
      {
        id: 'r63',
        name: '西湖摄影',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '捕捉西湖四季不同的美',
        waypoints: [
          {
            id: 1,
            name: '柳浪闻莺',
            description: '春季摄影地',
            coordinates: [120.1234, 30.2412]
          },
          {
            id: 2,
            name: '花港观鱼',
            description: '园林摄影地',
            coordinates: [120.1345, 30.2523]
          },
          {
            id: 3,
            name: '平湖秋月',
            description: '秋季摄影地',
            coordinates: [120.1456, 30.2634]
          }
        ]
      },
      {
        id: 'r64',
        name: '运动健行',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '中等',
        description: '徒步登山探索杭州自然',
        waypoints: [
          {
            id: 1,
            name: '九溪烟树',
            description: '徒步溪谷',
            coordinates: [120.1567, 30.2745]
          },
          {
            id: 2,
            name: '八卦田',
            description: '登山健行',
            coordinates: [120.1678, 30.2856]
          },
          {
            id: 3,
            name: '满陇桂雨',
            description: '森林步道',
            coordinates: [120.1789, 30.2967]
          }
        ]
      },
      {
        id: 'r65',
        name: '杭帮美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗的杭帮菜',
        waypoints: [
          {
            id: 1,
            name: '楼外楼',
            description: '百年老字号',
            coordinates: [120.1891, 30.3078]
          },
          {
            id: 2,
            name: '知味观',
            description: '传统杭帮菜',
            coordinates: [120.1912, 30.3189]
          },
          {
            id: 3,
            name: '河坊街',
            description: '特色小吃街',
            coordinates: [120.1934, 30.3201]
          }
        ]
      },
      {
        id: 'r63',
        name: '运河古镇',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '中等',
        description: '探访运河古镇，需要较多步行',
        waypoints: [
          {
            id: 1,
            name: '富阳古镇',
            description: '山地古镇，地形起伏',
            coordinates: [119.9523, 30.0489]
          },
          {
            id: 2,
            name: '塘栖古镇',
            description: '水乡古镇，步行较多',
            coordinates: [120.2123, 30.3234]
          },
          {
            id: 3,
            name: '运河博物馆',
            description: '了解运河历史文化',
            coordinates: [120.1789, 30.2912]
          }
        ]
      },
      {
        id: 'r64',
        name: '都市风情',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '轻松体验都市生活',
        waypoints: [
          {
            id: 1,
            name: '湖滨银泰',
            description: '现代商圈，交通便利',
            coordinates: [120.1678, 30.2567]
          },
          {
            id: 2,
            name: '西溪天堂',
            description: '休闲购物区，设施完善',
            coordinates: [120.0789, 30.2789]
          },
          {
            id: 3,
            name: '钱江新城',
            description: '现代建筑群，交通便捷',
            coordinates: [120.2123, 30.2567]
          }
        ]
      },
      {
        id: 'r65',
        name: '杭帮美食',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝地道杭帮菜',
        waypoints: [
          {
            id: 1,
            name: '楼外楼',
            description: '老字号，地理位置便利',
            coordinates: [120.1567, 30.2456]
          },
          {
            id: 2,
            name: '知味观',
            description: '传统杭帮菜，交通方便',
            coordinates: [120.1678, 30.2567]
          },
          {
            id: 3,
            name: '河坊街',
            description: '小吃一条街，适合漫步',
            coordinates: [120.1789, 30.2678]
          }
        ]
      }
    ]
  },
  {
    id: 14,
    name: '广州',
    description: '中国的南大门，历史文化名城',
    image: '/images/guangzhou.jpg',
    region: '华南',
    isOverseas: false,
    coordinates: { lat: 23.1291, lng: 113.2644 },
    routes: [
      {
        id: 'r27',
        name: '广州城市文化游',
        theme: '城市观光',
        duration: '2天',
        difficulty: '简单',
        description: '探索广州的城市文化和历史',
        waypoints: [
          {
            id: 1,
            name: '沙面岛',
            description: '欧式建筑群，展现广州的历史风貌',
            coordinates: [113.2389, 23.1123]
          },
          {
            id: 2,
            name: '陈家祠',
            description: '岭南建筑艺术的代表作',
            coordinates: [113.2456, 23.1256]
          },
          {
            id: 3,
            name: '广州塔',
            description: '俯瞰广州全景的最佳位置',
            coordinates: [113.3189, 23.1134]
          }
        ]
      },
      {
        id: 'r28',
        name: '粤式美食之旅',
        theme: '美食',
        duration: '1天',
        difficulty: '简单',
        description: '品尝广州特色美食',
        waypoints: [
          {
            id: 1,
            name: '上下九步行街',
            description: '品尝各种广州小吃',
            coordinates: [113.2512, 23.1178]
          },
          {
            id: 2,
            name: '北京路步行街',
            description: '现代购物区，品尝粤式茶点',
            coordinates: [113.2689, 23.1245]
          }
        ]
      },
      {
        id: 'r56',
        name: '岭南文化探索',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '探索广州独特的岭南文化',
        waypoints: [
          {
            id: 1,
            name: '陈家祠',
            description: '岭南建筑艺术博物馆',
            coordinates: [113.2567, 23.1256]
          },
          {
            id: 2,
            name: '沙面岛',
            description: '欧陆风情建筑群',
            coordinates: [113.2389, 23.1089]
          },
          {
            id: 3,
            name: '广州博物馆',
            description: '镇海楼古建筑',
            coordinates: [113.2456, 23.1178]
          }
        ]
      },
      {
        id: 'r57',
        name: '城市公园游',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '游览广州最美的城市公园',
        waypoints: [
          {
            id: 1,
            name: '白云山',
            description: '广州第一峰',
            coordinates: [113.2912, 23.1645]
          },
          {
            id: 2,
            name: '越秀公园',
            description: '五羊雕像所在地',
            coordinates: [113.2678, 23.1467]
          },
          {
            id: 3,
            name: '流花湖公园',
            description: '城中绿洲',
            coordinates: [113.2534, 23.1389]
          }
        ]
      },
      {
        id: 'r58',
        name: '现代建筑摄影',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '拍摄广州现代建筑群',
        waypoints: [
          {
            id: 1,
            name: '广州塔',
            description: '小蛮腰地标建筑',
            coordinates: [113.3189, 23.1067]
          },
          {
            id: 2,
            name: '海心沙',
            description: '亚运会主会场',
            coordinates: [113.3234, 23.1112]
          },
          {
            id: 3,
            name: '珠江新城',
            description: '现代商务区',
            coordinates: [113.3278, 23.1156]
          }
        ]
      },
      {
        id: 'r59',
        name: '珠江夜游',
        theme: '休闲度假',
        duration: '1天',
        difficulty: '简单',
        description: '欣赏珠江两岸夜景',
        waypoints: [
          {
            id: 1,
            name: '天字码头',
            description: '游船起点',
            coordinates: [113.2723, 23.1134]
          },
          {
            id: 2,
            name: '大沙头',
            description: '观赏珠江夜景',
            coordinates: [113.2845, 23.1178]
          },
          {
            id: 3,
            name: '白鹅潭',
            description: '观赏现代建筑群',
            coordinates: [113.2967, 23.1223]
          }
        ]
      },
      {
        id: 'r60',
        name: '广州美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝地道的广州美食',
        waypoints: [
          {
            id: 1,
            name: '上下九步行街',
            description: '传统小吃街',
            coordinates: [113.2489, 23.1267]
          },
          {
            id: 2,
            name: '北京路',
            description: '美食购物天堂',
            coordinates: [113.2612, 23.1312]
          },
          {
            id: 3,
            name: '沙河美食街',
            description: '地道粤式餐厅',
            coordinates: [113.2734, 23.1356]
          }
        ]
      }
    ]
  },
  {
    id: 15,
    name: '成都',
    description: '中国的西南门户，历史文化名城',
    image: '/images/chengdu.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 30.5728, lng: 104.0668 },
    routes: [
      {
        id: 'r29',
        name: '成都文化探索',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '探索成都的历史文化',
        waypoints: [
          {
            id: 1,
            name: '宽窄巷子',
            description: '体验老成都的生活方式',
            coordinates: [104.0456, 30.6734]
          },
          {
            id: 2,
            name: '武侯祠',
            description: '三国文化的重要遗址',
            coordinates: [104.0478, 30.6423]
          },
          {
            id: 3,
            name: '杜甫草堂',
            description: '唐代诗人杜甫的故居',
            coordinates: [104.0234, 30.6567]
          }
        ]
      },
      {
        id: 'r30',
        name: '熊猫基地之旅',
        theme: '自然探索',
        duration: '1天',
        difficulty: '简单',
        description: '观赏可爱的大熊猫',
        waypoints: [
          {
            id: 1,
            name: '大熊猫繁育研究基地',
            description: '观察大熊猫的生活习性',
            coordinates: [104.1456, 30.7334]
          },
          {
            id: 2,
            name: '锦里古街',
            description: '品尝成都小吃，购买特色商品',
            coordinates: [104.0489, 30.6512]
          }
        ]
      },
      {
        id: 'r61',
        name: '熊猫基地游',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '近距离接触可爱的大熊猫',
        waypoints: [
          {
            id: 1,
            name: '熊猫基地',
            description: '大熊猫繁育研究基地',
            coordinates: [104.1434, 30.7378]
          },
          {
            id: 2,
            name: '月亮产房',
            description: '幼年大熊猫活动区',
            coordinates: [104.1456, 30.7389]
          },
          {
            id: 3,
            name: '成年园区',
            description: '成年大熊猫活动区',
            coordinates: [104.1478, 30.7401]
          }
        ]
      },
      {
        id: 'r62',
        name: '锦里古街文化游',
        theme: '文化探索',
        duration: '2天',
        difficulty: '简单',
        description: '体验成都传统文化',
        waypoints: [
          {
            id: 1,
            name: '锦里古街',
            description: '三国文化街区',
            coordinates: [104.0456, 30.6423]
          },
          {
            id: 2,
            name: '武侯祠',
            description: '三国历史遗迹',
            coordinates: [104.0478, 30.6445]
          },
          {
            id: 3,
            name: '杜甫草堂',
            description: '唐代文化遗址',
            coordinates: [104.0501, 30.6467]
          }
        ]
      },
      {
        id: 'r63',
        name: '都江堰探秘',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '中等',
        description: '探索世界文化遗产',
        waypoints: [
          {
            id: 1,
            name: '都江堰',
            description: '古代水利工程',
            coordinates: [103.6178, 30.9989]
          },
          {
            id: 2,
            name: '青城山',
            description: '道教名山',
            coordinates: [103.5678, 30.9123]
          },
          {
            id: 3,
            name: '离堆公园',
            description: '都江堰景区',
            coordinates: [103.6234, 31.0023]
          }
        ]
      },
      {
        id: 'r64',
        name: '街拍艺术',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '捕捉成都市井生活',
        waypoints: [
          {
            id: 1,
            name: '太古里',
            description: '现代时尚地标',
            coordinates: [104.0823, 30.6512]
          },
          {
            id: 2,
            name: '宽窄巷子',
            description: '老成都生活场景',
            coordinates: [104.0645, 30.6734]
          },
          {
            id: 3,
            name: '春熙路',
            description: '都市繁华景象',
            coordinates: [104.0867, 30.6556]
          }
        ]
      },
      {
        id: 'r65',
        name: '川菜美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗川菜',
        waypoints: [
          {
            id: 1,
            name: '玉林小区',
            description: '地道川菜聚集地',
            coordinates: [104.0589, 30.6278]
          },
          {
            id: 2,
            name: '九眼桥',
            description: '特色火锅一条街',
            coordinates: [104.0712, 30.6401]
          },
          {
            id: 3,
            name: '奎星楼街',
            description: '传统小吃街',
            coordinates: [104.0834, 30.6523]
          }
        ]
      }
    ]
  },
  {
    id: 16,
    name: '重庆',
    description: '山城重庆，火锅和江景的完美融合',
    image: '/images/chongqing.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 29.5628, lng: 106.5514 },
    routes: [
      {
        id: 'r23',
        name: '山城风光游',
        theme: '城市观光',
        duration: '2天',
        difficulty: '中等',
        description: '探索重庆独特的山城风貌',
        waypoints: [
          {
            id: 1,
            name: '洪崖洞',
            description: '重庆地标建筑，观赏江景的最佳位置',
            coordinates: [106.5878, 29.5634]
          },
          {
            id: 2,
            name: '长江索道',
            description: '体验空中观光，俯瞰重庆全景',
            coordinates: [106.5723, 29.5589]
          },
          {
            id: 3,
            name: '解放碑',
            description: '重庆商业中心，体验现代都市生活',
            coordinates: [106.5767, 29.5556]
          }
        ]
      },
      {
        id: 'r24',
        name: '美食文化之旅',
        theme: '美食',
        duration: '1天',
        difficulty: '简单',
        description: '品尝重庆特色美食',
        waypoints: [
          {
            id: 1,
            name: '较场口',
            description: '品尝各种重庆小面和街头小吃',
            coordinates: [106.5734, 29.5512]
          },
          {
            id: 2,
            name: '九宫格火锅',
            description: '体验正宗重庆火锅',
            coordinates: [106.5689, 29.5534]
          }
        ]
      },
      {
        id: 'r66',
        name: '山城印象',
        theme: '文化探索',
        duration: '2天',
        difficulty: '中等',
        description: '探索重庆独特的山城文化',
        waypoints: [
          {
            id: 1,
            name: '解放碑',
            description: '重庆地标建筑',
            coordinates: [106.5767, 29.5589]
          },
          {
            id: 2,
            name: '洪崖洞',
            description: '山城吊脚楼',
            coordinates: [106.5845, 29.5634]
          },
          {
            id: 3,
            name: '长江索道',
            description: '空中缆车',
            coordinates: [106.5923, 29.5678]
          }
        ]
      },
      {
        id: 'r67',
        name: '夜景摄影',
        theme: '摄影之旅',
        duration: '3天',
        difficulty: '中等',
        description: '拍摄重庆璀璨夜景',
        waypoints: [
          {
            id: 1,
            name: '南山一棵树',
            description: '观景台',
            coordinates: [106.5678, 29.5234]
          },
          {
            id: 2,
            name: '两江汇合处',
            description: '江景观赏点',
            coordinates: [106.5789, 29.5345]
          },
          {
            id: 3,
            name: '李子坝轻轨站',
            description: '穿楼轻轨',
            coordinates: [106.5891, 29.5456]
          }
        ]
      },
      {
        id: 'r68',
        name: '武隆探险',
        theme: '户外冒险',
        duration: '2天',
        difficulty: '困难',
        description: '探索喀斯特地貌',
        waypoints: [
          {
            id: 1,
            name: '天生三桥',
            description: '世界自然遗产',
            coordinates: [107.7567, 29.3245]
          },
          {
            id: 2,
            name: '龙水峡地缝',
            description: '峡谷探险',
            coordinates: [107.7678, 29.3356]
          },
          {
            id: 3,
            name: '仙女山',
            description: '高原草场',
            coordinates: [107.7789, 29.3467]
          }
        ]
      },
      {
        id: 'r69',
        name: '三峡风光',
        theme: '自然风光',
        duration: '3天',
        difficulty: '简单',
        description: '游览长江三峡',
        waypoints: [
          {
            id: 1,
            name: '瞿塘峡',
            description: '长江三峡之一',
            coordinates: [106.8123, 29.7234]
          },
          {
            id: 2,
            name: '巫峡',
            description: '长江三峡之二',
            coordinates: [106.8234, 29.7345]
          },
          {
            id: 3,
            name: '西陵峡',
            description: '长江三峡之三',
            coordinates: [106.8345, 29.7456]
          }
        ]
      },
      {
        id: 'r70',
        name: '重庆美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝地道重庆美食',
        waypoints: [
          {
            id: 1,
            name: '磁器口古镇',
            description: '传统小吃街',
            coordinates: [106.4789, 29.5789]
          },
          {
            id: 2,
            name: '较场口',
            description: '火锅一条街',
            coordinates: [106.4891, 29.5891]
          },
          {
            id: 3,
            name: '解放碑步行街',
            description: '现代美食广场',
            coordinates: [106.4912, 29.5912]
          }
        ]
      },
      {
        id: 'r73',
        name: '磁器口古镇',
        theme: '文化探索',
        duration: '1天',
        difficulty: '中等',
        description: '老街巷探索，台阶众多',
        waypoints: [
          {
            id: 1,
            name: '磁器口古镇',
            description: '千年古镇，石板路较陡',
            coordinates: [106.4489, 29.5789]
          },
          {
            id: 2,
            name: '宝轮寺',
            description: '古寺庙，需要登高',
            coordinates: [106.4512, 29.5812]
          },
          {
            id: 3,
            name: '正街',
            description: '传统街道，地形起伏',
            coordinates: [106.4534, 29.5834]
          }
        ]
      },
      {
        id: 'r74',
        name: '南山一棵树',
        theme: '自然风光',
        duration: '1天',
        difficulty: '困难',
        description: '山顶观景，需要体力',
        waypoints: [
          {
            id: 1,
            name: '南山一棵树观景台',
            description: '山顶景观，爬山较累',
            coordinates: [106.5678, 29.5234]
          },
          {
            id: 2,
            name: '南山植物园',
            description: '山间植物园，坡度大',
            coordinates: [106.5712, 29.5256]
          },
          {
            id: 3,
            name: '南山老街',
            description: '山城老街，台阶众多',
            coordinates: [106.5734, 29.5278]
          }
        ]
      },
      {
        id: 'r75',
        name: '两江夜景',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '观赏夜景，交通便利',
        waypoints: [
          {
            id: 1,
            name: '朝天门广场',
            description: '江边广场，地势平坦',
            coordinates: [106.5823, 29.5678]
          },
          {
            id: 2,
            name: '长江索道',
            description: '空中缆车，轻松观景',
            coordinates: [106.5845, 29.5689]
          },
          {
            id: 3,
            name: '南滨路',
            description: '江边步道，适合散步',
            coordinates: [106.5867, 29.5712]
          }
        ]
      },
      {
        id: 'r76',
        name: '重庆火锅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝地道火锅，交通方便',
        waypoints: [
          {
            id: 1,
            name: '洞亭火锅',
            description: '老字号火锅，地铁直达',
            coordinates: [106.5456, 29.5567]
          },
          {
            id: 2,
            name: '较场口小吃街',
            description: '特色小吃，交通便利',
            coordinates: [106.5478, 29.5589]
          },
          {
            id: 3,
            name: '解放碑美食街',
            description: '美食聚集地，设施完善',
            coordinates: [106.5512, 29.5612]
          }
        ]
      },
      {
        id: 'r77',
        name: '红色之旅',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '中等',
        description: '参观历史遗迹，有坡度',
        waypoints: [
          {
            id: 1,
            name: '红岩革命纪念馆',
            description: '山间纪念馆，需要爬坡',
            coordinates: [106.5123, 29.5234]
          },
          {
            id: 2,
            name: '歌乐山烈士陵园',
            description: '山顶陵园，台阶较多',
            coordinates: [106.5145, 29.5256]
          },
          {
            id: 3,
            name: '白公馆',
            description: '历史建筑，地形起伏',
            coordinates: [106.5167, 29.5278]
          }
        ]
      }
    ]
  },
  {
    id: 17,
    name: '青岛',
    description: '红瓦绿树，碧海蓝天',
    image: '/images/qingdao.jpg',
    region: '华东',
    isOverseas: false,
    coordinates: { lat: 36.0671, lng: 120.3826 },
    routes: [
      {
        id: 'r78',
        name: '海滨漫步',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '漫步海滨，欣赏海景',
        waypoints: [
          {
            id: 1,
            name: '第一海水浴场',
            description: '沙滩平缓，设施完善',
            coordinates: [120.3345, 36.0567]
          },
          {
            id: 2,
            name: '栈桥',
            description: '标志性景点，步行方便',
            coordinates: [120.3123, 36.0589]
          },
          {
            id: 3,
            name: '小青岛',
            description: '海岛公园，地势平坦',
            coordinates: [120.3167, 36.0612]
          }
        ]
      },
      {
        id: 'r79',
        name: '八大关建筑',
        theme: '文化探索',
        duration: '1天',
        difficulty: '中等',
        description: '观赏欧式建筑，有坡度',
        waypoints: [
          {
            id: 1,
            name: '八大关风景区',
            description: '山间别墅区，需要爬坡',
            coordinates: [120.3456, 36.0534]
          },
          {
            id: 2,
            name: '公主楼',
            description: '欧式建筑，地形起伏',
            coordinates: [120.3478, 36.0556]
          },
          {
            id: 3,
            name: '花石楼',
            description: '历史建筑，台阶较多',
            coordinates: [120.3512, 36.0578]
          }
        ]
      },
      {
        id: 'r80',
        name: '崂山探险',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '困难',
        description: '登山观海，体力要求高',
        waypoints: [
          {
            id: 1,
            name: '崂山北九水',
            description: '山涧溪流，地形陡峭',
            coordinates: [120.6234, 36.1567]
          },
          {
            id: 2,
            name: '太清宫',
            description: '山顶道观，需要登高',
            coordinates: [120.6256, 36.1589]
          },
          {
            id: 3,
            name: '巨峰',
            description: '崂山主峰，攀爬难度大',
            coordinates: [120.6278, 36.1612]
          }
        ]
      },
      {
        id: 'r81',
        name: '啤酒文化',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探访啤酒文化，交通便利',
        waypoints: [
          {
            id: 1,
            name: '青岛啤酒博物馆',
            description: '了解青岛历史文化，互动展览',
            coordinates: [120.3678, 36.0734]
          },
          {
            id: 2,
            name: '啤酒街',
            description: '特色街区，地势平坦',
            coordinates: [120.3712, 36.0756]
          },
          {
            id: 3,
            name: '劈柴院',
            description: '历史街区，适合漫步',
            coordinates: [120.3734, 36.0778]
          }
        ]
      },
      {
        id: 'r82',
        name: '海鲜美食',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝海鲜美食，交通方便',
        waypoints: [
          {
            id: 1,
            name: '台东步行街',
            description: '美食聚集地，设施完善',
            coordinates: [120.3845, 36.0845]
          },
          {
            id: 2,
            name: '云霄路海鲜市场',
            description: '海鲜市场，地面平整',
            coordinates: [120.3867, 36.0867]
          },
          {
            id: 3,
            name: '五四广场商圈',
            description: '现代商圈，交通便利',
            coordinates: [120.3889, 36.0889]
          }
        ]
      },
      {
        id: 'r83',
        name: '城市观光',
        theme: '城市观光',
        duration: '1天',
        difficulty: '中等',
        description: '游览市区景点，部分有坡',
        waypoints: [
          {
            id: 1,
            name: '五四广场',
            description: '标志性广场，部分台阶',
            coordinates: [120.3912, 36.0712]
          },
          {
            id: 2,
            name: '奥帆中心',
            description: '滨海景区，地形起伏',
            coordinates: [120.3934, 36.0734]
          },
          {
            id: 3,
            name: '信号山公园',
            description: '山顶公园，需要爬坡',
            coordinates: [120.3956, 36.0756]
          }
        ]
      }
    ]
  },
  {
    id: 18,
    name: '巴黎',
    description: '浪漫之都，艺术与时尚的代名词',
    image: '/images/paris.jpg',
    region: '西欧',
    isOverseas: true,
    coordinates: { lat: 48.8566, lng: 2.3522 },
    routes: [
      {
        id: 'r201',
        name: '艺术博物馆之旅',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索世界顶级艺术博物馆，感受艺术魅力，交通便利',
        waypoints: [
          {
            id: 1,
            name: '卢浮宫',
            description: '世界最大艺术博物馆，建议预约参观，设施完善',
            coordinates: [2.3376, 48.8606]
          },
          {
            id: 2,
            name: '奥赛博物馆',
            description: '印象派艺术殿堂，适合艺术爱好者，环境舒适',
            coordinates: [2.3265, 48.8599]
          },
          {
            id: 3,
            name: '蓬皮杜艺术中心',
            description: '现代艺术展览，建筑独特，交通便利',
            coordinates: [2.3522, 48.8566]
          }
        ]
      },
      {
        id: 'r202',
        name: '浪漫城市观光',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '游览巴黎地标建筑，体验浪漫氛围，适合拍照',
        waypoints: [
          {
            id: 1,
            name: '埃菲尔铁塔',
            description: '建议日落时分参观，需提前预约登塔',
            coordinates: [2.2945, 48.8584]
          },
          {
            id: 2,
            name: '香榭丽舍大街',
            description: '购物天堂，林荫大道，适合漫步',
            coordinates: [2.3084, 48.8698]
          },
          {
            id: 3,
            name: '凯旋门',
            description: '历史地标，可登顶观景，需爬楼梯',
            coordinates: [2.2950, 48.8738]
          }
        ]
      },
      {
        id: 'r203',
        name: '历史建筑探索',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '中等',
        description: '探访巴黎历史建筑，了解法国历史文化',
        waypoints: [
          {
            id: 1,
            name: '巴黎圣母院',
            description: '哥特式建筑杰作，正在修复中，可外观参观',
            coordinates: [2.3522, 48.8530]
          },
          {
            id: 2,
            name: '凡尔赛宫',
            description: '法国皇家宫殿，建议全天游览，需要步行',
            coordinates: [2.1204, 48.8049]
          },
          {
            id: 3,
            name: '先贤祠',
            description: '法兰西名人纪念堂，庄严肃穆，环境安静',
            coordinates: [2.3462, 48.8462]
          }
        ]
      },
      {
        id: 'r204',
        name: '艺术区漫步',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索巴黎艺术街区，感受文艺氛围',
        waypoints: [
          {
            id: 1,
            name: '蒙马特高地',
            description: '艺术家聚集地，需要爬坡，景色优美',
            coordinates: [2.3430, 48.8867]
          },
          {
            id: 2,
            name: '圣心大教堂',
            description: '白色教堂，可俯瞰巴黎全景',
            coordinates: [2.3431, 48.8867]
          },
          {
            id: 3,
            name: '毕加索博物馆',
            description: '收藏大师作品，环境优雅安静',
            coordinates: [2.3627, 48.8567]
          }
        ]
      },
      {
        id: 'r205',
        name: '美食探索之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝法式美食，体验美食文化',
        waypoints: [
          {
            id: 1,
            name: '拉法叶百货美食区',
            description: '高端美食汇集，环境优雅',
            coordinates: [2.3375, 48.8709]
          },
          {
            id: 2,
            name: '马黑区市场',
            description: '传统市场，可以品尝当地美食',
            coordinates: [2.3697, 48.8657]
          },
          {
            id: 3,
            name: '香榭丽舍美食街',
            description: '米其林餐厅云集，需要预约',
            coordinates: [2.3084, 48.8698]
          }
        ]
      },
      {
        id: 'r206',
        name: '花园漫步',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '游览巴黎经典花园，享受悠闲时光',
        waypoints: [
          {
            id: 1,
            name: '卢森堡公园',
            description: '法式园林，适合野餐，休憩',
            coordinates: [2.3366, 48.8462]
          },
          {
            id: 2,
            name: '杜乐丽花园',
            description: '皇家花园，环境优美宁静',
            coordinates: [2.3272, 48.8634]
          },
          {
            id: 3,
            name: '植物园',
            description: '自然博物馆，适合科普游览',
            coordinates: [2.3565, 48.8439]
          }
        ]
      }
    ]
  },
  {
    id: 19,
    name: '东京',
    description: '传统与现代完美融合的未来之城',
    image: '/images/tokyo.jpg',
    region: '东亚',
    isOverseas: true,
    coordinates: { lat: 35.6762, lng: 139.6503 },
    routes: [
      {
        id: 'r203',
        name: '现代都市体验',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验东京现代都市魅力',
        waypoints: [
          {
            id: 1,
            name: '涩谷十字路口',
            description: '世界最繁忙的十字路口，现代都市的象征',
            coordinates: [139.7019, 35.6580]
          },
          {
            id: 2,
            name: '新宿',
            description: '繁华的商业区，有东京都厅等现代建筑',
            coordinates: [139.7051, 35.6896]
          },
          {
            id: 3,
            name: '秋叶原',
            description: '电器与动漫文化的天堂',
            coordinates: [139.7741, 35.6989]
          }
        ]
      },
      {
        id: 'r204',
        name: '传统文化探索',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索日本传统文化',
        waypoints: [
          {
            id: 1,
            name: '浅草寺',
            description: '东京最古老的寺庙',
            coordinates: [139.7966, 35.7147]
          },
          {
            id: 2,
            name: '明治神宫',
            description: '东京最重要的神道教圣地',
            coordinates: [139.6993, 35.6762]
          },
          {
            id: 3,
            name: '皇居',
            description: '日本天皇的居所',
            coordinates: [139.7528, 35.6852]
          }
        ]
      },
      {
        id: 'r205',
        name: '动漫文化之旅',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索日本动漫文化发源地，体验二次元世界',
        waypoints: [
          {
            id: 1,
            name: '秋叶原',
            description: '动漫天堂，电器街，氛围热闹',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 2,
            name: '三丽鸥彩虹乐园',
            description: 'Hello Kitty主题乐园，适合亲子',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 3,
            name: '吉卜力美术馆',
            description: '动画艺术殿堂，需要提前预约',
            coordinates: [139.5704, 35.6962]
          }
        ]
      },
      {
        id: 'r206',
        name: '美食探索',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗日本料理，体验美食文化',
        waypoints: [
          {
            id: 1,
            name: '筑地市场',
            description: '海鲜美食天堂，建议早起排队',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 2,
            name: '银座美食街',
            description: '高级餐厅云集，建议提前预约',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 3,
            name: '新宿思出横丁',
            description: '传统居酒屋街，体验本地生活',
            coordinates: [139.7741, 35.6989]
          }
        ]
      },
      {
        id: 'r207',
        name: '购物天堂',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验东京特色商圈，享受购物乐趣',
        waypoints: [
          {
            id: 1,
            name: '银座',
            description: '奢侈品购物街',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 2,
            name: '原宿竹下通',
            description: '年轻人时尚街区，周末人流量大',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 3,
            name: '涩谷109',
            description: '日本流行文化中心，适合年轻人',
            coordinates: [139.7741, 35.6989]
          }
        ]
      },
      {
        id: 'r208',
        name: '自然探索',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '探访东京自然景观，感受四季变化',
        waypoints: [
          {
            id: 1,
            name: '上野公园',
            description: '赏樱胜地，博物馆云集，环境优美',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 2,
            name: '井之头恩赐公园',
            description: '都市绿洲，适合野餐，休憩',
            coordinates: [139.7741, 35.6989]
          },
          {
            id: 3,
            name: '新宿御苑',
            description: '日式庭园，四季景色不同，需要门票',
            coordinates: [139.7741, 35.6989]
          }
        ]
      }
    ]
  },
  {
    id: 20,
    name: '纽约',
    description: '世界金融中心，文化多元的大都会',
    image: '/images/newyork.jpg',
    region: '北美',
    isOverseas: true,
    coordinates: { lat: 40.7128, lng: -74.0060 },
    routes: [
      {
        id: 'r31',
        name: '曼哈顿精华游',
        theme: '城市观光',
        duration: '2天',
        difficulty: '简单',
        description: '探索纽约最著名的地标和景点',
        waypoints: [
          {
            id: 1,
            name: '自由女神像',
            description: '美国的象征，自由与民主的标志',
            coordinates: [-74.0445, 40.6892]
          },
          {
            id: 2,
            name: '帝国大厦',
            description: '俯瞰纽约全景的最佳位置',
            coordinates: [-73.9857, 40.7484]
          },
          {
            id: 3,
            name: '时代广场',
            description: '纽约的心脏，繁华的商业区',
            coordinates: [-73.9855, 40.7580]
          }
        ]
      },
      {
        id: 'r32',
        name: '艺术与文化之旅',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索纽约丰富的艺术文化',
        waypoints: [
          {
            id: 1,
            name: '大都会艺术博物馆',
            description: '世界顶级的艺术博物馆',
            coordinates: [-73.9632, 40.7794]
          },
          {
            id: 2,
            name: '现代艺术博物馆',
            description: '收藏现代艺术作品的重要场所',
            coordinates: [-73.9776, 40.7614]
          },
          {
            id: 3,
            name: '中央公园',
            description: '纽约的绿肺，艺术与自然的完美结合',
            coordinates: [-73.9654, 40.7829]
          }
        ]
      },
      {
        id: 'r33',
        name: '布鲁克林探索',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '探索纽约最有活力的区域',
        waypoints: [
          {
            id: 1,
            name: '布鲁克林大桥',
            description: '标志性建筑，适合步行和骑行',
            coordinates: [-73.9969, 40.7061]
          },
          {
            id: 2,
            name: 'DUMBO区',
            description: '艺术区，网红拍照地',
            coordinates: [-73.9883, 40.7033]
          },
          {
            id: 3,
            name: '布鲁克林高线公园',
            description: '城市绿地，休闲好去处',
            coordinates: [-73.9947, 40.7024]
          }
        ]
      },
      {
        id: 'r34',
        name: '美食探索',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝纽约特色美食',
        waypoints: [
          {
            id: 1,
            name: '切尔西市场',
            description: '美食集市，选择多样',
            coordinates: [-74.0048, 40.7425]
          },
          {
            id: 2,
            name: '小意大利区',
            description: '意大利美食聚集地',
            coordinates: [-73.9967, 40.7196]
          },
          {
            id: 3,
            name: '唐人街',
            description: '亚洲美食天堂',
            coordinates: [-73.9972, 40.7158]
          }
        ]
      },
      {
        id: 'r35',
        name: '购物天堂',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验纽约顶级购物',
        waypoints: [
          {
            id: 1,
            name: '第五大道',
            description: '奢侈品购物街',
            coordinates: [-73.9787, 40.7624]
          },
          {
            id: 2,
            name: 'SoHo区',
            description: '潮流品牌聚集地',
            coordinates: [-73.9990, 40.7237]
          },
          {
            id: 3,
            name: '梅西百货',
            description: '传统百货公司',
            coordinates: [-73.9890, 40.7508]
          }
        ]
      },
      {
        id: 'r36',
        name: '夜生活体验',
        theme: '休闲度假',
        duration: '1天',
        difficulty: '简单',
        description: '体验纽约不夜城',
        waypoints: [
          {
            id: 1,
            name: '百老汇剧院区',
            description: '观看百老汇演出',
            coordinates: [-73.9867, 40.7590]
          },
          {
            id: 2,
            name: '爵士俱乐部',
            description: '听纽约特色爵士乐',
            coordinates: [-73.9814, 40.7464]
          },
          {
            id: 3,
            name: '洛克菲勒中心',
            description: '夜景观赏点',
            coordinates: [-73.9787, 40.7587]
          }
        ]
      }
    ]
  },
  {
    id: 21,
    name: '悉尼',
    description: '阳光、沙滩与歌剧院的完美组合',
    image: '/images/sydney.jpg',
    region: '大洋洲',
    isOverseas: true,
    coordinates: { lat: -33.8688, lng: 151.2093 },
    routes: [
      {
        id: 'r33',
        name: '悉尼精华游',
        theme: '城市观光',
        duration: '2天',
        difficulty: '简单',
        description: '探索悉尼最著名的地标和景点',
        waypoints: [
          {
            id: 1,
            name: '悉尼歌剧院',
            description: '世界文化遗产，现代建筑的杰作',
            coordinates: [151.2153, -33.8568]
          },
          {
            id: 2,
            name: '悉尼海港大桥',
            description: '攀登大桥，俯瞰悉尼港',
            coordinates: [151.2106, -33.8523]
          },
          {
            id: 3,
            name: '邦迪海滩',
            description: '著名的冲浪胜地，享受阳光与海滩',
            coordinates: [151.2744, -33.8914]
          }
        ]
      },
      {
        id: 'r34',
        name: '自然探索之旅',
        theme: '自然探索',
        duration: '1天',
        difficulty: '中等',
        description: '探索悉尼周边的自然风光',
        waypoints: [
          {
            id: 1,
            name: '蓝山国家公园',
            description: '欣赏壮丽的山景和瀑布',
            coordinates: [150.3012, -33.7189]
          },
          {
            id: 2,
            name: '塔龙加动物园',
            description: '近距离接触澳大利亚特有的动物',
            coordinates: [151.2412, -33.8434]
          }
        ]
      },
      {
        id: 'r35',
        name: '海滨探索',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '探索悉尼美丽的海滨风光',
        waypoints: [
          {
            id: 1,
            name: '曼利海滩',
            description: '悉尼著名冲浪胜地',
            coordinates: [151.2873, -33.7969]
          },
          {
            id: 2,
            name: '邦迪到库吉海岸步道',
            description: '海岸线徒步，风景优美',
            coordinates: [151.2684, -33.8937]
          },
          {
            id: 3,
            name: '沃森湾',
            description: '观赏日落的绝佳地点',
            coordinates: [151.2789, -33.8419]
          }
        ]
      },
      {
        id: 'r36',
        name: '美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝悉尼特色美食',
        waypoints: [
          {
            id: 1,
            name: '悉尼鱼市场',
            description: '新鲜海鲜，品种丰富',
            coordinates: [151.1957, -33.8697]
          },
          {
            id: 2,
            name: '岩石区美食街',
            description: '特色餐厅云集',
            coordinates: [151.2089, -33.8595]
          },
          {
            id: 3,
            name: '达令港',
            description: '海边美食区，环境优美',
            coordinates: [151.1974, -33.8704]
          }
        ]
      },
      {
        id: 'r37',
        name: '历史文化探索',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '了解悉尼历史文化',
        waypoints: [
          {
            id: 1,
            name: '悉尼博物馆',
            description: '了解澳大利亚历史',
            coordinates: [151.2112, -33.8688]
          },
          {
            id: 2,
            name: '岩石区',
            description: '悉尼最古老的街区',
            coordinates: [151.2089, -33.8595]
          },
          {
            id: 3,
            name: '维多利亚女王大厦',
            description: '19世纪建筑，现为购物中心',
            coordinates: [151.2071, -33.8708]
          }
        ]
      },
      {
        id: 'r38',
        name: '购物休闲',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验悉尼购物与休闲',
        waypoints: [
          {
            id: 1,
            name: '皮特街购物中心',
            description: '悉尼主要购物区',
            coordinates: [151.2089, -33.8708]
          },
          {
            id: 2,
            name: '帕丁顿市场',
            description: '周末市集，特色商品',
            coordinates: [151.2262, -33.8827]
          },
          {
            id: 3,
            name: '乔治街',
            description: '悉尼最繁华的商业街',
            coordinates: [151.2073, -33.8698]
          }
        ]
      }
    ]
  },
  {
    id: 22,
    name: '迪拜',
    description: '沙漠中崛起的现代奇迹',
    image: '/images/dubai.jpg',
    region: '中东',
    isOverseas: true,
    coordinates: { lat: 25.2048, lng: 55.2708 },
    routes: [
      {
        id: 'r35',
        name: '现代迪拜探索',
        theme: '城市观光',
        duration: '2天',
        difficulty: '简单',
        description: '探索迪拜的现代建筑和奢华生活',
        waypoints: [
          {
            id: 1,
            name: '哈利法塔',
            description: '世界最高建筑，俯瞰迪拜全景',
            coordinates: [25.1972, 55.2744]
          },
          {
            id: 2,
            name: '迪拜购物中心',
            description: '世界最大的购物中心，含室内滑雪场',
            coordinates: [25.1982, 55.2796]
          },
          {
            id: 3,
            name: '迪拜码头',
            description: '豪华游艇码头，林立着众多高端餐厅',
            coordinates: [25.1912, 55.2812]
          },
          {
            id: 4,
            name: '迪拜框架',
            description: '标志性建筑，可观赏新旧迪拜的对比',
            coordinates: [25.2272, 55.2923]
          }
        ]
      },
      {
        id: 'r36',
        name: '沙漠探险之旅',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '体验阿拉伯沙漠的独特魅力',
        waypoints: [
          {
            id: 1,
            name: '沙漠冲沙',
            description: '刺激的沙漠越野体验',
            coordinates: [25.1781, 55.3694]
          },
          {
            id: 2,
            name: '沙漠营地',
            description: '体验传统阿拉伯文化',
            coordinates: [25.1673, 55.3816]
          },
          {
            id: 3,
            name: '沙漠日落',
            description: '欣赏沙漠日落美景',
            coordinates: [25.1692, 55.3789]
          },
          {
            id: 4,
            name: '骆驼农场',
            description: '了解骆驼的生活，体验骑骆驼',
            coordinates: [25.1723, 55.3856]
          }
        ]
      },
      {
        id: 'r37',
        name: '传统文化探索',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '简单',
        description: '探索迪拜的传统文化与历史',
        waypoints: [
          {
            id: 1,
            name: '迪拜博物馆',
            description: '了解迪拜的历史变迁',
            coordinates: [25.2627, 55.2967]
          },
          {
            id: 2,
            name: '黄金市场',
            description: '传统市场，金饰云集',
            coordinates: [25.2867, 55.2971]
          },
          {
            id: 3,
            name: '香料市场',
            description: '传统香料和特产市场',
            coordinates: [25.2862, 55.2977]
          },
          {
            id: 4,
            name: '朱梅拉清真寺',
            description: '现代伊斯兰建筑',
            coordinates: [25.2339, 55.2337]
          }
        ]
      },
      {
        id: 'r38',
        name: '水上乐园冒险',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '中等',
        description: '体验迪拜最刺激的水上乐园',
        waypoints: [
          {
            id: 1,
            name: '亚特兰蒂斯水上乐园',
            description: '棕榈岛上的顶级水上乐园',
            coordinates: [25.1304, 55.1172]
          },
          {
            id: 2,
            name: '野生水族馆',
            description: '水族馆和海豚表演',
            coordinates: [25.1308, 55.1176]
          },
          {
            id: 3,
            name: '失落的空间水族馆',
            description: '探索神秘的海底世界',
            coordinates: [25.1312, 55.1181]
          }
        ]
      },
      {
        id: 'r39',
        name: '奢华美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品味迪拜的顶级美食',
        waypoints: [
          {
            id: 1,
            name: '帆船酒店',
            description: '享用奢华早午餐',
            coordinates: [25.1412, 55.1854]
          },
          {
            id: 2,
            name: '阿拉伯美食街',
            description: '品尝传统阿拉伯美食',
            coordinates: [25.2112, 55.2534]
          },
          {
            id: 3,
            name: '亚特兰蒂斯餐厅',
            description: '海底餐厅，独特用餐体验',
            coordinates: [25.1308, 55.1176]
          }
        ]
      },
      {
        id: 'r40',
        name: '迪拜夜景游',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '欣赏迪拜绚丽的夜景',
        waypoints: [
          {
            id: 1,
            name: '迪拜音乐喷泉',
            description: '世界最大的音乐喷泉表演',
            coordinates: [25.1953, 55.2745]
          },
          {
            id: 2,
            name: '迪拜码头游船',
            description: '乘船欣赏海岸线夜景',
            coordinates: [25.1912, 55.2812]
          },
          {
            id: 3,
            name: '哈利法塔观景台',
            description: '夜观迪拜城市全景',
            coordinates: [25.1972, 55.2744]
          }
        ]
      }
    ]
  },
  {
    id: 23,
    name: '厦门',
    description: '海上花园，海滨风光与文化遗产的完美融合',
    image: '/images/xiamen.jpg',
    region: '华东',
    isOverseas: false,
    coordinates: { lat: 24.4791, lng: 118.0819 },
    routes: [
      {
        id: 'r76',
        name: '鼓浪屿文化游',
        theme: '文化探索',
        duration: '2天',
        difficulty: '中等',
        description: '探索鼓浪屿的文化底蕴',
        waypoints: [
          {
            id: 1,
            name: '菽庄花园',
            description: '闽南园林建筑，中西合璧的私家花园',
            coordinates: [118.0673, 24.4426]
          },
          {
            id: 2,
            name: '皓月园',
            description: '历史名人故居，林巧稚故居',
            coordinates: [118.0652, 24.4458]
          },
          {
            id: 3,
            name: '钢琴博物馆',
            description: '亚洲最大的钢琴博物馆',
            coordinates: [118.0669, 24.4447]
          },
          {
            id: 4,
            name: '日光岩',
            description: '鼓浪屿最高点，可俯瞰全岛',
            coordinates: [118.0664, 24.4472]
          }
        ]
      },
      {
        id: 'r77',
        name: '海岸风光游',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '漫步厦门最美海岸线，欣赏日落',
        waypoints: [
          {
            id: 1,
            name: '环岛路',
            description: '最美海滨观光道路，适合骑行',
            coordinates: [118.1234, 24.4567]
          },
          {
            id: 2,
            name: '胡里山炮台',
            description: '百年军事遗迹，最佳日落观赏点',
            coordinates: [118.1567, 24.4891]
          },
          {
            id: 3,
            name: '曾厝垵',
            description: '文艺范十足的老渔村',
            coordinates: [118.1456, 24.4789]
          },
          {
            id: 4,
            name: '白城沙滩',
            description: '城市中心的休闲海滩',
            coordinates: [118.1345, 24.4678]
          }
        ]
      },
      {
        id: 'r78',
        name: '人文厦大',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '感受厦门的人文历史与校园风光',
        waypoints: [
          {
            id: 1,
            name: '南普陀寺',
            description: '千年古刹，闽南佛教圣地',
            coordinates: [118.0871, 24.4428]
          },
          {
            id: 2,
            name: '厦门大学',
            description: '中国最美大学，依山傍海',
            coordinates: [118.0928, 24.4389]
          },
          {
            id: 3,
            name: '芙蓉隧道',
            description: '浪漫文艺的涂鸦隧道',
            coordinates: [118.0935, 24.4397]
          },
          {
            id: 4,
            name: '情人谷',
            description: '厦大校园内的浪漫景点',
            coordinates: [118.0941, 24.4382]
          }
        ]
      },
      {
        id: 'r79',
        name: '闽南美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝地道闽南美食',
        waypoints: [
          {
            id: 1,
            name: '中山路步行街',
            description: '百年老街，汇集传统小吃',
            coordinates: [118.0812, 24.4512]
          },
          {
            id: 2,
            name: '八市',
            description: '百年海鲜市场，本地人首选',
            coordinates: [118.0834, 24.4534]
          },
          {
            id: 3,
            name: '曾厝垵美食街',
            description: '网红美食聚集地，创新闽南小吃',
            coordinates: [118.0856, 24.4556]
          },
          {
            id: 4,
            name: '沙坡尾',
            description: '文艺范美食区，老码头新风貌',
            coordinates: [118.0878, 24.4578]
          }
        ]
      }
    ]
  },
  {
    id: 24,
    name: '大理',
    description: '风花雪月，古城风韵',
    image: '/images/dali.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 25.6065, lng: 100.2679 },
    routes: [
      {
        id: 'r90',
        name: '古城漫步',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索古城风情，地势平坦',
        waypoints: [
          {
            id: 1,
            name: '大理古城',
            description: '历史街区，设施完善',
            coordinates: [100.1645, 25.6867]
          },
          {
            id: 2,
            name: '人民路',
            description: '商业街区，适合漫步',
            coordinates: [100.1667, 25.6889]
          },
          {
            id: 3,
            name: '五华楼',
            description: '地标建筑，交通便利',
            coordinates: [100.1689, 25.6912]
          }
        ]
      },
      {
        id: 'r91',
        name: '苍山登高',
        theme: '户外冒险',
        duration: '1天',
        difficulty: '困难',
        description: '登山观景，体力要求高',
        waypoints: [
          {
            id: 1,
            name: '清碧溪',
            description: '山涧溪流，地形陡峭',
            coordinates: [100.1234, 25.6567]
          },
          {
            id: 2,
            name: '玉带云游',
            description: '山间栈道，需要登高',
            coordinates: [100.1256, 25.6589]
          },
          {
            id: 3,
            name: '苍山主峰',
            description: '山顶景观，攀爬难度大',
            coordinates: [100.1278, 25.6612]
          }
        ]
      },
      {
        id: 'r92',
        name: '洱海环游',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '湖边骑行，部分有坡',
        waypoints: [
          {
            id: 1,
            name: '洱海公园',
            description: '湖滨景区，地形起伏',
            coordinates: [100.1845, 25.6345]
          },
          {
            id: 2,
            name: '双廊古镇',
            description: '水乡古镇，需要骑行',
            coordinates: [100.1867, 25.6367]
          },
          {
            id: 3,
            name: '才村码头',
            description: '观景码头，适合拍照',
            coordinates: [100.1889, 25.6389]
          }
        ]
      },
      {
        id: 'r93',
        name: '白族美食',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝特色美食，交通便利',
        waypoints: [
          {
            id: 1,
            name: '护国路小吃街',
            description: '美食街区，设施完善',
            coordinates: [100.1812, 25.6512]
          },
          {
            id: 2,
            name: '喜洲古镇',
            description: '白族美食，地面平整',
            coordinates: [100.1834, 25.6534]
          },
          {
            id: 3,
            name: '大理古城美食街',
            description: '特色小吃，适合漫步',
            coordinates: [100.1856, 25.6556]
          }
        ]
      },
      {
        id: 'r94',
        name: '崇圣寺',
        theme: '文化探索',
        duration: '1天',
        difficulty: '中等',
        description: '佛教圣地，需要爬坡',
        waypoints: [
          {
            id: 1,
            name: '崇圣寺三塔',
            description: '历史建筑，台阶较多',
            coordinates: [100.1923, 25.7012]
          },
          {
            id: 2,
            name: '华林寺',
            description: '山间寺庙，地形起伏',
            coordinates: [100.1945, 25.7034]
          },
          {
            id: 3,
            name: '大理佛教文化院',
            description: '文化场所，需要步行',
            coordinates: [100.1967, 25.7056]
          }
        ]
      },
      {
        id: 'r95',
        name: '民族风情',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '体验白族文化，交通方便',
        waypoints: [
          {
            id: 1,
            name: '大理扎染艺术馆',
            description: '文化体验，设施完善',
            coordinates: [100.2012, 25.6712]
          },
          {
            id: 2,
            name: '白族民居',
            description: '传统建筑，地面平整',
            coordinates: [100.2034, 25.6734]
          },
          {
            id: 3,
            name: '大理非遗馆',
            description: '文化展馆，适合参观',
            coordinates: [100.2056, 25.6756]
          }
        ]
      }
    ]
  },
  {
    id: 25,
    name: '昆明',
    description: '春城四季如春，高原明珠',
    image: '/images/kunming.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 24.8801, lng: 102.8329 },
    routes: [
      {
        id: 'r96',
        name: '石林探奇',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '探索世界自然遗产石林，观赏喀斯特地貌',
        waypoints: [
          {
            id: 1,
            name: '石林景区入口',
            description: '了解喀斯特地貌知识，准备徒步装备',
            coordinates: [103.2745, 24.7912]
          },
          {
            id: 2,
            name: '大石林景区',
            description: '观赏标志性石林景观，需要步行登高',
            coordinates: [103.2767, 24.7934]
          },
          {
            id: 3,
            name: '撒尼族村寨',
            description: '体验少数民族文化，品尝特色美食',
            coordinates: [103.2789, 24.7956]
          }
        ]
      },
      {
        id: 'r97',
        name: '滇池游览',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '游览高原明珠滇池，观赏红嘴鸥，交通便利',
        waypoints: [
          {
            id: 1,
            name: '海埂公园',
            description: '观赏红嘴鸥，环境优美，设施完善',
            coordinates: [102.6723, 24.9645]
          },
          {
            id: 2,
            name: '西山森林公园',
            description: '俯瞰滇池全景，需要缆车上山',
            coordinates: [102.6745, 24.9667]
          },
          {
            id: 3,
            name: '滇池湿地公园',
            description: '观察湿地生态，适合摄影',
            coordinates: [102.6767, 24.9689]
          }
        ]
      },
      {
        id: 'r98',
        name: '云南美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝云南特色美食，了解饮食文化',
        waypoints: [
          {
            id: 1,
            name: '南屏街',
            description: '传统美食街区，小吃种类丰富',
            coordinates: [102.7012, 25.0345]
          },
          {
            id: 2,
            name: '翠湖公园小吃街',
            description: '地道早餐，环境优美',
            coordinates: [102.7034, 25.0367]
          },
          {
            id: 3,
            name: '金马碧鸡坊美食街',
            description: '特色餐厅集中，夜市氛围浓厚',
            coordinates: [102.7056, 25.0389]
          }
        ]
      },
      {
        id: 'r99',
        name: '民族村寨',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '体验云南多民族文化，观看民族表演',
        waypoints: [
          {
            id: 1,
            name: '云南民族村',
            description: '26个民族建筑与文化展示，设施完善',
            coordinates: [102.7512, 24.9845]
          },
          {
            id: 2,
            name: '七彩云南',
            description: '民族歌舞表演，互动体验丰富',
            coordinates: [102.7534, 24.9867]
          },
          {
            id: 3,
            name: '傣族园',
            description: '体验傣族泼水节文化，环境优美',
            coordinates: [102.7556, 24.9889]
          }
        ]
      },
      {
        id: 'r100',
        name: '古镇探访',
        theme: '文化探索',
        duration: '2天',
        difficulty: '中等',
        description: '探索昆明周边古镇，了解历史文化',
        waypoints: [
          {
            id: 1,
            name: '宜良九乡',
            description: '溶洞奇观，需要徒步探索',
            coordinates: [103.1012, 24.9145]
          },
          {
            id: 2,
            name: '嵩明小街',
            description: '明清古建筑，地形平缓',
            coordinates: [103.1034, 24.9167]
          },
          {
            id: 3,
            name: '斗南花市',
            description: '亚洲最大鲜切花市场，环境热闹',
            coordinates: [103.1056, 24.9189]
          }
        ]
      },
      {
        id: 'r101',
        name: '都市休闲',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验昆明现代都市生活，购物休闲',
        waypoints: [
          {
            id: 1,
            name: '昆明大观楼',
            description: '历史建筑与园林，环境优美',
            coordinates: [102.7212, 25.0145]
          },
          {
            id: 2,
            name: '云南大学',
            description: '百年学府，校园环境优美',
            coordinates: [102.7234, 25.0167]
          },
          {
            id: 3,
            name: '昆明国际会展中心',
            description: '现代建筑，购物休闲好去处',
            coordinates: [102.7256, 25.0189]
          }
        ]
      }
    ]
  },
  {
    id: 26,
    name: '贵阳',
    description: '林城贵阳，避暑胜地',
    image: '/images/guiyang.jpg',
    region: '西南',
    isOverseas: false,
    coordinates: { lat: 26.6470, lng: 106.6302 },
    routes: [
      {
        id: 'r102',
        name: '青岩古镇',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探访明清古镇，体验贵州历史文化',
        waypoints: [
          {
            id: 1,
            name: '青岩古镇入口',
            description: '明清建筑群，地面平整，设施完善',
            coordinates: [106.5712, 26.5845]
          },
          {
            id: 2,
            name: '文昌宫',
            description: '古代考生祈福地，建筑精美',
            coordinates: [106.5734, 26.5867]
          },
          {
            id: 3,
            name: '状元街',
            description: '传统商业街区，适合漫步',
            coordinates: [106.5756, 26.5889]
          }
        ]
      },
      {
        id: 'r103',
        name: '黔灵山公园',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '登山赏景，体验城市绿肺',
        waypoints: [
          {
            id: 1,
            name: '黔灵山入口',
            description: '城市公园，需要爬山',
            coordinates: [106.6712, 26.5945]
          },
          {
            id: 2,
            name: '弘福寺',
            description: '千年古刹，香火旺盛',
            coordinates: [106.6734, 26.5967]
          },
          {
            id: 3,
            name: '黔灵湖',
            description: '湖光山色，适合休闲',
            coordinates: [106.6756, 26.5989]
          }
        ]
      },
      {
        id: 'r104',
        name: '贵州美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝贵州特色美食，感受辣味文化',
        waypoints: [
          {
            id: 1,
            name: '甲秀楼小吃街',
            description: '传统小吃集中地，品种丰富',
            coordinates: [106.7012, 26.5745]
          },
          {
            id: 2,
            name: '花溪牛肉粉一条街',
            description: '地道美食，环境整洁',
            coordinates: [106.7034, 26.5767]
          },
          {
            id: 3,
            name: '南明美食街',
            description: '现代餐饮区，适合夜宵',
            coordinates: [106.7056, 26.5789]
          }
        ]
      },
      {
        id: 'r105',
        name: '花溪公园',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '游览贵阳后花园，观赏自然风光',
        waypoints: [
          {
            id: 1,
            name: '花溪公园大门',
            description: '湿地公园，环境优美',
            coordinates: [106.6512, 26.4045]
          },
          {
            id: 2,
            name: '湿地观景台',
            description: '观鸟胜地，适合摄影',
            coordinates: [106.6534, 26.4067]
          },
          {
            id: 3,
            name: '水上乐园',
            description: '亲水活动，夏季纳凉',
            coordinates: [106.6556, 26.4089]
          }
        ]
      },
      {
        id: 'r106',
        name: '民族风情游',
        theme: '民俗体验',
        duration: '1天',
        difficulty: '简单',
        description: '体验贵州多彩民族文化',
        waypoints: [
          {
            id: 1,
            name: '贵州民族博物馆',
            description: '民族文化展示，室内场所',
            coordinates: [106.7212, 26.6145]
          },
          {
            id: 2,
            name: '贵州省博物馆',
            description: '历史文物展示，设施完善',
            coordinates: [106.7234, 26.6167]
          },
          {
            id: 3,
            name: '多彩贵州城',
            description: '民族文化体验区，互动性强',
            coordinates: [106.7256, 26.6189]
          }
        ]
      },
      {
        id: 'r107',
        name: '都市观光',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '探索现代贵阳的城市风貌',
        waypoints: [
          {
            id: 1,
            name: '贵阳大剧院',
            description: '现代建筑，文化地标',
            coordinates: [106.6812, 26.6345]
          },
          {
            id: 2,
            name: '观山湖公园',
            description: '城市新区，休闲好去处',
            coordinates: [106.6834, 26.6367]
          },
          {
            id: 3,
            name: '数博大道',
            description: '科技新区，现代气息浓厚',
            coordinates: [106.6856, 26.6389]
          }
        ]
      }
    ]
  },
  {
    id: 27,
    name: '罗马',
    description: '永恒之城，艺术与历史的博物馆',
    image: '/images/rome.jpg',
    region: '南欧',
    isOverseas: true,
    coordinates: { lat: 41.9028, lng: 12.4964 },
    routes: [
      {
        id: 'r501',
        name: '古罗马探索',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '中等',
        description: '探访古罗马帝国遗迹，感受历史辉煌',
        waypoints: [
          {
            id: 1,
            name: '罗马斗兽场',
            description: '古罗马标志性建筑，建议早晨参观，需预约',
            coordinates: [12.4924, 41.8902]
          },
          {
            id: 2,
            name: '古罗马广场',
            description: '古罗马政治中心，遗迹众多，建议请导游',
            coordinates: [12.4853, 41.8925]
          },
          {
            id: 3,
            name: '帕拉蒂尼山',
            description: '俯瞰古罗马全景，考古遗址丰富',
            coordinates: [12.4874, 41.8891]
          }
        ]
      },
      {
        id: 'r502',
        name: '宗教艺术之旅',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '参观世界著名宗教艺术建筑，感受信仰之美',
        waypoints: [
          {
            id: 1,
            name: '梵蒂冈博物馆',
            description: '艺术珍品收藏，需提前预约，周三教皇接见',
            coordinates: [12.4547, 41.9029]
          },
          {
            id: 2,
            name: '圣彼得大教堂',
            description: '天主教圣地，建议早晨参观，着装得体',
            coordinates: [12.4534, 41.9022]
          },
          {
            id: 3,
            name: '西斯廷教堂',
            description: '米开朗基罗壁画，禁止拍照，需排队',
            coordinates: [12.4545, 41.9029]
          }
        ]
      },
      {
        id: 'r503',
        name: '城市广场漫步',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '探索罗马特色广场，感受城市魅力',
        waypoints: [
          {
            id: 1,
            name: '许愿池',
            description: '巴洛克艺术代表，建议清晨避开人流',
            coordinates: [12.4833, 41.9009]
          },
          {
            id: 2,
            name: '纳沃纳广场',
            description: '艺术家聚集地，露天咖啡，街头表演',
            coordinates: [12.4732, 41.8992]
          },
          {
            id: 3,
            name: '西班牙广场',
            description: '购物区中心，著名台阶，日落最佳',
            coordinates: [12.4823, 41.9057]
          }
        ]
      },
      {
        id: 'r504',
        name: '美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝正宗意大利美食，体验美食文化',
        waypoints: [
          {
            id: 1,
            name: '特拉斯提弗列区',
            description: '传统餐厅集中，建议晚餐，氛围好',
            coordinates: [12.4684, 41.8898]
          },
          {
            id: 2,
            name: '坎波德菲奥里市场',
            description: '当地美食市场，早市热闹，价格实惠',
            coordinates: [12.4762, 41.8954]
          },
          {
            id: 3,
            name: '老冰淇淋店',
            description: '百年老店，特色口味，游客喜爱',
            coordinates: [12.4732, 41.8992]
          }
        ]
      },
      {
        id: 'r505',
        name: '艺术博物馆巡礼',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '参观世界级艺术博物馆，欣赏艺术珍品',
        waypoints: [
          {
            id: 1,
            name: '博尔盖塞美术馆',
            description: '收藏古典艺术，环境优雅，需预约',
            coordinates: [12.4922, 41.9137]
          },
          {
            id: 2,
            name: '卡比托利尼博物馆',
            description: '最古老公共博物馆，古罗马艺术',
            coordinates: [12.4826, 41.8932]
          },
          {
            id: 3,
            name: '国家现代艺术馆',
            description: '现代艺术收藏，互动展览，咖啡厅',
            coordinates: [12.4764, 41.9103]
          }
        ]
      },
      {
        id: 'r506',
        name: '罗马别墅花园',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '游览罗马特色别墅花园，享受自然美景',
        waypoints: [
          {
            id: 1,
            name: '博尔盖塞公园',
            description: '城市最大公园，适合野餐，自行车道',
            coordinates: [12.4922, 41.9137]
          },
          {
            id: 2,
            name: '美第奇别墅',
            description: '文艺复兴花园，全景观景台，需爬坡',
            coordinates: [12.4850, 41.9109]
          },
          {
            id: 3,
            name: '法尔内西花园',
            description: '古罗马遗址花园，适合摄影，环境优美',
            coordinates: [12.4874, 41.8891]
          }
        ]
      }
    ]
  },
  {
    id: 28,
    name: '伦敦',
    description: '传统与现代交融的世界都市',
    image: '/images/london.jpg',
    region: '西欧',
    isOverseas: true,
    coordinates: { lat: 51.5074, lng: -0.1278 },
    routes: [
      {
        id: 'r601',
        name: '皇家伦敦',
        theme: '历史遗迹',
        duration: '1天',
        difficulty: '简单',
        description: '探访英国皇室建筑，感受皇家风范',
        waypoints: [
          {
            id: 1,
            name: '白金汉宫',
            description: '皇室居所，观看换岗仪式，需查看时间',
            coordinates: [-0.1419, 51.5014]
          },
          {
            id: 2,
            name: '威斯敏斯特教堂',
            description: '皇室加冕地，哥特式建筑，需预约',
            coordinates: [-0.1276, 51.4994]
          },
          {
            id: 3,
            name: '肯辛顿宫',
            description: '王室宫殿，优美花园，环境宁静',
            coordinates: [-0.1880, 51.5050]
          }
        ]
      },
      {
        id: 'r602',
        name: '博物馆巡礼',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '参观世界顶级博物馆，探索人类文明',
        waypoints: [
          {
            id: 1,
            name: '大英博物馆',
            description: '世界文明珍品，免费参观，人流量大',
            coordinates: [-0.1269, 51.5194]
          },
          {
            id: 2,
            name: '自然历史博物馆',
            description: '恐龙化石展，适合亲子，免费入场',
            coordinates: [-0.1763, 51.4967]
          },
          {
            id: 3,
            name: '维多利亚和阿尔伯特博物馆',
            description: '艺术设计博物馆，展品丰富，咖啡厅',
            coordinates: [-0.1720, 51.4966]
          }
        ]
      },
      {
        id: 'r603',
        name: '泰晤士河畔',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '游览泰晤士河沿岸景点，欣赏城市风光',
        waypoints: [
          {
            id: 1,
            name: '伦敦眼',
            description: '标志性摩天轮，建议日落时分，需预约',
            coordinates: [-0.1195, 51.5033]
          },
          {
            id: 2,
            name: '伦敦塔桥',
            description: '维多利亚时期建筑，可参观内部',
            coordinates: [-0.0754, 51.5055]
          },
          {
            id: 3,
            name: '伦敦塔',
            description: '千年古堡，皇室珠宝，导览精彩',
            coordinates: [-0.0759, 51.5081]
          }
        ]
      },
      {
        id: 'r604',
        name: '现代艺术探索',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '体验伦敦现代艺术，感受创意氛围',
        waypoints: [
          {
            id: 1,
            name: '泰特现代美术馆',
            description: '现代艺术收藏，免费参观，河景餐厅',
            coordinates: [-0.0990, 51.5076]
          },
          {
            id: 2,
            name: '萨奇画廊',
            description: '当代艺术展览，前卫作品，环境独特',
            coordinates: [-0.1460, 51.5333]
          },
          {
            id: 3,
            name: '设计博物馆',
            description: '现代设计展览，互动体验，咖啡优质',
            coordinates: [-0.1995, 51.5017]
          }
        ]
      },
      {
        id: 'r605',
        name: '英伦市集',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '探索伦敦特色市场，品尝美食小吃',
        waypoints: [
          {
            id: 1,
            name: '波罗市场',
            description: '美食天堂，周末最热闹，品种多样',
            coordinates: [-0.0916, 51.5043]
          },
          {
            id: 2,
            name: '考文特花园',
            description: '街头表演，特色小店，餐厅众多',
            coordinates: [-0.1219, 51.5117]
          },
          {
            id: 3,
            name: '摄政市场',
            description: '精品美食，环境优雅，价格偏高',
            coordinates: [-0.1427, 51.5256]
          }
        ]
      },
      {
        id: 'r606',
        name: '城市公园',
        theme: '自然风光',
        duration: '1天',
        difficulty: '简单',
        description: '漫步伦敦皇家公园，享受城市绿洲',
        waypoints: [
          {
            id: 1,
            name: '海德公园',
            description: '皇家公园，划船湖泊，演讲角',
            coordinates: [-0.1722, 51.5073]
          },
          {
            id: 2,
            name: '摄政公园',
            description: '玫瑰园，露天剧场，野生动物',
            coordinates: [-0.1534, 51.5313]
          },
          {
            id: 3,
            name: '圣詹姆斯公园',
            description: '皇宫花园，观鸟胜地，午后茶点',
            coordinates: [-0.1308, 51.5025]
          }
        ]
      }
    ]
  },
  {
    id: 29,
    name: '新加坡',
    description: '花园城市，现代与自然的完美融合',
    image: '/images/singapore.jpg',
    region: '东南亚',
    isOverseas: true,
    coordinates: { lat: 1.3521, lng: 103.8198 },
    routes: [
      {
        id: 'r701',
        name: '滨海风光',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '探索新加坡标志性海湾区域，感受现代建筑之美',
        waypoints: [
          {
            id: 1,
            name: '滨海湾金沙',
            description: '标志性建筑，空中花园，无边泳池',
            coordinates: [103.8598, 1.2834]
          },
          {
            id: 2,
            name: '鱼尾狮公园',
            description: '新加坡象征，适合拍照，海景优美',
            coordinates: [103.8519, 1.2867]
          },
          {
            id: 3,
            name: '滨海湾花园',
            description: '超级树林，云雾林，花穹温室',
            coordinates: [103.8636, 1.2816]
          }
        ]
      },
      {
        id: 'r702',
        name: '文化探索',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索新加坡多元文化区域，体验民族特色',
        waypoints: [
          {
            id: 1,
            name: '牛车水',
            description: '华人文化区，传统建筑，美食集中',
            coordinates: [103.8440, 1.2834]
          },
          {
            id: 2,
            name: '小印度',
            description: '印度文化区，香料市场，色彩缤纷',
            coordinates: [103.8520, 1.3067]
          },
          {
            id: 3,
            name: '阿拉伯街',
            description: '马来文化区，苏丹清真寺，特色商店',
            coordinates: [103.8589, 1.3021]
          }
        ]
      },
      {
        id: 'r703',
        name: '自然探索',
        theme: '自然风光',
        duration: '1天',
        difficulty: '中等',
        description: '体验新加坡自然生态，探索热带风光',
        waypoints: [
          {
            id: 1,
            name: '新加坡植物园',
            description: '世界遗产，兰花园，热带雨林',
            coordinates: [103.8138, 1.3138]
          },
          {
            id: 2,
            name: '麦士威熟食中心',
            description: '热带雨林徒步，野生动物，树顶步道',
            coordinates: [103.8303, 1.3502]
          },
          {
            id: 3,
            name: '实龙岗公园',
            description: '湿地生态，红树林，候鸟栖息地',
            coordinates: [103.9299, 1.4043]
          }
        ]
      },
      {
        id: 'r704',
        name: '圣淘沙岛',
        theme: '休闲度假',
        duration: '1天',
        difficulty: '简单',
        description: '游览新加坡度假胜地，享受阳光与欢乐',
        waypoints: [
          {
            id: 1,
            name: '环球影城',
            description: '主题乐园，适合家庭',
            coordinates: [103.8238, 1.2540]
          },
          {
            id: 2,
            name: '水上探险乐园',
            description: '水上项目，人造沙滩，休闲设施',
            coordinates: [103.8190, 1.2520]
          },
          {
            id: 3,
            name: 'S.E.A海洋馆',
            description: '海洋生物，互动展览，适合亲子',
            coordinates: [103.8198, 1.2587]
          }
        ]
      },
      {
        id: 'r705',
        name: '美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝新加坡地道美食，体验美食文化',
        waypoints: [
          {
            id: 1,
            name: '老巴刹小贩中心',
            description: '地道小吃，价格实惠，本地推荐',
            coordinates: [103.8451, 1.2872]
          },
          {
            id: 2,
            name: '牛车水美食街',
            description: '传统美食，夜市氛围，品种多样',
            coordinates: [103.8440, 1.2834]
          },
          {
            id: 3,
            name: '东海岸海鲜中心',
            description: '海鲜美食，沿海景观，当地特色',
            coordinates: [103.9053, 1.3058]
          }
        ]
      },
      {
        id: 'r706',
        name: '购物天堂',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '探索新加坡购物胜地，享受精品与美食',
        waypoints: [
          {
            id: 1,
            name: '乌节路',
            description: '购物街区，奢侈品牌，现代商场',
            coordinates: [103.8353, 1.3039]
          },
          {
            id: 2,
            name: '维芝奥城',
            description: '综合商场，美食广场，娱乐设施',
            coordinates: [103.8520, 1.3048]
          },
          {
            id: 3,
            name: '克拉码头',
            description: '河畔餐厅，酒吧夜生活，艺术画廊',
            coordinates: [103.8465, 1.2902]
          }
        ]
      }
    ]
  },
  {
    id: 30,
    name: '澳门',
    description: '东西文化交融的赌城，历史与现代的完美结合',
    image: '/images/macau.jpg',
    region: '华南',
    isOverseas: false,
    coordinates: { lat: 22.1987, lng: 113.5439 },
    routes: [
      {
        id: 'r801',
        name: '澳门历史城区游',
        theme: '文化探索',
        duration: '1天',
        difficulty: '简单',
        description: '探索世界文化遗产澳门历史城区，感受葡萄牙与中国文化的交融',
        waypoints: [
          {
            id: 1,
            name: '大三巴牌坊',
            description: '澳门标志性建筑，天主教圣保禄教堂遗址',
            coordinates: [113.5449, 22.1977]
          },
          {
            id: 2,
            name: '议事亭前地',
            description: '澳门历史城区的中心广场，欧式建筑群',
            coordinates: [113.5440, 22.1936]
          },
          {
            id: 3,
            name: '玫瑰堂',
            description: '天主教堂，典型的葡式巴洛克建筑',
            coordinates: [113.5433, 22.1944]
          }
        ]
      },
      {
        id: 'r802',
        name: '澳门美食之旅',
        theme: '美食之旅',
        duration: '1天',
        difficulty: '简单',
        description: '品尝澳门地道美食，感受中葡美食文化的融合',
        waypoints: [
          {
            id: 1,
            name: '恋爱巷',
            description: '充满特色小店的美食街',
            coordinates: [113.5435, 22.1942]
          },
          {
            id: 2,
            name: '官也街',
            description: '传统美食集中地，各式地道小吃',
            coordinates: [113.5500, 22.1933]
          },
          {
            id: 3,
            name: '新马路美食区',
            description: '汇集澳门特色餐厅和糕点店',
            coordinates: [113.5438, 22.1928]
          }
        ]
      },
      {
        id: 'r803',
        name: '现代澳门游',
        theme: '城市观光',
        duration: '1天',
        difficulty: '简单',
        description: '体验现代澳门的繁华与娱乐',
        waypoints: [
          {
            id: 1,
            name: '威尼斯人',
            description: '豪华度假村，购物中心和娱乐场所',
            coordinates: [113.5656, 22.1487]
          },
          {
            id: 2,
            name: '澳门塔',
            description: '澳门地标建筑，观景和极限运动胜地',
            coordinates: [113.5317, 22.1899]
          },
          {
            id: 3,
            name: '新濠天地',
            description: '现代综合度假村，著名水舞间表演',
            coordinates: [113.5672, 22.1497]
          }
        ]
      }
    ]
  }
]
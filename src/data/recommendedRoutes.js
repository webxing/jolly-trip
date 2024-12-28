// 推荐路线数据
export const recommendedRoutes = [
  {
    id: '1',
    name: '长江三峡山水画卷之旅',
    description: '探索壮丽的长江三峡，体验独特的自然景观和人文历史',
    theme: '山水画卷 • 三峡风情',
    duration: '4-5天',
    difficulty: '中等',
    recommendations: {
      bestTime: '3-5月或9-11月，避开雨季和酷暑',
      tips: [
        '建议提前预订三峡游轮，选择上水或下水航线',
        '准备防晒和防蚊虫用品',
        '带上相机，记录沿途美景',
        '选择住宿游轮上，体验完整的三峡风光'
      ],
      transportation: [
        '可从重庆或宜昌乘坐游轮',
        '两地均有机场和高铁站',
        '景区间有专线巴士连接'
      ]
    },
    waypoints: [
      {
        name: '重庆',
        description: '行程起点，山城重庆',
        coordinates: [106.5504, 29.5632],
        type: 'major',
        subPoints: [
          {
            name: '洪崖洞',
            description: '重庆市地标建筑群，集观光、商业、餐饮于一体的旅游区',
            coordinates: [106.5876, 29.5654],
            highlights: ['夜景观赏', '山城老街', '特色美食']
          },
          {
            name: '磁器口古镇',
            description: '重庆著名的古镇，体验巴渝文化',
            coordinates: [106.4094, 29.5729],
            highlights: ['古镇建筑', '巴渝小吃', '传统手工艺']
          },
          {
            name: '长江索道',
            description: '横跨长江的城市交通工具，观赏两江风光',
            coordinates: [106.5833, 29.5582],
            highlights: ['空中览江', '城市风光', '交通体验']
          },
          {
            name: '朝天门码头',
            description: '重庆重要的水运枢纽，两江交汇处',
            coordinates: [106.5847, 29.5656],
            highlights: ['两江汇流', '码头文化', '游船观光']
          }
        ]
      },
      {
        name: '武隆',
        description: '世界自然遗产地，喀斯特地貌奇观',
        coordinates: [107.7600, 29.3255],
        type: 'major',
        subPoints: [
          {
            name: '天生三桥',
            description: '世界最大的天生桥群，壮观的喀斯特地貌',
            coordinates: [107.6907, 29.3238],
            highlights: ['自然奇观', '地质遗迹', '峡谷风光']
          },
          {
            name: '仙女山',
            description: '高原草场，四季风光秀丽',
            coordinates: [107.7526, 29.2749],
            highlights: ['高原风光', '避暑胜地', '户外活动']
          },
          {
            name: '芙蓉洞',
            description: '亚洲最大的溶洞，地下奇观',
            coordinates: [107.7541, 29.3245],
            highlights: ['溶洞奇观', '地质景观', '灯光艺术']
          }
        ]
      },
      {
        name: '丰都鬼城',
        description: '中国传统文化中的阴曹地府文化展示地',
        coordinates: [107.7307, 29.8526],
        type: 'minor',
        subPoints: [
          {
            name: '名山景区',
            description: '丰都鬼城核心景区，展示地府文化',
            coordinates: [107.7307, 29.8526],
            highlights: ['地府文化', '传统建筑', '民间传说']
          },
          {
            name: '鬼王雕像群',
            description: '展示中国传统文化中的地府神像',
            coordinates: [107.7315, 29.8530],
            highlights: ['雕塑艺术', '民间信仰', '文化展示']
          },
          {
            name: '阎王殿',
            description: '丰都鬼城标志性建筑',
            coordinates: [107.7310, 29.8528],
            highlights: ['传统建筑', '文化体验', '历史传说']
          }
        ]
      },
      {
        name: '瞿塘峡',
        description: '三峡最短、最壮观的峡谷',
        coordinates: [109.5449, 31.0485],
        type: 'major',
        subPoints: [
          {
            name: '白帝城',
            description: '历史名城，三国文化遗址',
            coordinates: [109.5449, 31.0485],
            highlights: ['历史遗迹', '诗词文化', '峡江风光']
          },
          {
            name: '瞿塘关遗址',
            description: '古代军事要塞遗址',
            coordinates: [109.5433, 31.0477],
            highlights: ['古代关隘', '历史遗迹', '地理奇观']
          },
          {
            name: '风牛峡',
            description: '瞿塘峡最窄处，两岸绝壁',
            coordinates: [109.5440, 31.0480],
            highlights: ['峡谷风光', '地质奇观', '江河险滩']
          }
        ]
      },
      {
        name: '巫峡',
        description: '三峡中最秀丽的峡谷，素有"夔门天下雄，巫峡天下秀"之称',
        coordinates: [110.7500, 31.0500],
        type: 'major',
        subPoints: [
          {
            name: '神女峰',
            description: '巫峡标志性景观，传说中的神女居所',
            coordinates: [110.7510, 31.0510],
            highlights: ['自然奇观', '民间传说', '峡谷风光']
          },
          {
            name: '巫山十二峰',
            description: '巫峡最著名的自然景观群',
            coordinates: [110.7520, 31.0520],
            highlights: ['山峰群落', '自然风光', '诗词文化']
          },
          {
            name: '大宁河',
            description: '巫峡支流，清澈见底的溪流',
            coordinates: [110.7530, 31.0530],
            highlights: ['溪流风光', '自然生态', '漂流体验']
          }
        ]
      },
      {
        name: '西陵峡',
        description: '三峡最长的峡谷，以险峻著称',
        coordinates: [111.2853, 30.7144],
        type: 'major',
        subPoints: [
          {
            name: '三峡大坝',
            description: '世界最大的水利枢纽工程',
            coordinates: [111.2853, 30.7144],
            highlights: ['工程奇观', '船闸观光', '科技成就']
          },
          {
            name: '三游洞',
            description: '千年古迹，历代文人墨客游览胜地',
            coordinates: [111.2833, 30.7124],
            highlights: ['人文古迹', '摩崖石刻', '历史遗迹']
          },
          {
            name: '南津关',
            description: '西陵峡最险要的峡段',
            coordinates: [111.2873, 30.7164],
            highlights: ['峡谷风光', '险滩遗迹', '地质奇观']
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '湘西自然奇观探索之旅',
    description: '探索神秘的张家界自然奇观和凤凰古城人文风情',
    theme: '湘西秘境 • 自然奇观',
    duration: '3-4天',
    difficulty: '中等偏难',
    recommendations: {
      bestTime: '3-11月，避开雨季7-8月',
      tips: [
        '建议提前在线预订景区门票，旺季可能需要提前1-2天',
        '准备舒适的登山鞋和防晒装备',
        '景区内消费较高，可以准备些干粮和水',
        '凤凰古城建议住1晚体验夜景',
        '部分景区需要大量步行，建议适当安排休息时间'
      ],
      transportation: [
        '张家界荷花机场有直达航班',
        '张家界火车站有高铁和普通列车',
        '景区间有专线巴士连接',
        '可以包车前往凤凰古城，约2小时车程'
      ]
    },
    waypoints: [
      {
        name: '张家界国家森林公园',
        description: '世界自然遗产，著名的石英砂岩峰林地貌',
        coordinates: [110.4833, 29.3167],
        type: 'major',
        subPoints: [
          {
            name: '金鞭溪',
            description: '森林公园的精华景区，溪流两岸风景优美',
            coordinates: [110.4789, 29.3156],
            highlights: ['溪谷风光', '自然步道', '野生动物']
          },
          {
            name: '袁家界',
            description: '《阿凡达》取景地，著名的"悬浮山"原型',
            coordinates: [110.4801, 29.3245],
            highlights: ['空中花园', '云海日出', '奇峰异石']
          },
          {
            name: '天子山',
            description: '张家界最高的观景台之一',
            coordinates: [110.4867, 29.3289],
            highlights: ['全景观赏', '云海', '日落']
          }
        ]
      },
      {
        name: '天门山',
        description: '世界最长的高山客运索道',
        coordinates: [110.4744, 29.0505],
        type: 'major',
        subPoints: [
          {
            name: '天门洞',
            description: '世界最高的天然穿山洞',
            coordinates: [110.4867, 29.0489],
            highlights: ['自然奇观', '盘山公路', '气势磅礴']
          },
          {
            name: '玻璃栈道',
            description: '悬空玻璃栈道，刺激惊险',
            coordinates: [110.4856, 29.0478],
            highlights: ['极限体验', '峡谷风光', '惊险刺激']
          },
          {
            name: '鬼谷栈道',
            description: '依崖而建的悬空栈道',
            coordinates: [110.4845, 29.0467],
            highlights: ['探险体验', '自然风光', '悬崖栈道']
          }
        ]
      },
      {
        name: '武陵源',
        description: '集中了张家界最精华的自然景观',
        coordinates: [110.5500, 29.3500],
        type: 'minor',
        subPoints: [
          {
            name: '黄石寨',
            description: '武陵源核心景区之一，有"峰林之王"之称',
            coordinates: [110.5489, 29.3489],
            highlights: ['日出观赏', '峰林全景', '观景台']
          },
          {
            name: '杨家界',
            description: '武陵源区著名的观景区域',
            coordinates: [110.5567, 29.3478],
            highlights: ['险峰绝壁', '云海奇观', '空中走廊']
          },
          {
            name: '宝峰湖',
            description: '天然溶洞与湖泊相结合的自然景观',
            coordinates: [110.5456, 29.3467],
            highlights: ['湖光山色', '溶洞奇观', '山水画卷']
          }
        ]
      },
      {
        name: '凤凰古城',
        description: '湘西最著名的古城，沱江两岸的千年古镇',
        coordinates: [109.5996, 27.9480],
        type: 'major',
        subPoints: [
          {
            name: '沱江风光带',
            description: '凤凰古城的母亲河，两岸风光秀美',
            coordinates: [109.5996, 27.9480],
            highlights: ['江边风光', '吊脚楼群', '夜景']
          },
          {
            name: '虹桥',
            description: '古城标志性建筑，横跨沱江',
            coordinates: [109.5989, 27.9483],
            highlights: ['古桥建筑', '历史文化', '摄影胜地']
          },
          {
            name: '南华山',
            description: '俯瞰凤凰古城的最佳位置',
            coordinates: [109.6010, 27.9470],
            highlights: ['城市全景', '文化遗迹', '观景平台']
          }
        ]
      }
    ],
  },
  {
    id: '3',
    name: '青岛德式文化寻踪之旅',
    description: '探索百年德式建筑，品味啤酒文化，体验独特的中西融合魅力',
    theme: '德式风情 • 啤酒文化',
    duration: '3-4天',
    difficulty: '简单',
    recommendations: {
      bestTime: '5-10月，啤酒节期间（8月）最佳',
      tips: [
        '啤酒节期间建议提前预订酒店',
        '可以参加啤酒博物馆的品酒体验',
        '建议徒步游览德式风情区',
        '海鲜市场要注意讲价',
        '可以体验当地特色德式面包房'
      ],
      transportation: [
        '青岛流亭国际机场有直达航班',
        '青岛站和青岛北站有高铁',
        '景区内可以乘坐观光巴士或有轨电车',
        '德式风情区适合步行游览'
      ]
    },
    waypoints: [
      {
        name: '青岛啤酒博物馆',
        description: '百年啤酒厂改建，展现青岛啤酒文化历史',
        coordinates: [120.3162, 36.0628],
        type: 'major',
        subPoints: [
          {
            name: '百年酿造车间',
            description: '保留完整的德式酿酒设备和工艺展示',
            coordinates: [120.3162, 36.0628],
            highlights: ['古法酿造', '工业遗产', '互动体验']
          },
          {
            name: '品酒大厅',
            description: '体验新鲜原浆啤酒，品尝各式啤酒',
            coordinates: [120.3168, 36.0633],
            highlights: ['啤酒品鉴', '美食搭配', '文化体验']
          },
          {
            name: '啤酒文化展区',
            description: '了解青岛啤酒与城市发展的历史渊源',
            coordinates: [120.3175, 36.0635],
            highlights: ['历史展示', '文化传承', '互动装置']
          }
        ]
      },
      {
        name: '德式总督府',
        description: '青岛最完整的德式建筑群，现为青岛市博物馆',
        coordinates: [120.3346, 36.0539],
        type: 'major',
        subPoints: [
          {
            name: '总督府主楼',
            description: '典型的德式建筑，见证青岛殖民地历史',
            coordinates: [120.3346, 36.0539],
            highlights: ['建筑艺术', '历史遗迹', '文化展览']
          },
          {
            name: '花园洋房',
            description: '德式园林风格的配套建筑',
            coordinates: [120.3356, 36.0542],
            highlights: ['园林设计', '建筑风格', '历史故事']
          },
          {
            name: '历史展厅',
            description: '展示青岛近代史和中德文化交流',
            coordinates: [120.3366, 36.0545],
            highlights: ['历史文物', '文化交流', '图片展览']
          }
        ]
      },
      {
        name: '基督教堂',
        description: '百年哥特式教堂，青岛地标建筑',
        coordinates: [120.3824, 36.0672],
        type: 'major',
        subPoints: [
          {
            name: '教堂主殿',
            description: '典型的德式哥特建筑风格，内部装饰精美',
            coordinates: [120.3824, 36.0672],
            highlights: ['宗教建筑', '建筑艺术', '音乐演出']
          },
          {
            name: '钟楼广场',
            description: '欣赏教堂全貌的最佳位置',
            coordinates: [120.3834, 36.0675],
            highlights: ['城市地标', '建筑摄影', '广场文化']
          },
          {
            name: '历史展览室',
            description: '展示教堂百年历史变迁',
            coordinates: [120.3814, 36.0669],
            highlights: ['历史文化', '宗教艺术', '文物展示']
          }
        ]
      },
      {
        name: '劈柴院',
        description: '青岛最古老的德式民居区，现为特色文创街区',
        coordinates: [120.3814, 36.0669],
        type: 'minor',
        subPoints: [
          {
            name: '德式老街',
            description: '保存完好的德式里院建筑群',
            coordinates: [120.3814, 36.0669],
            highlights: ['历史建筑', '文创市集', '民俗体验']
          },
          {
            name: '啤酒主题街',
            description: '汇集各式特色啤酒屋和餐厅',
            coordinates: [120.3824, 36.0672],
            highlights: ['美食文化', '啤酒品鉴', '街区风情']
          },
          {
            name: '艺术区',
            description: '青年艺术家工作室和展览空间',
            coordinates: [120.3834, 36.0675],
            highlights: ['文创艺术', '手工作坊', '文化交流']
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: '江浙水乡文化寻味之旅',
    description: '探索杭州西湖十景，体验江南水乡韵味，品味地道美食',
    theme: '江南韵味 • 水乡寻趣',
    duration: '3-4天',
    difficulty: '简单',
    recommendations: {
      bestTime: '3-5月或9-11月，避开梅雨季节',
      tips: [
        '建议选择江南传统客栈体验水乡生活',
        '早晨可以体验西湖边的清晨茶点',
        '建议预约特色餐厅品尝杭帮菜',
        '可以参加茶园采茶体验活动',
        '建议体验夜游西湖或运河'
      ],
      transportation: [
        '杭州萧山国际机场有直达航班',
        '杭州东站有高铁连接全国主要城市',
        '景区间可以选择水上巴士',
        '古镇内建议步行或乘坐摇橹船'
      ]
    },
    waypoints: [
      {
        name: '西湖景区',
        description: '中国十大风景名胜之一，诗画江南的代表',
        coordinates: [120.1485, 30.2421],
        type: 'major',
        subPoints: [
          {
            name: '断桥残雪',
            description: '西湖十景之一，白娘子传说发生地',
            coordinates: [120.1485, 30.2421],
            highlights: ['民间传说', '雪景胜地', '文化打卡']
          },
          {
            name: '苏堤春晓',
            description: '贯穿西湖的古堤，柳树倒影如画',
            coordinates: [120.1465, 30.2401],
            highlights: ['湖光山色', '古堤漫步', '春季赏花']
          },
          {
            name: '楼外楼',
            description: '百年老字号，品尝正宗杭帮菜',
            coordinates: [120.1495, 30.2431],
            highlights: ['杭帮美食', '湖景餐厅', '文化体验']
          }
        ]
      },
      {
        name: '龙井村',
        description: '西湖龙井茶原产地，体验茶文化',
        coordinates: [120.1485, 30.2421],
        type: 'major',
        subPoints: [
          {
            name: '龙井茶园',
            description: '体验采茶制茶，品味龙井茶文化',
            coordinates: [120.1475, 30.2411],
            highlights: ['茶园风光', '茶艺体验', '茶文化']
          },
          {
            name: '梅家坞',
            description: '古朴茶村，体验农家茶宴',
            coordinates: [120.1465, 30.2401],
            highlights: ['茶村风情', '农家美食', '茶文化']
          },
          {
            name: '九溪烟树',
            description: '西湖十景之一，溪流环绕的茶园',
            coordinates: [120.1455, 30.2391],
            highlights: ['自然风光', '溪流茶园', '徒步探索']
          }
        ]
      },
      {
        name: '乌镇',
        description: '江南六大古镇之一，千年水乡古镇',
        coordinates: [120.4785, 30.7421],
        type: 'major',
        subPoints: [
          {
            name: '西栅景区',
            description: '体验水乡夜色，品尝特色小吃',
            coordinates: [120.4775, 30.7411],
            highlights: ['水乡夜景', '江南小吃', '古镇文化']
          },
          {
            name: '江南百床馆',
            description: '展示江南传统床文化',
            coordinates: [120.4765, 30.7401],
            highlights: ['传统文化', '民俗展示', '互动体验']
          },
          {
            name: '乌镇酒坊',
            description: '品尝传统黄酒，体验酿酒工艺',
            coordinates: [120.4755, 30.7391],
            highlights: ['黄酒文化', '酿酒工艺', '美食体验']
          }
        ]
      },
      {
        name: '杭州运河',
        description: '世界文化遗产，千年大运河的精华段',
        coordinates: [120.1685, 30.2521],
        type: 'minor',
        subPoints: [
          {
            name: '运河夜市',
            description: '体验地道杭州小吃和夜生活',
            coordinates: [120.1675, 30.2511],
            highlights: ['特色小吃', '夜市文化', '运河风光']
          },
          {
            name: '拱宸桥',
            description: '运河标志性建筑，古代商贸中心',
            coordinates: [120.1665, 30.2501],
            highlights: ['古桥建筑', '运河文化', '历史遗迹']
          },
          {
            name: '运河码头',
            description: '乘船游览运河，体验水上交通',
            coordinates: [120.1655, 30.2491],
            highlights: ['水上游览', '码头文化', '运河风情']
          }
        ]
      }
    ]
  },
  {
    id: '5',
    name: '云贵高原美食摄影之旅',
    description: '探寻云南特色美食，记录七彩云南的绚丽色彩，感受多元民族文化',
    theme: '滇味寻踪 • 光影记录',
    duration: '4-5天',
    difficulty: '中等',
    recommendations: {
      bestTime: '3-5月或9-11月，避开雨季',
      tips: [
        '建议参加清晨市集拍摄，光线最佳',
        '可以预约当地摄影师推荐取景点',
        '建议体验各民族特色餐厅',
        '准备防晒和雨具，高原天气多变',
        '建议提前适应高原环境'
      ],
      transportation: [
        '昆明长水国际机场可直达',
        '各城市间有高铁或动车连接',
        '景区可选择包车或拼车',
        '古城内适合步行探索'
      ]
    },
    waypoints: [
      {
        name: '昆明',
        description: '春城昆明，美食与人文的交汇处',
        coordinates: [102.8329, 24.8801],
        type: 'major',
        subPoints: [
          {
            name: '南屏街步行街',
            description: '云南特色小吃集中地，美食摄影天堂',
            coordinates: [102.8329, 24.8801],
            highlights: ['特色小吃', '街头摄影', '民族美食']
          },
          {
            name: '翠湖公园',
            description: '昆明地标，红嘴鸥栖息地',
            coordinates: [102.8309, 24.8781],
            highlights: ['城市风光', '野生鸟类', '自然摄影']
          },
          {
            name: '云南大学',
            description: '百年学府，民国建筑群',
            coordinates: [102.8349, 24.8821],
            highlights: ['历史建筑', '人文风光', '校园文化']
          }
        ]
      },
      {
        name: '大理古城',
        description: '白族文化与美食的完美融合',
        coordinates: [100.1653, 25.6065],
        type: 'major',
        subPoints: [
          {
            name: '人民路夜市',
            description: '大理最热闹的美食街，白族特色小吃云集',
            coordinates: [100.1653, 25.6065],
            highlights: ['美食摄影', '民族小吃', '夜景拍摄']
          },
          {
            name: '白族扎染工坊',
            description: '传统扎染艺术展示和体验',
            coordinates: [100.1633, 25.6045],
            highlights: ['传统工艺', '文化体验', '摄影创作']
          },
          {
            name: '大理银器街',
            description: '白族银器制作和展示区',
            coordinates: [100.1673, 25.6085],
            highlights: ['民族工艺', '银器文化', '人文摄影']
          }
        ]
      },
      {
        name: '丽江古城',
        description: '湘西最著名的古城，沱江两岸的千年古镇',
        coordinates: [100.2330, 26.8721],
        type: 'major',
        subPoints: [
          {
            name: '四方街美食广场',
            description: '纳西族特色美食聚集地',
            coordinates: [100.2330, 26.8721],
            highlights: ['民族美食', '街头摄影', '美食文化']
          },
          {
            name: '东巴文化博物馆',
            description: '纳西族传统文化展示中心',
            coordinates: [100.2310, 26.8701],
            highlights: ['文化展示', '传统仪式', '人文摄影']
          },
          {
            name: '黑龙潭公园',
            description: '玉龙雪山倒影最佳拍摄地',
            coordinates: [100.2350, 26.8741],
            highlights: ['自然风光', '风景摄影', '晨光摄影']
          }
        ]
      },
      {
        name: '香格里拉',
        description: '藏族文化与高原美食体验',
        coordinates: [99.7068, 27.8297],
        type: 'major',
        subPoints: [
          {
            name: '独克宗古城',
            description: '藏式建筑群，传统藏餐体验',
            coordinates: [99.7068, 27.8297],
            highlights: ['藏式建筑', '美食文化', '人文摄影']
          },
          {
            name: '松赞林寺',
            description: '小布达拉宫，藏传佛教圣地',
            coordinates: [99.7048, 27.8277],
            highlights: ['宗教文化', '建筑摄影', '晨曦光影']
          },
          {
            name: '纳帕海',
            description: '高原湿地，野生动物栖息地',
            coordinates: [99.7088, 27.8317],
            highlights: ['自然风光', '野生动物', '风光摄影']
          }
        ]
      }
    ]
  },
  {
    id: '6',
    name: '皖南徽派建筑摄影之旅',
    description: '探索黄山奇松怪石，徽派建筑，捕捉壮丽云海日出',
    theme: '徽州印象 • 光影艺术',
    duration: '3-4天',
    difficulty: '中等偏难',
    recommendations: {
      bestTime: '4-5月或9-11月，云海出现概率最高',
      tips: [
        '建议携带广角和长焦镜头',
        '清晨和黄昏是拍摄徽派建筑的最佳时间',
        '雨后是拍摄徽州古村落的绝佳时机',
        '建议提前查询天气，选择云海概率高的时间',
        '可以请当地向导推荐隐秘拍摄点'
      ],
      transportation: [
        '黄山屯溪国际机场可直达',
        '高铁可到达黄山北站',
        '景区间建议包车或参加摄影团',
        '古村落内适合步行探索'
      ]
    },
    waypoints: [
      {
        name: '黄山风景区',
        description: '世界文化与自然遗产，云海奇松的摄影天堂',
        coordinates: [118.1557, 30.1375],
        type: 'major',
        subPoints: [
          {
            name: '光明顶',
            description: '观赏云海日出的绝佳位置，摄影制高点',
            coordinates: [118.1557, 30.1375],
            highlights: ['日出云海', '奇松怪石', '全景摄影']
          },
          {
            name: '始信峰',
            description: '黄山最具代表性的峰岩景观',
            coordinates: [118.1537, 30.1355],
            highlights: ['峰岩风光', '晨雾缭绕', '构图取景']
          },
          {
            name: '西海大峡谷',
            description: '层峦叠嶂，云海翻腾的绝佳拍摄地',
            coordinates: [118.1577, 30.1395],
            highlights: ['峡谷风光', '云海变幻', '光影捕捉']
          }
        ]
      },
      {
        name: '宏村',
        description: '世界文化遗产，徽派建筑的完美典范',
        coordinates: [117.9805, 29.9247],
        type: 'major',
        subPoints: [
          {
            name: '南湖景区',
            description: '牛形水系设计，徽派建筑倒影绝佳取景点',
            coordinates: [117.9805, 29.9247],
            highlights: ['水景倒影', '建筑摄影', '晨雾氛围']
          },
          {
            name: '承志堂',
            description: '徽派建筑的巅峰之作，木雕艺术博物馆',
            coordinates: [117.9785, 29.9227],
            highlights: ['建筑细节', '光影效果', '木雕艺术']
          },
          {
            name: '月沼景区',
            description: '传统徽派民居群，晨昏光线绝佳',
            coordinates: [117.9825, 29.9267],
            highlights: ['民居建筑', '生活场景', '光影构图']
          }
        ]
      },
      {
        name: '西递',
        description: '保存完好的徽州古村落，建筑艺术博物馆',
        coordinates: [118.0526, 29.9973],
        type: 'major',
        subPoints: [
          {
            name: '敬德堂',
            description: '西递规模最大的祠堂建筑群',
            coordinates: [118.0526, 29.9973],
            highlights: ['古建筑群', '祠堂文化', '建筑摄影']
          },
          {
            name: '大夫第',
            description: '明代建筑精品，徽派建筑的代表作',
            coordinates: [118.0506, 29.9953],
            highlights: ['徽派建筑', '历史遗迹', '细节特写']
          },
          {
            name: '古巷街道',
            description: '保存完好的明清街巷，摄影创作的绝佳场所',
            coordinates: [118.0546, 29.9993],
            highlights: ['街巷风情', '人文纪实', '光影效果']
          }
        ]
      },
      {
        name: '卢村',
        description: '鲜为人知的徽派建筑群，原生态徽州古村',
        coordinates: [118.1326, 29.8873],
        type: 'minor',
        subPoints: [
          {
            name: '卢村老街',
            description: '保存完好的明清建筑群，游客稀少',
            coordinates: [118.1326, 29.8873],
            highlights: ['古建筑群', '生活场景', '人文摄影']
          },
          {
            name: '明代牌坊',
            description: '保存完好的明代石雕艺术',
            coordinates: [118.1306, 29.8853],
            highlights: ['石雕艺术', '建筑细节', '历史遗迹']
          },
          {
            name: '徽派民居群',
            description: '原生态的徽派民居建筑群',
            coordinates: [118.1346, 29.8893],
            highlights: ['民居建筑', '生活写实', '建筑摄影']
          }
        ]
      }
    ]
  },
  {
    id: '7',
    name: '新疆天山环线摄影之旅',
    description: '穿越天山南北，探索壮美山川与多元文化',
    theme: '丝路风情 • 自然奇观',
    duration: '7-8天',
    difficulty: '中等偏难',
    recommendations: {
      bestTime: '6-9月，天气晴朗，适合摄影创作',
      tips: [
        '建议携带广角和长焦镜头',
        '日出日落是拍摄的黄金时间',
        '请尊重当地民族习俗',
        '高原地区注意防晒和保暖',
        '建议提前适应高原环境'
      ],
      transportation: [
        '乌鲁木齐地窝堡国际机场可直达',
        '景区间建议包车或参加深度游',
        '部分景区需要越野车',
        '城市内可以打车或公交'
      ]
    },
    waypoints: [
      {
        name: '天山天池',
        description: '天山明珠，雪山环抱的高山湖泊',
        coordinates: [88.1557, 43.8875],
        type: 'major',
        subPoints: [
          {
            name: '天池观景台',
            description: '俯瞰天池全景，雪山倒影摄影点',
            coordinates: [88.1557, 43.8875],
            highlights: ['湖光山色', '雪山倒影', '全景摄影']
          },
          {
            name: '白杨谷',
            description: '原始森林与山涧溪流',
            coordinates: [88.1537, 43.8855],
            highlights: ['森林风光', '溪流瀑布', '自然生态']
          },
          {
            name: '山顶观景区',
            description: '360度全景观景台，可远眺博格达峰',
            coordinates: [88.1577, 43.8895],
            highlights: ['雪山全景', '云海日出', '高山植被']
          }
        ]
      },
      {
        name: '那拉提草原',
        description: '空阔辽远的高山草甸，牧民生活画卷',
        coordinates: [84.0405, 43.3747],
        type: 'major',
        subPoints: [
          {
            name: '空中草原',
            description: '高山草甸，牧场风光',
            coordinates: [84.0405, 43.3747],
            highlights: ['草原风光', '牧民生活', '日落晚霞']
          },
          {
            name: '那拉提古镇',
            description: '哈萨克族聚居地，民族文化体验',
            coordinates: [84.0385, 43.3727],
            highlights: ['民族文化', '传统市集', '人文摄影']
          },
          {
            name: '天马广场',
            description: '草原文化展示区，民族表演场地',
            coordinates: [84.0425, 43.3767],
            highlights: ['民族表演', '传统习俗', '文化体验']
          }
        ]
      },
      {
        name: '喀纳斯景区',
        description: '神秘的北国风光，原始森林与湖泊',
        coordinates: [87.0226, 48.6973],
        type: 'major',
        subPoints: [
          {
            name: '观鱼亭',
            description: '俯瞰喀纳斯湖，观赏晨雾缭绕',
            coordinates: [87.0226, 48.6973],
            highlights: ['湖光山色', '晨雾缭绕', '观景摄影']
          },
          {
            name: '白哈巴村',
            description: '图瓦人村落，最北边陲小村',
            coordinates: [87.0206, 48.6953],
            highlights: ['边陲村落', '民族文化', '生活纪实']
          },
          {
            name: '月亮湾',
            description: '喀纳斯河曲流形成的月牙形湾区',
            coordinates: [87.0246, 48.6993],
            highlights: ['河流风光', '自然景观', '日落晚霞']
          }
        ]
      },
      {
        name: '吐鲁番',
        description: '丝路重镇，葡萄之乡',
        coordinates: [89.1841, 42.9476],
        type: 'major',
        subPoints: [
          {
            name: '葡萄沟',
            description: '百年葡萄园，传统晾房建筑',
            coordinates: [89.1841, 42.9476],
            highlights: ['葡萄园景', '传统建筑', '民俗文化']
          },
          {
            name: '坎儿井',
            description: '古代水利工程，智慧结晶',
            coordinates: [89.1821, 42.9456],
            highlights: ['水利工程', '历史遗迹', '文化遗产']
          },
          {
            name: '交河故城',
            description: '世界上最大最古老的生土建筑城市',
            coordinates: [89.1861, 42.9496],
            highlights: ['古城遗址', '历史建筑', '日落摄影']
          }
        ]
      }
    ]
  },
  {
    id: '8',
    name: '青海湖茶马古道摄影之旅',
    description: '探索青藏高原的圣湖与草原，追寻茶马古道的历史印记',
    theme: '高原风光 • 藏域文化',
    duration: '5-6天',
    difficulty: '中等偏难',
    recommendations: {
      bestTime: '6-9月，油菜花盛开，适合摄影创作',
      tips: [
        '建议携带广角和长焦镜头',
        '日出日落是拍摄的黄金时间',
        '高原地区需要充分适应和防护',
        '建议准备防寒保暖装备',
        '拍摄前请征得当地人同意'
      ],
      transportation: [
        '西宁曹家堡国际机场可直达',
        '景区间建议包车或参加深度游',
        '部分景区需要越野车',
        '城市内可以打车或公交'
      ]
    },
    waypoints: [
      {
        name: '青海湖',
        description: '中国最大的咸水湖，高原明珠',
        coordinates: [100.1927, 36.8627],
        type: 'major',
        subPoints: [
          {
            name: '日月山观景台',
            description: '俯瞰青海湖全景，观赏日出日落',
            coordinates: [100.1927, 36.8627],
            highlights: ['湖光山色', '日出日落', '全景摄影']
          },
          {
            name: '二郎剑景区',
            description: '青海湖最佳观景点，水天一色',
            coordinates: [100.1907, 36.8607],
            highlights: ['湖岸风光', '候鸟栖息', '自然生态']
          },
          {
            name: '金沙湾',
            description: '绝美沙滩与湖水交融处',
            coordinates: [100.1947, 36.8647],
            highlights: ['沙滩风光', '湖景倒影', '晚霞摄影']
          }
        ]
      },
      {
        name: '茶卡盐湖',
        description: '天空之镜，摄影师的天堂',
        coordinates: [99.0885, 36.6877],
        type: 'major',
        subPoints: [
          {
            name: '盐湖观景台',
            description: '俯瞰盐湖全景，观赏天空之镜',
            coordinates: [99.0885, 36.6877],
            highlights: ['天空之镜', '盐湖倒影', '日落摄影']
          },
          {
            name: '采盐区',
            description: '传统采盐作业区，体验千年盐业文化',
            coordinates: [99.0865, 36.6857],
            highlights: ['盐业文化', '劳作场景', '人文摄影']
          },
          {
            name: '水晶广场',
            description: '盐湖中心观景区，绝佳拍摄地',
            coordinates: [99.0905, 36.6897],
            highlights: ['盐晶地貌', '光影效果', '创意摄影']
          }
        ]
      },
      {
        name: '塔尔寺',
        description: '藏传佛教艺术博物馆',
        coordinates: [101.5783, 36.4833],
        type: 'major',
        subPoints: [
          {
            name: '大经堂',
            description: '藏传佛教建筑艺术精华',
            coordinates: [101.5783, 36.4833],
            highlights: ['宗教建筑', '佛教文化', '建筑摄影']
          },
          {
            name: '酥油花艺术馆',
            description: '展示独特的藏传佛教艺术',
            coordinates: [101.5763, 36.4813],
            highlights: ['藏族艺术', '文化展示', '细节摄影']
          },
          {
            name: '晨课堂',
            description: '体验喇嘛晨课诵经',
            coordinates: [101.5803, 36.4853],
            highlights: ['宗教仪式', '人文纪实', '晨光摄影']
          }
        ]
      },
      {
        name: '门源油菜花基地',
        description: '高原上的金色花海',
        coordinates: [101.6223, 37.3755],
        type: 'major',
        subPoints: [
          {
            name: '观景台',
            description: '俯瞰金色花海，远眺祁连山',
            coordinates: [101.6223, 37.3755],
            highlights: ['花海风光', '山景背景', '全景摄影']
          },
          {
            name: '花海步道',
            description: '漫步花间小径，近距离拍摄',
            coordinates: [101.6203, 37.3735],
            highlights: ['花卉特写', '田园风光', '微距摄影']
          },
          {
            name: '农耕文化园',
            description: '体验高原农耕文化',
            coordinates: [101.6243, 37.3775],
            highlights: ['农耕文化', '生活场景', '人文摄影']
          }
        ]
      }
    ]
  },
  {
    id: '9',
    name: '海南热带度假休闲之旅',
    description: '享受热带海岛度假，体验顶级温泉SPA，探索热带雨林',
    theme: '椰风海韵 • 度假休闲',
    duration: '4-5天',
    difficulty: '简单',
    recommendations: {
      bestTime: '10月至次年4月，气候宜人，避开台风季',
      tips: [
        '建议准备防晒用品和遮阳装备',
        '海边活动注意查看天气预报',
        '雨林徒步建议穿着轻便运动装',
        '可以体验当地特色椰子鸡',
        '建议提前预订度假酒店和SPA'
      ],
      transportation: [
        '海口美兰机场和三亚凤凰机场可直达',
        '岛内可以选择包车或网约车',
        '景区间有旅游专线巴士',
        '度假区内可以使用酒店穿梭巴士'
      ]
    },
    waypoints: [
      {
        name: '亚龙湾',
        description: '东方夏威夷，顶级度假胜地',
        coordinates: [109.6417, 18.2258],
        type: 'major',
        subPoints: [
          {
            name: '亚龙湾沙滩',
            description: '水清沙白的天然海滩，适合晒太阳和水上运动',
            coordinates: [109.6417, 18.2258],
            highlights: ['海滩度假', '水上运动', '日光浴']
          },
          {
            name: '热带雨林温泉',
            description: '融合热带雨林景观的特色温泉',
            coordinates: [109.6397, 18.2238],
            highlights: ['森林温泉', '理疗按摩', '养生SPA']
          },
          {
            name: '海景水疗中心',
            description: '享受海景温泉，专业水疗服务',
            coordinates: [109.6437, 18.2278],
            highlights: ['海景温泉', '专业SPA', '瑜伽课程']
          }
        ]
      },
      {
        name: '蜈支洲岛',
        description: '热带海岛天堂，水上活动胜地',
        coordinates: [109.7628, 18.3147],
        type: 'major',
        subPoints: [
          {
            name: '情人桥',
            description: '标志性观景点，欣赏全岛美景',
            coordinates: [109.7628, 18.3147],
            highlights: ['海岛风光', '观景打卡', '日落美景']
          },
          {
            name: '珊瑚区',
            description: '绝佳潜水体验区域',
            coordinates: [109.7608, 18.3127],
            highlights: ['潜水体验', '海洋生物', '珊瑚观赏']
          },
          {
            name: '贝壳沙滩',
            description: '细腻沙滩，水上娱乐天堂',
            coordinates: [109.7648, 18.3167],
            highlights: ['沙滩休闲', '水上项目', '日光浴']
          }
        ]
      },
      {
        name: '呀诺达热带雨林',
        description: '探索热带雨林生态系统',
        coordinates: [109.9600, 18.3569],
        type: 'major',
        subPoints: [
          {
            name: '雨林谷',
            description: '体验原始雨林风光',
            coordinates: [109.9600, 18.3569],
            highlights: ['热带植物', '生态探索', '科普教育']
          },
          {
            name: '梦幻谷',
            description: '欣赏瀑布溪流',
            coordinates: [109.9580, 18.3549],
            highlights: ['瀑布景观', '溪流戏水', '森林氧吧']
          },
          {
            name: '三道谷',
            description: '参与丛林探险',
            coordinates: [109.9620, 18.3589],
            highlights: ['探险活动', '观景平台', '丛林穿越']
          }
        ]
      },
      {
        name: '海棠湾度假区',
        description: '奢华度假胜地，购物娱乐天堂',
        coordinates: [109.7523, 18.3140],
        type: 'major',
        subPoints: [
          {
            name: '海棠湾免税城',
            description: '亚洲最大免税购物中心',
            coordinates: [109.7523, 18.3140],
            highlights: ['免税购物', '国际品牌', '美食广场']
          },
          {
            name: '海昌梦幻海洋不夜城',
            description: '海洋主题娱乐综合体',
            coordinates: [109.7503, 18.3120],
            highlights: ['海洋表演', '主题娱乐', '夜景观赏']
          },
          {
            name: '星级度假酒店群',
            description: '尊享奢华度假体验',
            coordinates: [109.7543, 18.3160],
            highlights: ['私人沙滩', '无边泳池', '特色SPA']
          }
        ]
      }
    ]
  },
  {
    id: '10',
    name: '内蒙古草原文化体验之旅',
    description: '探索呼伦贝尔大草原的壮美风光，体验蒙古族传统文化，感受沙漠与草原的双重魅力',
    theme: '塞外风情 • 草原牧歌',
    duration: '6-7天',
    difficulty: '中等',
    recommendations: {
      bestTime: '7-9月，草原最美的季节',
      tips: [
        '准备防晒和保暖衣物，早晚温差大',
        '建议包车或参团游览，景点间距离较远',
        '尊重当地民俗文化，注意文明游览',
        '可以选择住蒙古包，体验草原生活',
        '建议准备一些防蚊虫药物'
      ],
      transportation: [
        '可从呼和浩特或海拉尔机场入境',
        '景区间多为专线旅游大巴或包车',
        '部分景区需要越野车进入'
      ]
    },
    waypoints: [
      {
        name: '呼伦贝尔草原',
        description: '世界上最大最美的草原之一',
        coordinates: [119.7356, 49.2122],
        type: 'major',
        subPoints: [
          {
            name: '莫日格勒河',
            description: '草原上蜿蜒的母亲河',
            coordinates: [119.9231, 49.3245],
            highlights: ['河流风光', '草原风景', '骑马体验']
          },
          {
            name: '金帐汗蒙古部落',
            description: '体验正宗的蒙古族文化',
            coordinates: [119.7456, 49.2234],
            highlights: ['蒙古包住宿', '民族歌舞', '传统美食']
          },
          {
            name: '额尔古纳湿地',
            description: '中国最大的湿地之一',
            coordinates: [120.1808, 50.2444],
            highlights: ['湿地景观', '观鸟胜地', '日落美景']
          },
          {
            name: '室韦俄罗斯民族乡',
            description: '中俄边境特色村落',
            coordinates: [117.3300, 49.3500],
            highlights: ['俄罗斯建筑', '边境风情', '民族文化']
          }
        ]
      },
      {
        name: '满洲里',
        description: '中俄边境最大口岸城市',
        coordinates: [117.3787, 49.5977],
        type: 'major',
        subPoints: [
          {
            name: '套娃广场',
            description: '世界最大套娃群景观',
            coordinates: [117.3776, 49.5965],
            highlights: ['俄罗斯建筑', '城市地标', '文化交融']
          },
          {
            name: '国门景区',
            description: '中俄蒙三国交界处',
            coordinates: [117.7276, 49.5521],
            highlights: ['边境风光', '历史遗迹', '爱国教育']
          },
          {
            name: '扎赉诺尔古生物化石博物馆',
            description: '展示远古生物化石',
            coordinates: [117.3999, 49.5866],
            highlights: ['古生物化石', '科普教育', '地质历史']
          }
        ]
      },
      {
        name: '阿尔山国家森林公园',
        description: '火山地貌与温泉胜地',
        coordinates: [119.9431, 47.1770],
        type: 'major',
        subPoints: [
          {
            name: '杜鹃湖',
            description: '火山口湖泊',
            coordinates: [119.9397, 47.1821],
            highlights: ['火山地貌', '湖泊景观', '野生动植物']
          },
          {
            name: '阿尔山温泉',
            description: '著名的天然温泉',
            coordinates: [119.9456, 47.1777],
            highlights: ['温泉养生', '地热奇观', '休闲放松']
          },
          {
            name: '石塘林',
            description: '火山岩地貌景观',
            coordinates: [119.9445, 47.1799],
            highlights: ['奇石景观', '地质奇观', '摄影胜地']
          }
        ]
      },
      {
        name: '锡林郭勒草原',
        description: '典型的温带草原景观',
        coordinates: [116.0753, 43.9333],
        type: 'major',
        subPoints: [
          {
            name: '白音锡勒牧场',
            description: '传统蒙古族牧场',
            coordinates: [116.0923, 43.9445],
            highlights: ['草原风光', '牧民生活', '骑马体验']
          },
          {
            name: '乌兰布统草原',
            description: '电影取景胜地',
            coordinates: [117.0234, 43.9876],
            highlights: ['草原风光', '摄影基地', '民俗体验']
          },
          {
            name: '希拉穆仁草原',
            description: '著名的旅游草原',
            coordinates: [111.9632, 41.5578],
            highlights: ['草原风光', '篝火晚会', '民族表演']
          }
        ]
      }
    ]
  },
  {
    id: '11',
    name: '京津冀传统文化美食之旅',
    description: '探索老北京胡同，品尝地道美食，体验传统文化',
    theme: '京华韵味 • 美食寻踪',
    duration: '5-6天',
    difficulty: '简单',
    recommendations: {
      bestTime: '9-10月或4-5月，天气宜人，避开旅游旺季',
      tips: [
        '建议提前预约热门餐厅',
        '景区周末人流量大，建议错峰出行',
        '准备舒适的步行鞋，景点间距离较远',
        '可以购买景区联票节省费用',
        '建议下载地铁APP，方便出行'
      ],
      transportation: [
        '北京、天津均有国际机场',
        '城市间有高铁快速连接',
        '市内建议地铁和打车结合'
      ]
    },
    waypoints: [
      {
        name: '北京故宫',
        description: '世界上规模最大的宫殿建筑群',
        coordinates: [116.3974, 39.9175],
        type: 'major',
        subPoints: [
          {
            name: '太和殿',
            description: '明清两朝最大的宫殿建筑',
            coordinates: [116.3972, 39.9198],
            highlights: ['皇家建筑', '珍贵文物', '宫廷历史']
          },
          {
            name: '珍宝馆',
            description: '收藏皇室珍贵文物',
            coordinates: [116.3986, 39.9187],
            highlights: ['文物展览', '皇家珍宝', '艺术品鉴']
          },
          {
            name: '御花园',
            description: '清代皇家园林',
            coordinates: [116.3967, 39.9211],
            highlights: ['皇家园林', '古树名木', '传统建筑']
          }
        ]
      },
      {
        name: '南锣鼓巷',
        description: '北京最著名的传统胡同之一',
        coordinates: [116.4033, 39.9375],
        type: 'major',
        subPoints: [
          {
            name: '烤鸭店一条街',
            description: '汇集多家老字号烤鸭店',
            coordinates: [116.4037, 39.9379],
            highlights: ['北京烤鸭', '传统美食', '老字号']
          },
          {
            name: '恭王府花园',
            description: '清代王府园林代表',
            coordinates: [116.3886, 39.9405],
            highlights: ['园林建筑', '历史文化', '文化体验']
          },
          {
            name: '钟鼓楼',
            description: '古代报时中心',
            coordinates: [116.4009, 39.9409],
            highlights: ['古代建筑', '城市地标', '历史文化']
          }
        ]
      },
      {
        name: '天津古文化街',
        description: '天津传统文化和小吃集中地',
        coordinates: [117.1832, 39.1337],
        type: 'major',
        subPoints: [
          {
            name: '天后宫',
            description: '天津历史最悠久的建筑之一',
            coordinates: [117.1829, 39.1341],
            highlights: ['古代建筑', '民间信仰', '文化遗产']
          },
          {
            name: '狗不理包子总店',
            description: '百年老字号',
            coordinates: [117.1835, 39.1339],
            highlights: ['传统美食', '老字号', '特色小吃']
          },
          {
            name: '津门故里',
            description: '展示天津历史文化',
            coordinates: [117.1838, 39.1335],
            highlights: ['历史展览', '民俗文化', '建筑遗存']
          }
        ]
      },
      {
        name: '五大道',
        description: '天津近代建筑博物馆',
        coordinates: [117.1981, 39.1208],
        type: 'major',
        subPoints: [
          {
            name: '民园广场',
            description: '欧式风情建筑群',
            coordinates: [117.1985, 39.1211],
            highlights: ['西洋建筑', '历史遗迹', '文化体验']
          },
          {
            name: '马场道',
            description: '最具代表性的租界风情街道',
            coordinates: [117.1978, 39.1205],
            highlights: ['租界建筑', '历史街区', '文化漫步']
          },
          {
            name: '睦南道',
            description: '英式建筑风格街道',
            coordinates: [117.1975, 39.1202],
            highlights: ['英式建筑', '花园洋房', '历史建筑']
          }
        ]
      },
      {
        name: '承德避暑山庄',
        description: '清代皇家园林',
        coordinates: [117.9373, 40.9865],
        type: 'major',
        subPoints: [
          {
            name: '须弥福寿之庙',
            description: '仿拉萨布达拉宫建筑',
            coordinates: [117.9368, 40.9868],
            highlights: ['藏式建筑', '皇家寺庙', '文化融合']
          },
          {
            name: '澹泊敬诚',
            description: '清代皇帝处理政务的地方',
            coordinates: [117.9375, 40.9863],
            highlights: ['皇家建筑', '历史遗迹', '园林景观']
          },
          {
            name: '普宁寺',
            description: '清代皇家寺庙',
            coordinates: [117.9379, 40.9861],
            highlights: ['佛教建筑', '文物古迹', '宗教文化']
          }
        ]
      }
    ]
  },
  {
    id: '12',
    name: '云南古城文化探索之旅',
    description: '探索大理丽江古城，感受纳西白族文化，体验高原风情',
    theme: '云南古韵 • 民族风情',
    duration: '6-7天',
    difficulty: '中等',
    recommendations: {
      bestTime: '3-4月或9-10月，气候宜人，避开雨季',
      tips: [
        '建议提前适应高原环境',
        '准备防晒和保暖衣物，昼夜温差大',
        '尊重当地民族习俗和文化',
        '可以选择古城客栈体验当地生活',
        '建议购买旅游保险，考虑高原反应'
      ],
      transportation: [
        '可从昆明或丽江机场入境',
        '城市间有高铁和长途汽车',
        '古城内以步行为主，可租用自行车'
      ]
    },
    waypoints: [
      {
        name: '丽江古城',
        description: '世界文化遗产，纳西族古城，千年历史文化的见证',
        coordinates: [100.2335, 26.8721],
        type: 'major',
        subPoints: [
          {
            name: '四方街',
            description: '古城中心广场，纳西族传统集市',
            coordinates: [100.2337, 26.8719],
            highlights: ['传统集市', '民族文化', '美食购物']
          },
          {
            name: '木府',
            description: '纳西族土司府邸，历史文化地标',
            coordinates: [100.2341, 26.8723],
            highlights: ['历史建筑', '文化遗产', '民族历史']
          },
          {
            name: '黑龙潭公园',
            description: '丽江标志性景观，融合自然与人文之美',
            coordinates: [100.2380, 26.8818],
            highlights: ['自然景观', '玉龙雪山倒影', '古建筑群']
          },
          {
            name: '狮子山',
            description: '俯瞰丽江古城的最佳位置',
            coordinates: [100.2310, 26.8715],
            highlights: ['城市全景', '日落美景', '摄影胜地']
          },
          {
            name: '万古楼',
            description: '丽江古城制高点，观景绝佳之地',
            coordinates: [100.2329, 26.8726],
            highlights: ['古城全景', '建筑艺术', '文化体验']
          }
        ]
      },
      {
        name: '玉龙雪山',
        description: '纳西族神山，云南第一峰',
        coordinates: [100.1822, 27.1001],
        type: 'major',
        subPoints: [
          {
            name: '云杉坪',
            description: '高山草甸景观',
            coordinates: [100.1789, 27.1258],
            highlights: ['自然风光', '生态保护', '高山植被']
          },
          {
            name: '蓝月谷',
            description: '白水河源头，冰川补给湖泊',
            coordinates: [100.1801, 27.0918],
            highlights: ['湖泊景观', '自然奇观', '摄影胜地']
          },
          {
            name: '冰川公园',
            description: '低纬度现代冰川',
            coordinates: [100.1822, 27.1001],
            highlights: ['冰川地貌', '科普教育', '自然景观']
          }
        ]
      },
      {
        name: '大理古城',
        description: '白族文化与历史的见证',
        coordinates: [100.1634, 25.6941],
        type: 'major',
        subPoints: [
          {
            name: '洋人街',
            description: '古城最热闹的商业街',
            coordinates: [100.1637, 25.6938],
            highlights: ['特色小店', '文艺氛围', '美食汇集']
          },
          {
            name: '五华楼',
            description: '大理古城地标建筑',
            coordinates: [100.1632, 25.6943],
            highlights: ['古代建筑', '城市地标', '文化象征']
          },
          {
            name: '人民路步行街',
            description: '体验白族特色商业文化',
            coordinates: [100.1635, 25.6945],
            highlights: ['民族工艺', '特色美食', '文化购物']
          },
          {
            name: '大理古城门',
            description: '古城南门，历史地标',
            coordinates: [100.1630, 25.6920],
            highlights: ['古代建筑', '历史遗迹', '城市象征']
          }
        ]
      },
      {
        name: '崇圣寺三塔',
        description: '大理标志性古建筑群',
        coordinates: [100.1503, 25.7060],
        type: 'minor',
        subPoints: [
          {
            name: '千寻塔',
            description: '大理最高的古塔',
            coordinates: [100.1505, 25.7062],
            highlights: ['佛教建筑', '历史文物', '建筑艺术']
          },
          {
            name: '文物陈列馆',
            description: '展示大理历史文物',
            coordinates: [100.1501, 25.7058],
            highlights: ['文物展览', '历史文化', '考古发现']
          },
          {
            name: '三塔倒影池',
            description: '观赏三塔倒影的最佳地点',
            coordinates: [100.1504, 25.7065],
            highlights: ['自然景观', '摄影胜地', '人文景观']
          }
        ]
      },
      {
        name: '双廊古镇',
        description: '洱海边最美的古镇',
        coordinates: [100.1938, 25.9128],
        type: 'minor',
        subPoints: [
          {
            name: '双廊码头',
            description: '观赏洱海日落的绝佳地点',
            coordinates: [100.1940, 25.9130],
            highlights: ['自然风光', '日落美景', '摄影胜地']
          },
          {
            name: '静心谷',
            description: '依山傍水的休闲区域',
            coordinates: [100.1935, 25.9125],
            highlights: ['自然环境', '休闲娱乐', '文化体验']
          },
          {
            name: '古戏台',
            description: '传统白族表演场所',
            coordinates: [100.1942, 25.9127],
            highlights: ['传统文化', '建筑特色', '民族表演']
          }
        ]
      }
    ]
  },
  {
    id: '13',
    name: '闽南文化休闲度假之旅',
    description: '漫步鼓浪屿，探索闽南建筑，品味地道美食，感受海丝文化',
    theme: '闽南文化 • 海丝遗韵',
    duration: '4-5天',
    difficulty: '简单',
    recommendations: {
      bestTime: '3-5月或9-11月，气候宜人，避开台风季',
      tips: [
        '建议提前预约热门景点门票',
        '准备舒适的步行鞋，岛上以步行为主',
        '注意防晒，准备遮阳伞',
        '建议错峰游览热门景点',
        '品尝当地特色小吃时注意食品卫生'
      ],
      transportation: [
        '可从厦门高崎机场或厦门北站抵达',
        '市内公交系统发达，也可以打车',
        '去往鼓浪屿需要乘坐轮渡'
      ]
    },
    waypoints: [
      {
        name: '鼓浪屿',
        description: '万国建筑博物馆，音乐之岛，中西文化交融的历史见证',
        coordinates: [118.0644, 24.4489],
        type: 'major',
        subPoints: [
          {
            name: '菽庄花园',
            description: '闽南最美私家园林，中西合璧的建筑艺术',
            coordinates: [118.0671, 24.4478],
            highlights: ['园林建筑', '历史文化', '摄影打卡']
          },
          {
            name: '钢琴博物馆',
            description: '亚洲最大的钢琴博物馆，收藏众多珍贵钢琴',
            coordinates: [118.0665, 24.4476],
            highlights: ['钢琴文化', '音乐欣赏', '文化展览']
          },
          {
            name: '日光岩',
            description: '鼓浪屿制高点，可俯瞰全岛风光',
            coordinates: [118.0659, 24.4503],
            highlights: ['地标景观', '日落美景', '地质奇观']
          },
          {
            name: '皓月园',
            description: '历史名人故居，展现近代建筑风格',
            coordinates: [118.0657, 24.4486],
            highlights: ['历史建筑', '文化故事', '建筑艺术']
          }
        ]
      },
      {
        name: '厦门大学',
        description: '中国最美大学之一，独特的闽南建筑群',
        coordinates: [118.0847, 24.4385],
        type: 'major',
        subPoints: [
          {
            name: '芙蓉隧道',
            description: '厦大地标，浪漫隧道',
            coordinates: [118.0853, 24.4382],
            highlights: ['校园文化', '浪漫地标', '摄影胜地']
          },
          {
            name: '建南大会堂',
            description: '闽南建筑与西方建筑的完美融合',
            coordinates: [118.0845, 24.4388],
            highlights: ['建筑艺术', '历史遗迹', '文化地标']
          },
          {
            name: '情人谷',
            description: '校园内最美的自然景观',
            coordinates: [118.0841, 24.4391],
            highlights: ['自然风光', '校园风情', '文艺气息']
          }
        ]
      },
      {
        name: '中山路步行街',
        description: '厦门最繁华的商业街，汇集闽南特色小吃和骑楼建筑',
        coordinates: [118.0825, 24.4553],
        type: 'major',
        subPoints: [
          {
            name: '老字号美食街',
            description: '百年老店，传统美食集中地',
            coordinates: [118.0825, 24.4553],
            highlights: ['传统美食', '老字号文化', '购物体验']
          },
          {
            name: '骑楼建筑群',
            description: '闽南特色骑楼建筑，见证厦门商业发展历史',
            coordinates: [118.0828, 24.4556],
            highlights: ['历史建筑', '文化遗产', '城市记忆']
          },
          {
            name: '中山路天主教堂',
            description: '哥特式建筑，见证厦门近代史',
            coordinates: [118.0832, 24.4558],
            highlights: ['宗教建筑', '建筑艺术', '历史遗迹']
          }
        ]
      },
      {
        name: '曾厝垵',
        description: '文艺美食街区，老渔村新风貌',
        coordinates: [118.0871, 24.4397],
        type: 'minor',
        subPoints: [
          {
            name: '文创街区',
            description: '特色小店，文创市集聚集地',
            coordinates: [118.0871, 24.4397],
            highlights: ['文创购物', '美食探索', '网红打卡']
          },
          {
            name: '曾厝垵沙滩',
            description: '休闲娱乐，观赏日落的好去处',
            coordinates: [118.0867, 24.4391],
            highlights: ['日落美景', '海滩漫步', '浪漫氛围']
          },
          {
            name: '闽南老宅',
            description: '保存完好的闽南传统民居',
            coordinates: [118.0873, 24.4399],
            highlights: ['传统建筑', '民居文化', '历史遗迹']
          }
        ]
      }
    ]
  },
  {
    id: '14',
    name: '藏区高原文化探索之旅',
    description: '探索香格里拉秘境，体验藏族文化，感受高原风光，领略自然与信仰的完美融合',
    theme: '藏地秘境 • 高原风光',
    duration: '5-6天',
    difficulty: '较难',
    recommendations: {
      bestTime: '5-10月，避开雨季和严寒期',
      tips: [
        '建议提前3天到达适应高原环境',
        '准备防寒保暖衣物，昼夜温差大',
        '建议购买旅游保险，准备高原反应药物',
        '请尊重当地宗教习俗，注意着装得体',
        '建议携带氧气瓶，以防高原反应',
        '避免剧烈运动，多休息多喝水'
      ],
      transportation: [
        '可从昆明或成都机场转机到迪庆机场',
        '景区间多为包车或专线巴士',
        '部分景区需要徒步或骑马前往'
      ]
    },
    waypoints: [
      {
        name: '独克宗古城',
        description: '世界上最大的藏民居群，藏式建筑的精髓所在',
        coordinates: [99.7068, 27.8297],
        type: 'major',
        subPoints: [
          {
            name: '月光广场',
            description: '古城中心广场，藏族歌舞表演场地',
            coordinates: [99.7068, 27.8297],
            highlights: ['藏族歌舞', '民俗表演', '文化体验']
          },
          {
            name: '龟山公园',
            description: '俯瞰古城全景的最佳位置',
            coordinates: [99.7089, 27.8312],
            highlights: ['城市全景', '日落美景', '摄影胜地']
          },
          {
            name: '转经筒一条街',
            description: '体验藏传佛教文化的最佳去处',
            coordinates: [99.7052, 27.8289],
            highlights: ['宗教文化', '民族特色', '祈福转经']
          },
          {
            name: '藏式手工艺坊',
            description: '传统藏族工艺品制作展示',
            coordinates: [99.7075, 27.8301],
            highlights: ['传统工艺', '文化购物', '互动体验']
          }
        ]
      },
      {
        name: '松赞林寺',
        description: '云南省最大的藏传佛教寺院，被誉为小布达拉宫',
        coordinates: [99.7083, 27.8477],
        type: 'major',
        subPoints: [
          {
            name: '大殿',
            description: '寺院主殿，供奉历代达赖喇嘛唐卡',
            coordinates: [99.7083, 27.8477],
            highlights: ['佛教文化', '建筑艺术', '宗教仪式']
          },
          {
            name: '僧人辩经场',
            description: '感受藏传佛教辩经文化',
            coordinates: [99.7086, 27.8479],
            highlights: ['宗教活动', '文化体验', '传统仪式']
          },
          {
            name: '酥油花工艺馆',
            description: '展示藏传佛教独特的酥油花艺术',
            coordinates: [99.7080, 27.8475],
            highlights: ['传统工艺', '宗教艺术', '文化展示']
          },
          {
            name: '转经长廊',
            description: '藏传佛教重要的修行场所',
            coordinates: [99.7084, 27.8476],
            highlights: ['宗教文化', '建筑特色', '修行体验']
          }
        ]
      },
      {
        name: '普达措国家公园',
        description: '集高原湖泊、森林和草甸于一体的自然生态公园',
        coordinates: [99.9628, 27.9087],
        type: 'major',
        subPoints: [
          {
            name: '属都湖',
            description: '高原冰川湖泊，被原始森林环绕',
            coordinates: [99.9628, 27.9087],
            highlights: ['自然风光', '徒步环湖', '生态摄影']
          },
          {
            name: '弥里草甸',
            description: '广阔的高原草甸，野花遍布',
            coordinates: [99.9580, 27.9032],
            highlights: ['草甸风光', '野花摄影', '生态观察']
          },
          {
            name: '碧塔海',
            description: '高原湿地生态系统，野生动植物栖息地',
            coordinates: [99.9468, 27.8955],
            highlights: ['湿地生态', '野生动物', '自然教育']
          },
          {
            name: '原始森林带',
            description: '保存完好的高原原始森林',
            coordinates: [99.9550, 27.9060],
            highlights: ['森林探索', '生态保护', '科普教育']
          }
        ]
      },
      {
        name: '纳帕海',
        description: '香格里拉最大的高原湿地，候鸟栖息地',
        coordinates: [99.6387, 27.8566],
        type: 'minor',
        subPoints: [
          {
            name: '湿地观景台',
            description: '观察候鸟和湿地景观的最佳位置',
            coordinates: [99.6387, 27.8566],
            highlights: ['观鸟胜地', '自然风光', '生态保护']
          },
          {
            name: '草原骑马',
            description: '体验藏区传统交通方式',
            coordinates: [99.6352, 27.8544],
            highlights: ['民族体验', '休闲娱乐', '草原风光']
          },
          {
            name: '藏族牧民家访',
            description: '体验真实的藏族牧民生活',
            coordinates: [99.6412, 27.8588],
            highlights: ['民俗体验', '文化交流', '特色美食']
          }
        ]
      }
    ]
  },
  {
    id: '15',
    name: '粤港澳大湾区美食文化之旅',
    description: '探索粤式美食，体验岭南文化，感受现代都市魅力',
    theme: '岭南风韵 • 粤式风情',
    duration: '2-3天',
    difficulty: '简单',
    recommendations: {
      bestTime: '10-12月，秋高气爽，最适合美食之旅',
      tips: [
        '建议错峰用餐，避免高峰期排队',
        '可以请当地人推荐隐藏的美食店',
        '注意部分老字号需要提前预约',
        '建议选择步行或地铁游览，更方便',
        '准备现金，部分老店可能不支持电子支付'
      ],
      transportation: [
        '可从广州白云机场或香港国际机场抵达',
        '城市间可乘坐高铁或城际列车',
        '市内建议使用地铁和公交'
      ]
    },
    waypoints: [
      {
        name: '上下九步行街',
        description: '百年老街，广州美食文化的缩影',
        coordinates: [113.2644, 23.1291],
        type: 'major',
        subPoints: [
          {
            name: '陶陶居总店',
            description: '百年老字号，粤式点心代表',
            coordinates: [113.2640, 23.1289],
            highlights: ['早茶文化', '传统点心', '老字号体验']
          },
          {
            name: '荔湾食家',
            description: '传统广式小吃集中地',
            coordinates: [113.2642, 23.1290],
            highlights: ['街头小吃', '本土美食', '美食文化']
          },
          {
            name: '骑楼老街',
            description: '岭南建筑文化代表',
            coordinates: [113.2644, 23.1291],
            highlights: ['建筑文化', '历史街区', '文化体验']
          },
          {
            name: '百年老店街',
            description: '汇集多家百年老字号',
            coordinates: [113.2646, 23.1292],
            highlights: ['传统商铺', '老字号文化', '购物体验']
          }
        ]
      },
      {
        name: '深圳华强北',
        description: '现代科技与美食的完美融合',
        coordinates: [114.0882, 22.5469],
        type: 'major',
        subPoints: [
          {
            name: '美食广场',
            description: '融合传统与现代的美食天堂',
            coordinates: [114.0882, 22.5469],
            highlights: ['创新美食', '网红打卡', '美食体验']
          },
          {
            name: '茶餐厅文化街',
            description: '体验地道茶餐厅文化',
            coordinates: [114.0884, 22.5470],
            highlights: ['港式茶餐', '饮茶文化', '特色美食']
          },
          {
            name: '夜市小吃街',
            description: '体验深圳夜生活文化',
            coordinates: [114.0886, 22.5471],
            highlights: ['夜市文化', '特色小吃', '城市风情']
          }
        ]
      },
      {
        name: '澳门历史城区',
        description: '世界文化遗产，中葡美食交融',
        coordinates: [113.5429, 22.1987],
        type: 'major',
        subPoints: [
          {
            name: '大三巴牌坊',
            description: '澳门地标，美食集中地',
            coordinates: [113.5429, 22.1987],
            highlights: ['历史建筑', '特色小吃', '文化遗产']
          },
          {
            name: '官也街',
            description: '澳门传统美食街',
            coordinates: [113.5431, 22.1989],
            highlights: ['葡式蛋挞', '澳门小吃', '美食探索']
          },
          {
            name: '议事亭前地',
            description: '中西文化交融的广场',
            coordinates: [113.5433, 22.1991],
            highlights: ['建筑艺术', '美食广场', '文化体验']
          }
        ]
      }
    ]
  },
  {
    id: '16',
    name: '江南园林文化艺术之旅',
    description: '探索江南园林艺术，感受文人雅致生活，品味千年文化底蕴',
    theme: '园林艺术 • 人文雅韵',
    duration: '4-5天',
    difficulty: '简单',
    recommendations: {
      bestTime: '3-5月或9-11月，气候宜人，园林景色最佳',
      tips: [
        '建议错峰游览，避开节假日人流高峰',
        '可请专业导游讲解园林文化与布局',
        '建议预留充足时间细细品味每个园林',
        '准备遮阳伞和舒适的步行鞋',
        '建议提前预约热门园林的门票',
        '可以选择清晨或傍晚游览，光线最佳'
      ],
      transportation: [
        '可从上海虹桥或浦东机场抵达',
        '苏州杭州间建议乘坐高铁',
        '市内可选择地铁或出租车',
        '部分景区可以步行或骑行游览'
      ]
    },
    waypoints: [
      {
        name: '拙政园',
        description: '苏州园林之冠，中国四大名园之首',
        coordinates: [120.6293, 31.3162],
        type: 'major',
        subPoints: [
          {
            name: '远香堂',
            description: '园内精华景点，体现文人意境',
            coordinates: [120.6291, 31.3161],
            highlights: ['建筑艺术', '园林布局', '文化体验']
          },
          {
            name: '倒影池',
            description: '水景设计的典范，园林美学的精髓',
            coordinates: [120.6292, 31.3163],
            highlights: ['水景艺术', '园林美学', '摄影胜地']
          },
          {
            name: '小飞虹',
            description: '典型园林桥景，体现江南水乡特色',
            coordinates: [120.6294, 31.3164],
            highlights: ['桥景艺术', '园林文化', '江南风情']
          },
          {
            name: '待霜亭',
            description: '赏枫胜地，秋季最佳观赏点',
            coordinates: [120.6295, 31.3165],
            highlights: ['四季景观', '亭台建筑', '文人情怀']
          }
        ]
      },
      {
        name: '留园',
        description: '以山水见长的古典园林，世界文化遗产',
        coordinates: [120.6298, 31.3222],
        type: 'major',
        subPoints: [
          {
            name: '冠云峰',
            description: '园内精华，太湖石叠山艺术',
            coordinates: [120.6297, 31.3221],
            highlights: ['叠山艺术', '园林技艺', '自然之美']
          },
          {
            name: '五峰仙馆',
            description: '建筑与山水的完美结合',
            coordinates: [120.6299, 31.3223],
            highlights: ['建筑艺术', '园林设计', '文化体验']
          },
          {
            name: '涵碧山房',
            description: '典型江南园林建筑群',
            coordinates: [120.6300, 31.3224],
            highlights: ['建筑风格', '园林文化', '艺术欣赏']
          }
        ]
      },
      {
        name: '西湖',
        description: '人间天堂，中国十大风景名胜之首',
        coordinates: [120.1485, 30.2421],
        type: 'major',
        subPoints: [
          {
            name: '三潭印月',
            description: '西湖标志性景观，历史人文景点',
            coordinates: [120.1486, 30.2422],
            highlights: ['湖光山色', '人文历史', '摄影胜地']
          },
          {
            name: '柳浪闻莺',
            description: '西湖十景之一，春季赏花胜地',
            coordinates: [120.1487, 30.2423],
            highlights: ['自然景观', '园林艺术', '文化体验']
          },
          {
            name: '苏堤春晓',
            description: '贯穿西湖的古堤，串联多个景点',
            coordinates: [120.1488, 30.2424],
            highlights: ['人文景观', '历史遗迹', '自然美景']
          },
          {
            name: '岳庙',
            description: '纪念岳飞的历史建筑群',
            coordinates: [120.1489, 30.2425],
            highlights: ['历史文化', '建筑艺术', '爱国教育']
          }
        ]
      }
    ]
  },
  {
    id: '17',
    name: '川渝人文美食探索之旅',
    description: '探索巴蜀文化，品味地道川菜，感受天府之国的独特魅力',
    theme: '巴蜀风情 • 美食文化',
    duration: '4-5天',
    difficulty: '简单',
    recommendations: {
      bestTime: '3-5月或9-11月，避开炎热潮湿季节',
      tips: [
        '建议适应川菜辣度，循序渐进',
        '可请当地人推荐隐藏的美食店',
        '注意部分老字号需要提前排队',
        '建议选择地铁出行，避免拥堵',
        '准备防雨装备，天气多变',
        '可以体验地道火锅，但注意饮食卫生'
      ],
      transportation: [
        '可从成都双流机场或重庆江北机场抵达',
        '两地间建议乘坐高铁',
        '市内建议使用地铁和公交',
        '景区可选择步行或出租车'
      ]
    },
    waypoints: [
      {
        name: '宽窄巷子',
        description: '成都三大历史文化保护区之一，川西民俗文化的缩影',
        coordinates: [104.0621, 30.6694],
        type: 'major',
        subPoints: [
          {
            name: '宽巷子',
            description: '传统茶文化体验区，古朴悠闲',
            coordinates: [104.0621, 30.6694],
            highlights: ['茶文化', '民俗体验', '休闲美食']
          },
          {
            name: '窄巷子',
            description: '成都市井生活展示区',
            coordinates: [104.0619, 30.6695],
            highlights: ['地道小吃', '民俗文化', '历史建筑']
          },
          {
            name: '井巷子',
            description: '传统手工艺展示区',
            coordinates: [104.0618, 30.6693],
            highlights: ['手工艺品', '文创市集', '文化体验']
          }
        ]
      },
      {
        name: '洪崖洞',
        description: '重庆市地标建筑，山城特色的立体式建筑群',
        coordinates: [106.5825, 29.5634],
        type: 'major',
        subPoints: [
          {
            name: '美食街',
            description: '汇集重庆特色小吃的美食天堂',
            coordinates: [106.5825, 29.5634],
            highlights: ['火锅文化', '地方小吃', '夜市体验']
          },
          {
            name: '观景平台',
            description: '俯瞰两江交汇的绝佳位置',
            coordinates: [106.5826, 29.5635],
            highlights: ['城市夜景', '江景观赏', '摄影胜地']
          },
          {
            name: '巴渝文化展示区',
            description: '展现重庆历史文化的特色区域',
            coordinates: [106.5824, 29.5633],
            highlights: ['文化展示', '建筑特色', '历史故事']
          }
        ]
      },
      {
        name: '锦里古街',
        description: '成都最古老的商业街之一，三国文化与川西民俗的完美融合',
        coordinates: [104.0474, 30.6421],
        type: 'major',
        subPoints: [
          {
            name: '三国文化区',
            description: '展现三国历史文化的主题区域',
            coordinates: [104.0474, 30.6421],
            highlights: ['历史文化', '主题展示', '互动体验']
          },
          {
            name: '川西小吃街',
            description: '汇集成都特色小吃的美食区',
            coordinates: [104.0475, 30.6422],
            highlights: ['特色小吃', '民间美食', '美食文化']
          },
          {
            name: '民俗展示区',
            description: '展现川西民俗文化的特色区域',
            coordinates: [104.0473, 30.6420],
            highlights: ['民俗文化', '传统工艺', '文化体验']
          },
          {
            name: '茶艺表演区',
            description: '体验传统川茶文化',
            coordinates: [104.0472, 30.6419],
            highlights: ['茶文化', '艺术表演', '文化体验']
          }
        ]
      }
    ]
  },
  {
    id: '18',
    name: '意大利艺术人文探索之旅',
    description: '探索文艺复兴发源地，感受艺术与历史的完美融合，品味意式浪漫生活',
    theme: '艺术人文 • 文艺复兴',
    duration: '7-8天',
    difficulty: '中等',
    recommendations: {
      bestTime: '4-6月或9-10月，避开炎热拥挤的夏季',
      tips: [
        '建议提前预约热门博物馆门票',
        '准备舒适的步行鞋，城区观光多步行',
        '注意着装要求，参观教堂需要衣着得体',
        '建议购买城市通票，性价比更高',
        '避开旅游旺季，人少价格更合理',
        '可以体验当地市集和美食文化'
      ],
      transportation: [
        '可从罗马菲乌米奇诺机场或米兰马尔彭萨机场入境',
        '城市间建议乘坐高速列车',
        '市内可选择地铁、公交或步行',
        '部分景点可以参加导览团'
      ]
    },
    waypoints: [
      {
        name: '罗马古城',
        description: '永恒之城，世界文化遗产，古罗马文明的见证',
        coordinates: [12.4964, 41.9028],
        type: 'major',
        subPoints: [
          {
            name: '斗兽场',
            description: '古罗马建筑的代表作，世界新七大奇迹之一',
            coordinates: [12.4924, 41.8902],
            highlights: ['古罗马建筑', '历史遗迹', '文化体验']
          },
          {
            name: '许愿池',
            description: '巴洛克艺术杰作，罗马最著名的喷泉',
            coordinates: [12.4833, 41.9009],
            highlights: ['巴洛克艺术', '建筑之美', '城市文化']
          },
          {
            name: '万神殿',
            description: '古罗马建筑艺术的完美典范',
            coordinates: [12.4768, 41.8986],
            highlights: ['建筑奇迹', '宗教艺术', '历史文化']
          },
          {
            name: '西班牙广场',
            description: '罗马最著名的广场之一，艺术家聚集地',
            coordinates: [12.4823, 41.9059],
            highlights: ['城市广场', '艺术氛围', '休闲购物']
          }
        ]
      },
      {
        name: '佛罗伦萨历史中心',
        description: '文艺复兴的发源地，艺术与建筑的完美融合',
        coordinates: [11.2558, 43.7696],
        type: 'major',
        subPoints: [
          {
            name: '圣母百花大教堂',
            description: '佛罗伦萨的标志，文艺复兴建筑的杰作',
            coordinates: [11.2558, 43.7731],
            highlights: ['建筑艺术', '宗教文化', '城市地标']
          },
          {
            name: '乌菲兹美术馆',
            description: '世界顶级艺术博物馆，收藏文艺复兴艺术珍品',
            coordinates: [11.2558, 43.7677],
            highlights: ['艺术收藏', '文艺复兴', '博物馆体验']
          },
          {
            name: '老桥',
            description: '横跨亚诺河的中世纪石桥，商业与艺术的象征',
            coordinates: [11.2531, 43.7680],
            highlights: ['历史建筑', '城市风光', '购物体验']
          }
        ]
      },
      {
        name: '威尼斯水城',
        description: '水上之城，独特的水城文化与建筑艺术的完美结合',
        coordinates: [12.3155, 45.4408],
        type: 'major',
        subPoints: [
          {
            name: '圣马可广场',
            description: '威尼斯的心脏，欧洲最美丽的客厅',
            coordinates: [12.3375, 45.4341],
            highlights: ['城市广场', '建筑艺术', '人文风情']
          },
          {
            name: '叹息桥',
            description: '连接总督府与监狱的封闭桥梁，威尼斯地标',
            coordinates: [12.3397, 45.4337],
            highlights: ['历史建筑', '城市传说', '建筑艺术']
          },
          {
            name: '里亚托桥',
            description: '威尼斯最古老的桥梁，大运河上的标志性建筑',
            coordinates: [12.3352, 45.4381],
            highlights: ['桥梁建筑', '城市风光', '商业文化']
          },
          {
            name: '彩色岛',
            description: '以彩色房屋闻名的布拉诺岛',
            coordinates: [12.4177, 45.4853],
            highlights: ['特色建筑', '摄影胜地', '传统工艺']
          }
        ]
      }
    ]
  },
  {
    id: '19',
    name: '西班牙艺术美食之旅',
    description: '感受弗拉门戈的激情，品味地道tapas，探索独特的摩尔文化遗产',
    theme: '文化艺术 • 美食探索',
    duration: '6-7天',
    difficulty: '简单',
    recommendations: {
      bestTime: '3-5月或9-10月，避开酷暑季节',
      tips: [
        '体验弗拉门戈表演建议提前预订',
        'Tapas建议晚上8点后品尝',
        '参观清真寺需注意着装',
        '午休时间（14:00-17:00）很多商店关门',
        '周末集市是体验当地生活的好机会',
        '建议购买景点联票节省开支'
      ],
      transportation: [
        '从马德里或巴塞罗那入境最方便',
        '城市间推荐乘坐高速列车',
        '城市内可选择地铁或步行',
        '部分古城区建议徒步游览'
      ]
    },
    waypoints: [
      {
        name: '格拉纳达',
        description: '摩尔文化与西班牙文化的完美融合之地',
        coordinates: [-3.5986, 37.1773],
        type: 'major',
        subPoints: [
          {
            name: '阿尔罕布拉宫',
            description: '世界文化遗产，伊斯兰建筑艺术的巅峰之作',
            coordinates: [-3.5889, 37.1760],
            highlights: ['摩尔建筑', '宫廷花园', '伊斯兰艺术']
          },
          {
            name: '阿尔拜辛区',
            description: '摩尔人的老城区，保留着中世纪的街道布局',
            coordinates: [-3.5847, 37.1805],
            highlights: ['历史街区', '民族文化', '城市景观']
          },
          {
            name: '卡门广场',
            description: '弗拉门戈艺术的发源地之一',
            coordinates: [-3.5977, 37.1771],
            highlights: ['弗拉门戈', '街头艺术', '城市文化']
          }
        ]
      },
      {
        name: '科尔多瓦',
        description: '古罗马、伊斯兰和基督教文化的交汇之地',
        coordinates: [-4.7794, 37.8847],
        type: 'major',
        subPoints: [
          {
            name: '清真寺-大教堂',
            description: '世界上独一无二的清真寺与教堂结合建筑',
            coordinates: [-4.7793, 37.8789],
            highlights: ['宗教建筑', '文化融合', '建筑艺术']
          },
          {
            name: '犹太区',
            description: '中世纪犹太人聚居区，保留着古老的街道风貌',
            coordinates: [-4.7816, 37.8797],
            highlights: ['历史街区', '文化遗产', '传统建筑']
          },
          {
            name: '罗马桥',
            description: '横跨瓜达尔基维尔河的古罗马建筑',
            coordinates: [-4.7796, 37.8768],
            highlights: ['古罗马遗迹', '城市地标', '历史建筑']
          }
        ]
      },
      {
        name: '托莱多',
        description: '中世纪古城，三大宗教文化的共存之地',
        coordinates: [-4.0273, 39.8628],
        type: 'major',
        subPoints: [
          {
            name: '托莱多大教堂',
            description: '西班牙哥特式建筑的巅峰之作',
            coordinates: [-4.0273, 39.8562],
            highlights: ['宗教建筑', '哥特艺术', '文化遗产']
          },
          {
            name: '圣托梅教堂',
            description: '收藏埃尔·格列柯名画《奥尔加斯伯爵的葬礼》',
            coordinates: [-4.0283, 39.8571],
            highlights: ['艺术收藏', '宗教建筑', '文化遗产']
          },
          {
            name: '阿尔卡萨尔城堡',
            description: '古罗马要塞改建的中世纪城堡',
            coordinates: [-4.0248, 39.8563],
            highlights: ['军事建筑', '历史遗迹', '城市地标']
          },
          {
            name: '索科多维尔广场',
            description: '托莱多的中心广场，周围有众多手工艺品店',
            coordinates: [-4.0271, 39.8575],
            highlights: ['城市广场', '手工艺品', '传统市集']
          }
        ]
      }
    ]
  },
  {
    id: '20',
    name: '英伦文化艺术体验之旅',
    description: '探索大英博物馆的珍宝，漫步剑桥牛津的学院，感受英伦优雅与传统',
    theme: '人文历史 • 学术艺术',
    duration: '7-8天',
    difficulty: '简单',
    recommendations: {
      bestTime: '5-9月，天气最适宜游览',
      tips: [
        '大英博物馆免费参观但建议提前预约',
        '剑桥牛津的学院需要购票进入',
        '准备雨具，英国天气多变',
        '周末集市和跳蚤市场值得一逛',
        '建议购买London Pass节省开支',
        '体验正宗英式下午茶需提前预约'
      ],
      transportation: [
        '从希思罗机场或盖特威克机场入境',
        '城市间可乘坐国铁',
        '伦敦地铁发达，建议购买Oyster卡',
        '剑桥牛津可以选择一日游团'
      ]
    },
    waypoints: [
      {
        name: '伦敦市中心',
        description: '世界金融文化中心，历史与现代的完美融合',
        coordinates: [-0.1276, 51.5074],
        type: 'major',
        subPoints: [
          {
            name: '大英博物馆',
            description: '世界最古老的博物馆，收藏人类文明瑰宝',
            coordinates: [-0.1246, 51.5194],
            highlights: ['文化遗产', '艺术收藏', '历史探索']
          },
          {
            name: '国家美术馆',
            description: '收藏13-20世纪欧洲绘画艺术精品',
            coordinates: [-0.1281, 51.5089],
            highlights: ['艺术收藏', '欧洲绘画', '文化体验']
          },
          {
            name: '泰特现代艺术馆',
            description: '英国现当代艺术的重要展示空间',
            coordinates: [-0.0990, 51.5076],
            highlights: ['现代艺术', '当代艺术', '创意展览']
          },
          {
            name: '考文特花园',
            description: '伦敦最富活力的艺术文化区',
            coordinates: [-0.1219, 51.5117],
            highlights: ['街头表演', '特色市场', '文化体验']
          }
        ]
      },
      {
        name: '剑桥',
        description: '世界顶级学府，英国学术传统的象征',
        coordinates: [0.1167, 52.2053],
        type: 'major',
        subPoints: [
          {
            name: '国王学院',
            description: '剑桥最著名的学院，哥特式建筑的代表作',
            coordinates: [0.1167, 52.2044],
            highlights: ['教堂建筑', '学院文化', '音乐传统']
          },
          {
            name: '三一学院',
            description: '英国最富有的学院，牛顿和培根的母校',
            coordinates: [0.1175, 52.2073],
            highlights: ['学院建筑', '科学历史', '文化传统']
          },
          {
            name: '剑河',
            description: '体验传统撑篙游览，欣赏校园风光',
            coordinates: [0.1167, 52.2088],
            highlights: ['河上游览', '校园风光', '传统体验']
          }
        ]
      },
      {
        name: '牛津',
        description: '英国最古老的大学城，学术与艺术的殿堂',
        coordinates: [-1.2578, 51.7520],
        type: 'major',
        subPoints: [
          {
            name: '基督教堂学院',
            description: '哈利波特取景地，牛津最大最富盛名的学院',
            coordinates: [-1.2558, 51.7500],
            highlights: ['哥特建筑', '电影场景', '学院文化']
          },
          {
            name: '博德利图书馆',
            description: '英国第二大图书馆，收藏众多珍贵手稿',
            coordinates: [-1.2544, 51.7545],
            highlights: ['图书收藏', '建筑艺术', '文化遗产']
          },
          {
            name: '拉德克利夫图书馆',
            description: '牛津地标性建筑，巴洛克建筑杰作',
            coordinates: [-1.2542, 51.7535],
            highlights: ['建筑艺术', '学术氛围', '城市地标']
          },
          {
            name: 'covered market',
            description: '历史悠久的室内市场，体验本地生活',
            coordinates: [-1.2567, 51.7516],
            highlights: ['传统市场', '美食购物', '本地文化']
          }
        ]
      }
    ]
  },
  {
    id: '21',
    name: '日本关西文化探索之旅',
    description: '探访千年古都京都，体验大阪美食，感受日本传统与现代的完美融合',
    theme: '传统文化 • 美食体验',
    duration: '5-7天',
    difficulty: '简单',
    recommendations: {
      bestTime: '3-5月赏樱或10-11月赏枫最佳',
      tips: [
        '建议购买关西周游卡节省交通费',
        '参拜神社寺庙需注意礼仪',
        '建议体验和服漫步古都街区',
        '可以预约特色日式住宿体验',
        '避开日本连休假期出行',
        '准备舒适的步行鞋，景点间多步行'
      ],
      transportation: [
        '从关西国际机场入境最方便',
        '城市间可使用JR Pass通票',
        '市内建议购买一日券',
        '景区之间可以步行或乘坐公交'
      ]
    },
    waypoints: [
      {
        name: '京都',
        description: '日本千年古都，传统文化与建筑的完美保存地',
        coordinates: [135.7681, 35.0116],
        type: 'major',
        subPoints: [
          {
            name: '清水寺',
            description: '世界文化遗产，日本最著名的寺院之一',
            coordinates: [135.7851, 34.9948],
            highlights: ['古建筑', '赏樱赏枫', '和服体验']
          },
          {
            name: '伏见稻荷大社',
            description: '千本鸟居闻名世界的神社',
            coordinates: [135.7727, 34.9671],
            highlights: ['千本鸟居', '神社文化', '祈福参拜']
          },
          {
            name: '岚山竹林',
            description: '京都象征性景观，竹林小径与日式庭园',
            coordinates: [135.6717, 35.0094],
            highlights: ['竹林漫步', '日式庭园', '古寺参访']
          },
          {
            name: '金阁寺',
            description: '世界文化遗产，黄金装饰的禅宗寺院',
            coordinates: [135.7294, 35.0394],
            highlights: ['金色建筑', '日式庭园', '禅宗文化']
          }
        ]
      },
      {
        name: '奈良',
        description: '日本最古老的首都，保存着众多历史遗迹',
        coordinates: [135.8048, 34.6851],
        type: 'major',
        subPoints: [
          {
            name: '东大寺',
            description: '世界最大的木造建筑，著名的大佛殿',
            coordinates: [135.8397, 34.6890],
            highlights: ['大佛殿', '古建筑', '文化遗产']
          },
          {
            name: '奈良公园',
            description: '与鹿共存的城市公园，日本特色景观',
            coordinates: [135.8430, 34.6851],
            highlights: ['梅花鹿', '自然风光', '古迹游览']
          },
          {
            name: '春日大社',
            description: '奈良最重要的神社，以朱红色建筑著称',
            coordinates: [135.8497, 34.6810],
            highlights: ['神社建筑', '灯笼参道', '传统仪式']
          }
        ]
      },
      {
        name: '大阪',
        description: '关西地区最大城市，美食与现代文化的天堂',
        coordinates: [135.5023, 34.6937],
        type: 'major',
        subPoints: [
          {
            name: '大阪城',
            description: '日本著名城堡，象征大阪历史与文化',
            coordinates: [135.5259, 34.6873],
            highlights: ['城堡建筑', '历史遗迹', '樱花名所']
          },
          {
            name: '道顿堀',
            description: '大阪最著名的美食街，网红打卡地',
            coordinates: [135.5010, 34.6687],
            highlights: ['美食天堂', '霓虹夜景', '购物体验']
          },
          {
            name: '通天阁',
            description: '大阪地标建筑，新世界区的象征',
            coordinates: [135.5063, 34.6517],
            highlights: ['城市地标', '夜景观赏', '怀旧氛围']
          },
          {
            name: '黑门市场',
            description: '大阪最大的传统市场，美食采购天堂',
            coordinates: [135.5060, 34.6659],
            highlights: ['美食市场', '本地特产', '传统小吃']
          }
        ]
      }
    ]
  },
  {
    id: '22',
    name: '法国浪漫艺术探索之旅',
    description: '漫步塞纳河畔，徜徉卢浮宫，感受法式浪漫与艺术的完美交织',
    theme: '艺术人文 • 浪漫文化',
    duration: '7-8天',
    difficulty: '简单',
    recommendations: {
      bestTime: '4-6月或9-10月，避开旺季人流',
      tips: [
        '建议提前预约热门景点门票',
        '博物馆周四晚上有夜场优惠',
        '米其林餐厅需提前预约',
        '地铁票可购买多日通票',
        '警惕扒手，注意随身物品',
        '建议体验塞纳河游船晚餐'
      ],
      transportation: [
        '从戴高乐机场或奥利机场入境',
        '城市间推荐乘坐TGV高铁',
        '巴黎地铁发达且便捷',
        '景点间可以漫步或乘坐地铁'
      ]
    },
    waypoints: [
      {
        name: '巴黎市中心',
        description: '浪漫之都，艺术与时尚的完美融合',
        coordinates: [2.3522, 48.8566],
        type: 'major',
        subPoints: [
          {
            name: '卢浮宫',
            description: '世界最大的艺术博物馆，艺术珍品的殿堂',
            coordinates: [2.3376, 48.8606],
            highlights: ['艺术收藏', '建筑艺术', '文化体验']
          },
          {
            name: '埃菲尔铁塔',
            description: '巴黎地标，俯瞰全城的最佳地点',
            coordinates: [2.2945, 48.8584],
            highlights: ['城市地标', '浪漫景点', '观景台']
          },
          {
            name: '圣母院',
            description: '哥特式建筑杰作，巴黎精神象征',
            coordinates: [2.3522, 48.8530],
            highlights: ['宗教建筑', '哥特艺术', '历史遗迹']
          },
          {
            name: '香榭丽舍大街',
            description: '世界最美大街，购物与休闲的天堂',
            coordinates: [2.3084, 48.8698],
            highlights: ['时尚购物', '城市风情', '休闲漫步']
          }
        ]
      },
      {
        name: '凡尔赛',
        description: '法国皇室辉煌的见证，世界文化遗产',
        coordinates: [2.1204, 48.8049],
        type: 'major',
        subPoints: [
          {
            name: '凡尔赛宫',
            description: '欧洲最奢华的宫殿，巴洛克建筑典范',
            coordinates: [2.1204, 48.8049],
            highlights: ['宫殿建筑', '艺术收藏', '历史遗迹']
          },
          {
            name: '凡尔赛花园',
            description: '法式园林的巅峰之作',
            coordinates: [2.1136, 48.8048],
            highlights: ['法式园林', '喷泉表演', '雕塑艺术']
          },
          {
            name: '特里亚农宫',
            description: '玛丽·安托瓦内特的私人宫殿',
            coordinates: [2.1070, 48.8139],
            highlights: ['宫殿建筑', '私人花园', '历史故事']
          }
        ]
      },
      {
        name: '卢瓦尔河谷',
        description: '法国古堡群，浪漫与历史的完美融合',
        coordinates: [0.6892, 47.3931],
        type: 'major',
        subPoints: [
          {
            name: '香波堡',
            description: '卢瓦尔河最大城堡，法国文艺复兴建筑代表',
            coordinates: [1.5174, 47.6162],
            highlights: ['城堡建筑', '建筑艺术', '历史遗迹']
          },
          {
            name: '舍农索堡',
            description: '横跨河面的"女性城堡"，建筑艺术珍品',
            coordinates: [1.0704, 47.3248],
            highlights: ['水上城堡', '花园艺术', '历史文化']
          },
          {
            name: '昂布瓦兹城堡',
            description: '法国国王最早的城堡住所之一',
            coordinates: [0.9842, 47.4134],
            highlights: ['古堡建筑', '皇室历史', '文艺复兴']
          },
          {
            name: '卢瓦尔河葡萄酒庄',
            description: '体验法国葡萄酒文化的理想之地',
            coordinates: [0.6892, 47.3931],
            highlights: ['葡萄酒庄', '品酒体验', '美食文化']
          }
        ]
      }
    ]
  },
  {
    id: '23',
    name: '泰国文化休闲度假之旅',
    description: '探索佛教文化，品味泰式美食，享受热带海岛度假',
    theme: '文化体验 • 休闲度假',
    duration: '6-7天',
    difficulty: '简单',
    recommendations: {
      bestTime: '11-2月，避开雨季，天气最适宜',
      tips: [
        '参观寺庙需着装得体',
        '可以体验正宗泰式按摩',
        '建议尝试夜市小吃文化',
        '海岛游玩要注意防晒',
        '建议选择BTS交通卡',
        '可以体验水上市场文化'
      ],
      transportation: [
        '从素万那普机场或廊曼机场入境',
        '城市内可选择BTS、MRT或出租车',
        '岛屿间有快艇和渡轮',
        '景点间可以选择嘟嘟车体验'
      ]
    },
    waypoints: [
      {
        name: '曼谷',
        description: '泰国首都，传统与现代交融的大都市',
        coordinates: [100.5018, 13.7563],
        type: 'major',
        subPoints: [
          {
            name: '大皇宫',
            description: '泰国最重要的宫殿建筑群，建筑艺术的精华',
            coordinates: [100.4902, 13.7500],
            highlights: ['宫殿建筑', '佛教文化', '泰式艺术']
          },
          {
            name: '卧佛寺',
            description: '泰国最古老的寺庙之一，著名的卧佛像',
            coordinates: [100.4931, 13.7465],
            highlights: ['佛教寺庙', '传统按摩', '文化体验']
          },
          {
            name: '水上市场',
            description: '体验传统泰式水上集市文化',
            coordinates: [100.4830, 13.7280],
            highlights: ['本地文化', '美食体验', '特色购物']
          },
          {
            name: '考山路',
            description: '曼谷著名的背包客街，热闹的夜市文化',
            coordinates: [100.4971, 13.7587],
            highlights: ['夜市文化', '街头美食', '休闲娱乐']
          }
        ]
      },
      {
        name: '清迈',
        description: '泰国北部古城，兰纳文化的代表',
        coordinates: [98.9853, 18.7883],
        type: 'major',
        subPoints: [
          {
            name: '双龙寺',
            description: '清迈最著名的寺庙，位于素贴山上',
            coordinates: [98.9217, 18.8048],
            highlights: ['佛教寺庙', '山顶景观', '文化遗产']
          },
          {
            name: '清迈古城',
            description: '保存完好的古城区，众多特色寺庙',
            coordinates: [98.9867, 18.7883],
            highlights: ['古城文化', '寺庙建筑', '地方特色']
          },
          {
            name: '周日夜市',
            description: '清迈最大的步行街市场',
            coordinates: [98.9912, 18.7876],
            highlights: ['夜市文化', '手工艺品', '美食体验']
          },
          {
            name: '清迈大象保护营',
            description: '与大象近距离互动的生态保护区',
            coordinates: [98.9420, 18.8547],
            highlights: ['动物保护', '生态体验', '自然教育']
          }
        ]
      },
      {
        name: '普吉岛',
        description: '泰国最大的海岛，热带度假天堂',
        coordinates: [98.3381, 7.9519],
        type: 'major',
        subPoints: [
          {
            name: '芭东海滩',
            description: '普吉岛最热闹的海滩，丰富的娱乐设施',
            coordinates: [98.2945, 7.8965],
            highlights: ['海滩度假', '水上运动', '夜生活']
          },
          {
            name: '攀牙湾',
            description: '著名的石灰岩岛屿群，自然景观壮丽',
            coordinates: [98.4640, 8.2762],
            highlights: ['自然风光', '海上游览', '皮划艇']
          },
          {
            name: '普吉老城',
            description: '中葡混合建筑风格的特色老城区',
            coordinates: [98.3854, 7.8866],
            highlights: ['历史建筑', '本地文化', '美食探索']
          },
          {
            name: '皇帝岛',
            description: '适合浮潜和深潜的清澈海域',
            coordinates: [98.5148, 7.7642],
            highlights: ['海岛游览', '水上活动', '自然风光']
          }
        ]
      }
    ]
  },
  {
    id: '24',
    name: '澳大利亚自然探索体验之旅',
    description: '探索大堡礁海洋生态，亲近野生动物，体验澳式休闲生活',
    theme: '自然生态 • 海洋探索',
    duration: '8-10天',
    difficulty: '中等',
    recommendations: {
      bestTime: '9-11月或3-5月，避开炎热季节',
      tips: [
        '大堡礁浮潜需要提前预约',
        '注意防晒，澳洲紫外线强',
        '野生动物园可以近距离接触考拉',
        '悉尼歌剧院可以预约导览',
        '自驾需注意靠左行驶',
        '建议购买旅游保险'
      ],
      transportation: [
        '从悉尼或墨尔本机场入境',
        '城市间推荐国内航班',
        '市内可选择公交或出租车',
        '景区可以参加一日游团'
      ]
    },
    waypoints: [
      {
        name: '悉尼',
        description: '澳大利亚第一大城市，现代与自然的完美融合',
        coordinates: [151.2093, -33.8688],
        type: 'major',
        subPoints: [
          {
            name: '悉尼歌剧院',
            description: '世界文化遗产，现代建筑艺术的象征',
            coordinates: [151.2153, -33.8568],
            highlights: ['建筑艺术', '文化表演', '海港风光']
          },
          {
            name: '邦迪海滩',
            description: '悉尼最著名的海滩，冲浪胜地',
            coordinates: [151.2744, -33.8914],
            highlights: ['海滩休闲', '冲浪运动', '海岸步道']
          },
          {
            name: '蓝山国家公园',
            description: '世界遗产，著名的蓝色山脉风景区',
            coordinates: [150.3117, -33.7188],
            highlights: ['自然风光', '徒步探索', '缆车体验']
          },
          {
            name: '达令港',
            description: '悉尼最大的休闲娱乐区',
            coordinates: [151.1973, -33.8731],
            highlights: ['海港风情', '美食购物', '休闲娱乐']
          }
        ]
      },
      {
        name: '凯恩斯',
        description: '大堡礁的门户，热带雨林与海洋的交汇处',
        coordinates: [145.7781, -16.9186],
        type: 'major',
        subPoints: [
          {
            name: '大堡礁',
            description: '世界最大的珊瑚礁群，海洋生态天堂',
            coordinates: [145.7731, -16.2864],
            highlights: ['海洋生态', '浮潜体验', '海洋探索']
          },
          {
            name: '库兰达热带雨林',
            description: '世界最古老的热带雨林之一',
            coordinates: [145.6347, -16.8136],
            highlights: ['热带雨林', '空中缆车', '原住民文化']
          },
          {
            name: '绿岛',
            description: '大堡礁上的珊瑚礁岛，潜水胜地',
            coordinates: [145.9622, -16.7558],
            highlights: ['海岛度假', '潜水探索', '海洋生态']
          },
          {
            name: '棕榈湾',
            description: '热带天堂，椰林海滩的完美组合',
            coordinates: [145.7722, -16.7411],
            highlights: ['海滩度假', '热带风情', '观光游览']
          }
        ]
      },
      {
        name: '墨尔本',
        description: '澳大利亚文化之都，充满艺术气息的现代都市',
        coordinates: [144.9631, -37.8136],
        type: 'major',
        subPoints: [
          {
            name: '大洋路',
            description: '世界最美海岸公路，自然景观壮丽',
            coordinates: [143.6672, -38.7597],
            highlights: ['海岸风光', '自然奇观', '公路旅行']
          },
          {
            name: '菲利普岛',
            description: '著名的企鹅栖息地，野生动物保护区',
            coordinates: [145.2269, -38.4892],
            highlights: ['野生动物', '企鹅巡游', '自然生态']
          },
          {
            name: '维多利亚女王市场',
            description: '南半球最大的露天市场',
            coordinates: [144.9563, -37.8076],
            highlights: ['本地市场', '美食文化', '购物体验']
          },
          {
            name: '圣科达海滩',
            description: '墨尔本最受欢迎的海滩之一',
            coordinates: [144.9741, -37.8679],
            highlights: ['海滩文化', '休闲娱乐', '日落美景']
          }
        ]
      }
    ]
  },
  {
    id: '25',
    name: '迪拜奢华休闲之旅',
    description: '体验中东奢华生活，探索沙漠与现代文明的交融',
    theme: '奢华体验 • 沙漠探索',
    duration: '5-6天',
    difficulty: '简单',
    recommendations: {
      bestTime: '10-3月，避开炎热夏季',
      tips: [
        '注意着装要求，进入清真寺需要遮盖',
        '沙漠冲沙建议选择正规团队',
        '周五是穆斯林礼拜日，部分景点关闭',
        '建议预约帆船酒店下午茶',
        '可以体验地铁黄金车厢',
        '购物中心内禁止拍照'
      ],
      transportation: [
        '从迪拜国际机场入境',
        '市内可选择地铁或出租车',
        '景点间距离较远建议包车',
        '沙漠探索需要参加旅行团'
      ]
    },
    waypoints: [
      {
        name: '迪拜市区',
        description: '现代与传统交融的未来之城',
        coordinates: [55.2708, 25.2048],
        type: 'major',
        subPoints: [
          {
            name: '哈利法塔',
            description: '世界第一高楼，现代建筑的巅峰之作',
            coordinates: [55.2744, 25.1972],
            highlights: ['观景台', '建筑奇迹', '日落美景']
          },
          {
            name: '迪拜购物中心',
            description: '世界最大购物中心，集购物娱乐于一体',
            coordinates: [55.2796, 25.1972],
            highlights: ['奢华购物', '室内水族馆', '音乐喷泉']
          },
          {
            name: '帆船酒店',
            description: '迪拜地标性七星级酒店',
            coordinates: [55.1852, 25.1412],
            highlights: ['奢华建筑', '下午茶', '海景餐厅']
          },
          {
            name: '迪拜码头',
            description: '豪华游艇云集的休闲区',
            coordinates: [55.1436, 25.0775],
            highlights: ['游艇观光', '滨海餐厅', '夜景观赏']
          }
        ]
      },
      {
        name: '老城区',
        description: '感受迪拜传统文化与市井生活',
        coordinates: [55.2962, 25.2532],
        type: 'major',
        subPoints: [
          {
            name: '黄金市场',
            description: '世界最大的黄金零售市场',
            coordinates: [55.2852, 25.2867],
            highlights: ['黄金购物', '传统市场', '文化体验']
          },
          {
            name: '香料市场',
            description: '充满异域风情的传统市集',
            coordinates: [55.2971, 25.2862],
            highlights: ['香料购买', '传统市集', '文化探索']
          },
          {
            name: '朱美拉清真寺',
            description: '迪拜最美丽的清真寺之一',
            coordinates: [55.2337, 25.2333],
            highlights: ['宗教建筑', '伊斯兰文化', '建筑艺术']
          },
          {
            name: '迪拜博物馆',
            description: '了解迪拜历史文化的最佳去处',
            coordinates: [55.2970, 25.2631],
            highlights: ['历史展览', '文化遗产', '传统建筑']
          }
        ]
      },
      {
        name: '沙漠地带',
        description: '体验阿拉伯传统沙漠生活',
        coordinates: [55.3696, 25.0084],
        type: 'major',
        subPoints: [
          {
            name: '沙漠冲沙',
            description: '刺激的沙漠越野体验',
            coordinates: [55.3696, 25.0084],
            highlights: ['沙漠冲沙', '日落观赏', '探险体验']
          },
          {
            name: '沙漠营地',
            description: '体验传统贝都因人生活方式',
            coordinates: [55.3696, 25.0084],
            highlights: ['篝火晚宴', '肚皮舞表演', '骆驼骑行']
          },
          {
            name: '沙丘滑沙',
            description: '独特的沙漠运动体验',
            coordinates: [55.3696, 25.0084],
            highlights: ['沙丘滑板', '沙漠运动', '探险体验']
          },
          {
            name: '沙漠绿洲',
            description: '沙漠中的自然奇观',
            coordinates: [55.3696, 25.0084],
            highlights: ['自然风光', '绿洲探索', '生态观察']
          }
        ]
      }
    ]
  },
  {
    id: '26',
    name: '瑞士阿尔卑斯山地探索之旅',
    description: '探索阿尔卑斯山脉的壮丽景色，体验瑞士特色山地文化',
    theme: '自然风光 • 山地探索',
    duration: '7-8天',
    difficulty: '中等',
    recommendations: {
      bestTime: '6-9月是观光旺季，12-3月适合滑雪',
      tips: [
        '建议购买瑞士通票Swiss Pass',
        '高山需要准备保暖防寒装备',
        '提前预订少女峰火车票',
        '山区天气多变要注意防护',
        '可以体验瑞士特色奶酪火锅',
        '建议购买旅游保险'
      ],
      transportation: [
        '从苏黎世或日内瓦机场入境',
        '城市间使用火车最方便',
        '山区有齿轮火车和缆车',
        '建议购买Swiss Pass通票'
      ]
    },
    waypoints: [
      {
        name: '因特拉肯',
        description: '阿尔卑斯山脉观光的理想基地',
        coordinates: [7.8632, 46.6863],
        type: 'major',
        subPoints: [
          {
            name: '少女峰',
            description: '欧洲之巅，壮丽的冰川世界',
            coordinates: [7.9801, 46.5367],
            highlights: ['冰川景观', '观景台', '山地铁路']
          },
          {
            name: '施皮茨小镇',
            description: '图恩湖畔的中世纪小镇',
            coordinates: [7.6769, 46.6896],
            highlights: ['湖畔风光', '古镇漫步', '游船体验']
          },
          {
            name: '哈德昆观景台',
            description: '俯瞰因特拉肯全景的最佳地点',
            coordinates: [7.8572, 46.7051],
            highlights: ['全景观赏', '徒步路线', '缆车体验']
          },
          {
            name: '图恩湖',
            description: '瑞士最美丽的湖泊之一',
            coordinates: [7.7184, 46.7571],
            highlights: ['湖泊游览', '帆船运动', '湖畔漫步']
          }
        ]
      },
      {
        name: '采尔马特',
        description: '马特洪峰脚下的无车小镇',
        coordinates: [7.7480, 46.0207],
        type: 'major',
        subPoints: [
          {
            name: '马特洪峰',
            description: '瑞士最著名的山峰，独特的金字塔形状',
            coordinates: [7.6586, 45.9766],
            highlights: ['标志山峰', '登山体验', '观景台']
          },
          {
            name: '戈尔内格拉特',
            description: '观赏马特洪峰的最佳位置',
            coordinates: [7.7851, 45.9837],
            highlights: ['全景观赏', '齿轮火车', '徒步路线']
          },
          {
            name: '冰川天堂',
            description: '欧洲最高的观景台',
            coordinates: [7.7307, 45.9507],
            highlights: ['冰川体验', '观景平台', '冰雪世界']
          },
          {
            name: '采尔马特老城',
            description: '保存完好的瑞士山地小镇',
            coordinates: [7.7480, 46.0207],
            highlights: ['传统建筑', '特色餐厅', '购物体验']
          }
        ]
      },
      {
        name: '卢塞恩',
        description: '瑞士最美丽的湖畔城市',
        coordinates: [8.3093, 47.0502],
        type: 'major',
        subPoints: [
          {
            name: '卡佩尔廊桥',
            description: '卢塞恩的标志性建筑',
            coordinates: [8.3075, 47.0516],
            highlights: ['历史建筑', '城市地标', '摄影胜地']
          },
          {
            name: '皮拉图斯山',
            description: '卢塞恩地区最高的山峰',
            coordinates: [8.2528, 46.9790],
            highlights: ['山地风光', '缆车体验', '徒步路线']
          },
          {
            name: '瑞吉山',
            description: '欧洲第一座齿轮铁路山峰',
            coordinates: [8.4848, 47.0566],
            highlights: ['日出美景', '齿轮火车', '全景观赏']
          },
          {
            name: '狮子纪念碑',
            description: '马克·吐温称之为"世界上最悲伤的狮子"',
            coordinates: [8.3116, 47.0505],
            highlights: ['历史遗迹', '文化地标', '雕塑艺术']
          }
        ]
      }
    ]
  },
  {
    id: '27',
    name: '希腊爱琴海文明探索之旅',
    description: '探索古希腊文明遗迹，感受爱琴海蓝白小镇风情',
    theme: '人文历史 • 海岛风情',
    duration: '7-8天',
    difficulty: '简单',
    recommendations: {
      bestTime: '5-6月或9-10月，避开炎热夏季',
      tips: [
        '圣托里尼建议住2-3晚',
        '参观卫城需要防晒遮阳',
        '岛屿间建议提前订船票',
        '可以体验特色希腊餐',
        '海岛游玩要注意防晒',
        '建议体验日落巡航'
      ],
      transportation: [
        '从雅典国际机场入境',
        '岛屿间有渡轮和飞机',
        '市内可选择地铁或出租车',
        '景点间可以步行或乘巴士'
      ]
    },
    waypoints: [
      {
        name: '雅典',
        description: '古希腊文明的发源地，历史文化的瑰宝',
        coordinates: [23.7275, 37.9838],
        type: 'major',
        subPoints: [
          {
            name: '雅典卫城',
            description: '世界文化遗产，古希腊建筑的巅峰之作',
            coordinates: [23.7257, 37.9715],
            highlights: ['帕特农神庙', '古希腊建筑', '历史遗迹']
          },
          {
            name: '宪法广场',
            description: '雅典现代城市的中心',
            coordinates: [23.7347, 37.9755],
            highlights: ['城市中心', '现代建筑', '购物美食']
          },
          {
            name: '普拉卡老城区',
            description: '雅典最古老的街区，充满传统风情',
            coordinates: [23.7267, 37.9697],
            highlights: ['传统街区', '特色商店', '地道美食']
          },
          {
            name: '奥林匹克宙斯神庙',
            description: '古希腊最大的神庙遗址',
            coordinates: [23.7327, 37.9693],
            highlights: ['古迹遗址', '历史建筑', '文化遗产']
          }
        ]
      },
      {
        name: '圣托里尼',
        description: '爱琴海上最美的火山岛',
        coordinates: [25.4615, 36.3932],
        type: 'major',
        subPoints: [
          {
            name: '伊亚小镇',
            description: '以蓝顶教堂和日落美景闻名',
            coordinates: [25.3667, 36.4615],
            highlights: ['蓝白建筑', '日落美景', '特色小镇']
          },
          {
            name: '菲拉小镇',
            description: '圣托里尼的首府，悬崖上的白色小镇',
            coordinates: [25.4311, 36.4168],
            highlights: ['悬崖小镇', '缆车体验', '购物美食']
          },
          {
            name: '红沙滩',
            description: '独特的火山岩形成的红色海滩',
            coordinates: [25.3889, 36.3477],
            highlights: ['特色海滩', '地质奇观', '海滩活动']
          },
          {
            name: '阿克罗蒂里遗址',
            description: '史前文明遗址，被火山灰掩埋的古城',
            coordinates: [25.4041, 36.3516],
            highlights: ['考古遗址', '历史文化', '古城探索']
          }
        ]
      },
      {
        name: '米科诺斯',
        description: '爱琴海时尚娱乐之岛',
        coordinates: [25.3290, 37.4467],
        type: 'major',
        subPoints: [
          {
            name: '小威尼斯',
            description: '海边特色建筑群，最佳日落观赏地',
            coordinates: [25.3248, 37.4459],
            highlights: ['特色建筑', '日落美景', '海景餐厅']
          },
          {
            name: '风车山',
            description: '米科诺斯标志性的白色风车群',
            coordinates: [25.3262, 37.4462],
            highlights: ['地标建筑', '观景点', '摄影胜地']
          },
          {
            name: '天堂海滩',
            description: '最受欢迎的海滩之一',
            coordinates: [25.3486, 37.4147],
            highlights: ['海滩休闲', '水上运动', '沙滩派对']
          },
          {
            name: '帕拉波蒂尼教堂',
            description: '典型的基克拉迪建筑风格教堂',
            coordinates: [25.3254, 37.4465],
            highlights: ['宗教建筑', '建筑艺术', '文化体验']
          }
        ]
      }
    ]
  },
  {
    id: '28',
    name: '美国西海岸精华探索之旅',
    description: '体验加州阳光与科技文化，探索自然与城市的完美融合',
    theme: '城市文化 • 自然探索',
    duration: '10-12天',
    difficulty: '简单',
    recommendations: {
      bestTime: '5-10月天气最适宜，9-10月游客较少',
      tips: [
        '建议租车自驾更方便',
        '一号公路需要提前规划停留点',
        '硅谷可以参观科技公司总部',
        '环球影城建议提前订票',
        '国家公园需要购买通票',
        '旧金山建议体验缆车'
      ],
      transportation: [
        '从洛杉矶或旧金山机场入境',
        '城市间建议租车自驾',
        '市内可选择uber或地铁',
        '观光地点建议参加一日游'
      ]
    },
    waypoints: [
      {
        name: '旧金山',
        description: '科技与艺术交融的多元化城市',
        coordinates: [-122.4194, 37.7749],
        type: 'major',
        subPoints: [
          {
            name: '金门大桥',
            description: '旧金山地标，工程奇迹',
            coordinates: [-122.4785, 37.8199],
            highlights: ['城市地标', '工程奇观', '日落美景']
          },
          {
            name: '渔人码头',
            description: '海鲜美食与海狮观赏的热门景点',
            coordinates: [-122.4169, 37.8099],
            highlights: ['海鲜美食', '海狮表演', '海港风情']
          },
          {
            name: '九曲花街',
            description: '世界上最弯曲的街道',
            coordinates: [-122.4192, 37.8024],
            highlights: ['城市景观', '花园街道', '摄影胜地']
          },
          {
            name: '恶魔岛',
            description: '著名的前联邦监狱，现为国家公园',
            coordinates: [-122.4230, 37.8267],
            highlights: ['历史遗迹', '海岛风光', '城市全景']
          }
        ]
      },
      {
        name: '优胜美地国家公园',
        description: '世界级自然遗产，壮丽的自然景观',
        coordinates: [-119.5383, 37.8651],
        type: 'major',
        subPoints: [
          {
            name: '半圆顶',
            description: '优胜美地最著名的花岗岩巨石',
            coordinates: [-119.5333, 37.7459],
            highlights: ['自然奇观', '徒步路线', '攀岩胜地']
          },
          {
            name: '优胜美地瀑布',
            description: '北美最高的瀑布',
            coordinates: [-119.5587, 37.7493],
            highlights: ['自然风光', '瀑布景观', '徒步探索']
          },
          {
            name: '镜湖',
            description: '倒映山峰的天然镜面',
            coordinates: [-119.6526, 37.8852],
            highlights: ['湖泊景观', '摄影胜地', '自然风光']
          },
          {
            name: '隧道观景点',
            description: '优胜美地谷地全景最佳观赏点',
            coordinates: [-119.6776, 37.7157],
            highlights: ['全景观赏', '日落美景', '摄影地点']
          }
        ]
      },
      {
        name: '洛杉矶',
        description: '好莱坞影城，娱乐之都',
        coordinates: [-118.2437, 34.0522],
        type: 'major',
        subPoints: [
          {
            name: '环球影城',
            description: '世界级主题公园，电影场景体验',
            coordinates: [-118.3533, 34.1381],
            highlights: ['主题游乐', '电影体验', '娱乐表演']
          },
          {
            name: '好莱坞星光大道',
            description: '星光熠熠的名人大道',
            coordinates: [-118.3403, 34.1016],
            highlights: ['名人文化', '城市地标', '娱乐购物']
          },
          {
            name: '格里菲斯天文台',
            description: '俯瞰洛杉矶全景的最佳地点',
            coordinates: [-118.3004, 34.1184],
            highlights: ['城市全景', '科普教育', '建筑艺术']
          },
          {
            name: '圣莫尼卡海滩',
            description: '著名的海滨度假胜地',
            coordinates: [-118.4912, 34.0195],
            highlights: ['海滩休闲', '码头游乐', '日落美景']
          }
        ]
      }
    ]
  },
  {
    id: '29',
    name: '加拿大落基山脉自然探索之旅',
    description: '探索落基山脉壮丽自然风光，体验户外探险与野生动物观赏',
    theme: '自然风光 • 户外探险',
    duration: '7-9天',
    difficulty: '中等',
    recommendations: {
      bestTime: '6-9月是观光旺季，冬季可体验滑雪',
      tips: [
        '建议租车自驾更方便',
        '需要提前预订住宿',
        '准备保暖防水装备',
        '注意野生动物安全',
        '建议购买国家公园通票',
        '徒步需要结伴同行'
      ],
      transportation: [
        '从卡尔加里机场入境',
        '城市间需要租车自驾',
        '国家公园内有穿梭巴士',
        '部分景点需要参加团队游'
      ]
    },
    waypoints: [
      {
        name: '班夫国家公园',
        description: '加拿大最古老的国家公园，自然奇观荟萃',
        coordinates: [-115.9281, 51.4968],
        type: 'major',
        subPoints: [
          {
            name: '露易丝湖',
            description: '落基山脉最著名的冰川湖泊',
            coordinates: [-116.1773, 51.4168],
            highlights: ['冰川湖泊', '山峦倒影', '徒步路线']
          },
          {
            name: '班夫温泉',
            description: '历史悠久的温泉度假胜地',
            coordinates: [-115.5708, 51.1784],
            highlights: ['温泉浴场', '山景酒店', '度假休闲']
          },
          {
            name: '硫磺山缆车',
            description: '俯瞰班夫小镇和落基山脉全景',
            coordinates: [-115.5583, 51.1494],
            highlights: ['全景观赏', '缆车体验', '徒步路线']
          },
          {
            name: '弓河瀑布',
            description: '班夫镇附近最壮观的瀑布',
            coordinates: [-115.5619, 51.2619],
            highlights: ['瀑布景观', '徒步探索', '摄影胜地']
          }
        ]
      },
      {
        name: '贾斯珀国家公园',
        description: '落基山脉最大的国家公园，野生动物天堂',
        coordinates: [-117.9810, 52.8737],
        type: 'major',
        subPoints: [
          {
            name: '哥伦比亚冰原',
            description: '北美最大的冰川群之一',
            coordinates: [-117.2270, 52.2181],
            highlights: ['冰川探索', '雪地车体验', '自然奇观']
          },
          {
            name: '马林湖',
            description: '著名的精灵湖，湖水清澈见底',
            coordinates: [-117.9119, 52.7268],
            highlights: ['湖泊风光', '皮划艇', '野生动物']
          },
          {
            name: '天空缆车',
            description: '贾斯珀最高的观景点',
            coordinates: [-118.0719, 52.9019],
            highlights: ['山峰全景', '观景平台', '登山体验']
          },
          {
            name: '阿萨巴斯卡瀑布',
            description: '贾斯珀最壮观的瀑布群',
            coordinates: [-117.8867, 52.6926],
            highlights: ['瀑布群', '峡谷地貌', '徒步探索']
          }
        ]
      },
      {
        name: '幽鹤国家公园',
        description: '原始自然风光与地质奇观的完美结合',
        coordinates: [-116.5265, 51.4979],
        type: 'major',
        subPoints: [
          {
            name: '翡翠湖',
            description: '因水色如翡翠般纯净而闻名',
            coordinates: [-116.5307, 51.4429],
            highlights: ['湖泊风光', '徒步路线', '独木舟']
          },
          {
            name: '天然桥',
            description: '基金河上的自然石桥',
            coordinates: [-116.4853, 51.3722],
            highlights: ['地质奇观', '河流景观', '自然桥梁']
          },
          {
            name: '螺旋隧道',
            description: '工程奇迹与自然景观的完美结合',
            coordinates: [-116.3989, 51.4950],
            highlights: ['铁路工程', '观景平台', '历史遗迹']
          },
          {
            name: '高山草甸',
            description: '野花盛开的高山草甸',
            coordinates: [-116.5265, 51.4979],
            highlights: ['野花观赏', '徒步探索', '野生动物']
          }
        ]
      }
    ]
  },
  {
    id: '30',
    name: '内蒙古草原文化体验之旅',
    description: '体验广阔草原风光，感受蒙古族传统文化魅力',
    theme: '草原风情 • 民族文化',
    duration: '5-7天',
    difficulty: '简单',
    recommendations: {
      bestTime: '7-9月草原最美，气候最宜人',
      tips: [
        '建议参加当地旅行团',
        '准备防晒和保暖衣物',
        '可以体验蒙古包住宿',
        '品尝特色奶茶和美食',
        '参与草原特色活动',
        '尊重当地民俗文化'
      ],
      transportation: [
        '从呼和浩特机场入境',
        '景区间需包车或跟团',
        '草原地区路况较好',
        '部分景点需要越野车'
      ]
    },
    waypoints: [
      {
        name: '呼和浩特',
        description: '内蒙古自治区首府，历史文化名城',
        coordinates: [111.7518, 40.8429],
        type: 'major',
        subPoints: [
          {
            name: '大召寺',
            description: '内蒙古最大的黄教寺院',
            coordinates: [111.6423, 40.8137],
            highlights: ['藏传佛教', '历史建筑', '文化遗产']
          },
          {
            name: '内蒙古博物院',
            description: '了解内蒙古历史文化的窗口',
            coordinates: [111.6623, 40.8183],
            highlights: ['历史文物', '民族文化', '恐龙化石']
          },
          {
            name: '昭君博物院',
            description: '纪念王昭君的历史文化园区',
            coordinates: [111.6821, 40.8082],
            highlights: ['历史遗迹', '文化展览', '园林景观']
          },
          {
            name: '回民区',
            description: '体验多元文化交融的美食街区',
            coordinates: [111.6534, 40.8156],
            highlights: ['特色美食', '民族文化', '商业街区']
          }
        ]
      },
      {
        name: '希拉穆仁草原',
        description: '内蒙古最著名的旅游草原之一',
        coordinates: [111.9634, 41.5603],
        type: 'major',
        subPoints: [
          {
            name: '草原景区',
            description: '体验最纯正的草原风光',
            coordinates: [111.9634, 41.5603],
            highlights: ['草原风光', '骑马体验', '观星活动']
          },
          {
            name: '蒙古包营地',
            description: '体验传统蒙古族生活方式',
            coordinates: [111.9734, 41.5703],
            highlights: ['民俗体验', '特色住宿', '篝火晚会']
          },
          {
            name: '成吉思汗文化园',
            description: '了解蒙古族历史文化',
            coordinates: [111.9834, 41.5803],
            highlights: ['历史文化', '主题展览', '民族表演']
          },
          {
            name: '那达慕广场',
            description: '体验传统蒙古族那达慕活动',
            coordinates: [111.9934, 41.5903],
            highlights: ['民族活动', '传统竞技', '文化表演']
          }
        ]
      },
      {
        name: '响沙湾',
        description: '亚洲最大的沙漠主题旅游区',
        coordinates: [109.9776, 40.2568],
        type: 'major',
        subPoints: [
          {
            name: '响沙',
            description: '著名的会唱歌的沙漠',
            coordinates: [109.9776, 40.2568],
            highlights: ['沙漠奇观', '滑沙活动', '日落美景']
          },
          {
            name: '沙漠活动区',
            description: '丰富的沙漠娱乐项目',
            coordinates: [109.9876, 40.2668],
            highlights: ['沙漠冲浪', '骆驼骑行', '越野体验']
          },
          {
            name: '沙漠露营地',
            description: '体验独特的沙漠露营',
            coordinates: [109.9976, 40.2768],
            highlights: ['星空露营', '篝火晚会', '沙漠日出']
          },
          {
            name: '黄河景观区',
            description: '欣赏黄河与沙漠的壮美景观',
            coordinates: [110.0076, 40.2868],
            highlights: ['河desert交汇', '观景平台', '摄影胜地']
          }
        ]
      }
    ]
  },
  {
    id: '31',
    name: '海南热带海岛度假之旅',
    description: '体验热带海岛风情，享受阳光沙滩与椰林海韵',
    theme: '椰风海韵 • 热带度假',
    duration: '5-7天',
    difficulty: '简单',
    recommendations: {
      bestTime: '10月至次年4月是最佳季节，避开台风季',
      tips: [
        '准备防晒和泳装',
        '可以体验水上运动',
        '品尝热带水果和海鲜',
        '建议选择海景酒店',
        '可以参加一日游项目',
        '注意防蚊虫叮咬'
      ],
      transportation: [
        '从海口或三亚机场入境',
        '岛内可以包车或打车',
        '景区间有旅游专线',
        '部分景点需要预约'
      ]
    },
    waypoints: [
      {
        name: '三亚',
        description: '中国最著名的热带滨海旅游城市',
        coordinates: [109.5082, 18.2479],
        type: 'major',
        subPoints: [
          {
            name: '亚龙湾',
            description: '被誉为"东方夏威夷"的国家级旅游度假区',
            coordinates: [109.6417, 18.1906],
            highlights: ['白沙海滩', '水上运动', '度假酒店']
          },
          {
            name: '天涯海角',
            description: '富有浪漫传说的海滨景区',
            coordinates: [109.2446, 18.2292],
            highlights: ['海滨景观', '名胜古迹', '日落美景']
          },
          {
            name: '大小洞天',
            description: '集山海景观与人文古迹于一体的景区',
            coordinates: [109.2656, 18.2425],
            highlights: ['山海奇观', '道教文化', '摩崖石刻']
          },
          {
            name: '蜈支洲岛',
            description: '被称为"中国马尔代夫"的度假海岛',
            coordinates: [109.7628, 18.3126],
            highlights: ['潜水胜地', '海岛度假', '珊瑚观赏']
          }
        ]
      },
      {
        name: '海口',
        description: '海南省会，兼具现代都市与历史文化魅力',
        coordinates: [110.3293, 20.0444],
        type: 'major',
        subPoints: [
          {
            name: '观澜湖旅游度假区',
            description: '世界级休闲度假区',
            coordinates: [110.2167, 19.9897],
            highlights: ['高尔夫', '温泉养生', '休闲娱乐']
          },
          {
            name: '骑楼老街',
            description: '海口最具特色的历史文化街区',
            coordinates: [110.3485, 20.0444],
            highlights: ['骑楼建筑', '历史文化', '特色美食']
          },
          {
            name: '火山口地质公园',
            description: '中国首个火山主题公园',
            coordinates: [110.1797, 19.9944],
            highlights: ['火山地貌', '地质奇观', '科普教育']
          },
          {
            name: '假日海滩',
            description: '海口最受欢迎的城市海滩',
            coordinates: [110.3196, 20.0397],
            highlights: ['沙滩浴场', '海滨休闲', '日落美景']
          }
        ]
      },
      {
        name: '分界洲岛',
        description: '热带海岛风情与海洋文化体验的完美结合',
        coordinates: [109.9584, 18.5690],
        type: 'major',
        subPoints: [
          {
            name: '海洋文化馆',
            description: '了解海洋文化的互动体验馆',
            coordinates: [109.9584, 18.5690],
            highlights: ['海洋科普', '互动体验', '文化展示']
          },
          {
            name: '海豚表演场',
            description: '观赏海豚表演的最佳场所',
            coordinates: [109.9584, 18.5690],
            highlights: ['海豚表演', '互动体验', '海洋科普']
          },
          {
            name: '海底世界',
            description: '探索神秘的海底世界',
            coordinates: [109.9584, 18.5690],
            highlights: ['海底观光', '珊瑚观赏', '海洋生物']
          },
          {
            name: '情人桥',
            description: '欣赏海天一色的观景平台',
            coordinates: [109.9584, 18.5690],
            highlights: ['观景平台', '日落美景', '摄影胜地']
          }
        ]
      }
    ]
  },
  {
    id: '32',
    name: '新疆天山丝路文化之旅',
    description: '探索丝绸之路文明，感受天山雪景与民族风情',
    theme: '丝路古韵 • 天山风光',
    duration: '8-10天',
    difficulty: '中等',
    recommendations: {
      bestTime: '6-9月天气最适宜，可以观赏草原和雪山',
      tips: [
        '准备防晒和保暖衣物',
        '品尝新疆特色美食',
        '尊重当地民族习俗',
        '建议参加当地旅行团',
        '景点间距离较远',
        '高原地区注意防晒'
      ],
      transportation: [
        '从乌鲁木齐机场入境',
        '城市间需要长途车或包车',
        '景区内可以乘坐区间车',
        '部分景点需要越野车'
      ]
    },
    waypoints: [
      {
        name: '乌鲁木齐',
        description: '新疆维吾尔自治区首府，丝路重镇',
        coordinates: [87.6168, 43.8256],
        type: 'major',
        subPoints: [
          {
            name: '天山天池',
            description: '天山山脉中的高山湖泊',
            coordinates: [88.1674, 43.8744],
            highlights: ['高山湖泊', '雪山风光', '自然景观']
          },
          {
            name: '新疆国际大巴扎',
            description: '最大的伊斯兰建筑群和商贸市场',
            coordinates: [87.6168, 43.8256],
            highlights: ['民族建筑', '特色美食', '民俗购物']
          },
          {
            name: '红山公园',
            description: '乌鲁木齐市的标志性景点',
            coordinates: [87.6168, 43.8256],
            highlights: ['城市地标', '文化遗迹', '观景平台']
          },
          {
            name: '新疆博物馆',
            description: '了解新疆历史文化的窗口',
            coordinates: [87.6168, 43.8256],
            highlights: ['文物展览', '丝路文化', '古代遗迹']
          }
        ]
      },
      {
        name: '吐鲁番',
        description: '丝绸之路重要驿站，葡萄之乡',
        coordinates: [89.1841, 42.9476],
        type: 'major',
        subPoints: [
          {
            name: '坎儿井',
            description: '世界文化遗产，古代水利工程',
            coordinates: [89.1841, 42.9476],
            highlights: ['水利工程', '文化遗产', '历史遗迹']
          },
          {
            name: '火焰山',
            description: '世界著名的丹霞地貌',
            coordinates: [89.0419, 42.9513],
            highlights: ['丹霞地貌', '自然奇观', '文学典故']
          },
          {
            name: '葡萄沟',
            description: '享誉世界的葡萄产地',
            coordinates: [89.1841, 42.9476],
            highlights: ['葡萄园', '民俗体验', '特色美食']
          },
          {
            name: '交河故城',
            description: '世界上最大最古老的生土建筑城市',
            coordinates: [89.1841, 42.9476],
            highlights: ['古城遗址', '历史文化', '考古发现']
          }
        ]
      },
      {
        name: '喀什',
        description: '丝绸之路重镇，维吾尔文化中心',
        coordinates: [75.9892, 39.4677],
        type: 'major',
        subPoints: [
          {
            name: '艾提尕尔清真寺',
            description: '中国最大的清真寺之一',
            coordinates: [75.9892, 39.4677],
            highlights: ['宗教建筑', '伊斯兰文化', '建筑艺术']
          },
          {
            name: '喀什老城',
            description: '最大的维吾尔民居建筑群',
            coordinates: [75.9892, 39.4677],
            highlights: ['民居建筑', '民族文化', '历史街区']
          },
          {
            name: '香妃墓',
            description: '新疆最著名的伊斯兰教建筑',
            coordinates: [75.9892, 39.4677],
            highlights: ['历史遗迹', '建筑艺术', '文化传说']
          },
          {
            name: '喀什大巴扎',
            description: '最具特色的维吾尔集市',
            coordinates: [75.9892, 39.4677],
            highlights: ['民族市场', '特色商品', '民俗体验']
          }
        ]
      }
    ]
  },
  {
    id: '33',
    name: '广西桂林山水文化之旅',
    description: '探索桂林山水甲天下的自然奇观与少数民族文化',
    theme: '山水画廊 • 民族风情',
    duration: '5-7天',
    difficulty: '简单',
    recommendations: {
      bestTime: '4-10月天气最适宜，建议避开雨季',
      tips: [
        '准备防晒和雨具',
        '可以体验漓江竹筏',
        '品尝桂林米粉特色',
        '建议参加漓江游船',
        '可以体验少数民族表演',
        '注意保护生态环境'
      ],
      transportation: [
        '从桂林两江机场入境',
        '市区可以乘坐公交',
        '景区间有旅游专线',
        '漓江游览需要乘船'
      ]
    },
    waypoints: [
      {
        name: '桂林市区',
        description: '山水甲天下，喀斯特地貌的代表城市',
        coordinates: [110.2912, 25.2742],
        type: 'major',
        subPoints: [
          {
            name: '象鼻山',
            description: '桂林市的标志性景观',
            coordinates: [110.2937, 25.2616],
            highlights: ['地标景观', '喀斯特地貌', '历史文化']
          },
          {
            name: '七星公园',
            description: '桂林最大的综合性公园',
            coordinates: [110.3187, 25.2859],
            highlights: ['山水景观', '园林艺术', '文化遗迹']
          },
          {
            name: '两江四湖',
            description: '桂林市区水系精华景观',
            coordinates: [110.2912, 25.2742],
            highlights: ['夜景游船', '山水倒影', '城市风光']
          },
          {
            name: '叠彩山',
            description: '俯瞰桂林全景的最佳位置',
            coordinates: [110.3012, 25.3042],
            highlights: ['观景平台', '山水全景', '摄影胜地']
          }
        ]
      },
      {
        name: '阳朔',
        description: '漓江精华段，田园山水的完美融合',
        coordinates: [110.4967, 24.7783],
        type: 'major',
        subPoints: [
          {
            name: '二十元背景',
            description: '二十元人民币背面的漓江山水',
            coordinates: [110.4967, 24.7783],
            highlights: ['漓江风光', '经典景观', '摄影胜地']
          },
          {
            name: '遇龙河',
            description: '漓江支流，田园风光的精华所在',
            coordinates: [110.4567, 24.7783],
            highlights: ['竹筏漂流', '山水风光', '乡村风情']
          },
          {
            name: '西街',
            description: '阳朔最古老的街道，洋人街',
            coordinates: [110.4967, 24.7783],
            highlights: ['特色美食', '休闲购物', '异国风情']
          },
          {
            name: '月亮山',
            description: '著名的天然岩洞景观',
            coordinates: [110.4767, 24.7783],
            highlights: ['自然奇观', '攀岩胜地', '观景平台']
          }
        ]
      },
      {
        name: '龙胜',
        description: '世界文化遗产，壮族梯田的杰作',
        coordinates: [110.0112, 25.7983],
        type: 'major',
        subPoints: [
          {
            name: '龙脊梯田',
            description: '世界文化遗产，壮族农耕文明的见证',
            coordinates: [110.0112, 25.7983],
            highlights: ['梯田景观', '民族文化', '日出日落']
          },
          {
            name: '平安寨',
            description: '观赏龙脊梯田的最佳观景台',
            coordinates: [110.0112, 25.7983],
            highlights: ['观景平台', '民族村寨', '摄影胜地']
          },
          {
            name: '古壮寨',
            description: '体验原生态的壮族文化',
            coordinates: [110.0112, 25.7983],
            highlights: ['民族文化', '传统建筑', '民俗体验']
          },
          {
            name: '金坑梯田',
            description: '最具规模的梯田群',
            coordinates: [110.0112, 25.7983],
            highlights: ['梯田景观', '农耕文化', '乡村风光']
          }
        ]
      }
    ]
  },
  {
    id: '34',
    name: '福建土楼客家文化之旅',
    description: '探索世界文化遗产福建土楼，体验客家文化',
    theme: '客家古韵 • 土楼文化',
    duration: '4-5天',
    difficulty: '简单',
    recommendations: {
      bestTime: '3-5月或9-11月气候最宜，避开梅雨季节',
      tips: [
        '准备防晒和雨具',
        '品尝客家特色美食',
        '尊重当地居民生活',
        '建议请当地导游',
        '可以体验客家茶道',
        '适合摄影创作'
      ],
      transportation: [
        '从厦门机场或福州机场入境',
        '景区间需要包车或拼车',
        '部分景点需要徒步',
        '建议请司机或参团'
      ]
    },
    waypoints: [
      {
        name: '永定',
        description: '世界文化遗产，土楼建筑群的精华所在',
        coordinates: [116.7320, 24.7237],
        type: 'major',
        subPoints: [
          {
            name: '承启楼',
            description: '最具代表性的方形土楼',
            coordinates: [116.7320, 24.7237],
            highlights: ['方形土楼', '客家建筑', '历史文化']
          },
          {
            name: '振成楼',
            description: '最大的圆形土楼之一',
            coordinates: [116.7320, 24.7237],
            highlights: ['圆形土楼', '建筑艺术', '民居文化']
          },
          {
            name: '福裕楼',
            description: '保存完好的传统土楼',
            coordinates: [116.7320, 24.7237],
            highlights: ['传统建筑', '民俗文化', '客家生活']
          },
          {
            name: '永定土楼民俗文化村',
            description: '体验客家文化的最佳去处',
            coordinates: [116.7320, 24.7237],
            highlights: ['民俗展示', '文化体验', '特色美食']
          }
        ]
      },
      {
        name: '南靖',
        description: '田螺坑土楼群，最具观赏价值的土楼群',
        coordinates: [117.5157, 24.7147],
        type: 'major',
        subPoints: [
          {
            name: '田螺坑土楼群',
            description: '最上镜的土楼群，摄影家最爱',
            coordinates: [117.5157, 24.7147],
            highlights: ['群楼景观', '摄影胜地', '文化遗产']
          },
          {
            name: '裕昌楼',
            description: '最具观赏价值的圆形土楼',
            coordinates: [117.5157, 24.7147],
            highlights: ['圆形土楼', '建筑特色', '历史文化']
          },
          {
            name: '和贵楼',
            description: '保存完好的四角楼',
            coordinates: [117.5157, 24.7147],
            highlights: ['四角楼', '建筑艺术', '民居文化']
          },
          {
            name: '怀远楼',
            description: '独特的椭圆形土楼',
            coordinates: [117.5157, 24.7147],
            highlights: ['椭圆土楼', '建筑奇观', '文化遗产']
          }
        ]
      },
      {
        name: '华安',
        description: '土楼与茶文化的完美结合',
        coordinates: [117.5342, 25.0045],
        type: 'major',
        subPoints: [
          {
            name: '大地土楼群',
            description: '保存完好的土楼建筑群',
            coordinates: [117.5342, 25.0045],
            highlights: ['建筑群落', '民居文化', '自然环境']
          },
          {
            name: '二宜楼',
            description: '独特的"子母楼"建筑',
            coordinates: [117.5342, 25.0045],
            highlights: ['子母楼', '建筑艺术', '人文历史']
          },
          {
            name: '华安土楼文化园',
            description: '了解土楼文化的综合园区',
            coordinates: [117.5342, 25.0045],
            highlights: ['文化展示', '互动体验', '教育基地']
          },
          {
            name: '茶人古镇',
            description: '体验客家茶文化',
            coordinates: [117.5342, 25.0045],
            highlights: ['茶文化', '古镇风情', '民俗体验']
          }
        ]
      }
    ]
  },
  {
    id: '35',
    name: '东北雪乡冰雪之旅',
    description: '体验东北冰雪世界的童话般景色',
    theme: '冰雪奇缘 • 北国风光',
    duration: '6-7天',
    difficulty: '中等',
    recommendations: {
      bestTime: '12月至次年2月是最佳观赏期',
      tips: [
        '准备保暖防寒装备',
        '注意防滑防冻',
        '体验东北特色美食',
        '建议参加当地旅行团',
        '适合摄影创作',
        '体验冰雪项目'
      ],
      transportation: [
        '从哈尔滨机场入境',
        '景区间需要包车',
        '部分景点需要雪地车',
        '建议请专业司机'
      ]
    },
    waypoints: [
      {
        name: '哈尔滨',
        description: '冰雪之都，东方莫斯科',
        coordinates: [126.6342, 45.7562],
        type: 'major',
        subPoints: [
          {
            name: '冰雪大世界',
            description: '世界最大的冰雪主题乐园',
            coordinates: [126.6342, 45.7562],
            highlights: ['冰雕艺术', '夜景灯光', '冰上活动']
          },
          {
            name: '中央大街',
            description: '欧式建筑群，历史文化街区',
            coordinates: [126.6342, 45.7562],
            highlights: ['欧式建筑', '历史文化', '特色美食']
          },
          {
            name: '索菲亚教堂',
            description: '远东地区最大的东正教堂',
            coordinates: [126.6342, 45.7562],
            highlights: ['俄式建筑', '宗教文化', '城市地标']
          },
          {
            name: '太阳岛雪博会',
            description: '国际雪雕艺术展示区',
            coordinates: [126.6342, 45.7562],
            highlights: ['雪雕艺术', '冬季活动', '自然风光']
          }
        ]
      },
      {
        name: '雪乡',
        description: '中国最美雪乡，童话世界',
        coordinates: [127.5056, 44.5137],
        type: 'major',
        subPoints: [
          {
            name: '梦幻家园',
            description: '雪乡最具代表性的观景台',
            coordinates: [127.5056, 44.5137],
            highlights: ['雪景观赏', '摄影胜地', '民俗体验']
          },
          {
            name: '大雪谷',
            description: '原始森林中的雪景长廊',
            coordinates: [127.5056, 44.5137],
            highlights: ['雪谷风光', '森林景观', '户外探险']
          },
          {
            name: '双峰林场',
            description: '观赏雾凇的最佳地点',
            coordinates: [127.5056, 44.5137],
            highlights: ['雾凇奇观', '自然风光', '冬季美景']
          },
          {
            name: '雪乡民俗村',
            description: '体验东北民俗文化',
            coordinates: [127.5056, 44.5137],
            highlights: ['民俗体验', '特色美食', '传统文化']
          }
        ]
      },
      {
        name: '亚布力',
        description: '中国最大的滑雪胜地',
        coordinates: [128.4467, 44.9582],
        type: 'major',
        subPoints: [
          {
            name: '亚布力滑雪场',
            description: '亚洲最大的滑雪场之一',
            coordinates: [128.4467, 44.9582],
            highlights: ['滑雪运动', '专业赛道', '冰雪娱乐']
          },
          {
            name: '松花湖',
            description: '冬季冰上运动基地',
            coordinates: [128.4467, 44.9582],
            highlights: ['冰上活动', '自然风光', '休闲娱乐']
          },
          {
            name: '阳光度假村',
            description: '综合性滑雪度假区',
            coordinates: [128.4467, 44.9582],
            highlights: ['滑雪教学', '度假设施', '休闲体验']
          },
          {
            name: '观云台',
            description: '俯瞰滑雪场全景',
            coordinates: [128.4467, 44.9582],
            highlights: ['观景平台', '摄影胜地', '雪山风光']
          }
        ]
      }
    ]
  },
]

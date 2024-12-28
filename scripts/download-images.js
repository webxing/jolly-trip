const fs = require('fs');
const https = require('https');
const path = require('path');

const destinations = [
  // {
  //   name: 'mogao-caves',
  //   url: 'https://b0.bdstatic.com/07faa9bb9ddf664249dc3797ef4024f3.jpg?for=bg' // 莫高窟第45窟
  // },
  // {
  //   name: 'yading',
  //   url: 'https://q0.itc.cn/images01/20240711/d81867365fd2443dacb8207a3a2edf21.jpeg' // 稻城亚丁三座神山
  // },
  // {
  //   name: 'lijiang',
  //   url: 'https://img0.baidu.com/it/u=2425080808,3509140444&fm=253&fmt=auto&app=138&f=JPEG?w=1042&h=500' // 丽江古城夜景
  // },
  // {
  //   name: 'xishuangbanna',
  //   url: 'https://img.pconline.com.cn/images/photoblog/8/6/3/3/8633293/20098/15/1250317814924.jpg' // 西双版纳傣族园
  // },
  // {
  //   name: 'zhangjiajie',
  //   url: 'https://img0.baidu.com/it/u=718324206,753821223&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=600' // 天门山玻璃栈道
  // },
  // {
  //   name: 'jiuzhaigou',
  //   url: 'https://dimg04.c-ctrip.com/images/fd/vacations/g2/M04/32/FC/Cghzf1Va4guAOb41AAUjdxctIsg796.jpg' // 九寨沟五彩池
  // },
  // {
  //   name: 'huangshan',
  //   url: 'https://youimg1.c-ctrip.com/target/100j0g0000007trn02846_D_800_600.jpg' // 黄山日出云海
  // },
  // {
  //   name: 'guilin',
  //   url: 'https://q1.itc.cn/q_70/images01/20240705/3a7a1936e8404153874212bf5b663824.jpeg' // 桂林
  // },
  // {
  //   name: 'xian',
  //   url: 'https://pic.rmb.bdstatic.com/bjh/3f195ad4d26/240531/67bc1d05265be70b8ad48828301198da.jpeg' // 兵马俑一号坑
  // },
  // {
  //   name: 'sanya',
  //   url: 'https://img1.baidu.com/it/u=148354449,3883521264&fm=253&fmt=auto&app=138&f=JPEG?w=861&h=500' // 三亚湾全景
  // },
  // {
  //   name: 'beijing',
  //   url: 'https://pic.rmb.bdstatic.com/bjh/240724/dump/b3ba2473ebecd224d4d80dac6b3cdde0.jpeg@h_1280' // 故宫太和殿
  // },
  // {
  //   name: 'shanghai',
  //   url: 'https://inews.gtimg.com/news_bt/ORPigYuVWGYETaR4bX893uaYPwlB6BX1_8MW5H_rTPgD0AA/641' // 外滩夜景
  // },
  // {
  //   name: 'guangzhou',
  //   url: 'https://youimg1.c-ctrip.com/target/100g14000000x0ai8137D_D_800_600.jpg' // 广州塔夜景
  // },
  // {
  //   name: 'chengdu',
  //   url: 'https://img1.baidu.com/it/u=468211945,2192501421&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500' // 成都大熊猫基地
  // },
  // {
  //   name: 'chongqing',
  //   url: 'https://youimg1.c-ctrip.com/target/100e0x000000l3igw7E5F_D_800_600.jpg' // 重庆洪崖洞夜景
  // },
  // {
  //   name: 'paris',
  //   url: 'https://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-15/h8i9j0k1-2l3m-4n5o-6p7q-8r9s0t1u2v3w.jpg' // 巴黎埃菲尔铁塔
  // },
  // {
  //   name: 'tokyo',
  //   url: 'https://img1.baidu.com/it/u=187078944,2352148677&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500' // 东京浅草寺
  // },
  // {
  //   name: 'newyork',
  //   url: 'https://t7.baidu.com/it/u=2667251578,1472084193&fm=193' // 纽约自由女神像
  // },
  // {
  //   name: 'sydney',
  //   url: 'https://pic.rmb.bdstatic.com/bjh/240312/events/a08d2947dceef9f2bb20ba6ddda0b63d2363.jpeg@h_1280' // 悉尼歌剧院
  // },
  // {
  //   name: 'dubai',
  //   url: 'https://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-15/l2m3n4o5-6p7q-8r9s-0t1u-2v3w4x5y6z7a.jpg' // 迪拜哈利法塔
  // }
  // {
  //   name: 'hangzhou',
  //   url: 'https://img2.baidu.com/it/u=1381022860,1861081782&fm=253&fmt=auto?w=608&h=450' // 
  // },
  // {
  //   name: 'qingdao',
  //   url: 'https://img2.baidu.com/it/u=903445338,1046361606&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=589' // 
  // },
  // {
  //   name: 'xiamen',
  //   url: 'https://copyright.bdstatic.com/vcg/creative/c7c0efc35a360c56be9ae1fb962f663c.jpg@h_1280' // 
  // },
  // {
  //   name: 'dali',
  //   url: 'https://q8.itc.cn/images01/20240408/75f52e8441254941a499b9ccbfd6b5ce.jpeg' // 
  // },
  // {
  //   name: 'kunming',
  //   url: 'https://www.km.gov.cn/upload/resources/image/2024/03/25/3952484.jpg' // 
  // },
  // {
  //   name: 'guiyang',
  //   url: 'https://img1.baidu.com/it/u=4085374227,364506119&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=353' // 
  // },
  // {
  //   name: 'rome',
  //   url: 'https://q2.itc.cn/images01/20240604/4066ae3c4da445ff891ef8b373d5d744.jpeg' // 
  // },
  // {
  //   name: 'london',
  //   url: 'https://img2.baidu.com/it/u=3683840236,2249814025&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800' // 
  // },
  // {
  //   name: 'singapore',
  //   url: 'https://img.51miz.com/Photo/2017/05/24/13/P727617_648a80ec5d7d18039af463b905409611.jpg'
  // },
  {
    name: 'macau',
    url: 'https://n.sinaimg.cn/sinakd20220414s/600/w800h600/20220414/4e10-fa56e4342f2d1617963f0c4c75ddde92.png'
  },
  
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': 'https://www.lvmama.com'
      }
    };

    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

async function downloadAll() {
  const imagesDir = path.join(__dirname, '../public/images');
  
  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const dest of destinations) {
    const filename = path.join(imagesDir, `${dest.name}.jpg`);
    try {
      await downloadImage(dest.url, filename);
      // Add a small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`Error downloading ${dest.name}:`, error.message);
    }
  }
}

downloadAll().then(() => {
  console.log('All downloads completed');
}).catch(console.error);

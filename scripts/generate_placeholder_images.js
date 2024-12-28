const fs = require('fs');
const { createCanvas } = require('canvas');

// 创建目录
const dirs = ['public/avatars', 'public/locations'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 生成头像
const avatarTypes = [
  { name: 'avatar1', color: '#FF6B6B', text: '探险' },
  { name: 'avatar2', color: '#4ECDC4', text: '摄影' },
  { name: 'avatar3', color: '#FFD93D', text: '美食' },
  { name: 'avatar4', color: '#6C5CE7', text: '文化' },
  { name: 'avatar5', color: '#A8E6CF', text: '收藏' },
  { name: 'avatar6', color: '#FF8B94', text: '背包' }
];

avatarTypes.forEach(({ name, color, text }) => {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // 背景
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 200, 200);

  // 文字
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 100, 100);

  // 保存
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/avatars/${name}.png`, buffer);
});

// 生成地点图片
const locations = [
  { name: 'tokyo', color: '#2C3E50', text: '东京' },
  { name: 'paris', color: '#E74C3C', text: '巴黎' },
  { name: 'newyork', color: '#3498DB', text: '纽约' }
];

locations.forEach(({ name, color, text }) => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');

  // 背景
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 800, 600);

  // 文字
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 80px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 400, 300);

  // 保存
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/locations/${name}.jpg`, buffer);
});

console.log('所有图片生成完成！');

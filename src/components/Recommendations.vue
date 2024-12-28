<template>
  <section v-if="hasPreferences" class="recommendations">
    <div class="section-header">
      <h2>为您推荐</h2>
      <el-button type="primary" text @click="$emit('refresh')">
        <el-icon><Refresh /></el-icon> 换一批
      </el-button>
    </div>
    
    <el-row :gutter="20">
      <el-col v-for="dest in recommendedDestinations" 
              :key="dest.id" 
              :xs="24" :sm="12" :md="8">
        <el-card class="destination-card" @click="$emit('select-destination', dest)">
          <el-image :src="dest.image" fit="cover">
            <template #error>
              <div class="image-slot">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
          <div class="destination-info">
            <h3>{{ dest.name }}</h3>
            <p>{{ dest.description }}</p>
            <div class="tags">
              <el-tag v-for="tag in dest.tags" 
                      :key="tag" 
                      size="small"
                      effect="light">
                {{ tag }}
              </el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Picture, Refresh } from '@element-plus/icons-vue'

const props = defineProps({
  userPreferences: {
    type: Object,
    default: () => null
  }
})

defineEmits(['refresh', 'select-destination'])

// 目的地数据
const destinations = [
  {
    id: 1,
    name: '故宫博物院',
    description: '中国明清两代的皇家宫殿',
    image: '/images/forbidden-city.jpg',
    tags: ['文化遗产', '历史建筑', '博物馆'],
    attributes: {
      style: ['cultural'],
      budget: ['medium'],
      duration: ['half-day', 'full-day'],
      season: ['spring', 'autumn']
    }
  },
  {
    id: 2,
    name: '798艺术区',
    description: '北京当代艺术中心',
    image: '/images/798.jpg',
    tags: ['艺术', '文创', '展览'],
    attributes: {
      style: ['art'],
      budget: ['low', 'medium'],
      duration: ['half-day'],
      season: ['all']
    }
  }
]

const hasPreferences = computed(() => !!props.userPreferences)

const recommendedDestinations = computed(() => {
  if (!props.userPreferences) return []
  
  // 根据用户偏好计算匹配度
  const scoredDestinations = destinations.map(dest => {
    let score = 0
    for (const [key, value] of Object.entries(props.userPreferences)) {
      if (dest.attributes[key]?.includes(value)) {
        score += 1
      }
    }
    return { ...dest, score }
  })

  // 按匹配度排序并返回前3个
  return scoredDestinations
    .filter(dest => dest.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
})
</script>

<style scoped>
.recommendations {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h2 {
  margin: 0;
  font-size: 1.5em;
  color: #2c3e50;
}

.destination-card {
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.destination-card:hover {
  transform: translateY(-5px);
}

.destination-info {
  text-align: center;
  padding: 20px;
}

.destination-info h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.destination-info p {
  color: #666;
  margin-bottom: 15px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.el-image {
  height: 200px;
  width: 100%;
  border-radius: 4px;
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f5f7fa;
}

.image-slot .el-icon {
  font-size: 30px;
  color: #909399;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
}
</style>

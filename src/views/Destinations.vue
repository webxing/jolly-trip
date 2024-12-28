<template>
  <div class="destinations-page">
    <!-- 顶部搜索栏 -->
    <div class="search-section">
      <div class="search-bar">
        <el-input
          v-model="searchQuery"
          placeholder="搜索目的地..."
          clearable
          @input="handleSearch"
          size="large"
          :prefix-icon="Search"
          class="search-input"
        />
        <el-radio-group v-model="selectedLocation" @change="handleFilter" size="large" class="location-filter">
          <el-radio-button :label="null">全部</el-radio-button>
          <el-radio-button :label="false">国内</el-radio-button>
          <el-radio-button :label="true">海外</el-radio-button>
        </el-radio-group>
      </div>
    </div>

    <!-- 目的地列表 -->
    <div class="destinations-grid">
      <el-card
        v-for="dest in filteredDestinations"
        :key="dest.id"
        class="destination-card"
        @click="goToDestination(dest)"
      >
        <div class="card-header">
          <el-image :src="getImageUrl(dest.image)" fit="cover">
            <template #error>
              <div class="image-slot">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
          <el-button
            class="favorite-btn"
            :type="isDestinationFavorite(dest.id) ? 'warning' : 'default'"
            :icon="isDestinationFavorite(dest.id) ? StarFilled : Star"
            circle
            @click.stop="handleFavorite(dest)"
          />
        </div>
        
        <div class="destination-info">
          <div class="title-section">
            <h3>{{ dest.name }}</h3>
            <el-tag size="small">{{ dest.region }}</el-tag>
          </div>
          <p class="description">{{ dest.description }}</p>
        </div>

        <!-- 特色照片轮播 -->
        <div class="featured-photos" v-if="dest.featuredPhotos">
          <el-carousel height="200px" indicator-position="outside" :interval="4000">
            <el-carousel-item v-for="photo in dest.featuredPhotos" :key="photo.url">
              <el-image :src="getImageUrl(photo.url)" fit="cover">
                <template #error>
                  <div class="image-slot">
                    <el-icon><Picture /></el-icon>
                  </div>
                </template>
              </el-image>
              <div class="photo-description">
                <span>{{ photo.description }}</span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Picture, Star, StarFilled } from '@element-plus/icons-vue'
import { destinations } from '@/data/presets'
import { ElMessage } from 'element-plus'
import { useUserData } from '@/composables/useUserData'

const router = useRouter()
const searchQuery = ref('')
const selectedLocation = ref(null)

// 用户数据管理
const { 
  addFavoriteDestination, 
  removeFavoriteDestination, 
  isDestinationFavorite 
} = useUserData()

// 处理收藏操作
const handleFavorite = (destination) => {
  if (isDestinationFavorite(destination.id)) {
    removeFavoriteDestination(destination.id)
    ElMessage.success(`已取消收藏 ${destination.name}`)
  } else {
    addFavoriteDestination(destination)
    ElMessage.success(`已收藏 ${destination.name}`)
  }
}

// 搜索和筛选后的目的地列表
const filteredDestinations = computed(() => {
  return destinations.filter(dest => {
    // 搜索过滤
    const matchesSearch = searchQuery.value === '' || 
      dest.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    // 位置过滤
    const matchesLocation = selectedLocation.value === null || dest.isOverseas === selectedLocation.value

    return matchesSearch && matchesLocation
  })
})

// 处理搜索
const handleSearch = () => {}

// 处理筛选
const handleFilter = () => {}

// 跳转到目的地地图
const goToDestination = (destination) => {
  router.push({
    name: 'destinations-map',
    query: { id: destination.id.toString() }
  })
}

// 新增图片路径处理函数
const getImageUrl = (imagePath) => {
  const fileName = imagePath.split('/').pop()
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}
</script>

<style scoped>
.destinations-page {
  padding: 20px;
  max-width: 1200px;
}

.search-section {
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-input {
  flex: 1;
}

.location-filter {
  white-space: nowrap;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.destination-card {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  position: relative;
}

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  font-size: 18px;
}

.favorite-btn.is-warning {
  --el-button-bg-color: var(--el-color-warning-light-5);
  --el-button-border-color: var(--el-color-warning);
  --el-button-text-color: var(--el-color-warning);
}

.el-image {
  height: 200px;
  width: 100%;
}

.image-slot {
  height: 200px;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909399;
  font-size: 30px;
}

.destination-info {
  padding: 15px;
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.title-section h3 {
  margin: 0;
  font-size: 1.2em;
}

.description {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.featured-photos {
  margin-top: 15px;
}

.photo-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px;
  text-align: center;
}

@media (max-width: 768px) {
  .search-section {
    flex-direction: column;
    gap: 10px;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
  }

  .destination-card {
    margin-bottom: 15px;
  }
}
</style>

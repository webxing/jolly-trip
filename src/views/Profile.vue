<template>
  <div class="profile-container">
    <!-- 用户信息部分 -->
    <el-card class="user-info-card">
      <div class="user-header">
        <el-avatar :size="64" :src="userProfile.avatar">
          <el-icon><User /></el-icon>
        </el-avatar>
        <div class="user-stats">
          <h2>{{ userProfile.name }}</h2>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-value">{{ userProfile.visitedCount }}</span>
              <span class="stat-label">浏览记录</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ userProfile.favoriteDestCount }}</span>
              <span class="stat-label">收藏目的地</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ userProfile.favoriteCount }}</span>
              <span class="stat-label">收藏路线</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 收藏和历史记录 -->
    <el-tabs v-model="activeTab" class="profile-tabs">
      <el-tab-pane label="收藏目的地" name="destinations">
        <div class="destinations-grid">
          <el-card
            v-for="dest in favoriteDestinations"
            :key="dest.id"
            class="destination-card"
            @click="goToDestination(dest)"
          >
            <div class="card-header">
              <el-image :src="dest.image" fit="cover">
                <template #error>
                  <div class="image-slot">
                    <el-icon><Picture /></el-icon>
                  </div>
                </template>
              </el-image>
              <el-button
                class="favorite-btn"
                type="warning"
                :icon="StarFilled"
                circle
                @click.stop="handleUnfavoriteDestination(dest)"
              />
            </div>
            <div class="destination-info">
              <div class="title-section">
                <h3>{{ dest.name }}</h3>
                <div class="destination-tags">
                  <template v-for="tag in dest.tags" :key="tag">
                    <el-tag size="small" effect="plain" class="destination-tag">{{ tag }}</el-tag>
                  </template>
                  <el-tag size="small" effect="plain" type="info">{{ dest.region }}</el-tag>
                </div>
              </div>
              <p class="description">{{ dest.description }}</p>
              <!-- 显示该目的地下收藏的路线数量 -->
              <div class="favorite-routes-count" v-if="getDestinationFavoriteCount(dest.id)">
                <el-icon><Location /></el-icon>
                已收藏 {{ getDestinationFavoriteCount(dest.id) }} 条路线
              </div>
            </div>
          </el-card>
        </div>
      </el-tab-pane>

      <el-tab-pane label="收藏路线" name="routes">
        <div class="routes-grid">
          <el-card
            v-for="route in groupedFavorites"
            :key="route.id"
            class="route-card"
            @click="goToRoute(route)"
          >
            <div class="route-header">
              <div class="route-title">
                <h3>{{ route.name }}</h3>
                <div class="route-tags">
                  <template v-if="route.tags?.length">
                    <el-tag
                      v-for="tag in route.tags"
                      :key="tag"
                      size="small"
                      effect="plain"
                      class="route-tag"
                    >
                      {{ tag }}
                    </el-tag>
                  </template>
                  <el-tag size="small" effect="plain" type="info">{{ route.theme }}</el-tag>
                  <el-tag size="small" type="warning" effect="plain">{{ route.difficulty }}</el-tag>
                  <el-tag size="small" type="success" effect="plain">{{ route.duration }}</el-tag>
                </div>
              </div>
              <el-button
                class="favorite-btn"
                type="warning"
                :icon="StarFilled"
                circle
                @click.stop="handleUnfavoriteRoute(route)"
              />
            </div>
            <p class="route-description">{{ route.description }}</p>
            <!-- 显示路线的关键点 -->
            <div class="route-waypoints" v-if="route.waypoints?.length">
              <div class="waypoint-list">
                <div v-for="(point, index) in route.waypoints" :key="index" class="waypoint-item">
                  <span class="waypoint-number">{{ index + 1 }}</span>
                  <span class="waypoint-name">{{ point.name }}</span>
                </div>
              </div>
            </div>
            <!-- 显示所属目的地 -->
            <div class="destination-link" v-if="getDestinationName(route.destinationId)">
              <el-icon><Location /></el-icon>
              {{ getDestinationName(route.destinationId) }}
            </div>
          </el-card>
        </div>
      </el-tab-pane>

      <el-tab-pane label="浏览历史" name="history">
        <div class="history-list">
          <el-timeline>
            <el-timeline-item
              v-for="item in groupedHistory"
              :key="item.id"
              :timestamp="formatDate(item.date)"
              placement="top"
            >
              <el-card class="history-card" @click="goToRoute(item)">
                <h4>{{ item.name }}</h4>
                <p>{{ item.description }}</p>
                <!-- 显示所属目的地 -->
                <div class="destination-link" v-if="getDestinationName(item.destinationId)">
                  <el-icon><Location /></el-icon>
                  {{ getDestinationName(item.destinationId) }}
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { User, Picture, Star, StarFilled, Location } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useUserData } from '@/composables/useUserData'
import { destinations } from '@/data/presets'

const router = useRouter()
const activeTab = ref('destinations')

// 用户数据管理
const { 
  userProfile,
  favorites,
  visitHistory,
  favoriteDestinations,
  removeFavorite,
  removeFavoriteDestination,
  getDestinationFavorites
} = useUserData()

// 按目的地分组的收藏路线
const groupedFavorites = computed(() => {
  return [...favorites.value].sort((a, b) => {
    // 首先按目的地名称排序
    const destNameA = getDestinationName(a.destinationId) || ''
    const destNameB = getDestinationName(b.destinationId) || ''
    const destCompare = destNameA.localeCompare(destNameB)
    
    // 如果目的地相同，则按添加时间倒序
    if (destCompare === 0) {
      return new Date(b.addedAt) - new Date(a.addedAt)
    }
    return destCompare
  })
})

// 按时间分组的历史记录
const groupedHistory = computed(() => {
  return [...visitHistory.value].sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
})

// 获取目的地下的收藏路线数量
const getDestinationFavoriteCount = (destinationId) => {
  return favorites.value.filter(route => route.destinationId === destinationId).length
}

// 获取目的地名称
const getDestinationName = (destinationId) => {
  if (!destinationId) return null
  const destination = destinations.find(d => d.id === destinationId)
  return destination?.name
}

// 取消收藏目的地
const handleUnfavoriteDestination = (destination) => {
  removeFavoriteDestination(destination.id)
  ElMessage.success('已取消收藏目的地')
}

// 取消收藏路线
const handleUnfavoriteRoute = (route) => {
  removeFavorite(route.id)
  ElMessage.success('已取消收藏路线')
}

// 跳转到目的地详情
const goToDestination = (destination) => {
  router.push({
    name: 'destinations-map',
    query: { id: destination.id.toString() }
  })
}

// 跳转到路线详情
const goToRoute = (route) => {
  if (route.destinationId) {
    router.push({
      name: 'destinations-map',
      query: { 
        id: route.destinationId.toString(),
        routeId: route.id.toString()
      }
    })
  } else {
    router.push({
      name: 'routes-map',
      query: { id: route.id.toString() }
    })
  }
}

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
}

.user-info-card {
  margin-bottom: 24px;
}

.user-header {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.user-stats {
  flex: 1;
}

.user-stats h2 {
  margin: 0 0 16px 0;
  font-size: 1.5rem;
  color: var(--el-text-color-primary);
}

.stats-grid {
  display: flex;
  gap: 32px;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--el-color-primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--el-text-color-secondary);
}

.profile-tabs {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.destinations-grid,
.routes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.destination-card {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header {
  position: relative;
}

.card-header .el-image {
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.destination-info {
  padding: 16px;
}

.destination-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.favorite-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.destination-card:hover .favorite-btn,
.route-card:hover .favorite-btn {
  opacity: 1;
}

.destination-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}

.title-section {
  margin-bottom: 12px;
}

.title-section h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: var(--el-text-color-primary);
}

.description {
  margin: 12px 0;
  font-size: 0.9rem;
  color: var(--el-text-color-regular);
  line-height: 1.5;
}

.route-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.history-list {
  padding: 16px;
}

.history-card {
  cursor: pointer;
  transition: all 0.3s;
}

.history-card:hover {
  background: var(--el-fill-color-light);
}

.history-card h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: var(--el-text-color-primary);
}

.history-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--el-text-color-regular);
  line-height: 1.5;
}

.favorite-routes-count {
  margin-top: 12px;
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.destination-link {
  margin-top: 12px;
  color: var(--el-color-primary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.destination-link:hover {
  color: var(--el-color-primary-light-3);
}

.image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 24px;
}

.route-waypoints {
  margin: 12px 0;
  padding: 8px;
  background: var(--el-fill-color-light);
  border-radius: 4px;
}

.waypoint-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.waypoint-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--el-text-color-regular);
}

.waypoint-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background: var(--el-color-primary-light-8);
  color: var(--el-color-primary);
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 600;
}

.waypoint-name {
  flex: 1;
}

.route-description {
  margin: 12px 0;
  font-size: 0.9rem;
  color: var(--el-text-color-regular);
  line-height: 1.5;
}

.route-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.route-title {
  flex: 1;
}

.route-title h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: var(--el-text-color-primary);
}

.route-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.route-card {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 16px;
}

.route-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .user-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .stats-grid {
    justify-content: center;
  }

  .destinations-grid,
  .routes-grid {
    grid-template-columns: 1fr;
  }
}
</style>

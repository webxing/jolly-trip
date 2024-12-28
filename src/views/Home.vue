<template>
  <div class="home">
    <div class="background-animation"></div>
    
    <div class="content">
      <div class="welcome animate__animated animate__fadeIn">
        <h1 class="title">Jolly Trip</h1>
        <p class="subtitle">探索世界，规划完美旅程</p>
      </div>
        
      <div class="features-container" v-loading="loading.features">
        <div class="features">
          <div class="feature animate__animated animate__fadeInLeft" 
               v-for="(feature, index) in features" 
               :key="feature.id" 
               :style="{ animationDelay: `${index * 0.2}s` }">
            <el-icon><component :is="feature.icon" /></el-icon>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <section class="recommended-routes">
        <div class="section-header">
          <h2>推荐路线</h2>
          <div class="header-actions">
            <el-button type="primary" plain @click="goToRoutes">查看全部</el-button>
            <el-button type="primary" class="header-button" @click="refreshRoutes" :loading="loading.routes">
              <el-icon><Refresh /></el-icon>换一批
            </el-button>
          </div>
        </div>
        <div class="routes-grid">
          <el-card class="route-card" 
               @click="handleRouteClick(route)"
               v-for="route in routes" 
               :key="route.id"
               :body-style="{ padding: '16px' }">
            <div class="route-header">
              <div class="route-title">
                <h3>{{ route.name }}</h3>
                <div class="route-tags">
                  <el-tag size="small" effect="plain">{{ route.theme }}</el-tag>
                  <el-tag size="small" type="warning" effect="plain">{{ route.difficulty }}</el-tag>
                  <el-tag size="small" type="success" effect="plain">{{ route.duration }}</el-tag>
                </div>
              </div>
              <el-button
                class="favorite-button"
                :type="isFavorite(route.id) ? 'warning' : 'default'"
                :icon="isFavorite(route.id) ? StarFilled : Star"
                circle
                @click.stop="handleFavorite(route)"
              />
            </div>
            
            <p class="route-description">{{ route.description }}</p>
            
            <!-- 路线点展示 -->
            <div class="timeline-wrapper" :style="{ 'scroll-behavior': hasScrolled.value ? 'auto' : 'smooth' }">
              <div class="timeline-container">
                <div class="timeline-track">
                  <div v-for="(waypoint, index) in route.waypoints" 
                       :key="index"
                       class="timeline-point">
                    <div class="point-content">
                      <div class="point-marker">
                        <el-icon><Location /></el-icon>
                        <span class="point-index">{{ index + 1 }}</span>
                      </div>
                      <div class="point-info">
                        <div class="point-header">
                          <span class="point-name">{{ waypoint.name }}</span>
                          <el-tag size="small" :type="waypoint.type === 'major' ? 'success' : ''" effect="plain">
                            {{ waypoint.type === 'major' ? '主要景点' : '次要景点' }}
                          </el-tag>
                        </div>
                        <p class="point-desc">{{ waypoint.description }}</p>
                        <div v-if="waypoint.subPoints && waypoint.subPoints.length" class="point-highlights">
                          <div v-for="(subPoint, sIndex) in waypoint.subPoints.slice(0, 2)" 
                               :key="sIndex"
                               class="highlight-item">
                            <span class="highlight-name">· {{ subPoint.name }}</span>
                            <div class="highlight-tags">
                              <el-tag 
                                v-for="(tag, tIndex) in subPoint.highlights.slice(0, 2)" 
                                :key="tIndex"
                                size="small"
                                effect="light"
                                class="highlight-tag">
                                {{ tag }}
                              </el-tag>
                            </div>
                          </div>
                          <div v-if="waypoint.subPoints.length > 2" class="more-highlights">
                            +{{ waypoint.subPoints.length - 2 }}个特色景点
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="index < route.waypoints.length - 1" class="timeline-connector">
                      <el-icon><ArrowRight /></el-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </section>

      <section class="popular-destinations">
        <div class="section-header">
          <h2>热门目的地</h2>
          <div class="header-actions">
            <el-button type="primary" plain @click="goToDestinations">查看全部</el-button>
            <el-button type="primary" @click="refreshDestinations" :loading="loading.destinations">
              <el-icon><Refresh /></el-icon>换一批
            </el-button>
          </div>
        </div>
        <div class="destinations-grid">
          <div v-for="dest in destinations" 
               :key="dest.id" 
               class="destination-card"
               @click="handleDestinationClick(dest)">
            <el-image :src="getImageUrl(dest.image)" fit="cover">
              <template #error>
                <div class="image-slot">
                  <el-icon><Picture /></el-icon>
                </div>
              </template>
            </el-image>
            <div class="destination-info">
              <h3>{{ dest.name }}</h3>
              <p>{{ dest.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- <div class="action-buttons">
        <el-button type="primary" size="large" class="action-button" @click="goToMap">
          <el-icon><Location /></el-icon>探索地图
        </el-button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { 
  House, 
  MapLocation, 
  Search, 
  User, 
  Star,
  Compass,
  Guide,
  Collection,
  Picture, 
  StarFilled, 
  Refresh, 
  Timer, 
  Histogram, 
  ArrowRight, 
  Location, 
  More 
} from '@element-plus/icons-vue'
import * as presets from '@/data/presets'
import { recommendedRoutes } from '@/data/recommendedRoutes'
import { useUserData } from '@/composables/useUserData'

const router = useRouter()
const features = ref([
  {
    id: 1,
    title: '精选路线',
    description: '独家定制主题路线，带你探索世界精彩',
    icon: 'Compass'
  },
  {
    id: 2,
    title: '城市攻略',
    description: '精选目的地指南，发现城市精彩看点',
    icon: 'Guide'
  },
  {
    id: 3,
    title: '我的收藏',
    description: '收藏喜欢的景点和路线，随时查看回顾',
    icon: 'Collection'
  }
])
const routes = ref([])
const destinations = ref([])
const recentRoutes = ref(new Set()) // 记录最近显示过的路线
const recentDestinations = ref(new Set()) // 记录最近显示过的目的地
const recentDestinationsQueue = ref([]) // 记录最近5次显示的所有目的地
const recentRoutesQueue = ref([]) // 记录最近5次显示的所有路线
const loading = ref({
  features: false,
  routes: false,
  destinations: false
})
const hasScrolled = ref(false) // 添加标记是否已经滚动过

// 用户数据管理
const { 
  addFavorite, 
  removeFavorite, 
  isFavorite,
  addToHistory 
} = useUserData()

// 处理收藏操作
const handleFavorite = (route) => {
  if (isFavorite(route.id)) {
    removeFavorite(route.id)
    ElMessage.success('已取消收藏')
  } else {
    addFavorite(route)
    ElMessage.success('已添加到收藏')
  }
}

// 更新最近显示记录队列
const updateRecentQueue = (queue, items) => {
  // 将新的项目添加到队列
  queue.push(new Set(items.map(item => item.id)))
  // 如果队列长度超过5，移除最早的一次记录
  if (queue.length > 5) {
    queue.shift()
  }
  // 更新当前的Set为所有队列中的项目的并集
  return new Set(queue.flatMap(set => Array.from(set)))
}

// 从路线数组中随机选择指定数量的路线
const getRandomRoutes = (count = 2) => {
  // 确保必须返回2个不同的路线
  if (count !== 2) {
    console.warn('路线数量必须为2个')
    count = 2
  }

  let selected = []
  
  // 过滤出未在最近5次显示过的路线
  let availableRoutes = recommendedRoutes.filter(route => !recentRoutes.value.has(route.id))
  
  // 如果未显示的路线数量足够，直接从中选择2个不重复的
  if (availableRoutes.length >= 2) {
    const shuffled = [...new Set(availableRoutes)].sort(() => 0.5 - Math.random())
    selected = shuffled.slice(0, 2)
  } else {
    // 如果已经没有未显示的路线，清空最早的一次记录
    if (availableRoutes.length === 0) {
      if (recentRoutesQueue.value.length > 0) {
        recentRoutesQueue.value.shift() // 移除最早的一次记录
        recentRoutes.value = new Set(recentRoutesQueue.value.flatMap(set => Array.from(set)))
        return getRandomRoutes(2)
      }
    }
    
    // 先添加所有未显示的不重复路线
    selected = [...new Set(availableRoutes)]
    
    // 从所有路线中排除已选择的和最近显示的，确保补充到2个
    const selectedIds = new Set(selected.map(route => route.id))
    let remainingRoutes = recommendedRoutes.filter(route => !selectedIds.has(route.id))
    
    // 如果剩余的路线不够补充到2个，清空部分历史记录
    while (selected.length + remainingRoutes.length < 2 && recentRoutesQueue.value.length > 0) {
      recentRoutesQueue.value.shift() // 移除最早的一次记录
      recentRoutes.value = new Set(recentRoutesQueue.value.flatMap(set => Array.from(set)))
      remainingRoutes = recommendedRoutes.filter(route => 
        !selectedIds.has(route.id) && !recentRoutes.value.has(route.id)
      )
    }
    
    // 如果仍然不够2个，从所有未选择的路线中随机补充
    if (selected.length + remainingRoutes.length < 2) {
      remainingRoutes = recommendedRoutes.filter(route => !selectedIds.has(route.id))
    }
    
    // 随机选择剩余的路线补充到2个
    const shuffled = remainingRoutes.sort(() => 0.5 - Math.random())
    selected = [...selected, ...shuffled.slice(0, 2 - selected.length)]
  }
  
  // 确保一定返回2个不同的路线
  if (selected.length !== 2) {
    console.error('无法获取2个不同的路线，当前只有', selected.length, '个')
    // 从所有路线中随机补充不重复的项目
    const selectedIds = new Set(selected.map(route => route.id))
    const remainingRoutes = recommendedRoutes.filter(route => !selectedIds.has(route.id))
    const shuffled = remainingRoutes.sort(() => 0.5 - Math.random())
    selected = [...selected, ...shuffled.slice(0, 2 - selected.length)]
  }
  
  // 更新最近显示记录
  recentRoutes.value = updateRecentQueue(recentRoutesQueue.value, selected)
  
  // 为每个路线添加收藏状态
  return selected.map(route => ({
    ...route,
    isFavorite: isFavorite(route.id)
  }))
}

// 从所有目的地中随机选取指定数量的目的地
const getRandomDestinations = (count = 6) => {
  // 确保必须返回6个不同的目的地
  if (count !== 6) {
    console.warn('目的地数量必须为6个')
    count = 6
  }

  let selected = []
  
  // 过滤出未在最近5次显示过的目的地
  let availableDestinations = presets.destinations.filter(dest => !recentDestinations.value.has(dest.id))
  
  // 如果未显示的目的地数量足够，直接从中选择6个不重复的
  if (availableDestinations.length >= 6) {
    const shuffled = [...new Set(availableDestinations)].sort(() => 0.5 - Math.random())
    selected = shuffled.slice(0, 6)
  } else {
    // 如果已经没有未显示的目的地，清空最早的一次记录
    if (availableDestinations.length === 0) {
      if (recentDestinationsQueue.value.length > 0) {
        recentDestinationsQueue.value.shift() // 移除最早的一次记录
        recentDestinations.value = new Set(recentDestinationsQueue.value.flatMap(set => Array.from(set)))
        return getRandomDestinations(6)
      }
    }
    
    // 先添加所有未显示的不重复目的地
    selected = [...new Set(availableDestinations)]
    
    // 从所有目的地中排除已选择的和最近显示的，确保补充到6个
    const selectedIds = new Set(selected.map(dest => dest.id))
    let remainingDestinations = presets.destinations.filter(dest => !selectedIds.has(dest.id))
    
    // 如果剩余的目的地不够补充到6个，清空部分历史记录
    while (selected.length + remainingDestinations.length < 6 && recentDestinationsQueue.value.length > 0) {
      recentDestinationsQueue.value.shift() // 移除最早的一次记录
      recentDestinations.value = new Set(recentDestinationsQueue.value.flatMap(set => Array.from(set)))
      remainingDestinations = presets.destinations.filter(dest => 
        !selectedIds.has(dest.id) && !recentDestinations.value.has(dest.id)
      )
    }
    
    // 如果仍然不够6个，从所有未选择的目的地中随机补充
    if (selected.length + remainingDestinations.length < 6) {
      remainingDestinations = presets.destinations.filter(dest => !selectedIds.has(dest.id))
    }
    
    // 随机选择剩余的目的地补充到6个
    const shuffled = remainingDestinations.sort(() => 0.5 - Math.random())
    selected = [...selected, ...shuffled.slice(0, 6 - selected.length)]
  }
  
  // 确保一定返回6个不同的目的地
  if (selected.length !== 6) {
    console.error('无法获取6个不同的目的地，当前只有', selected.length, '个')
    // 从所有目的地中随机补充不重复的项目
    const selectedIds = new Set(selected.map(dest => dest.id))
    const remainingDestinations = presets.destinations.filter(dest => !selectedIds.has(dest.id))
    const shuffled = remainingDestinations.sort(() => 0.5 - Math.random())
    selected = [...selected, ...shuffled.slice(0, 6 - selected.length)]
  }
  
  // 更新最近显示记录
  recentDestinations.value = updateRecentQueue(recentDestinationsQueue.value, selected)
  
  return selected
}

// 处理路线点击
const handleRouteClick = (route) => {
  // 添加到历史记录
  addToHistory(route)
  // 跳转到路线详情页
  router.push({
    name: 'routes-map',
    query: { id: route.id }
  })
}

// 处理目的地点击
const handleDestinationClick = (destination) => {
  router.push({
    name: 'destinations-map',
    query: { id: destination.id }
  })
}

// 跳转到目的地页面
const goToDestinations = () => {
  router.push({ name: 'destinations' })
}

// 跳转到路线列表页面
const goToRoutes = () => {
  router.push('/routes')
}

// 刷新路线
const refreshRoutes = async () => {
  loading.value.routes = true
  try {
    // 获取新的随机路线
    const selectedRoutes = getRandomRoutes()
    routes.value = selectedRoutes
  } catch (error) {
    console.error('Error refreshing routes:', error)
    ElMessage.error('刷新路线失败，请稍后重试')
  } finally {
    loading.value.routes = false
  }
}

// 刷新目的地
const refreshDestinations = () => {
  loading.value.destinations = true
  try {
    destinations.value = getRandomDestinations()
  } catch (error) {
    console.error('Error refreshing destinations:', error)
    ElMessage.error('刷新目的地失败，请稍后重试')
  } finally {
    loading.value.destinations = false
  }
}

// 初始化数据
const initializeData = async () => {
  try {
    loading.value.features = true
    loading.value.routes = true
    loading.value.destinations = true

    // 获取所有目的地数据
    destinations.value = presets.destinations

    // 随机选择路线和目的地
    routes.value = getRandomRoutes()
    destinations.value = getRandomDestinations()

    // 设置功能特点
    features.value = [
      {
        id: 1,
        title: '精选路线',
        description: '独家定制主题路线，带你探索世界精彩',
        icon: 'Compass'
      },
      {
        id: 2,
        title: '城市攻略',
        description: '精选目的地指南，发现城市精彩看点',
        icon: 'Guide'
      },
      {
        id: 3,
        title: '我的收藏',
        description: '收藏喜欢的景点和路线，随时查看回顾',
        icon: 'Collection'
      }
    ]
  } catch (error) {
    console.error('初始化数据失败:', error)
    ElMessage.error('数据加载失败，请刷新页面重试')
  } finally {
    loading.value.features = false
    loading.value.routes = false
    loading.value.destinations = false
  }
}

onMounted(() => {
  initializeData()
  window.addEventListener('scroll', () => {
    hasScrolled.value = true
  })
})

// 新增事件处理函数
const handleTimelineClick = () => {
  console.log('点击了时间轴')
}

// 新增图片路径处理函数
const getImageUrl = (imagePath) => {
  const fileName = imagePath.split('/').pop()
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f3f4f6 0%, #ffffff 100%);
  z-index: -1;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.welcome {
  text-align: center;
  margin: 4rem 0;
}

.title {
  font-size: 3.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(120deg, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.5rem;
  color: #4b5563;
  max-width: 600px;
  margin: 0 auto;
}

.welcome-actions {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.features-container {
  margin: 4rem 0;
  min-height: 200px;
}

.features-container h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #1a1a1a;
  font-size: 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.feature {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.feature .el-icon {
  font-size: 2.5rem;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.feature h3 {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.feature p {
  color: #4b5563;
}

.recommended-routes {
  margin: 4rem 0;
  min-height: 200px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  margin: 0;
}

.routes-grid {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  margin: 0 auto;
}

.route-card {
  flex: 1;
  border-radius: 8px;
  transition: transform 0.3s ease;
  height: 100%;
  cursor: pointer;
}

.route-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.route-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.route-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.route-title h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.route-tags {
  display: flex;
  gap: 8px;
  margin: 8px 0;
}

.route-description {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-bottom: 12px;
  line-height: 1.5;
}

.route-meta {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.route-meta .el-tag {
  display: flex;
  align-items: center;
  gap: 4px;
}

.route-overview {
  background: var(--el-fill-color-light);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
}

.overview-points {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.point-tag {
  font-size: 12px;
}

.route-stats {
  display: flex;
  gap: 16px;
  color: var(--el-text-color-regular);
  font-size: 13px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.section-title {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.attractions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.attraction-card {
  background: var(--el-fill-color-blank);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.attraction-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.attraction-name {
  font-weight: 600;
  font-size: 15px;
  color: var(--el-text-color-primary);
}

.attraction-index {
  font-size: 12px;
  color: var(--el-text-color-secondary);
  background: var(--el-fill-color-light);
  padding: 2px 8px;
  border-radius: 12px;
}

.attraction-desc {
  font-size: 13px;
  color: var(--el-text-color-regular);
  margin: 0 0 12px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.attraction-highlights {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.highlight-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.highlight-name {
  font-size: 13px;
  color: var(--el-text-color-primary);
  font-weight: 500;
}

.highlight-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-left: 12px;
}

.highlight-tag {
  font-size: 11px;
}

.route-stats {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.timeline-wrapper {
  margin: 0 -50vw;  /* 使容器超出父元素 */
  padding: 0 50vw;  /* 添加内边距使内容居中 */
  overflow: hidden;
  transition: all 0.3s ease;
  scroll-behavior: v-bind(hasScrolled.value ? 'auto' : 'smooth');
}

.timeline-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 8px 0;
}

.timeline-container:hover {
  overflow-x: auto;
}

.timeline-container::-webkit-scrollbar {
  display: none;
}

.timeline-container:hover .timeline-track {
  animation: none;
  transform: none;
}

.timeline-track {
  display: flex;
  align-items: flex-start;
  padding: 0 8px;
  width: max-content;
  animation: scrollTimeline 15s linear infinite;
}

@keyframes scrollTimeline {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(100% - 90vw));
  }
}

.timeline-point {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.point-content {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: var(--el-fill-color-light);
  border-radius: 8px;
  min-width: 280px;
  max-width: 320px;
}

.point-marker {
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.point-index {
  position: absolute;
  top: -4px;
  right: -4px;
  background: var(--el-color-primary);
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.point-info {
  flex-grow: 1;
  min-width: 0;
}

.point-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.point-name {
  font-weight: 600;
  font-size: 14px;
  color: var(--el-text-color-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.point-desc {
  font-size: 12px;
  color: var(--el-text-color-secondary);
  margin: 0 0 8px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.point-highlights {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.highlight-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.highlight-name {
  font-size: 12px;
  color: var(--el-text-color-primary);
}

.highlight-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-left: 8px;
}

.highlight-tag {
  font-size: 11px;
}

.more-highlights {
  font-size: 12px;
  color: var(--el-text-color-secondary);
  margin-top: 4px;
}

.timeline-connector {
  color: var(--el-text-color-secondary);
  display: flex;
  align-items: center;
  padding: 0 8px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

@media (min-width: 1200px) {
  .destinations-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .destinations-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.destination-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.destination-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.destination-card .el-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.destination-card:hover .el-image {
  transform: scale(1.05);
}

.destination-info {
  padding: 1.5rem;
}

.destination-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #2c3e50;
}

.destination-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.action-buttons {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.welcome-actions {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 24px;
  font-size: 1.1em;
}

.header-button {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .welcome-actions {
    flex-direction: column;
    gap: 10px;
  }

  .header-actions {
    flex-direction: column;
    gap: 10px;
  }

  .routes-grid {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
  }
  
  .route-card {
    max-width: 100%;
    width: 100%;
  }
  
  .timeline-container {
    margin: 0 -16px;
  }
  
  .point-content {
    min-width: 260px;
    max-width: 280px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}

.route-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.favorite-button {
  font-size: 18px;
}

.favorite-button.is-warning {
  --el-button-bg-color: var(--el-color-warning-light-5);
  --el-button-border-color: var(--el-color-warning);
  --el-button-text-color: var(--el-color-warning);
}
</style>

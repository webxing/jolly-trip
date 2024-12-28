# 创建路线列表页
<template>
  <div class="routes-page">
    <!-- 顶部搜索栏 -->
    <div class="search-section">
      <div class="search-bar">
        <el-input
          v-model="searchQuery"
          placeholder="搜索路线..."
          clearable
          @input="handleSearch"
          size="large"
          :prefix-icon="Search"
          class="search-input"
        />
        <div class="filter-buttons">
          <el-button-group>
            <el-button 
              :type="selectedLocation === null ? 'primary' : 'default'"
              @click="selectedLocation = null"
            >全部</el-button>
            <el-button 
              :type="selectedLocation === false ? 'primary' : 'default'"
              @click="selectedLocation = false"
            >国内</el-button>
            <el-button 
              :type="selectedLocation === true ? 'primary' : 'default'"
              @click="selectedLocation = true"
            >海外</el-button>
          </el-button-group>
        </div>
      </div>
      
      <!-- 筛选选项 -->
      <div class="filter-section">
        <div class="filter-group">
          <span class="filter-label">主题：</span>
          <el-select v-model="selectedTheme" placeholder="选择主题" clearable>
            <el-option
              v-for="theme in themes"
              :key="theme"
              :label="theme"
              :value="theme"
            />
          </el-select>
        </div>
        
        <div class="filter-group">
          <span class="filter-label">难度：</span>
          <el-select v-model="selectedDifficulty" placeholder="选择难度" clearable>
            <el-option
              v-for="item in difficulties"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        
        <div class="filter-group">
          <span class="filter-label">时长：</span>
          <el-select v-model="selectedDuration" placeholder="选择时长" clearable>
            <el-option
              v-for="item in durations"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        
        <el-button type="info" plain @click="resetFilters">清除筛选</el-button>
      </div>
    </div>

    <!-- 路线列表 -->
    <div class="routes-grid">
      <el-card v-for="route in filteredRoutes" :key="route.id" class="route-card" shadow="hover">
        <div class="route-content">
          <div class="route-header">
            <div class="route-title-section">
              <h3 class="route-title">{{ route.name }}</h3>
              <p class="route-brief">{{ route.description }}</p>
            </div>
            <div class="route-tags">
              <el-tag size="small" class="theme-tag" effect="plain">
                <el-icon><Compass /></el-icon>
                {{ route.theme }}
              </el-tag>
              <el-tag size="small" class="difficulty-tag" effect="plain">
                <el-icon><Histogram /></el-icon>
                {{ route.difficulty }}
              </el-tag>
              <el-tag size="small" class="duration-tag" effect="plain">
                <el-icon><Timer /></el-icon>
                {{ route.duration }}
              </el-tag>
            </div>
          </div>

          <div class="route-info">
            <div class="info-item" v-if="route.waypoints?.length">
              <el-icon><Location /></el-icon>
              <span class="info-label">行程路线：</span>
              <span class="info-value">
                {{ route.waypoints.map(point => point.name).join(' → ') }}
              </span>
            </div>
            
            <div class="info-item" v-if="route.recommendations?.bestTime">
              <el-icon><Calendar /></el-icon>
              <span class="info-label">最佳时间：</span>
              <span class="info-value">{{ route.recommendations.bestTime }}</span>
            </div>
          </div>

          <div class="route-footer">
            <div class="route-tips">
              <el-button
                :type="isFavorite(route.id) ? 'warning' : 'default'"
                :icon="isFavorite(route.id) ? StarFilled : Star"
                circle
                @click="handleFavorite(route)"
              />
            </div>
            <el-button class="view-button" type="primary" @click="viewRouteDetail(route)">查看详情</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Search, 
  Location, 
  Calendar, 
  InfoFilled,
  Van,
  ArrowRight,
  Compass,
  Histogram,
  Timer,
  Star,
  StarFilled
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { recommendedRoutes } from '../data/recommendedRoutes'
import { useUserData } from '@/composables/useUserData'

// 用户数据管理
const { 
  addFavorite, 
  removeFavorite, 
  isFavorite,
  addToHistory 
} = useUserData()

// 搜索关键词
const searchQuery = ref('')
const selectedLocation = ref(null)

// 主题分类映射
const themeMapping = {
  '自然风光': ['山水画卷', '自然风光', '自然生态', '高原风光', '椰风海韵', '自然奇观'],
  '文化古迹': ['徽州印象', '园林艺术', '文化艺术', '传统文化', '人文历史', '闽南文化', '德式风情', '艺术人文'],
  '美食休闲': ['美食文化', '美食探索', '度假休闲', '奢华体验', '滇味寻踪', '美食寻踪'],
  '民族风情': ['民族文化', '藏域文化', '草原风情', '湘西秘境', '藏地秘境', '塞外风情'],
  '城市观光': ['城市文化', '巴蜀风情', '江南韵味', '江南韵味', '京华韵味']
}

// 获取主题类别
const themes = computed(() => {
  return Object.keys(themeMapping)
})

// 主题匹配函数
const matchTheme = (routeTheme) => {
  const mainTheme = routeTheme.split('•')[0].trim()
  // 先尝试精确匹配
  for (const [category, keywords] of Object.entries(themeMapping)) {
    if (keywords.includes(mainTheme)) {
      return category
    }
  }
  // 如果没有精确匹配，尝试部分匹配
  for (const [category, keywords] of Object.entries(themeMapping)) {
    if (keywords.some(keyword => mainTheme.includes(keyword))) {
      return category
    }
  }
  return '其他'
}

// 难度分类
const difficulties = [
  { label: '轻松休闲', value: '简单' },
  { label: '一般游玩', value: '中等' },
  { label: '稍具挑战', value: '中等偏难' }
]

// 时长分类
const durations = [
  { label: '短途游(2-3天)', value: '2-3天' },
  { label: '小长假(3-4天)', value: '3-4天' },
  { label: '中等假期(4-5天)', value: '4-5天' },
  { label: '长假游(5-7天)', value: '5-7天' }
]

// 筛选条件
const selectedTheme = ref('')
const selectedDifficulty = ref('')
const selectedDuration = ref('')

// 筛选路线
const filteredRoutes = computed(() => {
  let result = recommendedRoutes

  // 搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(route => {
      // 获取当前路线难度对应的标签
      const difficultyLabel = difficulties.find(d => d.value === route.difficulty)?.label || ''
      // 获取当前路线时长对应的标签
      const durationLabel = durations.find(d => d.value === route.duration)?.label || ''
      
      return route.name.toLowerCase().includes(query) ||
        route.description.toLowerCase().includes(query) ||
        route.theme.toLowerCase().includes(query) ||
        difficultyLabel.toLowerCase().includes(query) ||
        durationLabel.toLowerCase().includes(query) ||
        route.waypoints.some(point => point.name.toLowerCase().includes(query))
    })
  }

  // 国内/海外筛选
  if (selectedLocation.value !== null) {
    const isOverseas = route => {
      const firstPoint = route.waypoints[0]
      return !(firstPoint.coordinates[0] >= 73 && 
              firstPoint.coordinates[0] <= 135 && 
              firstPoint.coordinates[1] >= 18 && 
              firstPoint.coordinates[1] <= 53)
    }
    result = result.filter(route => isOverseas(route) === selectedLocation.value)
  }

  // 主题筛选
  if (selectedTheme.value) {
    result = result.filter(route => matchTheme(route.theme) === selectedTheme.value)
  }

  // 难度筛选
  if (selectedDifficulty.value) {
    result = result.filter(route => 
      route.difficulty === selectedDifficulty.value
    )
  }

  // 时长筛选
  if (selectedDuration.value) {
    result = result.filter(route => 
      route.duration === selectedDuration.value
    )
  }

  return result
})

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

// 重置筛选条件
const resetFilters = () => {
  searchQuery.value = ''
  selectedLocation.value = null
  selectedTheme.value = ''
  selectedDifficulty.value = ''
  selectedDuration.value = ''
}

// 处理搜索
const handleSearch = () => {
  // 可以添加额外的搜索逻辑
}

// 路由实例
const router = useRouter()

// 查看路线详情
const viewRouteDetail = (route) => {
  // 添加到历史记录
  addToHistory(route)
  // 跳转到路线详情页
  router.push({
    name: 'routes-map',
    query: { id: route.id }
  })
}

</script>

<style scoped>
.route-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
}

.route-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.route-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
}

.route-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.route-title {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  line-height: 1.4;
}

.route-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.route-tags .el-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 12px;
  height: 28px;
  font-size: 13px;
  border-radius: 6px;
}

.theme-tag {
  --el-tag-bg-color: #e6f4ff !important;
  --el-tag-border-color: #e6f4ff !important;
  --el-tag-text-color: #409eff !important;
}

.difficulty-tag {
  --el-tag-bg-color: #fff7e6 !important;
  --el-tag-border-color: #fff7e6 !important;
  --el-tag-text-color: #faad14 !important;
}

.duration-tag {
  --el-tag-bg-color: #f0f9eb !important;
  --el-tag-border-color: #f0f9eb !important;
  --el-tag-text-color: #67c23a !important;
}

.route-description {
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.route-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  line-height: 1.5;
  font-size: 13px;
}

.info-item .el-icon {
  margin-top: 2px;
  margin-right: 4px;
  font-size: 14px;
}

.info-label {
  margin-right: 8px;
  color: #666;
  white-space: nowrap;
}

.info-value {
  color: #333;
  flex: 1;
}

.route-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.route-tips {
  display: flex;
  gap: 8px;
}

.route-tips .el-button {
  font-size: 18px;
}

.route-tips .el-button.is-warning {
  --el-button-bg-color: var(--el-color-warning-light-5);
  --el-button-border-color: var(--el-color-warning);
  --el-button-text-color: var(--el-color-warning);
}

.view-button {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .route-content {
    gap: 12px;
  }

  .route-title {
    font-size: 18px;
  }

  .route-description {
    -webkit-line-clamp: 3;
  }

  .route-info {
    padding: 10px;
  }

  .route-footer {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }

  .route-tips {
    order: 1;
  }

  .view-button {
    width: 100%;
    order: 0;
  }
}

.search-section {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  margin: 0 auto 24px auto;
  max-width: 1200px;
  padding: 20px 24px 24px 24px;
}

.search-bar {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
}

.filter-buttons {
  white-space: nowrap;
}

.filter-section {
  display: flex;
  gap: 16px;
  align-items: center;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-label {
  color: #606266;
  font-size: 14px;
  white-space: nowrap;
}

:deep(.el-select) {
  width: 120px;
}

.routes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px auto;
  max-width: 1200px;
  padding: 0 24px;
}

@media (max-width: 1200px) {
  .routes-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
  }
}

@media (max-width: 768px) {
  .routes-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 12px;
  }
}
</style>

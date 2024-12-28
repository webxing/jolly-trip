<template>
  <div class="map-container">
    <div ref="mapContainer" class="map"></div>
    
    <!-- 目的地信息面板 -->
    <div class="destination-panel">
      <div class="destination-header">
        <h2>{{ currentDestination?.name }}</h2>
        <div class="destination-actions">
          <el-button
            :type="isDestinationFavorite(currentDestination?.id) ? 'warning' : 'default'"
            :icon="isDestinationFavorite(currentDestination?.id) ? StarFilled : Star"
            circle
            @click="handleDestinationFavorite"
          />
          <el-button
            type="primary"
            :icon="Share"
            circle
            @click="handleShare"
          />
        </div>
      </div>
      <div class="destination-info">
        <el-tag size="small">{{ currentDestination?.region }}</el-tag>
        <p class="description">{{ currentDestination?.description }}</p>
      </div>
    </div>

    <!-- 路线面板 -->
    <div class="routes-panel" :class="{ 'collapsed': isPanelCollapsed }">
      <div class="panel-header" @click="togglePanel">
        <div class="panel-header-title">
          <el-icon><Location /></el-icon>
          推荐路线
          <el-tag size="small" type="info" class="route-count">{{ routes.length }}条</el-tag>
          <el-tooltip content="全部显示/隐藏" placement="top">
            <el-switch
              v-model="showAllRoutes"
              @change="toggleAllRoutes"
              @click.stop
            />
          </el-tooltip>
        </div>
        <div class="panel-header-action">
          <span>{{ isPanelCollapsed ? '展开' : '收起' }}</span>
          <el-icon>
            <component :is="isPanelCollapsed ? 'Expand' : 'Fold'" />
          </el-icon>
        </div>
      </div>
      <div class="panel-content" v-show="!isPanelCollapsed">
        <div class="route-list">
          <TransitionGroup name="route-list">
            <div v-for="(route, index) in routes" 
                 :key="route.id" 
                 class="route-item"
                 @click="focusRoute(route)"
                 :class="{ 'active': route.id === activeRouteId }">
              <div class="route-header">
                <div class="route-title">
                  <span class="route-name" :style="{ color: colors[index % colors.length] }">
                    {{ route.name }}
                  </span>
                  <div class="route-actions">
                    <el-tooltip :content="isFavorite(route.id) ? '取消收藏' : '收藏路线'" placement="top">
                      <el-button
                        type="primary"
                        text
                        :icon="isFavorite(route.id) ? StarFilled : Star"
                        @click.stop="handleFavorite(route)"
                        class="favorite-btn"
                        :class="{ 'active': isFavorite(route.id) }"
                      />
                    </el-tooltip>
                    <el-switch
                      v-model="route.visible"
                      @change="() => toggleRouteVisibility(route)"
                      @click.stop
                    />
                  </div>
                </div>
                <div class="route-description">{{ route.description || '探索这条精彩的路线，发现沿途的独特风景和文化遗产' }}</div>
                <div class="route-tags">
                  <el-tag size="small" type="info">{{ route.theme }}</el-tag>
                  <el-tag size="small" type="warning">{{ route.duration }}</el-tag>
                  <el-tag size="small" type="success">{{ route.difficulty }}</el-tag>
                </div>
              </div>
              <div class="waypoints">
                <div v-for="(point, pointIndex) in route.waypoints"
                     :key="pointIndex"
                     class="waypoint"
                     @click.stop="handleWaypointClick(point, route)">
                  <span class="waypoint-number" :style="{ backgroundColor: colors[index % colors.length] }">{{ pointIndex + 1 }}</span>
                  <div class="waypoint-info">
                    <span class="waypoint-name">{{ point.name }}</span>
                    <span class="waypoint-description">{{ point.description }}</span>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
    <div v-if="isPanelCollapsed" class="float-ball" @click="togglePanel">
      <el-icon><Expand /></el-icon>
      <div class="float-ball-count">{{ routes.length }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Timer, Warning, InfoFilled, Expand, Fold, Location, Star, StarFilled, Share } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-polylinedecorator/dist/leaflet.polylineDecorator.js'
import { destinations } from '@/data/presets'
import { useUserData } from '@/composables/useUserData'

// 用户数据管理
const { 
  addFavorite, 
  removeFavorite, 
  isFavorite,
  addFavoriteDestination,
  removeFavoriteDestination,
  isDestinationFavorite,
  getDestinationFavorites,
  addToHistory
} = useUserData()

// 判断坐标是否在中国境内
function isInChina(lat, lng) {
  // 中国大陆的大致范围
  return lat >= 18.0 && lat <= 53.0 && lng >= 73.0 && lng <= 135.0
}

const route = useRoute()
const mapContainer = ref(null)
const map = ref(null)
const gaodeLayer = ref(null)
const osmLayer = ref(null)
const routes = ref([])
const routeLayers = ref({})
const markerLayers = ref(new Map())

// 路线颜色
const colors = [
  '#FF6B6B',  // 红色
  '#4ECDC4',  // 青色
  '#A388EE', // 紫色
  '#FFB347',  // 橙色
  '#D4A5A5',  // 玫瑰色
  '#FF9999',  // 珊瑚红
  '#45B7D1',  // 蓝色
]

// 面板状态控制
const isPanelCollapsed = ref(false)
const showAllRoutes = ref(true)
const activeRouteId = ref(null)
const loading = ref(false)

// 收藏相关
const favoriteRoutes = computed(() => {
  return routes.value.filter(route => route.favorite)
})

// 从本地存储加载收藏状态
const loadFavorites = () => {
  const favorites = localStorage.getItem('favoriteRoutes')
  if (favorites) {
    const favoriteIds = new Set(JSON.parse(favorites))
    routes.value.forEach(route => {
      route.favorite = favoriteIds.has(route.id)
    })
  }
}

// 保存收藏状态到本地存储
const saveFavorites = () => {
  const favoriteIds = routes.value
    .filter(route => route.favorite)
    .map(route => route.id)
  localStorage.setItem('favoriteRoutes', JSON.stringify(favoriteIds))
}

// 切换收藏状态
const toggleFavorite = (route) => {
  route.favorite = !route.favorite
  saveFavorites()
  ElMessage({
    message: route.favorite ? '已添加到收藏' : '已取消收藏',
    type: route.favorite ? 'success' : 'info',
    duration: 2000
  })
}

// 切换所有路线显示状态
const toggleAllRoutes = () => {
  routes.value.forEach(route => {
    route.visible = showAllRoutes.value
    toggleRouteVisibility(route)
  })
}

// 聚焦路线
const focusRoute = (route) => {
  // 更新激活的路线ID
  activeRouteId.value = route.id
  
  // 添加到历史记录
  if (currentDestination.value) {
    addToHistory(route, currentDestination.value.id)
  }
  
  // 遍历所有路线，调整样式
  Object.entries(routeLayers.value).forEach(([routeId, layers]) => {
    const isActive = routeId === route.id
    if (layers.polyline) {
      layers.polyline.setStyle({
        opacity: isActive ? 1 : 0.3,
        weight: isActive ? 5 : 3
      })
    }
    if (layers.decorator) {
      layers.decorator.remove()
      if (isActive) {
        layers.decorator.addTo(map.value)
      }
    }
    if (layers.markers) {
      layers.markers.forEach(marker => {
        const icon = marker.getIcon()
        const el = marker.getElement()
        if (el) {
          el.style.opacity = isActive ? '1' : '0.3'
          el.style.zIndex = isActive ? '1000' : '500'
        }
      })
    }
    if (layers.distanceMarkers) {
      layers.distanceMarkers.forEach(marker => {
        const el = marker.getElement()
        if (el) {
          el.style.opacity = isActive ? '1' : '0.3'
        }
      })
    }
  })

  // 使用原始坐标顺序，因为已经是 [longitude, latitude] 格式
  const coordinates = route.waypoints.map(point => point.coordinates)
  if (coordinates.length > 0) {
    // 转换为 Leaflet 需要的 [latitude, longitude] 格式
    const bounds = coordinates.map(([lng, lat]) => [lat, lng])
    const latLngBounds = L.latLngBounds(bounds)
    
    // 计算路线的对角线距离（单位：米）
    const diagonalDistance = map.value.distance(
      latLngBounds.getNorthWest(),
      latLngBounds.getSouthEast()
    )
    
    // 根据路线长度动态调整缩放级别
    let maxZoom
    if (diagonalDistance < 1000) { // 小于1公里
      maxZoom = 16
    } else if (diagonalDistance < 3000) { // 1-3公里
      maxZoom = 15
    } else if (diagonalDistance < 10000) { // 3-10公里
      maxZoom = 14
    } else {
      maxZoom = 13
    }

    map.value.fitBounds(latLngBounds, {
      padding: [50, 300],  // [上下内边距, 左右内边距]，增大右侧内边距
      maxZoom,
      animate: true,
      duration: 1
    })
  }
}

// 显示路线
async function showRoute(routeData, index) {
  try {
    console.log('开始显示路线:', routeData.name)
    const color = colors[index % colors.length]
    
    // 转换坐标为 Leaflet 需要的 [latitude, longitude] 格式
    const waypoints = routeData.waypoints.map(point => {
      const [lng, lat] = point.coordinates
      console.log(`路线点 ${point.name} 坐标:`, { 原始: [lng, lat], 转换后: [lat, lng] })
      return [lat, lng]
    })

    console.log('处理后的路线点:', waypoints)
    const markers = []
    const distanceMarkers = []
    
    // 判断坐标是否在中国境内
    function isInChina(lat, lng) {
      // 中国大陆的大致范围
      return lat >= 18.0 && lat <= 53.0 && lng >= 73.0 && lng <= 135.0
    }

    // 检查路线是否包含国外坐标
    const hasOverseasPoints = waypoints.some(([lat, lng]) => !isInChina(lat, lng))
    
    // 安全地切换地图源
    if (hasOverseasPoints) {
      if (!map.value.hasLayer(osmLayer.value)) {
        if (map.value.hasLayer(gaodeLayer.value)) {
          map.value.removeLayer(gaodeLayer.value)
        }
        map.value.addLayer(osmLayer.value)
      }
    } else {
      if (!map.value.hasLayer(gaodeLayer.value)) {
        if (map.value.hasLayer(osmLayer.value)) {
          map.value.removeLayer(osmLayer.value)
        }
        map.value.addLayer(gaodeLayer.value)
      }
    }

    // 创建路线的折线
    const polyline = L.polyline(waypoints, {
      color: color,
      weight: 3,
      opacity: 0.8
    }).addTo(map.value)

    // 添加箭头装饰
    const decorator = L.polylineDecorator(polyline, {
      patterns: [
        {
          offset: '25%', // 从起点偏移25%，避开圆圈
          repeat: '50%', // 每50%重复一次
          symbol: L.Symbol.arrowHead({
            pixelSize: 10, // 减小箭头大小
            pathOptions: {
              stroke: true,
              color: color,
              fillColor: color, // 填充颜色
              fillOpacity: 1,
              weight: 2
            },
            polygon: true // 使用填充箭头
          })
        }
      ]
    }).addTo(map.value)

    // 计算总距离
    let totalDistance = 0
    for (let i = 0; i < waypoints.length - 1; i++) {
      totalDistance += calculateDistance(
        L.latLng(waypoints[i]),
        L.latLng(waypoints[i + 1])
      )
    }

    // 创建途经点标记
    waypoints.forEach((point, i) => {
      const marker = L.marker(point, {
        icon: createMarkerIcon(i + 1, color)
      })

      // 为每个标记添加悬浮提示
      marker.bindTooltip(
        `
        <div class="route-tooltip">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px; color: #666; font-size: 12px;">
            <span style="color: ${color};">路线：${routeData.name}</span>
          </div>
          <h3 style="margin: 0 0 8px 0; color: ${color}; font-size: 16px; display: flex; align-items: center; gap: 6px;">
            <span style="background: ${color}; color: white; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 12px;">${i + 1}</span>
            ${routeData.waypoints[i].name}
          </h3>
          <div style="margin-bottom: 8px; color: #666; font-size: 13px;">
            ${routeData.waypoints[i].description || '探索这个精彩景点'}
          </div>
          <div style="font-size: 12px; color: #666; display: flex; flex-direction: column; gap: 4px;">
            ${i > 0 ? `
              <span title="与上一个景点的距离">
                🚶‍♂️ 距离上一站：${calculateDistance(
                  L.latLng(waypoints[i-1]),
                  L.latLng(waypoints[i])
                ).toFixed(1)}km
              </span>
            ` : ''}
            ${i < waypoints.length - 1 ? `
              <span title="到下一个景点的距离">
                👉 距离下一站：${calculateDistance(
                  L.latLng(waypoints[i]),
                  L.latLng(waypoints[i+1])
                ).toFixed(1)}km
              </span>
            ` : ''}
          </div>
          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #f0f0f0;">
            <div style="display: flex; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
              <span class="route-tag" style="background: #e6f4ff; color: #1677ff; padding: 2px 6px; border-radius: 4px; font-size: 12px;">📍 第 ${i + 1}/${waypoints.length} 站</span>
              <span class="route-tag" style="background: #fff7e6; color: #d46b08; padding: 2px 6px; border-radius: 4px; font-size: 12px;">${routeData.duration}</span>
              <span class="route-tag" style="background: #f6ffed; color: #389e0d; padding: 2px 6px; border-radius: 4px; font-size: 12px;">${routeData.difficulty}</span>
            </div>
          </div>
        </div>
        `,
        {
          className: 'route-tooltip',
          direction: 'top',
          offset: [0, -10]
        }
      )

      // 为每个标记添加点击事件
      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e)
        focusRoute(routeData)
      })

      marker.addTo(map.value)
      markers.push(marker)

      // 如果不是最后一个点，添加到下一个点的距离标记
      if (i < waypoints.length - 1) {
        const startPoint = L.latLng(waypoints[i])
        const endPoint = L.latLng(waypoints[i + 1])
        const distance = calculateDistance(startPoint, endPoint)
        
        // 在线段上创建距离标记
        const midPoint = L.latLng(
          (startPoint.lat + endPoint.lat) / 2,
          (startPoint.lng + endPoint.lng) / 2
        )
        
        const distanceMarker = L.marker(midPoint, {
          icon: L.divIcon({
            className: 'distance-label',
            html: `<span style="background-color: ${color};">${distance.toFixed(1)}km</span>`,
            iconSize: [40, 20],
            iconAnchor: [20, 10]
          })
        }).addTo(map.value)
        
        distanceMarkers.push(distanceMarker)
      }
    })

    // 只保留点击路线时切换的功能
    polyline.on('click', (e) => {
      L.DomEvent.stopPropagation(e)
      focusRoute(routeData)
    })

    // 保存图层引用
    routeLayers.value[routeData.id] = {
      polyline,
      decorator,
      markers,
      distanceMarkers
    }
    
    console.log('路线显示完成:', routeData.name)
  } catch (error) {
    console.error('显示路线失败:', error)
  }
}

// 计算两点之间的距离（单位：公里）
function calculateDistance(latlng1, latlng2) {
  return map.value.distance(latlng1, latlng2) / 1000
}

// 切换路线显示状态
function toggleRouteVisibility(route) {
  const layers = routeLayers.value[route.id]
  if (!layers) return

  if (route.visible) {
    layers.polyline.addTo(map.value)
    layers.decorator.addTo(map.value)
    layers.markers.forEach(marker => marker.addTo(map.value))
    layers.distanceMarkers.forEach(marker => marker.addTo(map.value))
  } else {
    layers.polyline.remove()
    layers.decorator.remove()
    layers.markers.forEach(marker => marker.remove())
    layers.distanceMarkers.forEach(marker => marker.remove())
  }
}

// 加载路线数据
async function loadRoutes() {
  loading.value = true
  try {
    const { id } = route.query
    console.log('URL参数:', route.query, '当前ID:', id)
    
    if (!id) {
      console.log('没有ID参数')
      routes.value = []
      return
    }

    // 清除现有路线
    Object.values(routeLayers.value).forEach(layers => {
      if (layers.polyline) layers.polyline.remove()
      if (layers.decorator) layers.decorator.remove()
      if (layers.markers) layers.markers.forEach(marker => marker.remove())
      if (layers.distanceMarkers) layers.distanceMarkers.forEach(marker => marker.remove())
    })
    routeLayers.value = {}

    // 加载目的地路线
    const destinationData = destinations.find(d => String(d.id) === String(id))
    console.log('目的地数据:', destinationData)
    
    if (destinationData && destinationData.routes) {
      routes.value = destinationData.routes
      console.log('加载到的路线:', routes.value)
      
      // 检查第一条路线的坐标格式
      if (routes.value.length > 0) {
        const firstRoute = routes.value[0]
        console.log('第一条路线:', {
          id: firstRoute.id,
          name: firstRoute.name,
          waypoints: firstRoute.waypoints.map(wp => ({
            name: wp.name,
            coordinates: wp.coordinates
          }))
        })
      }
    } else {
      console.log('未找到路线，目的地数据:', destinationData)
      return
    }

    // 确保路线可见并显示在地图上
    routes.value.forEach((route, index) => {
      route.visible = true
      showRoute(route, index)
    })

    // 调整视野以显示所有路线
    if (map.value && routes.value.length > 0) {
      // 收集所有坐标点
      const allPoints = []
      routes.value.forEach(route => {
        route.waypoints.forEach(waypoint => {
          const [lng, lat] = waypoint.coordinates
          allPoints.push([lat, lng])
        })
      })

      // 找到坐标点最密集的区域
      const gridSize = 0.1  // 网格大小（经纬度）
      const pointsGrid = new Map()
      
      allPoints.forEach(([lat, lng]) => {
        const gridKey = `${Math.floor(lat/gridSize)},${Math.floor(lng/gridSize)}`
        pointsGrid.set(gridKey, (pointsGrid.get(gridKey) || 0) + 1)
      })

      // 找到点最多的网格
      let maxCount = 0
      let densestGrid
      pointsGrid.forEach((count, key) => {
        if (count > maxCount) {
          maxCount = count
          densestGrid = key
        }
      })

      // 计算最密集区域的边界
      if (densestGrid) {
        const [gridLat, gridLng] = densestGrid.split(',').map(Number)
        const bounds = L.latLngBounds([
          [gridLat * gridSize, gridLng * gridSize],
          [(gridLat + 1) * gridSize, (gridLng + 1) * gridSize]
        ])

        // 扩展边界以包含周围的点
        allPoints.forEach(point => {
          if (Math.abs(point[0] - gridLat * gridSize) < gridSize * 2 &&
              Math.abs(point[1] - gridLng * gridSize) < gridSize * 2) {
            bounds.extend(point)
          }
        })

        map.value.fitBounds(bounds, {
          padding: [50, 300],  // [上下内边距, 左右内边距]，增大右侧内边距
          maxZoom: 13,
          animate: true
        })
      }
    }
  } catch (error) {
    console.error('加载路线数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 监听路由参数变化
watch(() => route.query.id, () => {
  if (map.value) {
    loadRoutes()
  }
})

// 初始化地图
function initMap() {
  if (map.value) return

  console.log('初始化地图...')
  // 使用敦煌的坐标作为初始中心点
  map.value = L.map(mapContainer.value, {
    center: [40.0525, 94.6680],
    zoom: 5,  // 设置一个较小的初始缩放级别，以便看到更大范围
    zoomControl: true,
    attributionControl: true
  })

  // 创建高德地图图层
  gaodeLayer.value = L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    attribution: '© 高德地图',
    opacity: 0.5
  })

  // 创建OpenStreetMap图层
  osmLayer.value = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
    subdomains: ['a', 'b', 'c', 'd'],
    attribution: '© OpenStreetMap contributors, © CartoDB',
    opacity: 0.5
  })

  // 默认添加高德地图图层
  gaodeLayer.value.addTo(map.value)

  console.log('地图初始化完成')
  
  // 加载路线数据
  loadRoutes()

  // 加载收藏状态
  loadFavorites()
}

// 创建标记图标
function createMarkerIcon(number, color) {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">${number}</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  })
}

// 切换面板状态
function togglePanel() {
  isPanelCollapsed.value = !isPanelCollapsed.value
}

// 处理途经点点击
const handleWaypointClick = (point, route) => {
  if (!map.value) return
  map.value.setView([point.coordinates[1], point.coordinates[0]], 15)
  focusRoute(route)
}

// 当前目的地
const currentDestination = computed(() => {
  const destId = route.query.id
  return destinations.find(d => d.id.toString() === destId)
})

// 处理目的地收藏
const handleDestinationFavorite = () => {
  if (!currentDestination.value) return
  
  const destId = currentDestination.value.id
  
  if (isDestinationFavorite(destId)) {
    removeFavoriteDestination(destId)
    ElMessage.success('已取消收藏目的地')
  } else {
    addFavoriteDestination(currentDestination.value)
    ElMessage.success('已收藏目的地')
  }
}

// 处理路线收藏
const handleFavorite = (route) => {
  if (!currentDestination.value) return
  
  const destId = currentDestination.value.id
  
  if (isFavorite(route.id)) {
    removeFavorite(route.id)
    ElMessage.success('已取消收藏路线')
  } else {
    addFavorite(route, destId)
    ElMessage.success('已收藏路线')
  }
}

// 处理分享
const handleShare = () => {
  if (!currentDestination.value) return
  
  // 构建分享链接
  const shareUrl = window.location.href
  
  // 复制链接到剪贴板
  navigator.clipboard.writeText(shareUrl).then(() => {
    ElMessage.success('链接已复制到剪贴板')
  }).catch(() => {
    ElMessage.error('复制链接失败')
  })
}

onMounted(async () => {
  // 等待下一个渲染周期，确保 DOM 已更新
  await nextTick()
  // 给容器一点时间完全渲染
  setTimeout(() => {
    initMap()
  }, 100)
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
    map.value = null
  }
})
</script>

<style lang="scss" scoped>
.map-container {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background: #f0f2f5;

  :deep(.route-tooltip) {
    min-width: 200px;
    max-width: 320px;
  }

  :deep(.leaflet-tooltip) {
    padding: 12px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .routes-panel {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 360px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: visible !important;
    z-index: 1000;
  }

  .routes-panel.collapsed {
    width: 0;
    padding: 0;
    opacity: 0;
    pointer-events: none;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    background: #f5f7fa;
    border-bottom: 1px solid #e4e7ed;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .panel-header:hover {
    background: #ecf5ff;
  }

  .panel-header-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }

  .panel-header-title .el-icon {
    font-size: 18px;
    color: #409EFF;
  }

  .panel-header-action {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: #909399;
  }

  .panel-header-action .el-icon {
    font-size: 16px;
  }

  .panel-content {
    padding: 16px;
    max-height: calc(100vh - 200px);
    overflow-y: auto;
  }

  .route-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .route-item {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .route-item.active {
    transform: translateX(8px);
    border-left: 4px solid #409EFF;
  }

  .route-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 8px; */
  }

  .route-name {
    font-size: 16px;
    font-weight: 600;
    margin-right: 12px;
  }

  .route-tags {
    display: flex;
    gap: 8px;
    margin-right: auto;
  }

  .route-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  .description-icon {
    margin-right: 8px;
    color: #909399;
  }

  .waypoints {
    margin-top: 12px;
  }

  .waypoint {
    display: flex;
    align-items: flex-start;
    margin: 8px 0;
    padding: 8px;
    background: #f8f9fa;
    border-radius: 6px;
  }

  .waypoint-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .waypoint-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .waypoint-name {
    font-weight: 500;
    color: #333;
  }

  .waypoint-description {
    font-size: 12px;
    color: #666;
  }

  .float-ball {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s;
    z-index: 9999;
  }

  .float-ball:hover {
    transform: scale(1.1);
  }

  .float-ball .el-icon {
    font-size: 24px;
    color: #409EFF;
  }

  .float-ball-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #F56C6C;
    color: white;
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .route-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .favorite-btn {
    padding: 4px;
    font-size: 18px;
  }

  .favorite-btn.active {
    color: #F7BA2A;
  }

  .favorite-btn:hover {
    transform: scale(1.1);
  }

  /* 路线列表动画 */
  .route-list-enter-active,
  .route-list-leave-active {
    transition: all 0.3s ease;
  }

  .route-list-enter-from,
  .route-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .route-list-move {
    transition: transform 0.3s ease;
  }

  :deep(.el-tag--small) {
    height: 20px;
    padding: 0 6px;
    font-size: 11px;
  }

  :deep(.leaflet-container) {
    font-family: var(--el-font-family);
  }

  :deep(.leaflet-control-zoom) {
    z-index: 999; /* 确保缩放控件在路线看板下方 */
  }

  :deep(.leaflet-popup) {
    z-index: 998; /* 确保弹出窗口在路线看板下方 */
  }

  :deep(.map-tiles) {
    filter: none;
  }

  /* 添加路线阴影效果 */
  :deep(.route-line) {
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
    cursor: pointer;
    transition: opacity 0.2s;
  }

  :deep(.route-line:hover) {
    opacity: 1 !important;
  }

  /* 自定义弹出窗口样式 */
  :deep(.popup-content) {
    padding: 10px;
  }

  :deep(.popup-content h3) {
    margin: 0 0 5px 0;
    color: #333;
  }

  :deep(.popup-content p) {
    margin: 0;
    color: #666;
  }

  /* 自定义提示框样式 */
  :deep(.custom-tooltip) {
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 0;
    max-width: 200px;
  }

  :deep(.tooltip-content) {
    padding: 8px;
  }

  :deep(.tooltip-content h4) {
    margin: 0 0 4px 0;
    color: #333;
    font-size: 14px;
  }

  :deep(.tooltip-content p) {
    margin: 0;
    color: #666;
    font-size: 12px;
  }

  /* 距离标签样式 */
  :deep(.distance-label) {
    background: none !important;
  }

  :deep(.distance-label span) {
    display: inline-block;
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 12px;
    line-height: 1;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .marker-popup {
    padding: 10px;
  }

  .marker-popup h3 {
    margin: 0 0 5px 0;
    font-size: 16px;
  }

  .marker-popup p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }

  .custom-marker {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-marker div {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    font-weight: bold;
  }

  /* 确保弹出层和提示框在最上层 */
  :deep(.el-tooltip__popper),
  :deep(.el-message),
  :deep(.el-popper),
  :deep(.el-select__popper) {
    z-index: 10000 !important;
  }

  /* 标记点弹窗样式 */
  :deep(.marker-popup) {
    .leaflet-popup-content-wrapper {
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      border: 1px solid #f0f0f0;
    }
  
    .leaflet-popup-content {
      margin: 12px 16px;
      line-height: 1.4;
      min-width: 200px;
    }

    .leaflet-popup-tip {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }
  }

  /* 距离标签样式 */
  :deep(.distance-label) {
    span {
      padding: 2px 6px;
      border-radius: 4px;
      color: white;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0.9;
      transition: all 0.2s ease;
      
      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }

  .destination-panel {
    position: absolute;
    top: 10px;
    left: 50px;
    z-index: 1000;
    background: white;
    border-radius: 8px;
    padding: 16px;
    width: 320px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }

  .destination-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .destination-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--el-text-color-primary);
  }

  .destination-actions {
    display: flex;
    gap: 8px;
  }

  .destination-info {
    .el-tag {
      margin-bottom: 8px;
    }
    
    .description {
      color: var(--el-text-color-regular);
      font-size: 0.9rem;
      line-height: 1.5;
      margin: 0;
    }
  }
}
</style>

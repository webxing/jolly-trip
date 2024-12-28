<template>
  <div class="map-container">
    <div ref="mapContainer" class="map"></div>
    
    <!-- 景点卡片 -->
    <div v-if="activePoint" class="point-card">
      <div class="point-card-header">
        <h3>{{ activePoint.name }}</h3>
        <el-button class="close-btn" type="text" @click="activePoint = null">
          <el-icon><Close /></el-icon>
        </el-button>
      </div>
      <p class="point-description">{{ activePoint.description }}</p>
    </div>
    
    <div class="routes-panel" :class="{ 'collapsed': isPanelCollapsed }">
      <div class="panel-header">
        <span class="title" v-if="!isPanelCollapsed">
          <el-icon><Location /></el-icon>
          路线详情
        </span>
        <el-button circle @click="isPanelCollapsed = !isPanelCollapsed">
          <el-icon>
            <component :is="isPanelCollapsed ? 'Expand' : 'Fold'" />
          </el-icon>
        </el-button>
      </div>
      <div v-if="routes.length && !isPanelCollapsed" class="route-info">
        <!-- 路线基本信息卡片 -->
        <div class="info-card">
          <div class="card-header">
            <div class="route-title">
              <span class="route-name">{{ routes[0].name }}</span>
              <el-button 
                type="text"
                :class="{ 'is-favorite': isFavorite(routes[0].id) }"
                @click="toggleFavorite(routes[0])"
              >
                <el-icon>
                  <component :is="isFavorite(routes[0].id) ? 'StarFilled' : 'Star'" />
                </el-icon>
              </el-button>
            </div>
            <div class="route-tags">
              <el-tag size="small" type="info">{{ routes[0].theme }}</el-tag>
              <el-tag size="small" type="warning">{{ routes[0].difficulty }}</el-tag>
              <el-tag size="small" type="success">{{ routes[0].duration }}</el-tag>
            </div>
          </div>
          <p class="route-desc">{{ routes[0].description }}</p>
        </div>
        <!-- 推荐建议 -->
        <div v-if="routes[0]?.recommendations" class="section recommendations">
          <div class="section-header">
            <el-icon><InfoFilled /></el-icon>
            <h4>行程建议</h4>
          </div>
          <div class="section-content">
            <div class="best-time">
              <el-icon><Timer /></el-icon>
              <span>最佳游玩时间：{{ routes[0]?.recommendations?.bestTime }}</span>
            </div>
            <div class="tips">
              <h5>
                <el-icon><Warning /></el-icon>
                贴心提示
              </h5>
              <ul>
                <li v-for="tip in routes[0]?.recommendations?.tips" :key="tip">
                  {{ tip }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 途经点列表 -->
        <div class="section waypoints-section">
          <div class="section-header">
            <el-icon><Place /></el-icon>
            <h4>途经点</h4>
          </div>
          <div class="waypoints-list">
            <div v-for="(point, index) in routes[0].waypoints" 
                 :key="index"
                 class="waypoint-item"
                 @click="handleWaypointClick(point, routes[0])">
              <div class="waypoint-header">
                <div class="waypoint-number" :style="{ backgroundColor: colors[index % colors.length] }">{{ index + 1 }}</div>
                <div class="waypoint-name">{{ point.name }}</div>
              </div>
              <div class="waypoint-description">{{ point.description }}</div>
              <div v-if="point.subPoints" class="sub-points">
                <div v-for="subPoint in point.subPoints" 
                     :key="subPoint.name" 
                     class="sub-point-item"
                     @click.stop="handleWaypointClick(subPoint, routes[0])">
                  <el-icon><Location /></el-icon>
                  <div class="content">
                    <div class="name">{{ subPoint.name }}</div>
                    <div class="description">{{ subPoint.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { Timer, Warning, InfoFilled, Expand, Fold, Location, Star, StarFilled, Close } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-polylinedecorator/dist/leaflet.polylineDecorator.js'
import { recommendedRoutes } from '../data/recommendedRoutes'
import { useUserData } from '@/composables/useUserData'

// 路由实例
const route = useRoute()

// 用户数据管理
const { 
  addFavorite, 
  removeFavorite, 
  isFavorite, 
  addToHistory 
} = useUserData()

// 切换收藏状态
const toggleFavorite = (route) => {
  if (isFavorite(route.id)) {
    removeFavorite(route.id)
    ElMessage.success('已取消收藏')
  } else {
    addFavorite(route)
    ElMessage.success('已添加到收藏')
  }
}

// 地图实例
const map = ref(null)
const mapContainer = ref(null)

// 路线数据
const routes = ref([])
const routeLayers = ref([])
const loading = ref(false)
const isPanelCollapsed = ref(false)
const activeRouteId = ref(null)  // 当前选中的路线ID

// 颜色数组
const colors = [
  '#FF6B6B',  // 红色
  '#4ECDC4',  // 青色
  '#A388EE', // 紫色
  '#FFB347',  // 橙色
  '#D4A5A5',  // 玫瑰色
  '#FF9999',  // 珊瑚红
  '#45B7D1',  // 蓝色
  ]

// 计算两点之间的距离（单位：公里）
const calculateDistance = (point1, point2) => {
  const [lat1, lng1] = point1
  const [lat2, lng2] = point2
  const R = 6371 // 地球半径（公里）
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

// 创建标记点
const createMarker = (point, index, color) => {
  if (!point.coordinates) return null

  // 创建自定义图标
  const icon = L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-content" style="background-color: ${color}">
        <span class="marker-number">${index + 1}</span>
        <span class="marker-name">${point.name}</span>
      </div>
    `,
    iconSize: null
  })

  // 创建标记点
  const marker = L.marker([point.coordinates[1], point.coordinates[0]], {
    icon: icon,
    riseOnHover: true,
    zIndexOffset: 1000 // 确保主要途经点在最上层
  })

  // 添加点击事件
  marker.on('click', () => {
    focusWaypoint(point, false) // 主要途经点
  })

  return marker
}

// 创建分支点标记
const createSubMarker = (point, color) => {
  if (!point.coordinates) return null

  // 创建自定义图标
  const icon = L.divIcon({
    className: 'custom-marker sub-marker',
    html: `
      <div class="marker-content" style="border-color: ${color}">
        <span class="marker-name" style="color: ${color}">${point.name}</span>
      </div>
    `,
    iconSize: null
  })

  // 创建标记点
  const marker = L.marker([point.coordinates[1], point.coordinates[0]], {
    icon: icon,
    riseOnHover: true,
    zIndexOffset: 500 // 分支点层级低于主要途经点
  })

  // 添加点击事件
  marker.on('click', () => {
    focusWaypoint(point, true) // 分支点
  })

  return marker
}

// 绘制分支点连线
const drawSubPointsLine = (subPoints, color) => {
  if (!subPoints || subPoints.length < 2) return null

  const coordinates = subPoints
    .filter(point => point.coordinates && point.coordinates.length === 2)
    .map(point => [point.coordinates[1], point.coordinates[0]])

  if (coordinates.length < 2) return null

  // 创建虚线样式
  const dashLine = {
    color: color,
    weight: 2,
    opacity: 0.6,
    dashArray: '6, 8',
    lineJoin: 'round'
  }

  // 创建虚线图层
  const polyline = L.polyline(coordinates, dashLine)
  
  // 添加箭头装饰
  const decorator = L.polylineDecorator(polyline, {
    patterns: [
      {
        offset: '5%',
        repeat: '15%',
        symbol: L.Symbol.arrowHead({
          pixelSize: 12,
          polygon: false,
          pathOptions: {
            color: color,
            opacity: 0.6,
            weight: 2
          }
        })
      }
    ]
  })

  return [polyline, decorator]
}

// 清除地图上的路线图层
const clearRouteLayers = () => {
  // Remove all layers from the map
  routeLayers.value.forEach(layer => {
    if (layer) layer.remove()
  })
  // Clear the array
  routeLayers.value = []
}

// 加载路线数据
const loadRoutes = async () => {
  loading.value = true
  try {
    // 获取路由参数中的路线ID
    const routeId = route.query.id
    if (routeId) {
      // 查找指定路线
      const targetRoute = recommendedRoutes.find(r => r.id === routeId)
      if (targetRoute) {
        routes.value = [targetRoute]
        await nextTick()
        showRoute(targetRoute)
      } else {
        ElMessage.error('未找到指定路线')
      }
    } else {
      // 如果没有指定路线ID，加载所有路线
      routes.value = recommendedRoutes
      if (routes.value.length > 0) {
        await nextTick()
        showRoute(routes.value[0])
      }
    }
  } catch (error) {
    console.error('加载路线数据失败:', error)
    ElMessage.error('加载路线数据失败')
  } finally {
    loading.value = false
  }
}

// 显示单条路线
const showRoute = async (route) => {
  if (!map.value || !route || !route.waypoints) {
    console.error('地图或路线数据无效')
    return
  }

  try {
    // 添加到浏览历史
    addToHistory(route)

    const validWaypoints = route.waypoints
      .filter(waypoint => waypoint.coordinates && waypoint.coordinates.length === 2)

    if (validWaypoints.length === 0) {
      console.error('路线中没有有效的坐标点')
      return
    }

    // 清除现有图层
    clearRouteLayers()

    // 创建路线点和连线
    validWaypoints.forEach((waypoint, index) => {
      // 添加主要途经点标记
      const marker = createMarker(waypoint, index, colors[index % colors.length])
      if (marker) {
        marker.addTo(map.value)
        routeLayers.value.push(marker)
      }

      // 添加分支点标记
      if (waypoint.subPoints) {
        waypoint.subPoints.forEach(subPoint => {
          if (!subPoint.coordinates || subPoint.coordinates.length !== 2) return
          
          const subMarker = createSubMarker(subPoint, colors[index % colors.length])
          if (subMarker) {
            subMarker.addTo(map.value)
            routeLayers.value.push(subMarker)
          }
        })

        // 添加分支点之间的虚线连接
        const subLayers = drawSubPointsLine(waypoint.subPoints, colors[index % colors.length])
        if (subLayers) {
          subLayers.forEach(layer => {
            layer.addTo(map.value)
            routeLayers.value.push(layer)
          })
        }
      }

      // 如果不是最后一个点，创建到下一个点的连线
      if (index < validWaypoints.length - 1) {
        const nextWaypoint = validWaypoints[index + 1]
        const line = L.polyline(
          [
            [waypoint.coordinates[1], waypoint.coordinates[0]],
            [nextWaypoint.coordinates[1], nextWaypoint.coordinates[0]]
          ],
          {
            color: colors[index % colors.length],
            weight: 4
          }
        )
        line.addTo(map.value)
        routeLayers.value.push(line)

        // 添加距离标注
        const center = L.latLng(
          (waypoint.coordinates[1] + nextWaypoint.coordinates[1]) / 2,
          (waypoint.coordinates[0] + nextWaypoint.coordinates[0]) / 2
        )
        
        const distance = L.latLng(waypoint.coordinates).distanceTo(L.latLng(nextWaypoint.coordinates))
        const distanceText = distance > 1000 
          ? `${(distance / 1000).toFixed(1)}km`
          : `${Math.round(distance)}m`
        
        L.marker(center, {
          icon: L.divIcon({
            className: 'distance-marker',
            html: `<div class="distance-label">${distanceText}</div>`,
            iconSize: [80, 20],
            iconAnchor: [40, 10]
          })
        }).addTo(map.value)
        routeLayers.value.push(line)
      }
    })

    // 调整地图视图以显示整个路线
    const bounds = L.latLngBounds(validWaypoints.map(wp => [wp.coordinates[1], wp.coordinates[0]]))
    map.value.fitBounds(bounds, { padding: [50, 300] })

  } catch (error) {
    console.error('显示路线时出错:', error)
  }
}

// 聚焦到指定途经点
const activePoint = ref(null)
const focusWaypoint = (point, isSubPoint = false) => {
  if (!point || !point.coordinates || !map.value) return
  
  // 更新活动点位
  activePoint.value = point
  
  // 直接移动到目标位置
  map.value.setView([point.coordinates[1], point.coordinates[0]], 15, {
    animate: true,
    duration: 1,
    // 如果是主要途经点，设置偏移
    offset: !isSubPoint ? [-map.value.getSize().x * 0.2, 0] : undefined
  })
}

// 处理途经点点击
const handleWaypointClick = (point, route) => {
  if (!map.value) return
  activePoint.value = point
  // 聚焦到途经点
  map.value.setView([point.coordinates[1], point.coordinates[0]], 15, {
    animate: true
  })
  // 选中所在路线
  focusRoute(route)
}


// 聚焦路线
const focusRoute = (selectedRoute) => {
  if (!selectedRoute) return

  // 设置当前选中的路线
  activeRouteId.value = selectedRoute.id

  // 更新所有路线的显示状态
  Object.entries(routeLayers.value).forEach(([routeId, layers]) => {
    const isActive = routeId === selectedRoute.id.toString()
    if (layers.polyline) {
      layers.polyline.setStyle({
        opacity: isActive ? 0.8 : 0.4,
        weight: isActive ? 4 : 2
      })
    }
    if (layers.decorator) {
      layers.decorator.setPatterns([{
        offset: '25%',
        repeat: '50%',
        symbol: L.Symbol.arrowHead({
          pixelSize: isActive ? 12 : 8,
          pathOptions: {
            fillOpacity: isActive ? 1 : 0.6,
            weight: isActive ? 2 : 1
          }
        })
      }])
    }
    if (layers.markers) {
      layers.markers.forEach(marker => {
        const icon = marker.getIcon()
        icon.options.className = isActive ? 'route-marker active' : 'route-marker'
        marker.setIcon(icon)
      })
    }
  })
}

// 初始化地图
const initMap = () => {
  if (!mapContainer.value) return

  // 创建地图实例
  map.value = L.map(mapContainer.value, {
    center: [40.4319, 116.5704], // 张家口坐标
    zoom: 11,
    zoomControl: false // 禁用默认的缩放控件
  })

  // 在左侧添加缩放控件
  L.control.zoom({
    position: 'topleft'
  }).addTo(map.value)

  // 添加底图
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value)

  // 加载路线数据
  nextTick(() => {
    loadRoutes()
  })
}

// 监听路线变化，添加到历史记录
watch(
  [() => route.query.id, () => routes],
  ([newId, currentRoutes]) => {
    if (newId && currentRoutes?.length) {
      const routeData = currentRoutes.find(r => r.id === parseInt(newId))
      if (routeData) {
        addToHistory(routeData)
      }
    }
  },
  { immediate: true }
)

// 组件挂载时初始化
onMounted(() => {
  initMap()
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
  top: 50px;
  left: 0;
  width: 100%;
  height: calc(100vh - 50px);
  .map {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .routes-panel {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 380px;
    max-height: calc(100vh - 40px);
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 9999;
    display: flex;
    flex-direction: column;

    .panel-header {
      padding: 16px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;

      .title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 500;
        color: #333;

        .el-icon {
          font-size: 18px;
          color: #409EFF;
        }
      }
    }

    .route-info {
      padding: 16px;
      overflow-y: auto;

      .info-card {
        margin: 8px 0 30px 0;
        border-radius: 8px;

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .route-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .route-name {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .route-tags {
          display: flex;
          gap: 8px;
        }

        .route-desc {
          margin: 0;
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
      }

      .section {
        margin-bottom: 24px;

        .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;

          .el-icon {
            font-size: 18px;
            color: #409EFF;
          }

          h4 {
            margin: 0;
            font-size: 16px;
            color: #333;
          }
        }
      }

      .waypoints-section {
        .waypoints-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .waypoint-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background: #f0f2f5;
            transform: translateX(4px);
          }

          .waypoint-header {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .waypoint-number {
            width: 28px;
            height: 28px;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 500;
            margin-right: 6px;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .waypoint-name {
            font-weight: 500;
            color: #333;
            margin-bottom: 4px;
          }

          .waypoint-description {
            font-size: 13px;
            color: #666;
            line-height: 1.5;
          }

          .sub-points {
            margin-top: 8px;
            
            .sub-point-item {
              display: flex;
              align-items: flex-start;
              gap: 8px;
              padding: 6px 0;
              
              .el-icon {
                color: var(--el-color-primary);
                font-size: 16px;
                margin-top: 2px;
              }
              
              .content {
                flex: 1;
                
                .name {
                  font-size: 13px;
                  font-weight: 500;
                  color: #333;
                  margin-bottom: 2px;
                }
                
                .description {
                  font-size: 12px;
                  color: #666;
                  line-height: 1.4;
                }
              }
            }
          }
        }
      }

      .recommendations {
        .section-content {
          padding: 16px;
          background: #f8f9fa;
          border-radius: 8px;

          .best-time {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
            
            .el-icon {
              color: #409EFF;
              font-size: 16px;
            }

            span {
              font-size: 14px;
              color: #666;
            }
          }

          .tips {
            h5 {
              display: flex;
              align-items: center;
              gap: 8px;
              margin: 0 0 12px;
              font-size: 14px;
              color: #333;

              .el-icon {
                color: #E6A23C;
                font-size: 16px;
              }
            }

            ul {
              margin: 0;
              padding-left: 20px;
              
              li {
                margin: 8px 0;
                font-size: 13px;
                color: #666;
                line-height: 1.5;

                &::marker {
                  color: #409EFF;
                }
              }
            }
          }
        }
      }
    }

    &.collapsed {
      width: auto;
      background: none;
      box-shadow: none;

      .panel-header {
        padding: 0;
        border: none;
        
        :deep(.el-button) {
          width: 48px;
          height: 48px;
          background: #409EFF;
          color: white;
          box-shadow: 0 4px 16px rgba(64, 158, 255, 0.3);
          border: 2px solid white;
          
          .el-icon {
            font-size: 22px;
          }
          
          &:hover {
            transform: scale(1.1);
            background: #66b1ff;
          }
        }
      }

      .route-info {
        display: none;
      }
    }
  }

  .point-card {
    position: absolute;
    top: 20px;
    left: 50%;
    width: 300px;
    transform: translateX(-50%);
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    padding: 16px;
    z-index: 1000;
    
    .point-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      
      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }
      
      .close-btn {
        padding: 4px;
        
        :deep(.el-icon) {
          font-size: 18px;
          color: #999;
        }
      }
    }
    
    .point-description {
      margin: 0;
      font-size: 14px;
      color: #666;
      line-height: 1.5;
    }
  }
}

:deep(.custom-marker) {
  .marker-content {
    display: flex;
    align-items: center;
    padding: 4px 8px 4px 4px;
    border-radius: 16px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border: 2px solid transparent;
    transition: all 0.2s ease;
    
    .marker-number {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: inherit;
      color: white;
      border-radius: 50%;
      font-size: 12px;
      font-weight: 500;
      margin-right: 6px;
    }
    
    .marker-name {
      color: white;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  &.sub-marker {
    .marker-content {
      background: white;
      border: 2px solid;
      padding: 2px 8px;
      transform: scale(0.9);
      
      &:hover {
        transform: scale(1);
        background: white;
      }
    }
  }
}

:deep(.distance-label) {
  background: rgba(255, 255, 255, 0.9);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.route-title .el-button {
  padding: 4px;
  color: var(--el-text-color-secondary);
}

.route-title .el-button.is-favorite {
  color: #f7ba2a;
}
</style>

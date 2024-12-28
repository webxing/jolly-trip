import { ref, onMounted, watch } from 'vue'

// 存储键名
const STORAGE_KEYS = {
  PROFILE: 'user_profile',
  FAVORITES: 'user_favorites',
  HISTORY: 'user_history',
  FAVORITE_DESTINATIONS: 'favorite_destinations'
}

// 默认用户数据
const DEFAULT_USER = {
  name: '游客',
  avatar: null,
  visitedCount: 0,
  favoriteCount: 0,
  favoriteDestCount: 0
}

// 用户数据管理
export function useUserData() {
  const userProfile = ref({ ...DEFAULT_USER })
  const favorites = ref([])
  const visitHistory = ref([])
  const favoriteDestinations = ref([])

  // 从本地存储加载数据
  const loadFromStorage = () => {
    try {
      // 加载用户信息
      const storedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE)
      if (storedProfile) {
        userProfile.value = JSON.parse(storedProfile)
      }

      // 加载收藏列表
      const storedFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITES)
      if (storedFavorites) {
        favorites.value = JSON.parse(storedFavorites)
      }

      // 加载历史记录
      const storedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY)
      if (storedHistory) {
        visitHistory.value = JSON.parse(storedHistory)
      }

      // 加载收藏的目的地
      const storedDestinations = localStorage.getItem(STORAGE_KEYS.FAVORITE_DESTINATIONS)
      if (storedDestinations) {
        favoriteDestinations.value = JSON.parse(storedDestinations)
      }
    } catch (error) {
      console.error('Failed to load user data:', error)
      resetData()
    }
  }

  // 保存数据到本地存储
  const saveToStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(userProfile.value))
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites.value))
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(visitHistory.value))
      localStorage.setItem(STORAGE_KEYS.FAVORITE_DESTINATIONS, JSON.stringify(favoriteDestinations.value))
    } catch (error) {
      console.error('Failed to save user data:', error)
    }
  }

  // 重置数据
  const resetData = () => {
    userProfile.value = { ...DEFAULT_USER }
    favorites.value = []
    visitHistory.value = []
    favoriteDestinations.value = []
    saveToStorage()
  }

  // 添加收藏
  const addFavorite = (route, destinationId = null) => {
    if (!favorites.value.find(f => f.id === route.id)) {
      favorites.value.push({
        id: route.id,
        name: route.name,
        description: route.description,
        theme: route.theme,
        difficulty: route.difficulty,
        duration: route.duration,
        waypoints: route.waypoints,
        location: route.location,
        tags: route.tags || [],
        destinationId: destinationId,
        addedAt: new Date().toISOString()
      })
      userProfile.value.favoriteCount = favorites.value.length
    }
  }

  // 取消收藏
  const removeFavorite = (routeId) => {
    favorites.value = favorites.value.filter(route => route.id !== routeId)
    userProfile.value.favoriteCount = favorites.value.length
  }

  // 检查是否已收藏
  const isFavorite = (routeId) => {
    return favorites.value.some(route => route.id === routeId)
  }

  // 获取目的地名称
  const getDestinationName = (destinationId) => {
    if (!destinationId) return null
    const destination = favoriteDestinations.value.find(d => d.id === destinationId)
    return destination ? destination.name : null
  }

  // 获取目的地相关的收藏路线
  const getDestinationFavorites = (destinationId) => {
    return favorites.value.filter(route => route.destinationId === destinationId)
  }

  // 获取目的地下收藏的路线数量
  const getDestinationFavoriteCount = (destinationId) => {
    return getDestinationFavorites(destinationId).length
  }

  // 添加目的地收藏
  const addFavoriteDestination = (destination) => {
    if (!favoriteDestinations.value.find(d => d.id === destination.id)) {
      favoriteDestinations.value.push({
        id: destination.id,
        name: destination.name,
        description: destination.description,
        region: destination.region,
        location: destination.location,
        image: destination.image,
        tags: destination.tags || [],
        addedAt: new Date().toISOString()
      })
      userProfile.value.favoriteDestCount = favoriteDestinations.value.length
    }
  }

  // 取消目的地收藏
  const removeFavoriteDestination = (destinationId) => {
    // 移除目的地
    favoriteDestinations.value = favoriteDestinations.value.filter(dest => dest.id !== destinationId)
    userProfile.value.favoriteDestCount = favoriteDestinations.value.length
    
    // 同时移除该目的地下所有收藏的路线
    favorites.value = favorites.value.filter(route => route.destinationId !== destinationId)
    userProfile.value.favoriteCount = favorites.value.length
  }

  // 检查目的地是否已收藏
  const isDestinationFavorite = (destinationId) => {
    return favoriteDestinations.value.some(dest => dest.id === destinationId)
  }

  // 添加到历史记录
  const addToHistory = (route, destinationId = null) => {
    // 避免重复添加相同的记录
    const existingIndex = visitHistory.value.findIndex(h => h.id === route.id)
    if (existingIndex !== -1) {
      // 如果已存在，更新访问时间
      visitHistory.value[existingIndex].date = new Date().toISOString()
    } else {
      visitHistory.value.unshift({
        id: route.id,
        name: route.name,
        description: route.description,
        theme: route.theme,
        difficulty: route.difficulty,
        duration: route.duration,
        waypoints: route.waypoints,
        location: route.location,
        tags: route.tags,
        destinationId: destinationId,
        date: new Date().toISOString()
      })
      userProfile.value.visitedCount = visitHistory.value.length
    }
  }

  // 获取目的地相关的历史记录
  const getDestinationHistory = (destinationId) => {
    return visitHistory.value.filter(item => item.destinationId === destinationId)
  }

  // 清空历史记录
  const clearHistory = () => {
    visitHistory.value = []
    userProfile.value.visitedCount = 0
  }

  // 更新用户信息
  const updateProfile = (data) => {
    userProfile.value = {
      ...userProfile.value,
      ...data
    }
  }

  // 监听数据变化，自动保存
  watch(
    [userProfile, favorites, visitHistory, favoriteDestinations],
    () => {
      saveToStorage()
    },
    { deep: true }
  )

  // 组件挂载时加载数据
  onMounted(() => {
    loadFromStorage()
  })

  return {
    userProfile,
    favorites,
    visitHistory,
    favoriteDestinations,
    addFavorite,
    removeFavorite,
    isFavorite,
    getDestinationName,
    getDestinationFavorites,
    getDestinationFavoriteCount,
    addFavoriteDestination,
    removeFavoriteDestination,
    isDestinationFavorite,
    addToHistory,
    getDestinationHistory,
    clearHistory,
    updateProfile,
    resetData
  }
}

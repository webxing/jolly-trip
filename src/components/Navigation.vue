<template>
  <nav class="navigation">
    <!-- 移动端菜单按钮 -->
    <el-button class="menu-button" @click="isMenuOpen = !isMenuOpen" v-show="isMobile">
      <el-icon><Menu /></el-icon>
    </el-button>

    <!-- 导航菜单 -->
    <div class="nav-menu" :class="{ 'is-open': isMenuOpen || !isMobile }">
      <div class="menu-header" v-if="isMobile">
        <el-button @click="isMenuOpen = false">
          <el-icon><Close /></el-icon>
        </el-button>
      </div>

      <!-- 导航链接 -->
      <router-link 
        v-for="item in menuItems" 
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: currentRoute === item.path }"
        @click="isMenuOpen = false"
      >
        <div class="nav-icon">
          <img :src="item.icon" :alt="item.name">
        </div>
        <span class="nav-text">{{ item.name }}</span>
      </router-link>
    </div>

    <!-- 用户信息 -->
    <div class="user-info" v-if="characterNickname">
      <el-dropdown trigger="click">
        <div class="user-avatar">
          <img :src="characterAvatar" :alt="characterNickname">
          <span class="nickname">{{ characterNickname }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/profile')">
              个人资料
            </el-dropdown-item>
            <el-dropdown-item @click="$router.push('/settings')">
              设置
            </el-dropdown-item>
            <el-dropdown-item divided @click="handleLogout">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </nav>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { Menu, Close } from '@element-plus/icons-vue'

export default {
  name: 'Navigation',
  components: {
    Menu,
    Close
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const isMenuOpen = ref(false)
    const isMobile = ref(window.innerWidth <= 768)

    // 菜单项配置
    const menuItems = [
      {
        name: '首页',
        path: '/',
        icon: '/icons/home.svg'
      },
      {
        name: '世界',
        path: '/world',
        icon: '/icons/map.svg'
      },
      {
        name: '探索',
        path: '/exploration',
        icon: '/icons/explore.svg'
      },
      {
        name: '任务',
        path: '/tasks',
        icon: '/icons/quest.svg'
      },
      {
        name: '社交',
        path: '/social',
        icon: '/icons/social.svg'
      },
      {
        name: '收藏',
        path: '/collection',
        icon: '/icons/collection.svg'
      }
    ]

    // 计算属性
    const currentRoute = computed(() => route.path)
    const characterNickname = computed(() => store.getters['character/characterNickname'])
    const characterAvatar = computed(() => store.getters['character/characterAvatar'])

    // 响应式处理
    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768
      if (!isMobile.value) {
        isMenuOpen.value = false
      }
    }

    // 生命周期钩子
    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    // 方法
    const handleLogout = () => {
      store.dispatch('character/logout')
    }

    return {
      isMenuOpen,
      isMobile,
      menuItems,
      currentRoute,
      characterNickname,
      characterAvatar,
      handleLogout
    }
  }
}
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
}

.menu-button {
  display: none;
}

.nav-menu {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.2);
}

.nav-icon {
  width: 24px;
  height: 24px;
}

.nav-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.user-avatar:hover {
  background: rgba(255, 255, 255, 0.1);
}

.user-avatar img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.nickname {
  color: white;
  font-size: 14px;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: -100%;
    bottom: 0;
    width: 80%;
    max-width: 300px;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 20px;
    transition: left 0.3s ease;
  }

  .nav-menu.is-open {
    left: 0;
  }

  .menu-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  .nav-item {
    width: 100%;
  }

  .user-avatar .nickname {
    display: none;
  }
}
</style>

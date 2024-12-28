<template>
  <div id="app">
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header height="60px">
        <nav class="nav-bar">
          <router-link to="/" class="logo">
            <img src="@/assets/logo.svg" alt="Jolly Trip Logo" />
            <span>Jolly Trip</span>
          </router-link>
          <div class="nav-links">
            <router-link to="/" class="nav-link">
              <el-icon><HomeFilled /></el-icon>
              首页
            </router-link>
            <router-link to="/routes" class="nav-link">
              <el-icon><Compass /></el-icon>
              路线
            </router-link>
            <router-link to="/destinations" class="nav-link">
              <el-icon><Guide /></el-icon>
              目的地
            </router-link>
            <router-link to="/profile" class="nav-link">
              <el-icon><UserFilled /></el-icon>
              个人中心
            </router-link>
          </div>
        </nav>
      </el-header>

      <!-- 主要内容区域 -->
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { HomeFilled, Compass, Guide, UserFilled } from '@element-plus/icons-vue'
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: calc(100vw - 16px);
  z-index: 100;
  padding: 0;
}

.nav-bar {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--el-color-primary);
  font-size: 1.5em;
  font-weight: bold;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #606266;
  font-size: 1.1em;
  transition: all 0.3s ease;
  padding: 6px 12px;
  border-radius: 4px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}

.el-main {
  padding: 0;
  height: calc(100vh - 60px);
  overflow-x: hidden;
}

/* 路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-bar {
    padding: 0 10px;
  }

  .logo span {
    display: none;
  }

  .nav-links {
    gap: 15px;
  }

  .nav-link {
    font-size: 1em;
  }
}
</style>

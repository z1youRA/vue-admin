<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside :width="asideWidth" class="sidebar-container">
        <Menu />
      </el-aside>
      <el-container
        class="container"
        :class="{ hidderContainer: !$store.getters.getSidebarStatus }"
      >
        <el-header><Headers /></el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from '@/layout/Menu/MenuComponent.vue'
import Headers from '@/layout/Headers/HeadersComponent.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const cssVars = {
  $menuText: '#bfcbd9',
  $menuActiveText: '#ffd04b',
  $subMenuActiveText: '#ffd04b',

  $menuBg: '#304156',
  $menuHover: '#263445',

  $subMenuBg: '#1f2d3d',
  $subMenuHover: '#001528',

  $sideBarWidth: '210px',
  $hideSideBarWidth: '67px',
  $sideBarDuration: '0.28s'
}

const store = useStore()
const asideWidth = computed(() => {
  return store.getters.getSidebarStatus
    ? cssVars.$sideBarWidth
    : cssVars.$hideSideBarWidth
})
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
:deep(.el-header) {
  padding: 0;
}
</style>

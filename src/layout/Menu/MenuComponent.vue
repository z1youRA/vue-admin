<template>
  <el-menu
    :active-text-color="cssVars.$menuActiveText"
    :background-color="cssVars.$menuBg"
    class="el-menu-vertical-demo"
    :default-active="`/${recentPath}`"
    text-color="#fff"
    router
    unique-opened
  >
    <!-- 此处index期望一个String -->
    <el-sub-menu :index="`${item.id}`" v-for="item in menuList" :key="item.id">
      <template #title>
        <!-- <el-icon><location /></el-icon> -->
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="it.path"
        v-for="it in item.children"
        :key="it.id"
        @click="savePath(it.path)"
        >{{ it.authName }}</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { getMenuList } from '@/api/menu'
import { ref } from 'vue'

const menuList = ref([])
const initMenuList = async () => {
  menuList.value = await getMenuList()
}
initMenuList()

//点击menu item时调用savePath保存刚才访问的path
const recentPath = ref(sessionStorage.getItem('recent-path') || '/users')
console.log(recentPath.value)
const savePath = (path) => {
  sessionStorage.setItem('recent-path', '/' + path)
}

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
</script>

<style lang="scss" scoped></style>

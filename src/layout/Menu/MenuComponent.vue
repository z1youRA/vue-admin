<template>
  <el-menu
    :active-text-color="cssVars.$menuActiveText"
    :background-color="cssVars.$menuBg"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <!-- 此处index期望一个String -->
    <el-sub-menu :index="`${item.id}`" v-for="item in menuList" :key="item.id">
      <template #title>
        <!-- <el-icon><location /></el-icon> -->
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        :index="`/${it.path}`"
        v-for="it in item.children"
        :key="it.id"
        >{{ it.authName }}</el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { getMenuList } from '@/api/menu'
import { ref } from 'vue'

const cssVars = {
  $menuText: '#bfcbd9',
  $menuActiveText: '#ffffff',
  $subMenuActiveText: '#f4f4f5',

  $menuBg: '#304156',
  $menuHover: '#263445',

  $subMenuBg: '#1f2d3d',
  $subMenuHover: '#001528',

  $sideBarWidth: '210px',
  $hideSideBarWidth: '67px',
  $sideBarDuration: '0.28s'
}

const menuList = ref([])
const initMenuList = async () => {
  menuList.value = await getMenuList()
}

initMenuList()
</script>

<style lang="scss" scoped></style>

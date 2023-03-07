<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleLogout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
const squareUrl = ref(
  'https://img.58tg.com/up/allimg/tx29/08151048279757835.jpg'
)

const store = useStore()

const handleLogout = () => {
  store.dispatch('app/logout')
}
</script>

<style scoped lang="scss"></style>

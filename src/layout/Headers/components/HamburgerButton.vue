<template>
  <div class="hamburger-container" @click="toggleSidebarStatus" id="hamburger">
    <svg-icon class="hamburger" :name="iconName"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const toggleSidebarStatus = () => {
  store.commit('app/toggleSidebarStatus')
}

const iconName = computed(() => {
  return store.getters.getSidebarStatus
    ? 'hamburger-opened'
    : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

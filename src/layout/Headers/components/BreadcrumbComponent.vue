<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index"
      ><span v-if="index === breadcrumbList.length - 1" class="no-redirect">{{
        item.name
      }}</span>
      <span v-else class="redirect" @click="handleRedirect(item.path)">
        {{ item.name }}</span
      >
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()
const router = useRouter()

const breadcrumbList = ref([])

const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched
}

watch(
  route,
  () => {
    initBreadcrumbList()
  },
  { immediate: true, deep: true }
)

const handleRedirect = (path) => {
  router.push(path)
}
</script>

<style scoped lang="scss">
.redirect {
  cursor: pointer;
}
</style>

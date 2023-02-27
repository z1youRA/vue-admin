<template>
  <svg class="svg-icon" aria-hidden="true">
    <!-- 重用SVG文档中其他位置（包括 <g>元素和 <symbol>元素）的SVG形状 -->
    <use :xlink:href="symbolID"></use>
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const symbolID = computed(() => {
  return `#icon-${props.name}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<template>
  <span :class="tailwind">
    <font-awesome-icon :icon="[category, icon]" :size="size"/>
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  category: string,
  icon: string,
  size?: string,
  tailwind?: string
}>()
</script>

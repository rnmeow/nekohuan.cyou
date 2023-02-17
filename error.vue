<template>
  <p>Redirecting...</p>
</template>

<script lang="ts" setup>
await navigateTo({ path: '/' }, { redirectCode: 301 })
</script>

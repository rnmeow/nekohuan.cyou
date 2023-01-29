<template>
  <button
    id="top"
    class="
      hidden fixed bg-white/95 z-30 bottom-4 right-4 p-4 shadow rounded-full
      transition duration-200 ease-in-out hover:shadow-lg hover:scale-105
      dark:bg-neutral-800/90 dark:text-neutral-300 dark:hover:shadow-none dark:hover:scale-110
    "
    onclick="window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })"
  >
    <FAIcon category="fas" icon="angle-up" size="lg"/>
  </button>
</template>

<script lang="ts">
export default {
  mounted() {
    addEventListener('scroll', () => {
      if (scrollY > 200) {
        document.getElementById('top')?.classList.remove('hidden')
      } else {
        document.getElementById('top')?.classList.add('hidden')
      }
    })
  }
}
</script>

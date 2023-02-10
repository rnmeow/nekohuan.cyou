<template>
  <footer class="py-8">
    <section class="max-w-5xl mx-auto flex flex-col px-8">
      <div class="mt-15 text-sm sm:flex sm:justify-between dark:text-neutral-300">
        <p>
          <FAIcon category="far" icon="copyright" size="sm"/> 郭桓桓 {{ outputYear(2023) }} / 使用 <FAIcon category="fas" icon="heart" tailwind="text-red-600"/> 和 <NuxtLink to="https://nuxt.com" target="_blank" class="decoration-2 hover:underline">Nuxt 3</NuxtLink> 開發
        </p>
        <p v-if="$route.path === '/blog' || $route.path.includes('/post')" class="mt-1 sm:mt-0">
          <NuxtLink to="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
            <img
              src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
              class="hover:rotate-6" type="image/png" alt="CC BY-NC-SA 4.0"
            />
          </NuxtLink>
        </p>
        <p v-else class="mt-1 sm:mt-0">
          由
          <NuxtLink
            to="https://cloudflare.com"
            target="_blank"
            aria-label="Link to Cloudflare"
          >
            <img
              class="inline hover:rotate-6"
              src="https://img.shields.io/badge/Cloudflare-f6821f?style=flat-square&logo=Cloudflare&logoColor=white"
              type="image/svg" alt="Cloudflare badge"
            />
          </NuxtLink>
          和
          <NuxtLink to="https://render.com" target="_blank" aria-label="Link to Render">
            <img
              class="inline hover:rotate-6"
              src="https://img.shields.io/badge/Render-0abfa1?style=flat-square&logo=Render&logoColor=white"
              type="image/svg" alt="Render badge"
            />
          </NuxtLink>
          驅動
        </p>
      </div>
    </section>
  </footer>
  <ScrollTop/>
</template>

<script lang="ts">
export default {
  methods: {
    outputYear(origYear: number): string | number {
      const thisYear: number = new Date().getFullYear()
      if (thisYear !== origYear) return `${origYear}-${thisYear}`
      else if (thisYear === origYear) return origYear
      else return 2023 // hardcoded fallback
    }
  }
}
</script>

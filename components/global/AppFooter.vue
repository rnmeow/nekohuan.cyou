<template>
  <footer class="py-8">
    <section class="max-w-5xl mx-auto flex flex-col px-8">
      <div class="mt-15 text-sm sm:flex sm:justify-between dark:text-neutral-300">
        <p>
          <FAIcon category="far" icon="copyright" size="sm"/> {{ new Date().getFullYear() }} 雨喵 / 使用 <FAIcon category="fas" icon="heart" tailwind="text-red-600"/> 和 <NuxtLink to="https://nuxt.com" target="_blank" class="text-emerald-700 decoration-2 hover:underline dark:text-emerald-400">Nuxt 3</NuxtLink> 開發
        </p>
        <p v-if="$route.path === '/blog' || $route.path.includes('/post')" class="mt-1 sm:mt-0">
          <NuxtLink to="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
            <NuxtImg
              src="external/https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
              class="hover:rotate-6" format="webp" alt="CC BY-NC-SA 4.0"
            />
          </NuxtLink>
        </p>
        <p v-else class="mt-1 sm:mt-0">
          由
          <NuxtLink
            to="https://cloudflare.com"
            target="_blank"
            class="text-emerald-700 decoration-2 hover:underline dark:text-emerald-400"
            aria-label="Link to Cloudflare">
            Cloudflare</NuxtLink>
          和
          <NuxtLink
            to="https://zeabur.com"
            target="_blank"
            class="text-emerald-700 decoration-2 hover:underline dark:text-emerald-400"
            aria-label="Link to Zeabur">
            Zeabur</NuxtLink>
          強力驅動
        </p>
      </div>
    </section>
  </footer>
  <ScrollTop/>
</template>

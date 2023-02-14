<template>
  <section class="flex items-center max-w-5xl h-screen mx-auto dark:text-neutral-300">
    <Head>
      <Title>首頁 | kuohuanhuan</Title>
    </Head>
    <div class="max-w-5xl mx-8 space-y-6">
      <div class="flex flex-col-reverse md:flex-row md:justify-between">
        <div class="space-y-4">
          <NuxtImg
            src="/avatar.avif"
            class="h-20 w-20 mb-8 rounded-full md:h-28 md:w-28 md:transform-none"
            format="avif" sizes="sm:80px md:112px" alt="Avatar"
          />
          <h1 class="text-3xl font-bold md:text-4xl">郭桓桓 (@kuohuanhuan)</h1>
          <h2 class="font-semibold font-courier">
            <VueWriter
              :array="status" :erase-speed="75" :type-speed="100"
              class="after:content-['▊'] after:font-mono after:animate-ping"
            />
          </h2>
          <p class="text-lg">
            一個來自臺灣 🇹🇼 的前端 Coder 👨🏻‍💻、Podcast 愛好者 📻、部落客 ✍️ 和學生 👨‍🎓。
            <br/>
            目前正在學習 <NuxtLink to="https://go.dev" target="_blank" class="decoration-2 hover:underline">Golang</NuxtLink> <FAIcon category="fab" icon="golang" tailwind="text-sky-600 dark:text-sky-400"/>、<NuxtLink to="https://v3.vuejs.org" target="_blank" class="decoration-2 hover:underline">Vue 3</NuxtLink> <FAIcon category="fab" icon="vuejs" tailwind="text-emerald-600 dark:text-emerald-400"/>、<NuxtLink to="https://git-scm.com" target="_blank" class="decoration-2 hover:underline">Git</NuxtLink> <FAIcon category="fab" icon="git-alt" tailwind="text-orange-600 dark:text-orange-400"/> 和 <NuxtLink to="https://nodejs.org" target="_blank" class="decoration-2 hover:underline">Node.js</NuxtLink> <FAIcon category="fab" icon="node-js" tailwind="text-lime-600 dark:text-lime-400"/> ……<!-- WHAT A MESS?-->
          </p>
        </div>
      </div>
      <div class="flex gap-6">
        <NuxtLink
          v-for="i in SOCIAL_LINKS"
          :key="i.key"
          :to="i.href"
          target="_blank"
          class="transition duration-200 ease-in-out hover:text-neutral-800 hover:scale-125 dark:hover:text-white"
          :aria-label="`Social link to ${i.icon}`"
        >
          <FAIcon category="fab" :icon="i.icon" size="lg"/>
        </NuxtLink>
        <NuxtLink
          :to="`mailto:${MAIL_ADDRESS}`" target="_blank"
          class="transition duration-200 ease-in-out hover:text-neutral-800 hover:scale-125 dark:hover:text-neutral-100"
          aria-label="Send Email"
        >
          <FAIcon category="fas" icon="envelope" size="lg"/>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import VueWriter from 'vue-writer'
import { status } from '@/utils/status'
import { SOCIAL_LINKS } from '@/config/links'
import { MAIL_ADDRESS } from '@/config/personal-data'
</script>

<template>
  <section class="mx-auto flex h-screen max-w-5xl items-center dark:text-neutral-300">
    <Head>
      <Title>首頁 | rnmeow</Title>
    </Head>
    <div class="mx-8 max-w-5xl space-y-6">
      <div class="flex flex-col-reverse md:flex-row md:justify-between">
        <div class="space-y-4">
          <NuxtImg
            src="/avatar_neo.png"
            class="mb-8 h-20 w-20 rounded-full md:h-28 md:w-28 md:transform-none"
            format="avif"
            sizes="sm:80px md:112px"
            alt="Avatar"
          />
          <h1 class="text-3xl font-bold md:text-4xl">雨喵 (Connor Kuo)</h1>
          <h2 class="font-mono font-medium">
            <VueWriter
              :array="[`${age} y/o • TNFSH • Developer`]"
              :iterations="1"
              :type-speed="100"
              class="after:animate-ping after:font-mono after:content-['\_']"
            />
          </h2>
          <p class="text-lg">
            一個來自台灣 <span class="icon-taiwan"></span> 台南的 Web（主要是前端）開發者 👨🏻‍💻、部落客 ✍️、高中生 👨‍🎓。
            <br />
            專精
            <NuxtLink to="https://go.dev" target="_blank" class="decoration-2 hover:underline"
              >Go</NuxtLink
            > <FAIcon category="fab" icon="golang" tailwind="text-sky-600 dark:text-sky-400" />、<NuxtLink to="https://ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank" class="decoration-2 hover:underline"
              >JavaScript</NuxtLink
            > <FAIcon category="fab" icon="js-square" tailwind="text-yellow-600 dark:text-yellow-400" />，正摸索邊緣運算 <FAIcon category="fas" icon="microchip" tailwind="text-stone-600 dark:text-stone-400" /> 等技術。
          </p>
        </div>
      </div>
      <div class="flex gap-6">
        <NuxtLink
          v-for="i in SOCIAL_LINKS"
          :key="i.key"
          :to="i.href"
          target="_blank"
          class="transition duration-200 ease-in-out hover:scale-125 hover:text-neutral-800 dark:hover:text-white"
          :aria-label="`Social media link of ${i.icon}`"
        >
          <FAIcon category="fab" :icon="i.icon" size="lg" />
        </NuxtLink>
        <NuxtLink
          :to="`mailto:${email}`"
          target="_blank"
          class="transition duration-200 ease-in-out hover:scale-125 hover:text-neutral-800 dark:hover:text-neutral-100"
          aria-label="Send Email"
        >
          <FAIcon category="fas" icon="envelope" size="lg" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import VueWriter from 'vue-writer'
import { SOCIAL_LINKS } from '@/config/links'

const birthday = atob('MjAwOC0xMC0xOQ==')
const email = atob('dG91Y2hAcm5tZW93LmNvbQ==')

const age = ((new Date().getTime() - Date.parse(birthday)) / (24 * 60 * 60 * 1000 * 365)).toFixed(2)
</script>

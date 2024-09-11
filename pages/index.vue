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
            一個來自台灣 <svg width="1rem" height="1.37rem" viewBox="0 2 18 22" style="display: inline-block;">
              <path fill="currentColor" d="M14.432,11.184c0.275-1.218,0.18-2.865,0.945-3.556c1.694-1.535,0.085-4.014,1.905-5.323
                c0.012-0.011-0.123-0.258-0.216-0.375C16.386,1.082,15.158,1.099,14.375,0c-0.757,1.601-2.726,1.131-3.464,2.396
                c-0.767,1.322-1.876,2.355-2.676,3.625c-0.961,1.519-2.236,2.95-2.742,4.612c-0.585,1.913-1.066,4.003,0.21,6.051
                c0.567,0.909,0.897,1.897,1.959,2.358c0.798,0.348,1.075,1.067,1.183,1.839c0.08,0.575-0.178,1.397,0.776,1.288
                c0.7-0.077,0.692-0.805,0.645-1.371c-0.101-1.233,0.173-2.51,0.98-3.277C13.1,15.745,13.896,13.56,14.432,11.184z"
              />
            </svg> 台南的 Web（主要是前端）開發者 👨🏻‍💻、部落客 ✍️、高中生 👨‍🎓。
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

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
            一個來自台灣 <span class="icon-taiwan"></span> 台南的 Web（主要是前端）開發者 👨🏻‍💻、部落客
            ✍️、高中生 👨‍🎓。
            <br />
            專精
            <NuxtLink to="https://go.dev" target="_blank" class="decoration-2 hover:underline"
              >Go</NuxtLink
            >{{ ' ' }}
            <FAIcon
              category="fab"
              icon="golang"
              tailwind="text-sky-600 dark:text-sky-400"
            />、<NuxtLink
              to="https://ecma-international.org/publications-and-standards/standards/ecma-262/"
              target="_blank"
              class="decoration-2 hover:underline"
              >JavaScript</NuxtLink
            >{{ ' ' }}
            <FAIcon
              category="fab"
              icon="js-square"
              tailwind="text-yellow-600 dark:text-yellow-400"
            />，正摸索邊緣運算
            <FAIcon category="fas" icon="microchip" tailwind="text-stone-600 dark:text-stone-400" />
            等技術。
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
          :to="`mailto:${emailAddr}`"
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

if (process.client) {
  const { instance } = await WebAssembly.instantiate(
    new Uint8Array([
      0, 97, 115, 109, 1, 0, 0, 0, 1, 8, 2, 96, 0, 0, 96, 0, 1, 127, 3, 3, 2, 0, 1, 5, 3, 1, 0, 1,
      6, 6, 1, 127, 0, 65, 16, 11, 7, 47, 3, 17, 109, 97, 116, 100, 117, 99, 97, 105, 95, 116, 108,
      107, 99, 103, 117, 121, 107, 0, 0, 14, 103, 101, 116, 95, 97, 114, 114, 95, 108, 101, 110,
      103, 116, 104, 0, 1, 6, 109, 101, 109, 111, 114, 121, 2, 0, 10, 75, 2, 68, 1, 3, 127, 65, 0,
      33, 0, 35, 0, 65, 1, 107, 33, 1, 3, 64, 2, 64, 32, 0, 32, 1, 79, 13, 0, 32, 0, 45, 0, 0, 33,
      2, 32, 0, 32, 1, 45, 0, 0, 58, 0, 0, 32, 1, 32, 2, 58, 0, 0, 32, 0, 65, 1, 106, 33, 0, 32, 1,
      65, 1, 107, 33, 1, 12, 1, 11, 11, 11, 4, 0, 35, 0, 11, 11, 22, 1, 0, 65, 0, 11, 16, 146, 147,
      134, 80, 152, 143, 126, 133, 133, 136, 85, 124, 118, 135, 128, 132
    ])
  )

  ;(instance.exports.matducai_tlkcguyk as CallableFunction)()

  const mem = instance.exports.memory as WebAssembly.Memory
  const len = instance.exports.get_arr_length as CallableFunction

  const arr = new Uint8Array(mem.buffer, 0, len() satisfies number)

  for (let i = 0; i < arr.length; i++) {
    arr[i] -= i <= 0x09 ? 0x10 + i : 0x16 + i
  }

  localStorage.setItem('email', new TextDecoder().decode(arr))
}

const emailAddr = ref('')

onMounted(() => {
  // @ts-ignore
  emailAddr.value = localStorage.getItem('email')
})

const age = (
  (new Date().getTime() - Date.parse(atob('MjAwOC0xMC0xOQ=='))) /
  (24 * 60 * 60 * 1000 * 365)
).toFixed(2)
</script>

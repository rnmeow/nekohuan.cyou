<template>
  <section class="relative mx-auto max-w-5xl min-h-screen px-8 py-24 dark:text-neutral-300">
    <Head>
      <Title>友人帳 | kuohuanhuan</Title>
    </Head>
    <h1 class="font-bold text-neutral-800 dark:text-neutral-200">友情連結</h1>
    <p class="leading-8">
      在網路世界走跳，結交的一群朋友 😀
      <br/>
      想掛連結？請瀏覽 <NuxtLink to="https://github.com/kuohuanhuan/blog" target="_blank" class="decoration-2 hover:underline">GitHub 儲存庫</NuxtLink>，並遵照 <code>`README.md`</code> 檔案的指示進行 😉
    </p>
    <hr class="my-8"/>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <p v-if="pending">載入中，請耐心等待……</p>
      <div
        v-for="link in links"
        v-else
        :key="link"
        class="
          shadow rounded-xl p-4 m-2
          transition duration-100 ease-in-out hover:text-neutral-800 hover:scale-[102.5%] hover:shadow-lg
          dark:shadow-neutral-700 dark:hover:shadow-md dark:hover:shadow-neutral-700
        "
      >
        <NuxtLink :to="link.link" target="_blank" class="block">
          <div class="flex items-center">
            <NuxtImg
              :src="link.avatar"
              class="w-16 h-16 rounded-full"
              alt="avatar"
            />
            <div class="ml-4 leading-6">
              <h2 class="font-bold text-neutral-700 dark:text-neutral-300">{{ link.name }}</h2>
              <p class="text-neutral-600 dark:text-neutral-400">{{ link.descr }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { LINKS_JSON_URL } from '@/config/links'
const { pending, data: links } = useLazyFetch<any>(() => LINKS_JSON_URL, { server: false })
</script>

<script lang="ts">
export default {
  methods: {
    returnPostTime (datetime: string, devide: number) {
      return Math.floor((new Date().getTime() - new Date(datetime).getTime()) / (devide * 60000))
    }
  }
}
</script>

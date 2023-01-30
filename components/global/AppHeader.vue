<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/60 shadow backdrop-blur-sm dark:bg-[#303030]/40"
  >
    <nav class="flex h-16 mx-auto max-w-5xl items-center justify-between px-8 dark:text-neutral-200">
      <button
        v-if="$route.path === '/'"
        onclick="location.reload()"
        class="text-lg hover:translate-y-[-.25rem]"
        aria-label="Reloads page"
      >$ whoami</button>
      <NuxtLink
        v-else-if="$route.path === '/blog' || $route.path.includes('/post')"
        to="/" class="text-lg hover:translate-y-1"
      >$ cat khh.log</NuxtLink>
      <NuxtLink v-else-if="$route.path === '/guestbook'" to="/" class="text-lg hover:translate-y-1">$ ls guest</NuxtLink>
      <NuxtLink v-else-if="$route.path === '/friends'" to="/" class="text-lg hover:translate-y-1">$ ls friends</NuxtLink>
      <div class="hidden items-center gap-1 md:flex">
        <ul class="flex list-none space-x-1">
          <li v-for="i in HEADER_LINKS" :key="i.key" class="text-sm">
            <NuxtLink
              class="rounded py-2 px-3 duration-150 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-600"
              :to="i.href"
            >{{ i.text }}</NuxtLink>
          </li>
        </ul>
        <NuxtLink
          :to="RSS_FEED_URL"
          class="flex h-9 w-9 items-center justify-center rounded-md"
          target="_blank"
        >
          <FAIcon category="fas" icon="rss" tailwind="duration-200 ease-in-out hover:rotate-180"/>
        </NuxtLink>
      </div>
      <div class="flex items-center gap-1 md:hidden">
        <button
          class="flex h-9 w-9 items-center justify-center rounded-md"
          aria-label="Open drawer"
          @click="drawerOpen = !drawerOpen ? true : false"
        >
          <FAIcon category="fas" icon="bars"/>
        </button>
        <div
          v-if="drawerOpen"
          class="
            absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 translate-y-3/4
            dark:bg-[#303030] dark:divide-gray-700
          "
        >
          <ul class="py-2 mr-2 text-sm text-gray-700 dark:text-gray-300"
          >
            <li v-for="i in HEADER_LINKS" :key="i.key">
              <NuxtLink
                :to="i.href"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="drawerOpen = false" @keydown.enter="drawerOpen = false"
              >{{ i.text }}</NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink
          :to="RSS_FEED_URL"
          class="flex h-9 w-9 items-center justify-center rounded-md"
          target="_blank" aria-label="RSS Feed"
        >
          <FAIcon category="fas" icon="rss"/>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { HEADER_LINKS, RSS_FEED_URL } from '@/config/links'
</script>

<script lang="ts">
export default {
  data () {
    return {
      drawerOpen: false as boolean
    }
  }
}
</script>

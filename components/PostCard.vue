<template>
  <div class="font-sans">
    <NuxtLink
      v-for="post in data.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
      :key="post.key"
      :to="`/post/${post.slug}`"
      class="
        flex flex-col space-y-3 rounded-3xl shadow p-6 my-6
        transition duration-200 ease-in-out hover:shadow-lg hover:scale-[102.5%]
        dark:shadow-neutral-700 dark:hover:shadow-md dark:hover:shadow-neutral-700
      "
    >
      <article class="flex-grow space-y-4 leading-6">
        <h2 class="text-lg font-bold text-neutral-800 dark:text-neutral-200">{{ post.title }}</h2>
        <p class="text-sm text-neutral-700 subpixel-antialiased dark:text-neutral-300">{{ post.description }}</p>
      </article>
      <div class="flex text-sm">
        <p class="mr-1">
          在{{
            returnPostTime(post.datetime, 52560000) >= 1 ? ` ${returnPostTime(post.datetime, 52560000)} 世紀前` :
            returnPostTime(post.datetime, 525600) >= 1 ? ` ${returnPostTime(post.datetime, 525600)} 年前` :
            returnPostTime(post.datetime, 43200) >= 1 ? ` ${returnPostTime(post.datetime, 43200)} 個月前` :
            returnPostTime(post.datetime, 1440) >= 1 ? ` ${returnPostTime(post.datetime, 1440)} 天前` :
            returnPostTime(post.datetime, 60) >= 1 ? ` ${returnPostTime(post.datetime, 60)} 小時前` :
            returnPostTime(post.datetime, 1) >= 1 ? ` ${returnPostTime(post.datetime, 1)} 分鐘前`: '剛剛'
          }}發布
        </p>
        &nbsp;/&nbsp;
        <p class="ml-1">
          <FAIcon category="fas" icon="tag" size="sm" tailwind="mr-1.5 text-neutral-700 dark:text-neutral-300"/>
          <span v-for="tag in post.tags" :key="tag" v-text="(post.tags.indexOf(tag) === 0 ? '' : ', ') + tag"></span>
        </p>
      </div>
    </NuxtLink>
    <div class="flex justify-center space-x-4 mt-12 text-neutral-800 dark:text-neutral-300">
      <button
        v-if="currentPage > 1"
        class="transition duration-200 ease-in-out hover:translate-x-[-.25rem]" 
        aria-label="Go to previous page"
        @click="currentPage--"
      >
        <FAIcon category="fas" icon="angle-left" size="sm"/>
      </button>
      <button v-else class="text-neutral-300 dark:text-neutral-600" aria-label="This button is disabled" disabled>
        <FAIcon category="fas" icon="angle-left" size="sm"/>
      </button>
      <p>{{ currentPage }} / {{ Math.ceil(data.length / pageSize) }}</p>
      <button
        v-if="currentPage < Math.ceil(data.length / pageSize)"
        class="transition duration-200 ease-in-out hover:translate-x-1"
        aria-label="Go to next page"
        @click="currentPage++" 
      >
        <FAIcon category="fas" icon="angle-right" size="sm"/>
      </button>
      <button v-else class="text-neutral-300 dark:text-neutral-600" aria-label="This button is disabled" disabled>
        <FAIcon category="fas" icon="angle-right" size="sm"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData(() => $fetch('/api/posts')) as unknown as {
  data: {
    key: number,
    slug: string,
    title: string,
    datetime: string,
    description: string,
    tags: string[]
  }[]
}
const pageSize = 8
let currentPage = 1
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

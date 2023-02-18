<template>
  <article class="relative mx-auto max-w-5xl px-8 py-24 leading-10 font-sans">
    <Head>
      <Title>{{ `${data.title} | khh.log` }}</Title>
      <Meta name="description" :content="data.description"/>
      <Meta name="og:title" :content="data.title"/>
      <Meta name="og:description" :content="data.description"/>
      <Meta name="og:type" content="article"/>
      <Meta name="og:url" :content="`https://nekohuan.cyou/post/${data.slug}`"/>
      <!-- <Meta name="og:image" :content="<url>"/> -->
      <Meta name="twitter:card" content="summary_large_image"/>
      <Meta name="twitter:site" content="https://nekohuan.cyou"/>
      <Meta name="twitter:creator" content="@kuohuanhuan"/>
      <Meta name="twitter:title" :content="data.title"/>
      <Meta name="twitter:description" :content="data.description"/>
      <!-- <Meta name="twitter:image" :content="<url>"/> -->
    </Head>
    <h1 class="font-bold dark:text-neutral-200">{{ data.title }}</h1>
    <div class="flex text-sm font-courier dark:text-neutral-300">
      <p>
        <FAIcon category="fas" icon="clock-rotate-left" size="sm"/>
        發布於 {{
          returnPostTime(data.datetime, 52560000) >= 1 ? returnPostTime(data.datetime, 52560000) + ' 世紀前' :
          returnPostTime(data.datetime, 525600) >= 1 ? returnPostTime(data.datetime, 525600) + ' 年前' :
          returnPostTime(data.datetime, 43200) >= 1 ? returnPostTime(data.datetime, 43200) + ' 個月前' :
          returnPostTime(data.datetime, 1440) >= 1 ? returnPostTime(data.datetime, 1440) + ' 天前' :
          returnPostTime(data.datetime, 60) >= 1 ? returnPostTime(data.datetime, 60) + ' 小時前' :
          returnPostTime(data.datetime, 1) >= 1 ? returnPostTime(data.datetime, 1) + ' 分鐘前': '剛剛'
        }}
      </p>
    </div>
    <section class="my-6">
      <div class="flex gap-4 my-6 dark:text-neutral-300">
        <div class="divide-y divide-gray-200 transition-colors dark:divide-neutral-700">
          <div class="pb-8 transition-colors lg:grid lg:grid-cols-4 lg:gap-x-6">
            <div class="divide-y divide-gray-200 pb-8 transition-colors dark:divide-neutral-700 md:col-span-3">
              <!-- eslint-disable vue/no-v-html -->
              <div
                id="content" class="my-6 prose prose-neutral dark:prose-invert"
                v-html="MDIt.render(data.content)"
              ></div>
            </div>
            <aside>
              <div class="hidden md:flex md:sticky md:top-24 md:col-span-1">
                <ToC element="#content"/>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <hr/>
    <div class="dark:text-neutral-300">
      <h2 class="my-6 text-2xl font-bold">留言</h2>
      <giscus
        repo="kuohuanhuan/blog"
        repo-id="R_kgDOI3I4HA"
        category="Comments"
        category-id="DIC_kwDOI3I4HM4CT7PF"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="preferred_color_scheme"
        lang="zh-TW"
        host="https://giscus.app"
        loading="lazy"
      />
    </div>
  </article>
</template>

<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
import Emoji from 'markdown-it-emoji'
import Anchor from 'markdown-it-anchor'
import Uslug from 'uslug'
import HighlightJS from 'highlight.js'
import Lazyload from 'markdown-it-image-lazy-loading'
import 'highlight.js/styles/vs2015.css'

const { slug } = useRoute().params
const { data } = await useAsyncData(() => $fetch(`/api/post/${slug}`)) as unknown as { data: {
  key: number,
  slug: string,
  title: string,
  datetime: string,
  description: string,
  tags: string,
  content: string | null
} }

const MDIt = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && HighlightJS.getLanguage(lang)) {
      return HighlightJS.highlight(str, { language: lang }).value
    }
  }
}).use(Emoji).use(Anchor, { slugify: (s: string) => Uslug(s) }).use(Lazyload, {
  decoding: true
})
</script>

<script lang="ts">
export default {
  methods: {
    returnPostTime (datetime: string, devide: number): number {
      return Math.floor((new Date().getTime() - new Date(datetime).getTime()) / (devide * 60000))
    }
  }
}
</script>

<style type="text/css" scoped>
pre > code {
  font-family: 'Jetbrains Mono', 'Fira Code', 'MesloLGS NF', Menlo, Consolas, Ubuntu, monospace !important;
}
</style>

<template>
  <article class="relative mx-auto max-w-5xl px-8 py-24 leading-8 font-sans">
    <Head>
      <Title>{{ `${post.Title} | khh.log` }}</Title>
    </Head>
    <h1 class="font-bold dark:text-neutral-200" v-text="post.Title"></h1>
    <div class="flex text-sm font-courier dark:text-neutral-300">
      <p><FAIcon category="far" icon="calendar" size="md"/> {{ post.DateTime }}</p>
      &nbsp;/&nbsp;
      <p><FAIcon category="fas" icon="eye" size="sm"/> {{ post.Views.toString() }}</p>
    </div>
    <section class="my-6">
      <div class="flex gap-4 my-6 dark:text-neutral-300">
        <div class="divide-y divide-gray-200 transition-colors dark:divide-neutral-700">
          <div class="pb-8 transition-colors lg:grid lg:grid-cols-4 lg:gap-x-6">
            <div class="divide-y divide-gray-200 pb-8 transition-colors dark:divide-neutral-700 lg:col-span-3">
              <p v-if="pending">Loading...</p>
              <!-- eslint-disable vue/no-v-html -->
              <div
                v-else
                id="content" class="my-6 prose prose-neutral dark:prose-invert"
                v-html="Pangu.spacing(mdParser.render(post.Content))"
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
      <div id="comment"></div>
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

import Pangu from 'pangu'

import { API_DOMAIN } from '@/config/links'

const { fileName } = useRoute().params
const { pending, data: post } = await useFetch<any>(() => `https://${API_DOMAIN}/post/${fileName}`)
const mdParser = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && HighlightJS.getLanguage(lang)) {
      return HighlightJS.highlight(str, { language: lang }).value
    }
  }
}).use(Emoji).use(Anchor, { slugify: (s: string) => Uslug(s) }).use(Lazyload, { decoding: true })
</script>

<script lang="ts">
export default {
  mounted() {
    twikoo.init({
      envId: 'https://home-twikoo-fawn.vercel.app',
      el: '#comment',
      lang: 'zh-TW'
    })
  }
}
</script>

<style type="text/css" scoped>
pre > code {
  font-family: 'Jetbrains Mono', 'Fira Code', 'MesloLGS NF', Menlo, Consolas, Ubuntu, monospace !important;
}
</style>

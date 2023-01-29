<template>
  <section class="relative mx-auto max-w-5xl min-h-screen px-8 py-24 dark:text-neutral-300">
    <Head>
      <Title>留言板 | kuohuanhuan</Title>
    </Head>
    <h1 class="font-bold text-neutral-800 dark:text-neutral-200">留言板</h1>
    <p class="leading-8">
      嗨 👋，感謝你到訪我的網站 😀——這裡是留言板，歡迎留言 😉
    </p>
    <hr class="my-8"/>
    <div id="comment"></div>
  </section>
</template>

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

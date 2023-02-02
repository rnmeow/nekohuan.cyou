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
    <Giscus
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
  </section>
</template>

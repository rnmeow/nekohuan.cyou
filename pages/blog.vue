<template>
  <section class="relative mx-auto min-h-screen max-w-5xl px-8 py-24 dark:text-neutral-300">
    <Head>
      <Title>封存 | khh.log</Title>
      <Meta name="description" content="Hello world! $ curl -i https://nekohuan.cyou"/>
    </Head>
    <h1 class="font-bold text-neutral-800 dark:text-neutral-200">網誌</h1>
    <hr class="my-8"/>
    <PostCard/>
  </section>
</template>

<script lang="ts">
export default {
  computed: {
    isOSX () {
      if (process.client) return navigator.userAgent.includes('Mac OS X') || navigator.userAgent.includes('macOS')
      else return false
    }
  }
}
</script>

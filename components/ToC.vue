<template>
  <vue-toc :target="element"/>
</template>

<script lang="ts" setup>
defineProps<{
  element: string
}>()
</script>

<style type="text/css">
.vue-toc {
  direction: rtl;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem 1.5rem;
}
.vue-toc * {
  direction: ltr;
}
.vue-toc a {
  color: #4a5568;
}
.vue-toc a:hover {
  color: #8966ea;
}
.vue-toc ul {
  display: flex;
  margin-block-start: .5rem;
  margin-block-end: .5rem;
  padding-inline-start: .75rem;
  list-style-type: disc;
  color: #5f5f5f;
}
.vue-toc ul ul {
  margin-left: .5rem;
  color: #d4d4d4;
}
.vue-toc ul > li {
  margin-bottom: .25rem;
}

@media screen and (prefers-color-scheme: dark) {
  .vue-toc a { color: #cbd5e0; }
  .vue-toc a:hover { color: #d5c6fd; }
  .vue-toc ul { color: #a0aec0; }
  .vue-toc ul ul { color: #4a5568; }
}
</style>

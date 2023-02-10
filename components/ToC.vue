<template>
  <section class="max-w-fit max-h-[80vh] overflow-y-auto px-4 py-6" dir="rtl">
    <div ref="toc">
      <div v-for="(header, index) in headers" :key="index" dir="ltr">
        <div v-if="header.tagName === 'H2'">
          <ul class="flex mx-2 pl-3 list-disc text-[#5f5f5f] dark:text-[#a0aec0]">
            <li class="mb-0.5">
              <a
                :href="`#${header.id}`"
                class="text-[#4a5568] hover:text-[#8966ea] dark:text-[#cbd5e0] dark:hover:text-[#d5c6fd]"
              >{{ header.textContent }}</a>
            </li>
          </ul>
        </div>
        <div v-else-if="header.tagName === 'H3'">
          <ul class="flex mx-2 pl-6 list-disc text-[#d4d4d4] dark:text-[#a0aec0]">
            <li class="mb-0.5">
              <a
                :href="`#${header.id}`"
                class="text-[#4a5568] hover:text-[#8966ea] dark:text-[#cbd5e0] dark:hover:text-[#d5c6fd]"
              >{{ header.textContent }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{ element: string }>()
</script>

<script lang="ts">
export default {
  data(props: { element: string }) {
    return { element: props.element, headers: [] as Element[] }
  },
  mounted() {
    this.headers = Array.from(
      document.querySelectorAll(`${this.element} h2, ${this.element} h3`)
    )
  }
}
</script>

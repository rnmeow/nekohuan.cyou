import VueToc from 'vue-toc'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('vue-toc', VueToc)
})

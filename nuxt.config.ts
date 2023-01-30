export default {
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts' // Prerelease 3.0.0-1 (https://npm.im/@nuxtjs/google-fonts)
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=EmulateIE7' }, // lmfao
        { name: 'description', content: 'Hi, KuoHuanHuan here!' },
        { name: 'google', content: 'notranslate' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/png', href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon.png' }
      ],
      script: [
        { src: '//unpkg.com/twikoo@1.6.8/dist/twikoo.all.min.js', type: 'text/javascript', defer: true },
        /* '//cdn.staticfile.org/twikoo/1.6.8/twikoo.all.min.js' 在中國速度較快 */
        // { src: '//unpkg.com/jquery@3.6.3/dist/jquery.min.js', type: 'text/javascript' } -> 不用 jQuery :)
      ]
    }
  },
  typescript: {
    typeCheck: true
  },
  css: [
    'normalize.css/normalize.css',
    '@fortawesome/fontawesome/styles.css'
  ],
  googleFonts: {
    families: {
      'DM+Mono': true,
      'Open+Sans': true,
      'Courier+Prime': true
    }
  },
  sourcemap: {
    server: false,
    client: false,
  }
}

// Nuxt 3 <https://nuxt.com/docs>

export default {
  modules: [
    '@nuxt/image-edge',
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
        { name: 'description', content: 'Hi 👋, rnmeow here! I\'m a coder student from Taiwan.' },
        { name: 'google', content: 'notranslate' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://ik.imagekit.io' },
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.svg' },
        { rel: 'shortcut icon', type: 'image/png', href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon.png' }
      ],
      // script: [
      //  { src: '//unpkg.com/jquery@3.6.3/dist/jquery.min.js', type: 'text/javascript' }
      // ]
    }
  },
  runtimeConfig: {
    GH_PAT: process.env.GH_PAT
  },
  typescript: {
    target: 'esnext',
    typeCheck: true
  },
  css: [
    'normalize.css/normalize.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  image: {
    provider: 'imagekit',
    imagekit: { baseURL: 'https://ik.imagekit.io/mhnj7usua' }
  },
  googleFonts: {
    preconnect: true,
    preload: true,
    families: {
      'Open+Sans': [400, 600, 700]
    },
    download: false
  },
  sourcemap: {
    server: false,
    client: false
  }
}

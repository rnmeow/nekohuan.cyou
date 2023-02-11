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
        { name: 'description', content: 'Hi 👋, KuoHuanHuan here! I\'m a coder student from Taiwan.' },
        { name: 'google', content: 'notranslate' }
      ],
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
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
    typeCheck: true
  },
  css: [
    'normalize.css/normalize.css',
    '@fortawesome/fontawesome/styles.css'
  ],
  image: {
    provider: 'imagekit',
    imagekit: { baseURL: 'https://ik.imagekit.io/mhnj7usua' }
  },
  googleFonts: {
    preconnect: true,
    preload: true,
    families: {
      'DM+Mono': [400, 500],
      'Open+Sans': [400, 600, 700],
      'Courier+Prime': true
    },
    download: false
  },
  sourcemap: {
    server: false,
    client: false
  }
}

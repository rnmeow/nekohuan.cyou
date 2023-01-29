import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faTag, faAngleLeft, faAngleRight, faAngleUp, faHeart, faRss, faBars, faEnvelope, faEye
} from '@fortawesome/free-solid-svg-icons'
import { faCopyright, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { 
  faGolang, faVuejs, faGitAlt, faNodeJs, faGithub, faBitbucket, faWhatsapp, faTelegram, faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
// eslint-disable-next-line import/named -- Temporary solution
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueToc from 'vue-toc'
import VueGtag from 'vue-gtag-next'

config.autoAddCss = false
library.add(
  faTag, faAngleLeft, faAngleRight, faAngleUp, faHeart, faRss, faBars, faEnvelope, faEye,
  faCopyright, faCalendar, faGolang, faVuejs, faGitAlt, faNodeJs,
  faGithub, faBitbucket, faWhatsapp, faTelegram, faStackOverflow
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
  nuxtApp.vueApp.component('vue-toc', VueToc)
  nuxtApp.vueApp.use(VueGtag, { property: { id: 'G-3D83BY9RLC' } })
})

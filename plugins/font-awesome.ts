import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faTag, faAngleLeft, faAngleRight, faAngleUp, faHeart, faRss, faBars, faEnvelope, faEye, faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { 
  faGolang, faReact, faGitAlt, faNodeJs, faGithub, faBitbucket, faWhatsapp, faTelegram, faStackOverflow
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false
library.add(
  faTag, faAngleLeft, faAngleRight, faAngleUp, faHeart, faRss, faBars, faEnvelope, faEye,
  faCopyright, faClockRotateLeft, faGolang, faReact, faGitAlt, faNodeJs,
  faGithub, faBitbucket, faWhatsapp, faTelegram, faStackOverflow
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faTag,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faHeart,
  faRss,
  faBars,
  faMicrochip,
  faEnvelope,
  faEye,
  faClockRotateLeft
} from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import {
  faJsSquare,
  faGolang,
  faGithub,
  faDiscord,
  faInstagram,
  faTelegram,
  faThreads
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false
library.add(
  faTag,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faHeart,
  faRss,
  faBars,
  faMicrochip,
  faEnvelope,
  faEye,
  faCopyright,
  faClockRotateLeft,
  faJsSquare,
  faGolang,
  faGithub,
  faDiscord,
  faInstagram,
  faTelegram,
  faThreads
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

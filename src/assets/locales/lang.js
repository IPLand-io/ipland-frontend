import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { config } from '../../config/env'
import elementEnLocale from "../../../node_modules/element-ui/lib/locale/lang/en";
import elementZhLocale from "../../../node_modules/element-ui/lib/locale/lang/zh-CN";

Vue.use(VueI18n)

const DEFAULT_LANG = config.DEFAULT_LANG;
const LOCALE_KEY = config.LOCALE_KEY;

const locales = {
  zh: {
    ...config.zh_CN,
    ...elementZhLocale
  },
  zh_tw: config.zh_CN_TW,
  en: {
    ...config.en_US,
    ...elementEnLocale
  }
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales,
  silentTranslationWarn: true
})

export const setup = lang => {
  if (lang === undefined) {
    lang = window.localStorage.getItem(LOCALE_KEY)
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang)
  i18n.locale = lang
}

setup(config.DEFAULT_LANG)

export default i18n

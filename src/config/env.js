
import { zh_CN } from "../assets/locales/locale-zh.js";
import { en_US } from "../assets/locales/locale-en.js";
let config = {
  core_asset: "ipland",
  ex_data_api_url: "",
  isDebug: false,
  DEFAULT_LANG: "en",
  LOCALE_KEY: "LOCALE_KEY"
}

config.zh_CN = zh_CN;
config.en_US = en_US;

if (typeof _config != "undefined") {
  for (let key in _config) {
    config[key] = _config[key];
  }
  config = Object.assign(config, _config);
}

var type = navigator.appName;
let lang = "";
if (type == "Netscape") {
  lang = navigator.language;
} else {
  lang = navigator.userLanguage;
};
lang = lang.substr(0, 2);
config.DEFAULT_LANG = localStorage.getItem(config.LOCALE_KEY) || 'en';

export { config }


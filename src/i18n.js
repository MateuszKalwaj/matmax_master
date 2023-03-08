import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_en from "./translations/en/common.json";
import common_pl from "./translations/pl/common.json";

const resources = {
  pl: {
    common: common_pl,
  },
  en: {
    common: common_en,
  },
};

const getDefaultLng = () => {
  return localStorage.getItem('i18nextLng');
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getDefaultLng() ? getDefaultLng() : "pl",
    fallbackLng: "pl",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

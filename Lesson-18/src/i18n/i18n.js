import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import uk from "./locales/uk.json";

const savedLang = localStorage.getItem("i18nextLng") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n;

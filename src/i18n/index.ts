import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fa from "./fa.json";
import en from "./en.json";

export const languages = {
  fa: { name: "فارسی", dir: "rtl" as const },
  en: { name: "English", dir: "ltr" as const },
};

export type Lang = keyof typeof languages;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fa: { translation: fa },
      en: { translation: en },
    },
    fallbackLng: "en",
    supportedLngs: ["fa", "en"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "mohsen-portfolio-lang",
    },
  });

export function applyLanguage(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = languages[lang].dir;
}

const currentLang = (i18n.language?.startsWith("fa") ? "fa" : "en") as Lang;
applyLanguage(currentLang);

i18n.on("languageChanged", (lng) => {
  const l = (lng.startsWith("fa") ? "fa" : "en") as Lang;
  applyLanguage(l);
});

export default i18n;

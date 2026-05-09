import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "../locale/en.json";
import ptTranslations from "../locale/pt.json";
import esTranslations from "../locale/es.json";
import frTranslations from "../locale/fr.json";

export const SUPPORTED_LANGUAGES = ["en", "pt", "es", "fr"] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...enTranslations },
      pt: { ...ptTranslations },
      es: { ...esTranslations },
      fr: { ...frTranslations },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES,
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: { escapeValue: false },
  });

export default i18n;

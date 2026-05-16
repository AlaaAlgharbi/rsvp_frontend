import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    react: {
      useSuspense: true
    }
  });

i18n.dir = (lng) => (lng === 'ar' ? 'rtl' : 'ltr');

export default i18n;

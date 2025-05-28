import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translation/en-GB.json';
import translationHI from './translation/hi-IN.json';

const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    language: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

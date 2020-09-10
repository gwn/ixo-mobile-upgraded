import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const en_ZA = require('./locales/en_ZA.json');
const es = require('./locales/es.json');

i18n.use(initReactI18next).init({
  resources: {
    en_ZA,
    es,
  },
  lng: 'en_ZA',
  fallbackLng: 'en_ZA',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

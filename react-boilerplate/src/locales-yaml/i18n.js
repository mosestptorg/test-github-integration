
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import de from './de.json';
import es from './es.json';
import pt from './pt.json';

const resources = { en: { translation: en }, de: { translation: de }, es: { translation: es }, pt: { translation: pt } };

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;

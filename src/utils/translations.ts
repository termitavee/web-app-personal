import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEs from 'src/assets/language/es.json';
import translationEn from 'src/assets/language/en.json';

const resources = {
  es: { translation: translationEs },
  en: { translation: translationEn },
};

const init = () => {
  return (
    i18n
      .use(initReactI18next)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        fallbackLng: __DEV__ ? 'es' : 'en',
        resources,
        defaultNS: 'translation',
        returnObjects: true,
        debug: __DEV__,
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
        },
      })
  );
};

if (!i18n.isInitialized) init();

const TranslationUtils = {
  init,
  i18n,
  resources,
};
export default TranslationUtils;

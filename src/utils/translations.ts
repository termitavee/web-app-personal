import AsyncStorange from '@react-native-async-storage/async-storage';
import { locale } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import translationEn from 'src/assets/language/en.json';
import translationEs from 'src/assets/language/es.json';

export const resources = {
  es: { translation: translationEs },
  en: { translation: translationEn },
};

export const defaultNS = 'translation';

const LANG_KEY = 'LANG_KEY';

const init = () =>
  i18n
    .use(initReactI18next)
    // init i18next
    .use({
      init: Function.prototype,
      async: true,
      type: 'languageDetector',
      detect: async (callback: (txt: string) => void) => {
        let detected = await AsyncStorange.getItem(LANG_KEY);
        if (!detected) [detected] = locale.split('-');
        callback(detected);
      },
      cacheUserLanguage: (lang = '') => {
        void AsyncStorange.setItem(LANG_KEY, lang.split('-')[0]);
      },
    })
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: __DEV__ ? 'es' : 'en',
      resources,
      defaultNS,
      returnObjects: true,
      debug: __DEV__,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });

if (!i18n.isInitialized) void init();

export const UseIsInit = () => {
  const { i18n: currentI18n } = useTranslation();

  return currentI18n.isInitialized;
};

const TranslationUtils = {
  init,
  i18n,
  resources,
};
export default TranslationUtils;

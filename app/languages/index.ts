import i18next, {LanguageDetectorModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './en.json';
import ar from './ar.json';

const LOCALE_PERSISTENCE_KEY = 'language';

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  async: true,
  detect: async (language: string | readonly string[] | undefined | any) => {
    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
    if (!persistedLocale) {
      return language('en');
    }
    language(persistedLocale);
  },
  init: () => {},

  cacheUserLanguage: locale => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });
export default i18next;

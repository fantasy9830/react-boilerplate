import i18n from 'i18next';
// import XHR from 'i18next-xhr-backend';
// import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import tw from './zh-TW';

i18n
  // .use(XHR)
  // .use(Cache)
  .use(reactI18nextModule)
  .use(LanguageDetector)
  .init({
    resources: { 'zh-TW': tw },
    fallbackLng: 'zh-TW',
    // wait: true, // globally set to wait for loaded translations in translate hoc
    ns: ['common'], // have a common namespace used around the full app
    defaultNS: 'common',
    debug: process.env.NODE_ENV !== 'production',
    // cache: { enabled: true },
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: (value, format, lng) =>
        format === 'uppercase' ? value.toUpperCase() : value,
    },
  });

export default i18n;

// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'hi',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: {
          homePageTopSectionHeading: 'Your Reliable Spare Parts Partner For All ISUZU Parts & Aftermarket Quality Parts',
        },
      },
      ar: {
        translation: {
          homePageTopSectionHeading: ' شريكك في قطع الغيار القابلة لإعادة الشحن لجميع قطع غيار ايسوزو وقطع غيار ما بعد البيع ذات الجودة',
        },
      },
      hi: {
        translation: {
          homePageTopSectionHeading: 'सभी ISUZU पार्ट्स और आफ्टरमार्केट क्वालिटी पार्ट्स के लिए आपका विश्वसनीय स्पेयर पार्ट्स पार्टनर',
        },
      },
    },
  });

export default i18n;

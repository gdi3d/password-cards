import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  useEffect(() => {
    const browserLang = navigator.language?.split('-')[0]; // Detect "en", "es", etc.
    if (browserLang === 'es' || browserLang === 'en') {
      setLang(browserLang);
    } else {
      setLang('en');
    }
  }, []);
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}

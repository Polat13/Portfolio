import React, { createContext, useState } from "react";
import { translations } from "../translations/translation";

export const TranslateContext = createContext();

export function TranslateProvider({ children }) {
  const [lang, setLang] = useState("EN"); 

  const t = (section, key) => {
    return translations[lang]?.[section]?.[key] || key;
  };

  const value = { t, lang, setLang };

  return (
    <TranslateContext.Provider value={value}>
      {children}
    </TranslateContext.Provider>
  );
}

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "sq";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("visitirana-language");

    if (savedLanguage === "en" || savedLanguage === "sq") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    localStorage.setItem("visitirana-language", value);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sq" : "en");
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
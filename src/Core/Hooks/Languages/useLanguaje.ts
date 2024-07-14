import { useEffect, useState } from "react";

import i18n from "@/i18n";

export const useLanguage = () => {
  const [language, setLanguage] = useState<string>(i18n.language);

  const handleLanguage = () => ({
    toSpanish: () => setLanguage("es"),
    toEnglish: () => setLanguage("en"),
  });

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return { language, handleLanguage };
};

import React from "react";
import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "th" ? "en" : "th";
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="p-4 flex justify-end gap-4 bg-gray-50 dark:bg-gray-700">
      <button onClick={toggleLanguage} className="px-3 py-1 border rounded">
        {i18n.language === "th" ? "EN" : "TH"}
      </button>
      <button onClick={toggleTheme} className="px-3 py-1 border rounded">
        ☀️ / 🌙
      </button>
    </div>
  );
}

export default LanguageToggle;

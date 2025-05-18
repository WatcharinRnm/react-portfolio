import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          {t("home.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t("home.desc")}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-transform"
          >
            LinkedIn
          </a>
          <a
            href="/your-cv.pdf"
            className="px-6 py-2 rounded-full bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white hover:scale-105 transition-transform"
          >
            ดูเรซูเม่
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

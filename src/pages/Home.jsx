import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{t("home.title")}</h1>
      <p className="text-lg">{t("home.desc")}</p>
    </section>
  );
}

export default Home;

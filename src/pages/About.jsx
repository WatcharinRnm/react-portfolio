import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
      <p>{t("about.desc")}</p>
    </section>
  );
}

export default About;

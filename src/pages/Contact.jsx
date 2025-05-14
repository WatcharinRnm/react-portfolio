import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
      <p>{t("contact.email")}</p>
    </section>
  );
}

export default Contact;

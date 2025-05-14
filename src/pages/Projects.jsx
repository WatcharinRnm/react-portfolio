import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">{t("projects.title")}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
            <a href={project.link} className="text-blue-600 hover:underline mt-2 inline-block" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

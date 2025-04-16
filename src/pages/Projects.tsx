import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100">
      <h2 className="text-3xl font-bold text-gray-100 mb-4">{t("projects_title")}</h2>
      <p className="text-lg text-gray-300">{t("projects_desc")}</p>
    </div>
  );
};

export default Projects;

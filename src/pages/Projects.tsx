import { useTranslation } from "react-i18next";
import Card from "../components/Card";

const Projects = () => {
  const { t } = useTranslation();

  const projectList = [
    {
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      image: "./assets/project-dos-image.jpg",
      path: "https://github.com/P3dream/detect-dos-attacks-with-llama"
    },
    {
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      image: "/assets/nest-project.jpg",
      path: "https://github.com/P3dream/nest-back-end-project"
    },
    {
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      image: "/assets/pacman-project.jpg",
      path: "https://github.com/P3dream/PacmanAS"
    },
    {
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      image: "/assets/library-project.jpg",
      path: "https://github.com/P3dream/Sistema_biblioteca"
    },
    {
      title: t("projects.4.title"),
      description: t("projects.4.description"),
      image: "/assets/fork-project.jpg",
      path: "https://github.com/P3dream/Problema-Produtor-Consumidor-usando-fork"
    },
    {
      title: t("projects.5.title"),
      description: t("projects.5.description"),
      image: "/assets/portfolio.png",
      path: "https://github.com/P3dream/portifolio"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">{t("projects_title")}</h2>
      <p className="text-base sm:text-lg text-gray-300 mb-6">{t("projects_desc")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectList.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            path={project.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

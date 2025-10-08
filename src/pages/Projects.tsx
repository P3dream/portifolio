import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Project from "../model/Projects";
import AnimatedContainer from "../components/AnimatedContainer";

const Projects = () => {
  const { t } = useTranslation();
  const projectList = t("projects", { returnObjects: true }) as Project[];

  return (
    <AnimatedContainer className="mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100 max-w-screen-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
        {t("projects_title")}
      </h2>
      <p className="text-base sm:text-lg text-gray-300 mb-6">
        {t("projects_desc")}
      </p>

      {/* grid ajustado com alinhamento e altura uniforme */}
      <div
        className="
          grid 
          grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 
          gap-8 
          items-stretch
        "
      >
        {projectList.map((project) => (
          <div
            key={project.title}
            className="
              group relative 
              transition-transform duration-300 ease-out 
              hover:scale-105 hover:z-10
              h-full
            "
          >
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              path={project.path}
            />
          </div>
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default Projects;

import { useTranslation } from "react-i18next";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Project from "../model/Projects";
import AnimatedContainer from "../components/AnimatedContainer";
import { analytics } from "../analytics/events";
import { useTranslatedArray } from "../lib/useTranslatedArray";

const Projects = () => {
  const { t } = useTranslation();
  const projectList = useTranslatedArray<Project>("projects");

  return (
    <AnimatedContainer className="mx-auto max-w-screen-2xl overflow-hidden rounded-xl border border-slate-600/80 bg-slate-900/75 px-4 py-5 text-gray-100 shadow-lg backdrop-blur sm:px-6 sm:py-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-gray-200">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-500/80 bg-slate-800/80">
              <FolderGit2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-bold leading-tight text-gray-100 sm:text-3xl">
              {t("projects_title")}
            </h2>
          </div>
          <p className="text-base leading-7 text-gray-300 sm:text-lg">
            {t("projects_desc")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 items-stretch">
        {projectList.map((project) => (
          <a
            key={project.id}
            href={project.path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.clickProject(project.id)}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-600/80 bg-slate-700/70 shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-slate-400/80 hover:bg-slate-700/90 hover:shadow-xl"
          >
            <div className="relative overflow-hidden border-b border-slate-600/80 bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug text-gray-100">
                  {project.title}
                </h3>
                <ExternalLink
                  className="mt-1 h-4 w-4 shrink-0 text-gray-300 opacity-70 transition group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-300">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </AnimatedContainer>
  );
};

export default Projects;

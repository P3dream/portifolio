import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";
import { useTranslatedArray } from "../lib/useTranslatedArray";
import { analytics } from "../analytics/events";

interface AcademicExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  stack?: string[];
}

const AcademicExperience = () => {
  const { t } = useTranslation();
  const experiences = useTranslatedArray<AcademicExperienceItem>("academicExperience");

  return (
    <CollapsibleSection
      title={t("academic_experience_title", "Formacao Academica")}
      description={t(
        "academic_experience_desc",
        "Experiencias academicas e projetos de destaque durante a graduacao."
      )}
      defaultOpen={false}
      variant="academic"
    >
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={exp.company + exp.role} className="flex gap-4">
            <div className="hidden w-5 shrink-0 flex-col items-center sm:flex">
              <span className="mt-5 h-4 w-4 rounded-full border-2 border-slate-300 bg-slate-950 shadow-[0_0_0_5px_rgba(15,23,42,0.95)]" />
              {index < experiences.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-slate-600" />
              )}
            </div>

            <article className="min-w-0 flex-1 rounded-lg border border-slate-600/80 bg-slate-700/70 p-4 shadow-md transition duration-300 hover:border-slate-400/80 hover:bg-slate-700/90">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-gray-200">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-gray-50 sm:text-xl">{exp.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-300">
                    <MapPin className="h-4 w-4 shrink-0 text-gray-300" aria-hidden="true" />
                    <span>{exp.company} - {exp.location}</span>
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-300 sm:text-base">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.stack && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <span key={i} className="rounded-md border border-slate-500 bg-slate-800/80 px-2.5 py-1 text-sm font-medium text-gray-100 shadow-sm">{tech}</span>
                  ))}
                </div>
              )}
            </article>
          </div>
        ))}
      </div>

      <Link
        to="/research-engineering"
        onClick={() => analytics.clickResearchPageLink("academic_experience")}
        className="mt-5 flex flex-col gap-3 rounded-lg border border-slate-600 bg-slate-800/70 p-4 text-gray-100 transition hover:border-slate-400 hover:bg-slate-700/90 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold">{t("research_cta_title")}</h3>
          <p className="mt-1 text-sm text-gray-300">{t("research_cta_desc")}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-100">
          {t("research_cta_button")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
    </CollapsibleSection>
  );
};

export default AcademicExperience;

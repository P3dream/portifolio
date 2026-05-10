import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      title={t("academic_experience_title", "Formação Acadêmica")}
      description={t(
        "academic_experience_desc",
        "Experiências acadêmicas e projetos de destaque durante a graduação."
      )}
      defaultOpen={false}
    >
      {experiences.map((exp) => (
        <div
          key={exp.company + exp.role}
          className="p-4 bg-slate-700 bg-opacity-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
            <span className="text-gray-300 sm:text-right">{exp.period}</span>
          </div>
          <p className="text-gray-200 font-medium mb-2">{exp.company} - {exp.location}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 mb-2">
            {exp.description.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          {exp.stack && (
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.stack.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-slate-600 text-gray-100 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          )}
        </div>
      ))}

      <Link
        to="/research-engineering"
        onClick={() => analytics.clickResearchPageLink("academic_experience")}
        className="mt-4 flex flex-col gap-3 rounded-lg border border-cyan-400/50 bg-slate-900/50 p-4 text-gray-100 transition hover:border-cyan-300 hover:bg-slate-700/70 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold">{t("research_cta_title")}</h3>
          <p className="mt-1 text-sm text-gray-300">{t("research_cta_desc")}</p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
          {t("research_cta_button")}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
    </CollapsibleSection>
  );
};

export default AcademicExperience;

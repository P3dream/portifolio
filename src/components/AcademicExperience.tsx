import { useTranslation } from "react-i18next";
import CollapsibleSection from "./CollapsibleSection";

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
  const experiences = t("academicExperience", { returnObjects: true }) as AcademicExperienceItem[];

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
    </CollapsibleSection>
  );
};

export default AcademicExperience;
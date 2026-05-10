import { useTranslation } from "react-i18next";
import { ExternalLink, FileText } from "lucide-react";
import Recomendations from "../model/Recomendations";
import CollapsibleSection from "./CollapsibleSection";
import { useTranslatedArray } from "../lib/useTranslatedArray";

const PersonalRecommendations = () => {
  const { t } = useTranslation();
  const recomendationList = useTranslatedArray<Recomendations>("recomendations");

  return (
    <CollapsibleSection
      title={t("recommendations_title")}
      description={t("recommendations_desc")}
      descriptionOpen={t("recommendations_desc_open")}
      defaultOpen={false}
      variant="recommendations"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {recomendationList.map((recomendation) => (
          <a
            key={recomendation.title}
            href={recomendation.path}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-48 gap-4 rounded-lg border border-slate-600/80 bg-slate-700/70 p-4 shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/45 hover:bg-slate-700/90 hover:shadow-xl"
          >
            <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-md border border-slate-600 bg-white shadow">
              <img
                src={recomendation.image}
                alt={recomendation.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-slate-950/70 px-2 py-1 text-center">
                <FileText className="mx-auto h-4 w-4 text-sky-100" aria-hidden="true" />
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-gray-100">{recomendation.title}</h3>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-sky-100 opacity-70 transition group-hover:opacity-100" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-300">{recomendation.description}</p>
            </div>
          </a>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default PersonalRecommendations;

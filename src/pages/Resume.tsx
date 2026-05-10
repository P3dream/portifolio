import { useTranslation } from "react-i18next";
import { Download, FileText } from "lucide-react";
import AnimatedContainer from "../components/AnimatedContainer";
import { SUPPORTED_LANGUAGES } from "../lib/i18n";

const RESUME_FILES: Record<string, string> = {
  en: "pedro-pizzi-en.pdf",
  es: "Pedro-Pizzi-es.pdf",
  fr: "Pedro-Pizzi-fr.pdf",
  pt: "Pedro-Pizzi-pt.pdf",
};

const Resume = () => {
  const { t, i18n } = useTranslation();
  const resolved = (i18n.resolvedLanguage ?? i18n.language ?? "en").split("-")[0];
  const lang = (SUPPORTED_LANGUAGES as readonly string[]).includes(resolved)
    ? resolved
    : "en";

  const fileName = RESUME_FILES[lang] ?? RESUME_FILES.en;

  return (
    <AnimatedContainer className="mx-auto max-w-screen-2xl overflow-hidden rounded-xl border border-slate-600/80 bg-slate-900/75 px-4 py-5 text-gray-100 shadow-lg backdrop-blur sm:px-6 sm:py-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-emerald-300/25 bg-emerald-400/10 text-emerald-100">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="text-2xl font-bold leading-tight text-gray-100 sm:text-3xl">
              {t("resume_title")}
            </h2>
          </div>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
            {t("resume_desc")}
          </p>
        </div>

        <a
          href={`/curriculum/${fileName}`}
          download={fileName}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-slate-500/80 bg-slate-700/70 px-5 py-3 font-semibold text-gray-100 shadow-md transition hover:border-slate-300 hover:bg-slate-700/90"
        >
          {t("resume_button")}
          <Download className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </AnimatedContainer>
  );
};

export default Resume;

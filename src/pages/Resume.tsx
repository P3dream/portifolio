import { useTranslation } from "react-i18next";
import AnimatedContainer from "../components/AnimatedContainer";
import { SUPPORTED_LANGUAGES } from "../lib/i18n";

const Resume = () => {
  const { t, i18n } = useTranslation();
  const resolved = (i18n.resolvedLanguage ?? i18n.language ?? "en").split("-")[0];
  const lang = (SUPPORTED_LANGUAGES as readonly string[]).includes(resolved)
    ? resolved
    : "en";

  const fileName = `Pedro-Pizzi-${lang}.pdf`;

  return (
    <AnimatedContainer className="mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100 max-w-screen-2xl space-y-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">
        {t("resume_title")}
      </h2>
      <p className="text-base sm:text-lg text-gray-300">
        {t("resume_desc")}
      </p>
      <a
        href={`/curriculum/${fileName}`}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-slate-600 hover:bg-slate-500 text-gray-100 font-medium rounded-lg shadow transition duration-200"
      >
        {t("resume_button")}
      </a>
    </AnimatedContainer>
  );
};

export default Resume;

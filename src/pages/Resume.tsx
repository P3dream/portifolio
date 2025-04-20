import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">{t("resume_title")}</h2>
      <p className="text-base sm:text-lg text-gray-300 mb-4">{t("resume_desc")}</p>
      <a
        href="public/curriculum/Pedro-Pizzi-Dev.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-slate-600 hover:bg-slate-500 text-gray-100 font-medium rounded-lg shadow transition duration-200"
      >
        {t("resume_button")}
      </a>
    </div>
  );
};

export default Resume;

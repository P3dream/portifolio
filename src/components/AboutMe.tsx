import { useTranslation } from "react-i18next";
import photo from "/assets/profilePhoto.jpg";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-screen-2xl overflow-hidden rounded-xl border border-slate-600/80 bg-slate-800/80 px-4 py-6 text-gray-100 shadow-lg backdrop-blur sm:px-6">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        <div className="shrink-0 rounded-full border border-slate-500/80 bg-slate-700/60 p-2 shadow-lg">
          <img
            src={photo}
            alt="Pedro Pizzi"
            className="h-32 w-32 rounded-full border-4 border-slate-800 object-cover shadow-md sm:h-40 sm:w-40"
          />
        </div>

        <div className="min-w-0 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">
            {t("about_title")}
          </h2>
          <p className="text-base font-medium text-gray-100 sm:text-lg">{t("about_desc")}</p>
          <div className="space-y-3 text-base leading-7 text-gray-300 sm:text-lg">
            <p>{t("about_desc2")}</p>
            <p>{t("about_desc3")}</p>
            <p>{t("about_desc4")}</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutMe;

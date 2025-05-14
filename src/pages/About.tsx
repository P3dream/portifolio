import { useTranslation } from "react-i18next";
import profilePhoto from "../assets/photo.png"; // ajuste o caminho se necessário

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 px-4 sm:px-0">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-6 gap-4 mb-6">
        <img
          src={profilePhoto}
          alt="Pedro Pizzi"
          className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-slate-700"
        />
        <div className="sm:mt-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">{t("about_title")}</h2>
          <p className="text-base sm:text-lg text-gray-300 mt-2 mb-3">{t("about_desc")}</p>
          <p className="text-base sm:text-lg text-gray-300">{t("about_desc2")}</p>
          <p className="text-base sm:text-lg text-gray-300">{t("about_desc3")}</p>
          <p className="text-base sm:text-lg text-gray-300">{t("about_desc4")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

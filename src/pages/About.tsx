import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-gray-100">{t("about_title")}</h2>
      <p className="text-lg text-gray-300">{t("about_desc")}</p>
      <p className="text-lg text-gray-300">{t("about_desc2")}</p>
      <p className="text-lg text-gray-300">{t("about_desc3")}</p>
      <p className="text-lg text-gray-300">{t("about_desc4")}</p>
    </div>
  );
};

export default About;

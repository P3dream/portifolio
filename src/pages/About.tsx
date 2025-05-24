import { useTranslation } from "react-i18next";
// import Carousel from "../components/Carousel";
// import type { CardProps } from "../components/Card";

const About = () => {
  const { t } = useTranslation();

  // const recommendationCards = t("recommendations", { returnObjects: true }) as CardProps[];

  return (
    <div className="space-y-6 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 mb-6">
        <img
          src={"/assets/photo.jpg"}
          alt="Pedro Pizzi"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-md border-4 border-slate-700"
        />
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">{t("about_title")}</h2>
          <p className="text-base sm:text-lg text-gray-300">{t("about_desc")}</p>
          <p className="text-base sm:text-lg text-gray-300">{t("about_desc2")}</p>
          <p className="text-base sm:text-lg text-gray-300">{t("about_desc3")}</p>
          <p className="text-base sm:text-lg text-gray-300">{t("about_desc4")}</p>
        </div>
      </div>

      {/* Seção de Cartas de Recomendação */}
      {/* <div className="mt-10 space-y-4">
        <h3 className="text-xl font-bold text-gray-100">{t("recommendations_title")}</h3>
        <Carousel items={Array.isArray(recommendationCards) ? recommendationCards : []} />
      </div> */}

    </div>
  );
};

export default About;

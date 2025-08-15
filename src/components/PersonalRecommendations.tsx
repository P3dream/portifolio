import { useTranslation } from "react-i18next";
import Card from "./Card"; // ajuste o caminho conforme sua estrutura
import Recomendations from "../model/Recomendations"; // se estiver usando TypeScript

const PersonalRecommendations = () => {
  const { t } = useTranslation();
  const recomendationList = t("recomendations", { returnObjects: true }) as Recomendations[];

  return (
    <div className="mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100 max-w-screen-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
        {t("recommendations_title")}
      </h2>
      <p className="text-base sm:text-lg text-gray-300 mb-6">
        {t("recommendations_desc")}
      </p>

      <div
        className="grid gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
        }}
      >
        {recomendationList.map((recomendation) => (
          <Card
            key={recomendation.title}
            title={recomendation.title}
            description={recomendation.description}
            image={recomendation.image}
            path={recomendation.path}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalRecommendations;

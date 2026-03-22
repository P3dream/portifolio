import { useTranslation } from "react-i18next";
import Card from "./Card";
import Recomendations from "../model/Recomendations";
import CollapsibleSection from "./CollapsibleSection";

const PersonalRecommendations = () => {
  const { t } = useTranslation();
  const recomendationList = t("recomendations", { returnObjects: true }) as Recomendations[];

  return (
    <CollapsibleSection
      title={t("recommendations_title")}
      description={t("recommendations_desc")}        // fechado
      descriptionOpen={t("recommendations_desc_open")} // aberto
      defaultOpen={false}
    >
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
    </CollapsibleSection>
  );
};

export default PersonalRecommendations;
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Recomendations from "../model/Recomendations";
import Resume from "./Resume";

const About = () => {
  const { t } = useTranslation();


  const recomendationList = t("recomendations", { returnObjects: true }) as Recomendations[];

  return (
    <>
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
      </div>

      <br></br>
      <div className="mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100 max-w-screen-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">{t("recommendations_title")}</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6">{t("recommendations_desc")}</p>

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
      <br></br>
      <Resume></Resume>
    </>
  );
};

export default About;

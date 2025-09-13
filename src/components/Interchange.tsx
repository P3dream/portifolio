import { useTranslation } from "react-i18next";
import interchangePhoto from "/assets/interchange.jpg";

const Interchange = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen rounded-xl overflow-hidden shadow-md border-4 border-slate-700">
      <img
        src={interchangePhoto}
        alt="Intercâmbio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-5 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-100 mb-6 -mt-2">
          {t("interchange.title")}
        </h2>
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg sm:text-xl text-gray-200">
            {t("interchange.description")}
          </p>
          <p className="text-lg sm:text-xl text-gray-200">
            {t("interchange.description2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interchange;
  
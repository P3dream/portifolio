import { useTranslation } from "react-i18next";
import interchangePhoto from "/assets/interchange.jpg";

const Interchange = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen rounded-xl overflow-hidden shadow-md border-4 border-slate-700">
      {/* Foto de fundo */}
      <img
        src={interchangePhoto}
        alt="Intercâmbio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay mais escuro para contraste */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Conteúdo do texto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 -mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          {t("interchange.title")}
        </h2>
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg sm:text-xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            {t("interchange.description")}
          </p>
          <p className="text-lg sm:text-xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            {t("interchange.description2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interchange;
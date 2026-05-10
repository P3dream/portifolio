import { useTranslation } from "react-i18next";
import { Award } from "lucide-react";
import AnimatedContainer from "../components/AnimatedContainer";
import CertificateCarousel from "../components/CertificateCarousel";
import { certificates } from "../data/certificates";

const CertificatesPage = () => {
  const { t } = useTranslation();

  return (
    <AnimatedContainer className="mx-auto max-w-screen-2xl overflow-hidden rounded-xl border border-slate-600/80 bg-slate-900/75 px-4 py-5 text-gray-100 shadow-lg backdrop-blur sm:px-6 sm:py-6">
      <div className="mb-6 max-w-3xl">
        <div className="mb-3 flex items-center gap-3 text-gray-200">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-500/80 bg-slate-800/80">
            <Award className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold leading-tight text-gray-100 sm:text-3xl">
            {t("certificates_title")}
          </h2>
        </div>
        <p className="text-base leading-7 text-gray-300 sm:text-lg">
          {t("certificates_desc")}
        </p>
      </div>

      <div className="w-full">
        <CertificateCarousel certificates={certificates} autoPlayInterval={3000} />
      </div>
    </AnimatedContainer>
  );
};

export default CertificatesPage;

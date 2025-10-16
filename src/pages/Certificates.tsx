import { useTranslation } from "react-i18next";
import AnimatedContainer from "../components/AnimatedContainer";
import CertificateCarousel from "../components/CertificateCarousel";
import { certificates } from "../data/certificates";

const CertificatesPage = () => {
  const { t } = useTranslation();

  return (
    <AnimatedContainer className="mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100 max-w-screen-2xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
        {t("certificates_title")}
      </h2>
      <p className="text-base sm:text-lg text-gray-300 mb-6">
        {t("certificates_desc")}
      </p>

      <div className="w-full">
        <CertificateCarousel certificates={certificates} autoPlayInterval={3000} />
      </div>
    </AnimatedContainer>
  );
};

export default CertificatesPage;

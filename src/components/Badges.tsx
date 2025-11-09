import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Badge = {
  id: string;
  logo: string;
  accentColor?: string; // opcional, pra personalizar cor do destaque
};

type BadgesProps = {
  badges: Badge[];
};

const Badges = ({ badges }: BadgesProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col items-center gap-5 mt-4">
      <h3 className="text-xl font-semibold text-gray-100 mb-4">
         {t("badges_section_title", "Scholarships & Recognitions")}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[1200px]">
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
            className={`flex justify-between items-center gap-6 px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl w-full`}
          >
            <div className="flex-shrink-0">
              <img
                src={badge.logo}
                alt={t(`badges.${badge.id}.title`)}
                className="w-24 h-24 object-contain bg-white rounded-lg p-1 shadow"
              />
            </div>
            <div className="flex-1 ml-4 space-y-2">
              <p className="text-gray-100 font-semibold leading-tight text-lg">
                {t(`badges.${badge.id}.title`)}
              </p>
              <p className="text-gray-300 text-sm">
                {t(`badges.${badge.id}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Badges;

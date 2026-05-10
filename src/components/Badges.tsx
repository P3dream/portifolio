import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Award } from "lucide-react";

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
    <section className="mx-auto max-w-screen-2xl overflow-hidden rounded-xl border border-slate-600/80 bg-slate-900/75 px-4 py-5 text-gray-100 shadow-lg backdrop-blur sm:px-6 sm:py-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
          {t("badges_section_title", "Scholarships & Recognitions")}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
            className="flex w-full gap-4 rounded-lg border border-slate-600/80 bg-slate-700/70 p-4 shadow-md transition duration-300 hover:border-slate-400/80 hover:bg-slate-700/90 hover:shadow-xl"
          >
            <div className="flex-shrink-0">
              <img
                src={badge.logo}
                alt={t(`badges.${badge.id}.title`)}
                loading="lazy"
                decoding="async"
                className="h-20 w-20 rounded-md border border-slate-500 bg-white object-contain p-2 shadow sm:h-24 sm:w-24"
              />
            </div>

            <div className="min-w-0 flex-1 space-y-2">
              <div className="inline-flex items-center gap-2 rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-gray-200">
                <Award className="h-4 w-4" aria-hidden="true" />
                {t("badge_label", "Scholarship")}
              </div>
              <h3 className="text-base font-semibold leading-snug text-gray-50 sm:text-lg">
                {t(`badges.${badge.id}.title`)}
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                {t(`badges.${badge.id}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Badges;

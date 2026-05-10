import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  description?: string;
  descriptionOpen?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: "default" | "academic" | "recommendations" | "work";
}

const CollapsibleSection = ({
  title,
  description,
  descriptionOpen,
  children,
  defaultOpen = false,
  variant = "default",
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const variantStyles = {
    default: {
      section: "border-slate-700/70 bg-slate-800/70",
      icon: "text-gray-300",
    },
    academic: {
      section: "border-slate-600/80 bg-slate-900/80",
      icon: "text-gray-300",
    },
    recommendations: {
      section: "border-slate-600/80 bg-slate-900/75",
      icon: "text-sky-100",
    },
    work: {
      section: "border-slate-600/80 bg-slate-900/72",
      icon: "text-gray-300",
    },
  }[variant];

  return (
    <section
      className={`mx-auto max-w-screen-2xl overflow-hidden rounded-xl border px-4 py-5 text-gray-100 shadow-lg backdrop-blur sm:px-6 sm:py-6 ${variantStyles.section}`}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="min-w-0">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-2 max-w-4xl text-sm leading-6 text-gray-300 sm:text-base">
              {isOpen && descriptionOpen ? descriptionOpen : description}
            </p>
          )}
        </div>

        <span className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-slate-950/30 ${variantStyles.icon}`}>
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 overflow-hidden space-y-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollapsibleSection;

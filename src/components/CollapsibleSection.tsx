import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapsibleSectionProps {
  title: string;
  description?: string;        // texto curto, mostrado quando fechado
  descriptionOpen?: string;    // texto longo, mostrado quando aberto
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({
  title,
  description,
  descriptionOpen,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100 max-w-screen-2xl">
      {/* Header com título e descrição */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
          {description && (
            <p className="text-gray-300 mt-1">
              {isOpen && descriptionOpen ? descriptionOpen : description}
            </p>
          )}
        </div>

        {/* Ícone de expandir/fechar */}
        <span className="text-gray-300 text-2xl select-none">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Conteúdo animado */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-4 space-y-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
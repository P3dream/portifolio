import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Certificate from "../model/Certificate";

type CarouselProps = {
  certificates: Certificate[];
  autoPlayInterval?: number;
};

const CertificateCarousel = ({
  certificates,
  autoPlayInterval = 2000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const resetAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, autoPlayInterval);
  }, [certificates.length, autoPlayInterval]);

  useEffect(() => {
    setCurrentIndex(0);
    resetAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoplay]);

  useEffect(() => {
    resetAutoplay();
  }, [currentIndex, resetAutoplay]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );

  return (
    <div className="w-full flex flex-col items-center bg-transparent">
      <div className="relative mb-4 flex aspect-[4/3] w-full max-w-[900px] items-center justify-center overflow-hidden rounded-lg border border-slate-500/80 bg-slate-700/80 p-3 shadow-lg sm:p-5">
        <AnimatePresence mode="wait">
          <motion.img
            key={certificates[currentIndex].id}
            src={certificates[currentIndex].imageUrl}
            alt=""
            className="h-full w-full rounded-md object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous certificate"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-500/80 bg-slate-900/75 p-2 text-white shadow transition hover:bg-slate-800"
        >
          <ChevronLeft className="w-6 h-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next certificate"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-500/80 bg-slate-900/75 p-2 text-white shadow transition hover:bg-slate-800"
        >
          <ChevronRight className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mb-4">
        {certificates.map((cert, index) => (
          <button
            key={cert.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex
                ? "w-7 bg-gray-100"
                : "w-2.5 bg-slate-500 hover:bg-slate-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {certificates.map((cert, index) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Show certificate ${index + 1}`}
            aria-current={index === currentIndex}
            className="p-0 border-0 bg-transparent"
          >
            <img
              src={cert.imageUrl}
              alt=""
              loading="lazy"
              className={`h-14 w-24 cursor-pointer rounded-md border object-cover transition-all ${
                index === currentIndex
                  ? "border-slate-200 opacity-100"
                  : "border-slate-700 opacity-65 hover:border-slate-400 hover:opacity-100"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CertificateCarousel;

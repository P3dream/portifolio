import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Certificate from "../model/certificate";

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

  const resetAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, autoPlayInterval);
  };

  useEffect(() => {
    setCurrentIndex(0);
    resetAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [certificates.length, autoPlayInterval]);

  useEffect(() => {
    resetAutoplay();
  }, [currentIndex]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );

  return (
    <div className="w-full flex flex-col items-center bg-transparent">
      <div className="relative w-full max-w-[900px] aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl shadow-lg mb-4 bg-transparent">
        <AnimatePresence mode="wait">
          <motion.img
            key={certificates[currentIndex].id}
            src={certificates[currentIndex].imageUrl}
            alt=""
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mb-4">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 overflow-x-auto pb-2">
        {certificates.map((cert, index) => (
          <img
            key={cert.id}
            src={cert.imageUrl}
            alt=""
            className={`w-20 h-12 object-cover rounded cursor-pointer border-2 transition-all ${
              index === currentIndex
                ? "border-blue-600 scale-105"
                : "border-transparent hover:scale-105"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificateCarousel;

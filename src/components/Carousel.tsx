import { useState } from "react";
import Card from "./Card";
import type { CardProps } from "./Card"; // importa o tipo do Card

const Carousel: React.FC<{ items: CardProps[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex" style={{ width: `${items.length * 100}%` }}>
            {items.map((item, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-2">
                <Card {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel;
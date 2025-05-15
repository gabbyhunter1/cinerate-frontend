'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_COUNT = 20;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const EmblaCarousel1: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map(index => (
            <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[33.333%] lg:min-w-[25%] p-2" key={index}>
              <div className="bg-blue-500 text-white rounded-xl h-40 flex items-center justify-center text-xl shadow-md">Slide {index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow disabled:opacity-30"
        onClick={scrollPrev}
        disabled={!canScrollPrev}>
        <ChevronLeft />
      </button>

      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow disabled:opacity-30"
        onClick={scrollNext}
        disabled={!canScrollNext}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default EmblaCarousel1;

'use client';

import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { PopularMoviesResponse } from '@/types/tmdb-types';
import GeneralMovieCard from '@/app/[locale]/_components/ui/general-movie-card';

type CardSliderProps = {
  children: React.ReactNode;
};

const CardSlider: React.FC<CardSliderProps> = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    align: 'start',
    dragFree: true,
  });
  const [canScrollNextState, setCanScrollNextState] = useState(true);
  const [canScrollPrevState, setCanScrollPrevState] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const checkCanScrollPrev = useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollPrevState(emblaApi.canScrollPrev());
  }, []);

  const checkCanScrollNext = useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollNextState(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.on('select', () => {
        checkCanScrollPrev(emblaApi);
        checkCanScrollNext(emblaApi);
      });
      checkCanScrollPrev(emblaApi);
      checkCanScrollNext(emblaApi);
    }
  }, [emblaApi, checkCanScrollNext]);

  return (
    <div className="embla">
      <div className="relative embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      <div className="absolute -top-2 right-4 flex items-center gap-2">
        <button
          className={`p-2 bg-light-transparent ${!canScrollPrevState ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}  hover:bg-secondary rounded-full`}
          onClick={scrollPrev}
          disabled={!canScrollPrevState}>
          <ChevronLeft className="text-white w-8 h-8 max-md:size-[25px]" />
        </button>
        <button
          className={`embla__next p-2 bg-light-transparent ${!canScrollNextState ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}  hover:bg-secondary rounded-full`}
          onClick={scrollNext}
          disabled={!canScrollNextState}>
          <ChevronRight className="text-white w-8 h-8 max-md:size-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;

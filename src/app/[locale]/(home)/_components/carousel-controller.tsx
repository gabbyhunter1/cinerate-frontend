import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PopularMoviesResponse } from '@/types/tmdb-types';

type CarouselControllerProps = {
  movies: PopularMoviesResponse | undefined;
  prevSlide: () => void;
  nextSlide: () => void;
  currentIndex: number;
  includeSlidesDots?: boolean;
  positionClass?: string;
};

const CarouselController: FC<CarouselControllerProps> = ({
  movies,
  prevSlide,
  nextSlide,
  currentIndex,
  includeSlidesDots = true,
  positionClass = 'bottom-4 right-4',
}) => {
  if (movies === undefined) {
    return null;
  }

  return (
    <div className={`absolute flex items-center gap-6 ${positionClass}`}>
      {includeSlidesDots && (
        <div className="flex gap-2">
          {movies.map((_, index) => (
            <span key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-regular-transparent'}`} />
          ))}
        </div>
      )}
      <div className="flex gap-1">
        <button
          onClick={prevSlide}
          className={`p-2 bg-light-transparent hover:bg-secondary rounded-full ${
            currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
          }`}
          disabled={currentIndex === 0}>
          <ChevronLeft className="text-white w-8 h-8" />
        </button>

        <button
          onClick={nextSlide}
          className={`p-2 bg-light-transparent hover:bg-secondary rounded-full ${
            currentIndex === movies.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
          }`}
          disabled={currentIndex === movies.length - 1}>
          <ChevronRight className="text-white w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default CarouselController;

'use client';

import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PopularMoviesResponse } from '@/types/tmdb-types';
import MovieCaption from '@/app/[locale]/(home)/_components/movie-caption';
import CarouselController from '@/app/[locale]/(home)/_components/carousel-controller';
import ImageGlow from 'react-image-glow';

type CarouselSlideProps = {
  movies: PopularMoviesResponse | undefined;
};

const CarouselSlide: FC<CarouselSlideProps> = ({ movies }) => {
  const [state, setState] = useState<{
    direction: 'left' | 'right';
    index: number;
  }>({
    direction: 'right',
    index: 0,
  });

  if (movies === undefined) {
    return null;
  }

  const nextSlide = () => {
    setState(prev => ({
      direction: 'right',
      index: (prev.index + 1) % movies.length,
    }));
    console.log(state.direction);
  };

  const prevSlide = () => {
    setState(prev => ({
      direction: 'left',
      index: (prev.index - 1 + movies.length) % movies.length,
    }));
    console.log(state.direction);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="max-w-[1041px] w-full"
          key={`${movies[state.index].backdrop_path}-${state.direction}`}
          custom={state.direction}
          initial={{
            x: state.direction === 'right' ? '100%' : '-100%',
            opacity: 0,
          }}
          animate={{ x: 0, opacity: 1 }}
          exit={{
            x: state.direction === 'right' ? '-100%' : '100%',
            opacity: 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <div className="relative">
            {/*using a custom .override class because ImageGlow has a hardcoded inline style of inline-block*/}
            <div className="override w-full max-w-[1041px]">
              <ImageGlow radius={200} saturation={2}>
                <img
                  src={`https://image.tmdb.org/t/p/w780${movies[state.index].backdrop_path}`}
                  decoding={'async'}
                  className="object-cover w-full rounded-lg mask-bottom-fade"
                  alt={movies[state.index].title}
                />
              </ImageGlow>
            </div>
            <CarouselController movies={movies} prevSlide={prevSlide} nextSlide={nextSlide} currentIndex={state.index} />
          </div>
          <MovieCaption
            title={movies[state.index].title}
            caption="test caption"
            poster={`https://image.tmdb.org/t/p/w185${movies[state.index].poster_path}`}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CarouselSlide;

'use client';

import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PopularMoviesResponse } from '@/types/tmdb-types';
import MovieCaption from '@/app/[locale]/(home)/_components/movie-caption';
import CarouselController from '@/app/[locale]/(home)/_components/carousel-controller';
import ImageGlow from 'react-image-glow';
import Image from 'next/image';

type CarouselSlideProps = {
  movies: PopularMoviesResponse | undefined;
};

const sliderVariants = {
  incoming: (direction: -1 | 1) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  exit: (direction: -1 | 1) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0.2,
  }),
};

const CarouselSlide: FC<CarouselSlideProps> = ({ movies }) => {
  const [state, setState] = useState<{
    direction: -1 | 1;
    index: number;
  }>({
    direction: 1,
    index: 0,
  });

  if (movies === undefined) {
    return null;
  }

  const nextSlide = () => {
    setState(prev => ({
      direction: 1,
      index: (prev.index + 1) % movies.length,
    }));
  };

  const prevSlide = () => {
    setState(prev => ({
      direction: -1,
      index: (prev.index - 1 + movies.length) % movies.length,
    }));
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false} custom={state.direction}>
        <motion.div
          className="max-w-[1041px] w-full"
          key={`${state.index}-${state.direction}`}
          custom={state.direction}
          variants={sliderVariants}
          initial={'incoming'}
          animate={{ x: 0, opacity: 1 }}
          exit={'exit'}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <div className="relative">
            <div className="override w-full max-w-[1041px]">
              <ImageGlow radius={200} saturation={2}>
                <Image
                  src={`https://image.tmdb.org/t/p/w780${movies[state.index].backdrop_path}`}
                  loading={'eager'}
                  fetchPriority={'high'}
                  // decoding="async"
                  width={780}
                  height={529}
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

import React, { ReactNode } from 'react';
import SectionHeader from '@/components/ui/section-header';
import CardSlider from '@/app/[locale]/(home)/_components/top-picks/card-slider';
import {
  Movie,
  MovieVideo,
  MovieVideosResponse,
  NowPlayingMoviesResponse,
  PopularMoviesResponse,
  TopRatedMoviesResponse,
  UpcomingMoviesResponse,
} from '@/types/tmdb-types';
import { getLocale } from 'next-intl/server';

type CardsSectionProps = {
  backgroundHeader?: string;
  marginTop?: string;
  response: 'popular' | 'top-rated' | 'upcoming' | 'now-playing' | 'releases' | 'premieres' | 'video';
  movieId?: number;
  children?: ReactNode;
  renderCard: (movie: Movie) => React.ReactNode;
};

const CarouselSection: React.FC<CardsSectionProps> = async ({
  backgroundHeader = '',
  marginTop = 'mt-25',
  response,
  renderCard,
  movieId,
  children,
}) => {
  const lang = await getLocale();
  // console.log(
  //   `http://localhost:8080/api/movie${response === 'video' ? `/video` : `Lists/${response}`}${response === 'video' ? `?id=${movieId}&` : '?'}language=${lang}&limit=10`
  // );
  const data = await fetch(
    `${process.env.API_BASE_URL}/api/movie${response === 'video' ? `/video` : `Lists/${response}`}${response === 'video' ? `?id=${movieId}&` : '?'}language=${lang}&limit=10`
  );
  const movies: PopularMoviesResponse | TopRatedMoviesResponse | UpcomingMoviesResponse | NowPlayingMoviesResponse | MovieVideosResponse =
    await data.json();
  // console.log(movies);

  return (
    // max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-9 relative
    <div className="flex flex-col max-md:gap-4 gap-7 w-full">
      <h2 className="absolute overflow-hidden pointer-events-none left-0 right-0 text-center -top-15 md:-top-25 text-[3.5rem] md:text-[5.6rem] lg:text-[10rem] font-stretch-condensed font-black text-[#12121210] dark:text-whiteTextTransparent">
        {backgroundHeader}
      </h2>
      {children}
      {/*<SectionHeader text={`${heading}`} button={headerButton} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem" />*/}
      <CardSlider>
        {movies.map(movie => (
          <div key={movie.id} className="embla__slide overflow-hidden">
            {renderCard(movie)}
          </div>
        ))}
      </CardSlider>
    </div>
  );
};

export default CarouselSection;

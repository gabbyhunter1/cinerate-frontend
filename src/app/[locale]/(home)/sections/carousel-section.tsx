import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import CardSlider from '@/app/[locale]/(home)/_components/top-picks/card-slider';
import { Movie, NowPlayingMoviesResponse, PopularMoviesResponse, TopRatedMoviesResponse, UpcomingMoviesResponse } from '@/types/tmdb-types';
import { getLocale } from 'next-intl/server';

type CardsSectionProps = {
  backgroundHeader?: string;
  heading: string;
  marginTop?: string;
  response: 'popular' | 'top-rated' | 'upcoming' | 'now-playing' | 'releases' | 'premieres';
  renderCard: (movie: Movie) => React.ReactNode;
};

const CarouselSection: React.FC<CardsSectionProps> = async ({ backgroundHeader = '', heading, marginTop = 'mt-25', response, renderCard }) => {
  const lang = await getLocale();
  const data = await fetch(`http://localhost:8080/api/movieLists/${response}?language=${lang}&limit=10`);
  console.log('test', data.json);
  const movies: PopularMoviesResponse | TopRatedMoviesResponse | UpcomingMoviesResponse | NowPlayingMoviesResponse = await data.json();

  return (
    <section className={`${marginTop} max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-9 relative`}>
      <div className="flex flex-col max-md:gap-4 gap-7 w-full">
        <h2 className="absolute overflow-hidden pointer-events-none left-0 right-0 text-center -top-15 md:-top-25 text-[3.5rem] md:text-[5.6rem] lg:text-[10rem] font-stretch-condensed font-black text-[#12121210] dark:text-whiteTextTransparent">
          {backgroundHeader}
        </h2>
        <SectionHeader text={`${heading}`} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem" />
        <CardSlider>
          {movies.map(movie => (
            <div key={movie.id} className="embla__slide overflow-hidden">
              {renderCard(movie)}
            </div>
          ))}
        </CardSlider>
      </div>
    </section>
  );
};

export default CarouselSection;

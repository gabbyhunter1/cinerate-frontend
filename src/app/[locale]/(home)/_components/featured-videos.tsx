import React from 'react';
import { ChevronRight } from 'lucide-react';
import MainButton from '@/components/ui/main-button';
import { PopularMoviesResponse } from '@/types/tmdb-types';
import SectionHeader from '@/components/ui/section-header';
import FeaturedVideosCard from '@/app/[locale]/(home)/_components/cards/featured-videos-card';
import { getTranslations } from 'next-intl/server';

type FeaturedVideosProps = {
  movies: PopularMoviesResponse | undefined;
};

const FeaturedVideos: React.FC<FeaturedVideosProps> = async ({ movies }) => {
  if (movies === undefined) {
    return null;
  }

  const t = await getTranslations('Home.Hero.FeaturedVideos');

  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-between">
        <SectionHeader as="h3" className={'text-lg text-black dark:text-white'} text={t('heading')} size="1.125rem" />
        {/*<MainButton>*/}
        {/*  <div className="flex items-center">*/}
        {/*    {t('trailersButton')}*/}
        {/*    <ChevronRight />*/}
        {/*  </div>*/}
        {/*</MainButton>*/}
      </div>
      <ul className="flex flex-col gap-6">
        {movies.map((movie, index) => (
          <li key={index}>
            <FeaturedVideosCard title={movie.title} image={movie.backdrop_path} poster={movie.poster_path} overview={movie.overview} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedVideos;

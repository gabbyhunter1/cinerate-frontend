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
  children?: ReactNode;
  carouselElements?: ReactNode[];
  gap?: string; // tailwind string
};

const NewCarouselSection: React.FC<CardsSectionProps> = async ({ backgroundHeader = '', children, carouselElements, gap }) => {
  return (
    <div className="flex flex-col max-md:gap-4 gap-7 w-full">
      <h2 className="absolute overflow-hidden pointer-events-none left-0 right-0 text-center -top-15 md:-top-25 text-[3.5rem] md:text-[5.6rem] lg:text-[10rem] font-stretch-condensed font-black text-[#12121210] dark:text-whiteTextTransparent">
        {backgroundHeader}
      </h2>
      {children}
      <CardSlider gap={gap}>{carouselElements}</CardSlider>
    </div>
  );
};

export default NewCarouselSection;

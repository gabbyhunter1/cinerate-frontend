import React from 'react';
import MovieCard from '@/app/[locale]/(home)/_components/cards/movie-card';
import PlayButton from '@/app/[locale]/_components/ui/play-button.svg';
import PlayButtonComponent from '@/app/[locale]/(home)/_components/play-button';

type MovieCaptionProps = {
  title: string | undefined;
  caption: string | undefined | null;
  poster: string | undefined;
};

const MovieCaption: React.FC<MovieCaptionProps> = ({ title, caption, poster }) => {
  return (
    <div className="relative grid w-full grid-cols-[140px_1fr] md:grid-cols-[200px_1fr] place-items-start gap-12 xs:gap-8">
      <picture>
        <MovieCard
          path={poster}
          alt="Movie Poster"
          className="absolute bottom-0 left-4 h-[210px] w-[140px] lg:h-[300px] lg:w-[200px] rounded-md object-cover md:h-[300px] md:w-[200px]"
        />
      </picture>
      <div className="flex max-xs:flex-col flex-row items-center gap-3 xs:gap-6 pt-2">
        <div className="max-xs:order-2">
          <PlayButtonComponent />
        </div>
        <div className="flex-col max-sm:text-center gap-3">
          <h2 className="text-2xl md:text-4xl text-white">{title}</h2>
          <p className="max-xs:hidden text-2xl text-regular-transparent whitespace-nowrap max-w-[420px] text-ellipsis overflow-hidden">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCaption;

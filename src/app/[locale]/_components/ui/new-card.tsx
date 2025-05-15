import React, { Suspense } from 'react';
import RateIcon from '@/assets/RateIcon.svg';
import ActiveRateIcon from '@/assets/ActiveRateIcon.svg';
import InfoIcon from '@/assets/InfoIcon.svg';
import { Movie } from '@/types/tmdb-types';
import PlayIcon from '@/assets/PlayIcon.svg';
import Modal from '@/components/ui/modal/modal';
import TrailerModal from '@/components/ui/modal/trailer-modal';
import Link from 'next/link';

type GeneralMovieCardProps = {
  movie: Movie;
  layout?: boolean;
};

const GeneralMovieCard: React.FC<GeneralMovieCardProps> = ({ movie }) => {
  return (
    <>
      <div className="bg-extralight-transparent rounded-lg p-3 w-[228px]">
        <div className="flex flex-col gap-4">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className="rounded-lg w-[200px] h-[300px]"
            loading="lazy"
          />
          <div className="flex flex-col gap-5">
            <h3 className="text-lg whitespace-nowrap overflow-hidden text-ellipsis">{movie.title}</h3>

            <div className="flex items-center gap-5 px-2 justify-between">
              <div className="flex items-center gap-0.5">
                <ActiveRateIcon />
                <span className="text-lg">8.9</span>
              </div>

              <div className="flex items-center gap-0.5">
                <RateIcon />
                <span className="text-lg">Rate</span>
              </div>
              <Link href={`/en/movie/${movie.id}`}>
                <InfoIcon />
              </Link>
            </div>

            <Modal layout={false} movieID={movie.id} title={movie.title} trigger={<span>Watch Trailer</span>}>
              <Suspense
                fallback={
                  <div className="px-12 md:px-22 py-6 relative animate-pulse">
                    <div className="absolute top-7 left-3 md:left-7 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"></div>
                    <div className="flex max-md:flex-col max-md:gap-4 justify-between">
                      <div>
                        <div className="h-8 mt-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="mt-2 h-4 bg-gray-200 rounded w-full"></div>
                        <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="space-x-4 mt-4">
                        <div className="bg-gray-200 cursor-pointer px-5 py-2 rounded-xl text-md"></div>
                        <div className="bg-gray-200 cursor-pointer px-5 py-2 rounded-xl text-md"></div>
                      </div>
                    </div>
                    <div className="pt-10 flex max-lg:flex-col gap-6">
                      <div data-ntpc="YouTubeEmbed" className="h-64 bg-gray-200 rounded"></div>
                      <div className="max-lg:text-center mt-4">
                        <div className="lg:max-w-[250px] h-32 bg-gray-200 rounded"></div>
                        <div className="lg:max-w-[250px] mt-2 h-32 bg-gray-200 rounded"></div>
                        <div className="lg:max-w-[250px] mt-2 h-32 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                }>
                <TrailerModal movieID={movie.id} lang={'en-US'} layout={false} title={movie.title} overview={movie.overview} />
              </Suspense>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralMovieCard;

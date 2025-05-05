import React from 'react';
import RateIcon from '@/assets/RateIcon.svg';
import ActiveRateIcon from '@/assets/ActiveRateIcon.svg';
import InfoIcon from '@/assets/InfoIcon.svg';
import PlayIcon from '@/assets/PlayIcon.svg';
import MainButton from '@/components/ui/main-button';

type GeneralMovieCardProps = {
  title: string | undefined;
  poster: string | undefined;
};

const GeneralMovieCard2: React.FC<GeneralMovieCardProps> = ({ title, poster }) => {
  return (
    <div className="bg-extralight-transparent rounded-lg p-3 w-[228px]">
      <div className="flex flex-col gap-4">
        <img src={`https://image.tmdb.org/t/p/w342${poster}`} alt={`${title} poster`} className="rounded-lg w-[200px] h-[300px]" loading="lazy" />
        <div className="flex flex-col gap-5">
          <h3 className="text-lg whitespace-nowrap overflow-hidden text-ellipsis">{title}</h3>

          <div className="flex items-center gap-5 px-2 justify-between">
            <div className="flex items-center gap-0.5">
              <ActiveRateIcon />
              <span className="text-lg">8.9</span>
            </div>

            <div className="flex items-center gap-0.5">
              <RateIcon />
              <span className="text-lg">Rate</span>
            </div>

            <InfoIcon />
          </div>

          <MainButton>
            <div className="flex gap-2">
              <PlayIcon className="dark:text-black text-whiteText" />
              Trailer
            </div>
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default GeneralMovieCard2;

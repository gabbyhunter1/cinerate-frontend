'use client';

import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import RateIcon from '@/assets/RateIcon.svg';
import ActiveRateIcon from '@/assets/ActiveRateIcon.svg';
import InfoIcon from '@/assets/InfoIcon.svg';
import PlayIcon from '@/assets/PlayIcon.svg';
import MainButton from '@/components/ui/main-button';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { motion } from 'motion/react';
import { Movie } from '@/types/tmdb-types';
import Modal from '@/app/[locale]/_components/ui/modal/modal';
import ModalWrapper from '@/app/[locale]/_components/ui/modal/modal-wrapper';

const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

type GeneralMovieCardProps = {
  movie: Movie;
  layout?: boolean;
};

const GeneralMovieCard: React.FC<GeneralMovieCardProps> = ({ movie, layout = false }) => {
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

              <InfoIcon />
            </div>

            <Modal layout={layout} movieID={movie.id} title={movie.title} overview={movie.overview} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralMovieCard;

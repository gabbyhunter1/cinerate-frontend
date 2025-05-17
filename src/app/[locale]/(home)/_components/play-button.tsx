'use client';

import React from 'react';
import PlayButton from '@/app/[locale]/_components/ui/play-button.svg';
import MainButton from '@/components/ui/main-button';
import { ChevronRight } from 'lucide-react';
import useWindowSize from '@/hooks/useWindowSize';
import { useTranslations } from 'next-intl';

const PlayButtonComponent = () => {
  const t = useTranslations('Home.Hero.CarouselSlide');
  const width = useWindowSize();

  if (width === undefined) return null;

  return (
    <>
      {width < 485 ? (
        <MainButton>
          <div className="flex items-center">
            {t('buttonText')}
            <ChevronRight />
          </div>
        </MainButton>
      ) : (
        <button className="max-xs:order-2 group cursor-pointer">
          <PlayButton
            className="size-[100px] md:size-[143px] [&>g>path]:fill-black dark:[&>g>path]:fill-white group-hover:[&>circle]:fill-opacity-100 group-hover:[&>circle]:fill-primary"
            alt="Play button"
          />
        </button>
      )}
    </>
  );
};

export default PlayButtonComponent;

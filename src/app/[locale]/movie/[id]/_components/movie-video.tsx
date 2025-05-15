import React from 'react';
import getVideos from '@/hooks/get-videos';
import { getLocale } from 'next-intl/server';
import { YouTubeEmbed } from '@next/third-parties/google';

const MovieVideoCard = async ({ movieID, src, title }: { movieID: number; src: string; title: string }) => {
  const language = await getLocale();

  return (
    <div className="flex flex-col gap-3">
      <div className="w-[409px] h-[230px] rounded-xl overflow-hidden">
        <YouTubeEmbed videoid={src} width={409} />
      </div>
      <p className="max-w-[400px]">{title}</p>
    </div>
  );
};

export default MovieVideoCard;

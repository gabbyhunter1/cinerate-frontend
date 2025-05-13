import React, { FC } from 'react';
import { Calendar } from 'lucide-react';
import { getLocale } from 'next-intl/server';
import PlayIcon from '@/assets/PlayIcon.svg';
import { Movie } from '@/types/tmdb-types';
import Modal from '@/components/ui/modal/modal';
import TrailerModal from '@/components/ui/modal/trailer-modal';

type TrailerCardProps = {
  movie: Movie;
  release_date: string | undefined;
  title: string | undefined;
  backdrop_path: string | undefined;
};

const TrailerCard: FC<TrailerCardProps> = async ({ movie, release_date, title, backdrop_path }) => {
  if (!release_date) {
    return null;
  }

  const placeholderImageUrl = 'https://placehold.co/340x191/white/000000?text=No Image';

  const lang = await getLocale();

  const date = new Date(release_date);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const formattedReleaseDate = date.toLocaleString(lang, options);

  return (
    <div className="w-[340px]">
      <div className="pb-3">
        <Modal
          layout={false}
          movieID={movie.id}
          title={movie.title}
          overview={movie.overview}
          trigger={
            <img
              src={backdrop_path ? `https://image.tmdb.org/t/p/w300${backdrop_path}` : `${placeholderImageUrl}`}
              alt=""
              className="w-full rounded-lg"
              loading={'lazy'}
            />
          }>
          <TrailerModal lang={lang} movieID={movie.id} title={title} overview={movie.overview} layout={false} />
        </Modal>
      </div>
      <div>
        <div className="flex items-center text-lightSecondaryText dark:text-secondaryText gap-1">
          <Calendar />
          <p>{formattedReleaseDate}</p>
        </div>
        <p className="font-normal">{title}</p>
      </div>
    </div>
  );
};

export default TrailerCard;

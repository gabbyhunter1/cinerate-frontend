import React from 'react';
import PlayButton from '@/app/[locale]/_components/ui/play-button.svg';

type FeaturedVideosCardProps = {
  title: string | undefined;
  image: string | undefined;
  poster: string | undefined;
  overview: string | undefined;
};

/* THIS IS GOING TO BE FOR TRAILERS!! GOTTA ADD PROPS FOR TRAILERS LATER */

const FeaturedVideosCard: React.FC<FeaturedVideosCardProps> = ({ title, image, poster, overview }) => {
  return (
    <div className="relative rounded-2xl h-[220px] lg:h-[180px]">
      <img src={`https://image.tmdb.org/t/p/w780${image}`} alt="" className="w-full h-full object-cover overflow-hidden rounded-2xl" />
      <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>
      <div className="absolute top-5 left-3 right-3 grid grid-cols-[100px_1fr] lg:grid-cols-[80px_1fr] gap-5 lg:gap-3">
        <img src={`https://image.tmdb.org/t/p/w342${poster}`} alt={`${title} poster`} className="w-full" />
        <div className="relative flex flex-col">
          <h3 className="text-2xl lg:text-lg text-[#c3c3c3]">{title}</h3>
          <p className="lg:hidden text-regular-transparent max-h-[180px] line-clamp-4 whitespace-normal text-ellipsis overflow-hidden">{overview}</p>
        </div>
      </div>
      <div className="absolute flex items-center gap-3 bottom-2 right-4">
        <span className="text-secondaryText">3:18</span>
        <div className="group">
          <button className="cursor-pointer">
            <PlayButton
              width={50}
              height={50}
              className="cursor-pointer group-hover:[&>circle]:fill-opacity-100 group-hover:[&>circle]:fill-primary"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideosCard;

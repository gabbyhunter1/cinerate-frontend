import React from 'react';
import MainButton from '@/components/ui/main-button';
import { ChevronDown, Share } from 'lucide-react';
import getVideos from '@/hooks/get-videos';
import YoutubeVideo from '@/components/ui/youtubeVideo/youtube-video';

type TrailerModalProps = {
  movieID: number;
  lang: string;
  layout?: boolean;
  title: string;
  overview: string | undefined;
  isOpen?: boolean;
};

const TrailerModal = async ({ movieID, lang, layout, title, overview, isOpen }: TrailerModalProps) => {
  const trailersData = await getVideos(movieID, lang, 'trailer');
  const fallbackTrailersData = await getVideos(movieID, 'en-US', 'trailer');
  console.log('im called bitch!');
  // await wait(9000);

  const [trailers, fallbackTrailers] = await Promise.all([trailersData, fallbackTrailersData]);

  return (
    <>
      <section>
        <div className="flex max-md:flex-col max-md:gap-4 justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-black dark:text-white">{title}</h2>
            <p className="mt-3 text-xl font-semibold">Final Trailer</p>
          </div>
          <div className="space-x-4">
            <MainButton variant={'secondary'}>
              <div className="flex items-center justify-center gap-2.5">
                Share
                <Share size={24} />
              </div>
            </MainButton>
            <MainButton variant={'primary'}>
              <div className="flex items-center justify-center">
                Add to Watchlist | <ChevronDown />
              </div>
            </MainButton>
          </div>
        </div>
        <div className="pt-10 flex max-lg:flex-col gap-6">
          {trailers !== undefined && trailers[0]?.key && fallbackTrailers !== undefined && fallbackTrailers[0].key ? (
            <YoutubeVideo id={trailers[0]?.key ? trailers[0].key : fallbackTrailers[0].key} style={'max-width: 100%; border-radius: 0.5rem'} />
          ) : (
            <img src="https://placehold.co/862x465/white/000000?text=No Trailer" alt="No trailer placeholder" className="max-w-[862px] w-full" />
          )}
          <div className="max-lg:text-center">
            <p className="lg:w-[300px]">{overview ? overview : `No description`}</p>
          </div>
        </div>
      </section>

      {trailers.length > 1 ? (
        <section className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold text-white">More Trailers</h2>
            <MainButton variant={'secondary'}>All Videos</MainButton>
          </div>
          <div className="flex max-md:flex-wrap md:overflow-x-auto md:whitespace-nowrap lg:flex-wrap gap-5">
            {trailers.slice(1).map(trailer => (
              <div key={trailer.id} className="w-full md:w-[295px] md:shrink-0">
                <YoutubeVideo id={trailer.key} style={'max-width: 100%; border-radius: 0.5rem'} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TrailerModal;

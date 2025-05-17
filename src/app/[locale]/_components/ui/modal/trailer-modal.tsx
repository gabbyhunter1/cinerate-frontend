import React from 'react';
import { motion } from 'motion/react';
import MainButton from '@/components/ui/main-button';
import { ChevronDown, Share } from 'lucide-react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import getVideos from '@/hooks/get-videos';

type TrailerModalProps = {
  movieID: number;
  lang: string;
  layout?: boolean;
  title: string;
  overview: string | undefined;
  isOpen?: boolean;
};

const TrailerModal = async ({ movieID, lang, layout, title, overview, isOpen }: TrailerModalProps) => {
  // const { trailers, isLoading, isError } = useVideos(movieID, lang, 'trailer', isOpen);
  // // using en-US as a fallback in case russian trailer does not exist
  // const { trailers: fallbackTrailers, isLoading: isFallbackLoading, isError: isFallbackError } = useVideos(movieID, 'en-US', 'trailer');
  //
  // const isNonExistent =
  //   (trailers === undefined || trailers.length === 0 || trailers[0].key === undefined) &&
  //   (fallbackTrailers == undefined || fallbackTrailers.length === 0);
  //
  // if (!isLoading && !isFallbackLoading) {
  //   console.log(movieID, trailers);
  // }
  //
  // return isLoading && isFallbackLoading ? null : (
  //   <>
  //     <div className="flex max-md:flex-col max-md:gap-4 justify-between">
  //       <div>
  //         <motion.h2 layoutId={layout ? `category-${title}` : undefined} className="text-3xl font-semibold text-black dark:text-white">
  //           {title}
  //         </motion.h2>
  //         <motion.p layoutId={layout ? `title-${title}` : undefined} className="mt-3 text-xl font-semibold">
  //           Final Trailer
  //         </motion.p>
  //       </div>
  //       <div className="space-x-4">
  //         <MainButton variant={'secondary'}>
  //           <div className="flex items-center justify-center gap-2.5">
  //             Share
  //             <Share size={24} />
  //           </div>
  //         </MainButton>
  //         <MainButton variant={'primary'}>
  //           <div className="flex items-center justify-center">
  //             Add to Watchlist | <ChevronDown />
  //           </div>
  //         </MainButton>
  //       </div>
  //     </div>
  //     <div className="pt-10 flex max-md:flex-col gap-6">
  //       {trailers !== undefined && trailers[0]?.key && fallbackTrailers !== undefined && fallbackTrailers[0].key ? (
  //         <LiteYouTubeEmbed
  //           id={trailers[0]?.key ? trailers[0].key : fallbackTrailers[0].key}
  //           title="d"
  //           style={{ width: '990px', maxWidth: '100%' }}
  //         />
  //       ) : (
  //         <img src="https://placehold.co/862x465/white/000000?text=No Trailer" alt="No trailer placeholder" className="max-w-[862px] w-full" />
  //       )}
  //       <div className="max-md:text-center">
  //         <p className="md:max-w-[250px]">{overview ? overview : `No description`}</p>
  //       </div>
  //     </div>
  //   </>
  // );
  const trailersData = await getVideos(movieID, lang, 'trailer');
  const fallbackTrailersData = await getVideos(movieID, 'en-US', 'trailer');

  const [trailers, fallbackTrailers] = await Promise.all([trailersData, fallbackTrailersData]);

  return (
    <>
      <div className="flex max-md:flex-col max-md:gap-4 justify-between">
        <div>
          <motion.h2 layoutId={layout ? `category-${title}` : undefined} className="text-3xl font-semibold text-black dark:text-white">
            {title}
          </motion.h2>
          <motion.p layoutId={layout ? `title-${title}` : undefined} className="mt-3 text-xl font-semibold">
            Final Trailer
          </motion.p>
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
      <div className="pt-10 flex max-md:flex-col gap-6">
        {trailers !== undefined && trailers[0]?.key && fallbackTrailers !== undefined && fallbackTrailers[0].key ? (
          <LiteYouTubeEmbed
            id={trailers[0]?.key ? trailers[0].key : fallbackTrailers[0].key}
            title="d"
            style={{ width: '990px', maxWidth: '100%' }}
          />
        ) : (
          <img src="https://placehold.co/862x465/white/000000?text=No Trailer" alt="No trailer placeholder" className="max-w-[862px] w-full" />
        )}
        <div className="max-md:text-center">
          <p className="md:max-w-[250px]">{overview ? overview : `No description`}</p>
        </div>
      </div>
    </>
  );
};

export default TrailerModal;

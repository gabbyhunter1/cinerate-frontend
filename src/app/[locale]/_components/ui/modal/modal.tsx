import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { getLocale } from 'next-intl/server';
import { MovieVideosResponse, PopularMoviesResponse } from '@/types/tmdb-types';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Share, X } from 'lucide-react';
import MainButton from '@/components/ui/main-button';
import { useLocale } from 'next-intl';
import PlayIcon from '@/assets/PlayIcon.svg';
import { useOutsideClick } from '@/hooks/use-outside-click';
import useVideos from '@/hooks/use-videos';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

const Modal = ({ layout, movieID, title, overview }: { layout: boolean; movieID: number; title: string; overview: string }) => {
  const lang = useLocale();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useOutsideClick(containerRef, () => handleClose());

  const MotionButton = motion.create(MainButton);

  const { trailers, isLoading, isError } = useVideos(movieID, lang.slice(0, 2).toUpperCase());

  if (trailers !== undefined) console.log(movieID, trailers);

  return (
    <>
      <MotionButton variant="themeChanging" layoutId={layout ? `card-${title}` : undefined} onClick={handleOpen}>
        <div className="flex gap-2">
          <PlayIcon className="text-black dark:text-whiteText" />
          Trailer
        </div>
      </MotionButton>

      {mounted && open
        ? createPortal(
            <AnimatePresence>
              <div className="fixed inset-0 z-50 h-screen overflow-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  ref={containerRef}
                  layoutId={layout ? `card-${title}` : undefined}
                  className="relative z-[60] mx-auto my-10 h-fit max-w-7xl rounded-3xl font-sans bg-lightBGSecondary dark:bg-darkBGSecondary">
                  <div className="px-22 py-6 relative">
                    <button
                      className="cursor-pointer absolute top-7 left-7 flex h-8 w-8 items-center justify-center rounded-full"
                      onClick={handleClose}>
                      <X className="h-6 w-6 dark:text-neutral-100 text-neutral-900" />
                    </button>
                    <div className="flex justify-between">
                      <div>
                        <motion.h2 layoutId={layout ? `category-${title}` : undefined} className="text-3xl font-semibold text-black dark:text-white">
                          Dune: Part Two
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
                            52k • Add to Watchlist | <ChevronDown />
                          </div>
                        </MainButton>
                      </div>
                    </div>
                    <div className="py-10 flex gap-6">
                      <LiteYouTubeEmbed id={trailers[0].key} title="d" style={{ width: '990px' }} />
                      {/*<img className="max-h-[557px] max-w-[990px] h-full w-full" src="https://placehold.co/990x557" alt={`${title} trailer`} />*/}
                      <div>
                        <p className="w-[250px]">{overview ? overview : `No description`}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
};

export default Modal;

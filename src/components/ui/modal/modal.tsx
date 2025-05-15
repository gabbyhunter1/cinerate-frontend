'use client';

import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import MainButton from '@/components/ui/main-button';
import { useOutsideClick } from '@/hooks/use-outside-click';
import YoutubeVideo from '@/components/ui/youtubeVideo/youtube-video';

const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

const Modal = ({ layout, title, trigger, children }: { layout: boolean; title: string; trigger: ReactNode; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useOutsideClick(containerRef, handleClose);

  const MotionButton = motion.create(MainButton);

  return (
    <>
      <MotionButton variant="themeChanging" layoutId={layout ? `card-${title}` : undefined} onClick={handleOpen}>
        {trigger}
      </MotionButton>

      {mounted && open
        ? createPortal(
            <AnimatePresence>
              <div className="fixed inset-0 z-50 h-dvh overflow-auto">
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
                  className="relative z-[60] mx-auto my-10 h-fit max-w-8xl rounded-3xl font-sans bg-lightBGSecondary dark:bg-darkBGSecondary">
                  <div className="px-12 md:px-22 py-6 relative">
                    <button
                      className="cursor-pointer absolute top-7 left-3 md:left-7 flex h-8 w-8 items-center justify-center rounded-full"
                      onClick={handleClose}>
                      <X className="h-6 w-6 dark:text-neutral-100 text-neutral-900" />
                    </button>
                    {children}
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

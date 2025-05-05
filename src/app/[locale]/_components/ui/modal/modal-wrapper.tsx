import React, { ReactNode } from 'react';
import { getLocale } from 'next-intl/server';
import { MovieVideosResponse } from '@/types/tmdb-types';
import Modal from '@/app/[locale]/_components/ui/modal/modal';

const ModalWrapper = async ({
  movieID,
  mounted,
  open,
  containerRef,
  layout,
  title,
  overview,
  handleClose,
}: {
  movieID: number;
  children: ReactNode;
  mounted: boolean;
  open: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  layout: boolean;
  title: string;
  overview: string;
  handleClose: () => void;
}) => {
  const lang = await getLocale();
  const data = await fetch(`http://localhost:8080/api/movie/video?id=${movieID}&language=${lang}`);
  const trailers: MovieVideosResponse = await data.json();

  return (
    <>
      <Modal layout={layout} movieID={movieID} title={title} overview={overview} />
    </>
  );
};

export default ModalWrapper;

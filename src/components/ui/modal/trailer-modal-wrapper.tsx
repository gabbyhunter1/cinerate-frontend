import TrailerModal from '@/app/[locale]/_components/ui/modal/trailer-modal';
import { getLocale } from 'next-intl/server';
import Modal from '@/components/ui/modal/modal';

const MovieModalWrapper = async ({ movieID, title, overview }: { movieID: number; title: string; overview: string }) => {
  const lang = await getLocale();

  return (
    <Modal layout={true} title={title} trigger={<span>Watch Trailer</span>}>
      <TrailerModal movieID={movieID} lang={lang} title={title} overview={overview} />
    </Modal>
  );
};

export default MovieModalWrapper;

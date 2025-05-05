import HeroSection from '@/app/[locale]/(home)/sections/hero-section';
import CarouselSection from '@/app/[locale]/(home)/sections/carousel-section';
import { getTranslations } from 'next-intl/server';
import TrailerCard from '@/app/[locale]/(home)/_components/cards/trailer-card';
import React, { Suspense } from 'react';
import LoadingSkeleton from '@/app/[locale]/(home)/sections/loading-skeleton';
import GeneralMovieCard from '@/app/[locale]/_components/ui/new-card';
import { YouTubeEmbed } from '@next/third-parties/google';

export default async function Home() {
  const t = await getTranslations('Home');

  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        <HeroSection />
      </Suspense>
      <CarouselSection
        backgroundHeader=""
        heading={t('TopPicks.heading')}
        marginTop="mt-32"
        response="top-rated"
        // renderCard={movie => <GeneralMovieCard title={movie.title} poster={movie.poster_path} />}
        renderCard={movie => <GeneralMovieCard movie={movie} />}
      />
      <CarouselSection
        backgroundHeader={t('NowPlaying.backgroundHeading')}
        heading={t('NowPlaying.heading')}
        marginTop="mt-32"
        response="now-playing"
        renderCard={movie => <GeneralMovieCard movie={movie} />}
      />
      <CarouselSection
        backgroundHeader={t('Upcoming.backgroundHeading')}
        heading={t('Upcoming.heading')}
        marginTop="mt-32"
        response="upcoming"
        renderCard={movie => <TrailerCard title={movie.title} release_date={movie.release_date} backdrop_path={movie.backdrop_path} />}
      />
      <CarouselSection
        backgroundHeader={t('UpcomingReleases.backgroundHeading')}
        heading={t('UpcomingReleases.heading')}
        marginTop="mt-32"
        response="upcoming"
        isReleases={true}
        renderCard={movie => <TrailerCard title={movie.title} release_date={movie.release_date} backdrop_path={movie.backdrop_path} />}
      />
    </>
  );
}

import HeroSection from '@/app/[locale]/(home)/_sections/hero-section';
import CarouselSection from '@/app/[locale]/(home)/_sections/carousel-section';
import { getTranslations } from 'next-intl/server';
import TrailerCard from '@/app/[locale]/(home)/_components/cards/trailer-card';
import React, { Suspense } from 'react';
import LoadingSkeleton from '@/app/[locale]/(home)/_sections/loading-skeleton';
import GeneralMovieCard from '@/app/[locale]/_components/ui/new-card';
import { routing } from '@/i18n/routing';
import SectionHeader from '@/components/ui/section-header';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function Home() {
  const t = await getTranslations('Home');
  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        <HeroSection />
      </Suspense>
      <section className="max-w-8xl mt-25 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-9 relative">
        <CarouselSection
          backgroundHeader=""
          marginTop="mt-32"
          response="top-rated"
          // renderCard={movie => <GeneralMovieCard title={movie.title} poster={movie.poster_path} />}
          renderCard={movie => <GeneralMovieCard movie={movie} />}>
          <SectionHeader text={t('TopPicks.heading')} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem" />
        </CarouselSection>
      </section>
      <section className="max-w-8xl mt-25 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-9 relative">
        <CarouselSection
          backgroundHeader={t('NowPlaying.backgroundHeading')}
          marginTop="mt-32"
          response="now-playing"
          renderCard={movie => <GeneralMovieCard movie={movie} />}>
          <SectionHeader text={t('NowPlaying.heading')} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem" />
        </CarouselSection>
      </section>
      <section className="max-w-8xl mt-25 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-9 relative">
        <CarouselSection
          backgroundHeader={t('Upcoming.backgroundHeading')}
          marginTop="mt-32"
          response="upcoming"
          renderCard={movie => (
            <TrailerCard movie={movie} title={movie.title} release_date={movie.release_date} backdrop_path={movie.backdrop_path} />
          )}>
          <SectionHeader text={t('Upcoming.heading')} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem" />
        </CarouselSection>
      </section>
      <section className="max-w-8xl mt-25 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-9 relative">
        <CarouselSection
          backgroundHeader={t('UpcomingReleases.backgroundHeading')}
          marginTop="mt-32"
          response="premieres"
          renderCard={movie => (
            <TrailerCard movie={movie} title={movie.title} release_date={movie.release_date} backdrop_path={movie.backdrop_path} />
          )}>
          <SectionHeader text={t('UpcomingReleases.heading')} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem" />
        </CarouselSection>
      </section>
    </>
  );
}

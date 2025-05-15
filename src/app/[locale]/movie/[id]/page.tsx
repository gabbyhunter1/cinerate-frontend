import React from 'react';
import { MovieDetails, MovieVideo, MovieVideosResponse } from '@/types/tmdb-types';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { formatRuntime } from '@/utils/formatRuntime';
import MainButton from '@/components/ui/main-button';
import { Main } from 'next/document';
import ImageGlow from 'react-image-glow';
import { Timeline, TimelineEntry } from '@/components/ui/timeline';
import ImageGlow1 from '@/components/image-glow';
import Image from 'next/image';
import GeneralMovieCard from '@/app/[locale]/_components/ui/new-card';
import CarouselSection from '@/app/[locale]/(home)/_sections/carousel-section';
import getVideos from '@/hooks/get-videos';
import MovieVideoCard from '@/app/[locale]/movie/[id]/_components/movie-video';
import SectionHeader from '@/components/ui/section-header';

export default async function MoviePage({ params }: { params: Promise<{ id: number }> }) {
  const [locale, { id }] = await Promise.all([getLocale(), params]);

  const data1 = [
    {
      title: '2024',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Early 2023',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Changelog',
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Deployed 5 new components on Aceternity today</p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Card grid component</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Startup template Aceternity</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Random file upload lol</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Himesh Reshammiya Music CD</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  const data = await fetch(`http://localhost:8080/api/movie/movie-details?id=${id}&language=${locale}`);
  console.log(`http://localhost:8080/api/movie/details?id=${id}&language=${locale}`);
  if (!data.ok) {
    return notFound();
  }
  const movie: MovieDetails = await data.json();
  const movieDuration = movie.runtime ? formatRuntime(movie.runtime) : 'No info';

  const videos = await getVideos({ id: id, type: '', language: locale, limit: '10' });

  const firstColumnItems = ['Genre', 'Plot', 'Director', 'Another', 'Short', 'Medium', 'Longe'];

  const secondColumnItems = [
    <div className="flex flex-wrap gap-2" key="genres">
      {movie.genres?.map(genre => (
        <p key={genre.id} className="bg-light-transparent px-5 py-2 shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.08)] rounded-[11rem] text-md">
          {genre.name}
        </p>
      ))}
    </div>,
    <p className="max-w-2xl">{movie.overview}</p>,
    <p className="text-primary">Denis Villeneuve · Jon Spaihts</p>,
    <p className="text-primary">Timothée Chalamet </p>,
    <p className="text-primary">Denis Villeneuve</p>,
    <p className="text-primary">Denis Villeneuve</p>,
    <p className="text-primary">Denis Villeneuve</p>,
  ];

  const data2: TimelineEntry[] = [
    {
      title: 'Overview',
      content: (
        <section className="mt-15">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl dark:text-whiteText font-bold">{movie.title}</h1>
              <p className="text-secondaryText">{`${movie.release_date?.slice(0, 4)} · CERT · ${movieDuration}`}</p>
            </div>
            <div className="flex sm:self-end gap-3 sm:mt-0">
              <MainButton variant={'secondary'}>Rate</MainButton>
              <MainButton variant={'secondary'}>8.9/10</MainButton>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-[280px_1fr] md:gap-7 lg:gap-10 pb-7">
            <ImageGlow radius={300}>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} style={{ height: '100%' }} alt="Poster" className={'rounded-xl'} />
            </ImageGlow>
            <ImageGlow radius={300}>
              <img
                src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                style={{ height: '100%' }}
                alt="Backdrop"
                className="object-cover rounded-xl"
              />
            </ImageGlow>
          </div>
          <div className="grid gap-x-10 gap-y-4" style={{ gridTemplateColumns: 'auto 1fr' }}>
            {firstColumnItems.map((item, i) => (
              <React.Fragment key={i}>
                <p className="font-bold text-lg">{item}</p>
                {secondColumnItems[i]}
              </React.Fragment>
            ))}
          </div>
        </section>
      ),
      overflowOnContent: '',
    },
    {
      title: 'Videos',
      content: (
        <div>
          <CarouselSection
            backgroundHeader=""
            marginTop="mt-0"
            response="video"
            movieId={movie.id}
            // renderCard={movie => <GeneralMovieCard title={movie.title} poster={movie.poster_path} />}
            renderCard={movie => <MovieVideoCard movieID={movie.id} title={movie.name} src={movie.key} />}>
            <SectionHeader text={'Videos'} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem">
              <MainButton variant={'themeChanging'}>See all {videos.length}</MainButton>
            </SectionHeader>
          </CarouselSection>
        </div>
      ),
      overflowOnContent: 'overflow-hidden',
    },
    {
      title: 'Photos',
      content: (
        <div>
          <CarouselSection
            backgroundHeader=""
            marginTop="mt-0"
            response="video"
            movieId={movie.id}
            // renderCard={movie => <GeneralMovieCard title={movie.title} poster={movie.poster_path} />}
            renderCard={movie => <MovieVideoCard movieID={movie.id} title={movie.name} src={movie.key} />}>
            <SectionHeader text={'Photos'} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem">
              <MainButton variant={'themeChanging'}>See all {videos.length}</MainButton>
            </SectionHeader>
          </CarouselSection>
        </div>
      ),
      overflowOnContent: 'overflow-hidden',
    },
  ];
  console.log(videos);

  return (
    <>
      {/*<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 md:px-10">*/}
      {/*  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">*/}
      {/*    <div className="flex flex-col gap-3">*/}
      {/*      <h1 className="text-4xl dark:text-whiteText font-bold">{movie.title}</h1>*/}
      {/*      <p className="text-secondaryText">{`${movie.release_date?.slice(0, 4)} · CERT · ${movieDuration}`}</p>*/}
      {/*    </div>*/}
      {/*    <div className="flex sm:self-end gap-3 sm:mt-0">*/}
      {/*      <MainButton variant={'secondary'}>Rate</MainButton>*/}
      {/*      <MainButton variant={'secondary'}>8.9/10</MainButton>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="mt-5 grid gap-4 md:grid-cols-[295px_1fr] md:gap-7 lg:gap-10 pb-7">*/}
      {/*    <ImageGlow>*/}
      {/*      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Poster" className="h-full" />*/}
      {/*    </ImageGlow>*/}
      {/*    <ImageGlow>*/}
      {/*      <img src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt="Backdrop" className="" />*/}
      {/*    </ImageGlow>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="relative">
        <Timeline data={data2} />
      </div>
    </>
  );
}

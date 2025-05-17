import React from 'react';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { formatRuntime } from '@/utils/formatRuntime';
import MainButton from '@/components/ui/main-button';
import ImageGlow from 'react-image-glow';
import { Timeline, TimelineEntry } from '@/components/ui/timeline';
import CarouselSection from '@/app/[locale]/(home)/_sections/carousel-section';
import getVideos from '@/hooks/get-videos';
import MovieVideoCard from '@/app/[locale]/movie/[id]/_components/movie-video';
import SectionHeader from '@/components/ui/section-header';
import { MovieCast, MovieDetails, MovieImagesBackdrop, MovieImagesBackdrops, ReleaseDate } from '@/types/tmdb-types';
import NewCarouselSection from '@/components/newCarousel';

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

  const [dataRes, releaseInfoRes, backdropsRes, castRes] = await Promise.all([
    fetch(`${process.env.API_BASE_URL}/api/movie/movie-details?id=${id}&language=${locale}`),
    fetch(`${process.env.API_BASE_URL}/api/movie/release-dates?id=${id}`),
    fetch(`${process.env.API_BASE_URL}/api/movie/images?id=${id}&language=null&type=backdrops`),
    fetch(`${process.env.API_BASE_URL}/api/movie/movie-credits?id=${id}&language=${locale.slice(0, 2)}&type=cast`),
  ]);
  if (!dataRes.ok) {
    return notFound();
  }
  const [movie, releaseInfo, backdrops, cast]: [MovieDetails, ReleaseDate, MovieImagesBackdrops, any] = await Promise.all([
    dataRes.json(),
    releaseInfoRes.json(),
    backdropsRes.json(),
    castRes.json(),
  ]);
  const videos = await getVideos({ id: id, type: '', language: locale, limit: '10' });

  const movieDuration = movie.runtime ? formatRuntime(movie.runtime) : 'No info';
  const certification = releaseInfo[0]?.certification || 'No certification';
  const releaseDate = movie.release_date;
  const releaseYear = movie.release_date?.slice(0, 4) || 'No info on release date';
  const productionCompanies = movie.production_companies?.map(company => company.name);

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

  const column1 = ['Release date', 'Country', 'Language', 'Original title', 'Production companies'];
  // @ts-ignore
  const column2 = [
    <p className="pt-0.5">
      {releaseDate
        ? new Date(movie?.release_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : 'No info'}
    </p>,
    <p className="pt-0.5">{movie.origin_country[0]}</p>,
    <p className="text-primary pt-0.5">{new Intl.DisplayNames([locale.slice(0, 2)], { type: 'language' }).of(movie.original_language)}</p>,
    <p className="pt-0.5">{movie.original_title}</p>,
    <p className="text-primary pt-1">
      {productionCompanies?.map((name, index) => (
        <span key={index}>
          <span className="text-yellow-400">{name}</span>
          {index < productionCompanies.length - 1 && <span className="text-secondaryText"> • </span>}
        </span>
      ))}
    </p>,
  ];

  const data2: TimelineEntry[] = [
    {
      title: 'Overview',
      content: (
        <section className="mt-15">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl dark:text-whiteText font-bold">{movie.title}</h1>
              <p className="text-secondaryText">{`${releaseYear} · ${certification} · ${movieDuration}`}</p>
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
          <NewCarouselSection
            carouselElements={backdrops?.map(backdrop => (
              <img
                key={backdrop.file_path}
                src={`https://image.tmdb.org/t/p/w342${backdrop.file_path}`}
                alt={`${movie.title} backdrop`}
                width={264}
                height={264}
                loading="lazy"
                className="rounded-lg h-[264px] object-cover object-center"
              />
            ))}>
            <SectionHeader text={'Photos'} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem">
              <MainButton variant={'themeChanging'}>See all {backdrops?.length}</MainButton>
            </SectionHeader>
          </NewCarouselSection>
        </div>
      ),
      overflowOnContent: 'overflow-hidden',
    },
    {
      title: 'Cast',
      content: (
        <div>
          <NewCarouselSection
            gap="gap-7"
            carouselElements={cast?.map(actor =>
              actor.profile_path ? (
                <div key={actor.credit_id} className="flex flex-col gap-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={`${movie.title} backdrop`}
                    loading="lazy"
                    className="rounded-lg max-w-none"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="dark:text-white text-black">{actor.name}</p>
                    <p className="text-secondaryText">{actor.character}</p>
                  </div>
                </div>
              ) : (
                <img src={'https://placehold.co/185x278/white/000000?text=No Picture'} alt="No Picture" loading="lazy" />
              )
            )}>
            <SectionHeader text={'Cast'} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem">
              <MainButton variant={'themeChanging'}>See all {backdrops?.length}</MainButton>
            </SectionHeader>
          </NewCarouselSection>
        </div>
      ),
      overflowOnContent: 'overflow-hidden',
    },
    {
      title: 'User Reviews',
      content: (
        <div>
          <NewCarouselSection>
            <SectionHeader text={'User Reviews'} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem">
              <MainButton variant={'themeChanging'}>See all {backdrops?.length}</MainButton>
            </SectionHeader>
          </NewCarouselSection>
        </div>
      ),
      overflowOnContent: 'overflow-hidden',
    },
    {
      title: 'Details',
      content: (
        <>
          <SectionHeader text={'Details'} className="text-xl sm:text-2xl md:text-2xl lg:text-3xl" size="1.125rem" />
          <div className="pl-2 mt-7">
            <div className="grid gap-x-10 gap-y-10" style={{ gridTemplateColumns: 'auto 1fr' }}>
              {column1.map((item, i) => (
                <React.Fragment key={i}>
                  <p className="font-bold text-lg max-w-30">{item}</p>
                  {column2[i]}
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      ),
      overflowOnContent: 'overflow-hidden',
    },
  ];

  return (
    <>
      <div className="relative">
        <Timeline data={data2} />
      </div>
    </>
  );
}

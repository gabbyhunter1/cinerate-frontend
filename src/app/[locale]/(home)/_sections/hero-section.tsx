import CarouselSlide from '@/app/[locale]/(home)/_components/carousel-slide';
import FeaturedVideos from '@/app/[locale]/(home)/_components/featured-videos';
import { PopularMoviesResponse } from '@/types/tmdb-types';
import { getLocale } from 'next-intl/server';

const HeroSection = async () => {
  const lang = await getLocale();
  const data = await fetch(`http://localhost:8080/api/movieLists/popular?language=${lang}&offset=0&limit=3`);
  const movies: PopularMoviesResponse = await data.json();

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-9 relative">
      <CarouselSlide movies={movies.slice(0, 3)} />
      <FeaturedVideos movies={movies.slice(0, 3)} />
    </section>
  );
};

export default HeroSection;

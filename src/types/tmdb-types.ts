import type { operations, components } from '@/types/api';

export type Movie = components['schemas']['Movie'];
export type PopularMoviesResponse = operations['getPopularMovies']['responses'][200]['content']['*/*'];
export type TopRatedMoviesResponse = operations['getTopRatedMovies']['responses'][200]['content']['*/*'];
export type UpcomingMoviesResponse = operations['getUpcomingMovies']['responses'][200]['content']['*/*'];
export type NowPlayingMoviesResponse = operations['getNowPlayingMovies']['responses'][200]['content']['*/*'];

export type MovieVideosResponse = operations['getVideo']['responses'][200]['content']['*/*'];
export type MovieVideo = MovieVideosResponse;

export type MovieDetails = operations['getDetails_1']['responses'][200]['content']['*/*'];
export type ReleaseDate = operations['getReleaseDates']['responses'][200]['content']['*/*'];
export type MovieImages = operations['getImages_1']['responses'][200]['content']['*/*'];
export type MovieImagesBackdrops = components['schemas']['Images']['backdrops'];
export type MovieCast = components['schemas']['Credits'];

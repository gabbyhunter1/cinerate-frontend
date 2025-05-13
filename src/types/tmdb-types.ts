import type { operations, components } from '@/types/api';

export type Movie = components['schemas']['Movie'];
export type PopularMoviesResponse = operations['getPopularMovies']['responses'][200]['content']['*/*'];
export type TopRatedMoviesResponse = operations['getTopRatedMovies']['responses'][200]['content']['*/*'];
export type UpcomingMoviesResponse = operations['getUpcomingMovies']['responses'][200]['content']['*/*'];
export type NowPlayingMoviesResponse = operations['getNowPlayingMovies']['responses'][200]['content']['*/*'];

export type MovieVideosResponse = operations['getVideo']['responses'][200]['content']['*/*'];
export type MovieVideo = MovieVideosResponse;

import useSWR from 'swr';
import { MovieVideo, MovieVideosResponse } from '@/types/tmdb-types';

const fetcher = (url: string): Promise<MovieVideo> => fetch(url).then(res => res.json());

function useVideos(id: number, language: string, type: string, condition?: boolean) {
  if (condition !== undefined) {
    const { data, error, isLoading } = useSWR(
      condition ? `${process.env.API_BASE_URL}/api/movie/video?id=${id}&language=${language}${type === '' ? '' : `&type=${type}`}` : null,
      fetcher
    );

    return {
      trailers: data,
      isLoading,
      isError: error,
    };
  } else {
    const { data, error, isLoading } = useSWR(
      `${process.env.API_BASE_URL}/api/movie/video?id=${id}&language=${language}${type === '' ? '' : `&type=${type}`}`,
      fetcher
    );

    return {
      trailers: data,
      isLoading,
      isError: error,
    };
  }
}

export default useVideos;

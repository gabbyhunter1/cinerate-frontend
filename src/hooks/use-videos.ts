import useSWR from 'swr';
import { MovieVideo, MovieVideosResponse } from '@/types/tmdb-types';

const fetcher = (url: string): Promise<MovieVideo> =>
  fetch(url)
    .then(res => res.json())
    .then(data => data.results);

function useVideos(id: number, language: string) {
  const { data, error, isLoading } = useSWR(`http://localhost:8080/api/movie/video?id=${id}&language=${language}`, fetcher);

  return {
    trailers: data,
    isLoading,
    isError: error,
  };
}

export default useVideos;

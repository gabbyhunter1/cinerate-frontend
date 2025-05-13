import { MovieVideosResponse } from '@/types/tmdb-types';

async function getVideos(id: number, language: string, type: string) {
  const data = await fetch(`http://localhost:8080/api/movie/video?id=${id}&language=${language}${type === '' ? '' : `&type=${type}`}`);
  const videos: MovieVideosResponse = await data.json();

  return videos;
}

export default getVideos;

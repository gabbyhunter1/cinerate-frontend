import { MovieVideosResponse } from '@/types/tmdb-types';

export default async function getVideos({ id, language, type, limit }: { id: number; language: string; type: string; limit?: string }) {
  const data = await fetch(`http://localhost:8080/api/movie/video?id=${id}&language=${language}${type === '' ? '' : `&type=${type}`}&limit=${limit}`);
  const videos: MovieVideosResponse = await data.json();

  return videos;
}

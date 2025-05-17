import { MovieVideosResponse } from '@/types/tmdb-types';

export default async function getVideos({ id, language, type, limit }: { id: number; language: string; type: string; limit?: string }) {
  const data = await fetch(
    `${process.env.API_BASE_URL}/api/movie/video?id=${id}&language=${language}${type === '' ? '' : `&type=${type}`}&limit=${limit}`
  );
  const videos: MovieVideosResponse = await data.json();
  return videos;
}

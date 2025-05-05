const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api';

export const API_ROUTES = {
  MOVIES: {
    UPCOMING: `${BASE_URL}/movies`,
    TOP_RATED: (id: string | number) => `${BASE_URL}/movies/${id}`,
    POPULAR: (id: string | number) => `${BASE_URL}/movies/${id}`,
    NOW_PLAYING: (id: string | number) => `${BASE_URL}/movies/${id}`,
  },
};

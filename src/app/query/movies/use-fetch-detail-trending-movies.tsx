import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type PropsDetailTrendingMovies = {
  movie_id: number;
};
export default function useDetailTrendingMovies(
  movie_id: PropsDetailTrendingMovies
) {
  const { data, isPending } = useQuery({
    queryKey: ['detail trending movies', movie_id],
    queryFn: async () => {
      const detailTrendingMoviesResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_DETAIL_URL}/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return detailTrendingMoviesResponse.data;
    },
  });
  return {
    data,
    isPending,
  };
}

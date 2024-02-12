import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useTrendingMovies() {
  const { data, isPending, error } = useQuery({
    queryKey: ['trending movies'],
    queryFn: async () => {
      const trendingMoviesResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return trendingMoviesResponse.data.results;
    },
  });
  return {
    data,
    isPending,
    error,
  };
}

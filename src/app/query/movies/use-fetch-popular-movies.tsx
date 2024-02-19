import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function usePopularMovies() {
  const { data, isPending } = useQuery({
    queryKey: ['popular movies'],
    queryFn: async () => {
      const popularMoviesResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_DETAIL_URL}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return popularMoviesResponse.data.results;
    },
  });
  return {
    data,
    isPending,
  };
}

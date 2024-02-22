import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useTopMovies() {
  const { data, isPending } = useQuery({
    queryKey: ['top movies'],
    queryFn: async () => {
      const topMoviesResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_DETAIL_URL}/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return topMoviesResponse.data.results;
    },
  });
  return {
    data,
    isPending,
  };
}

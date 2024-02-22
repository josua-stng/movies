import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useSearchMovies(query: string | null) {
  const { data, isPending } = useQuery({
    queryKey: ['search movies'],
    queryFn: async () => {
      const searchMoviesResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_DETAIL_URL_SEARCH}?query=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return searchMoviesResponse.data.results;
    },
  });
  return {
    data,
    isPending,
  };
}

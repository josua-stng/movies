import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useUpcomingMovies() {
  const { data, isPending } = useQuery({
    queryKey: ['upcoming movies'],
    queryFn: async () => {
      const upComingMoviesResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_DETAIL_URL}/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return upComingMoviesResponse.data.results;
    },
  });
  return {
    data,
    isPending,
  };
}

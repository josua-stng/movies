import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type PropsRecomendationMovies = {
  movie_id: number;
};
export default function useRecomendationMovies(
  movie_id: PropsRecomendationMovies
) {
  const { data, isPending } = useQuery({
    queryKey: ['recomendation movies', movie_id],
    queryFn: async () => {
      const RecomendationMovies = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_DETAIL_URL}/${movie_id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return RecomendationMovies.data.results;
    },
  });
  return {
    data,
    isPending,
  };
}

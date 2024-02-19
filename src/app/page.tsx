import TrendingMovies from './movies/trending-movies/trending-movies';
import PopularMovies from './popular-movies/popular-movies';
export default function Home() {
  return (
    <>
      <TrendingMovies />
      <PopularMovies />
    </>
  );
}

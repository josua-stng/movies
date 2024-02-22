import TrendingMovies from './movies/trending-movies/page';
import PopularMovies from './popular-movies/page';
import CarouselTopMovies from './top-movies/carousel-top-movies';
import UpcomingMovies from './upcoming-movies/page';
export default function Home() {
  return (
    <>
      <TrendingMovies />
      <PopularMovies />
      <CarouselTopMovies />
      <UpcomingMovies />
    </>
  );
}

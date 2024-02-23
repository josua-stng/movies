'use client';
import useTopMovies from '../query/movies/use-fetch-top-movies';
import SkeletonPopularMovie from '../lib/skeleton-popular-movie';
import { TopMovies } from '../lib/types';
import 'animate.css';
import TopMovie from './top-movie';
export default function TopMovies() {
  const { data: movies, isPending } = useTopMovies();
  if (isPending) {
    return <SkeletonPopularMovie />;
  }
  return (
    <div className="p-5 mt-5 animate__animated animate__fadeIn">
      <h1 className="font-bold text-xl mb-2 italic font-sans">Top Movies</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-8xl gap-5 mx-auto justify-center">
        {movies?.map((movie: TopMovies) => {
          return (
            <TopMovie
              key={movie.id}
              id={movie.id}
              image={movie.backdrop_path}
              original_title={movie.original_title}
              popularity={movie.popularity}
              release_date={movie.release_date}
              overview={movie.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

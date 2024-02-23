'use client';
import useUpcomingMovies from '../query/movies/use-fetch-upcoming-movies';
import SkeletonPopularMovie from '../lib/skeleton-popular-movie';
import { UpcomingMovies } from '../lib/types';
import 'animate.css';
import UpcomingMovie from './upcoming-movie';
export default function UpcomingMovies() {
  const { data: movies, isPending } = useUpcomingMovies();
  if (isPending) {
    return <SkeletonPopularMovie />;
  }
  return (
    <div className="p-5 mt-5 animate__animated animate__fadeIn">
      <h1 className="font-bold text-xl mb-2 italic font-sans">
        Upcoming Movies
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-8xl gap-5 mx-auto justify-center">
        {movies?.map((movie: UpcomingMovies) => {
          return (
            <UpcomingMovie
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

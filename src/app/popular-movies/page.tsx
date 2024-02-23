'use client';
import usePopularMovies from '../query/movies/use-fetch-popular-movies';
import SkeletonPopularMovie from '../lib/skeleton-popular-movie';
import { PopularMovies } from '../lib/types';
import 'animate.css';
import PopularMovie from './popular-movie';

export default function PopularMovies() {
  const { data: popularMovies, isPending } = usePopularMovies();
  if (isPending) {
    return <SkeletonPopularMovie />;
  }
  return (
    <div className="p-5 mt-5 animate__animated animate__fadeIn">
      <h1 className="font-bold text-xl mb-2 italic font-sans">
        Popular Movies
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-8xl gap-5 mx-auto justify-center">
        {popularMovies?.map((movie: PopularMovies) => {
          return (
            <PopularMovie
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

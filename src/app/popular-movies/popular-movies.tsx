'use client';
import Image from 'next/image';
import usePopularMovies from '../query/movies/use-fetch-popular-movies';
import { MdOutlineStarBorder } from 'react-icons/md';
import SkeletonPopularMovie from '../lib/skeleton-popular-movie';
import Link from 'next/link';
type PropsMovieTrending = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};

export default function PopularMovies() {
  const { data: popularMovies, isPending } = usePopularMovies();
  if (isPending) {
    return <SkeletonPopularMovie />;
  }
  return (
    <div className="p-5 mt-5">
      <h1 className="font-bold text-xl mb-2 italic font-sans">
        Popular Movies
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-8xl gap-5 mx-auto justify-center">
        {popularMovies?.map((movie: PropsMovieTrending) => {
          return (
            <Link
              href={`/movies/${movie.id}`}
              key={movie.id}
              className="border border-slate-300 mx-auto justify-center p-3 space-y-2 rounded-md hover:bg-slate-100 cursor-pointer"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                width={400}
                height={400}
                className="object-cover rounded-md"
                alt="image-movie"
              />
              <div className="flex justify-between items-center">
                <h1 className="font-bold ">{movie.original_title}</h1>
                <div className="flex items-center">
                  <MdOutlineStarBorder />
                  <p className="text-sm">{Math.floor(movie.popularity)}</p>
                </div>
              </div>
              <p className="text-xs">{movie.release_date}</p>
              <p className="line-clamp-3 text-sm font-base mt-2">
                {movie.overview}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

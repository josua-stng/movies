'use client';
import Image from 'next/image';
import { MdOutlineStarBorder } from 'react-icons/md';
import Link from 'next/link';
import useSearchMovies from '../query/movies/use-fetch-search-movies';
import { useSearchParams } from 'next/navigation';
import SkeletonPopularMovie from '../lib/skeleton-popular-movie';
type PropsMovieTrending = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};
export default function SearchMovies() {
  const searchParams = useSearchParams();
  const search = searchParams.get('query');
  const { data: movies, isPending } = useSearchMovies(search);
  const query = search?.toLowerCase();
  const filterMovies = movies?.filter((movie: any) => {
    return movie.original_title.toLowerCase().includes(query);
  });
  const isMovieNotFound = filterMovies?.length === 0;
  if (isPending) {
    return <SkeletonPopularMovie />;
  }
  return (
    <div className="p-5 mt-5">
      {isMovieNotFound ? (
        <>
          <h1 className="text-center italic text-2xl font-bold">
            Movies Not Found
          </h1>
        </>
      ) : (
        <>
          <h1 className="font-bold text-xl mb-2 italic font-sans">
            Search Movies
          </h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-8xl gap-5 mx-auto justify-center">
            {filterMovies?.map((movie: PropsMovieTrending) => {
              return (
                <Link
                  href={`/movies/${movie.id}`}
                  key={movie.id}
                  className="border border-slate-300 mx-auto justify-center p-3 space-y-2 rounded-md hover:bg-slate-100 cursor-pointer"
                >
                  {movie.backdrop_path ? (
                    <>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        width={400}
                        height={400}
                        className="object-cover rounded-md"
                        alt="image-movie"
                      />
                    </>
                  ) : (
                    <div className="w-[300px] md:w-[200px] md:h-1/3 lg:w-full lg:h-2/5 h-max flex justify-center items-center border border-slate-100 px-14 py-5 mb-10 text-nowrap">
                      <p className="text-xl font-sans italic ">
                        Image not available
                      </p>
                    </div>
                  )}
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
        </>
      )}
    </div>
  );
}

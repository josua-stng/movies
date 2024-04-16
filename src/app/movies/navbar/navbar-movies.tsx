import Link from 'next/link';
import SearchMovies from './search-movies';
import SearchMoviesDetail from './search-responsive';

export default function NavbarMovies() {
  return (
    <nav className="flex justify-between items-center p-3 pb-4 bg-sky-900 sticky top-0 z-10 gap-2">
      <div className="flex space-x-5 text-slate-100 font-semibold text-sm md:text-base">
        <Link href={'/'} className="hover:underline">
          Movies
        </Link>
        <Link href={'/popular-movies'} className="hover:underline ">
          Popular
        </Link>
        <Link href={'/top-movies'} className="hover:underline">
          Top
        </Link>
        <Link href={'/upcoming-movies'} className="hover:underline">
          Upcoming
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <SearchMoviesDetail />
        <SearchMovies />
      </div>
    </nav>
  );
}

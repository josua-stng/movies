import SearchMovies from './search-movies';

export default function NavbarMovies() {
  return (
    <nav className="flex justify-between items-center p-3 pb-4 bg-sky-800    ">
      <div className="flex space-x-5 text-slate-100 font-semibold">
        <h2>Movies</h2>
        <h2>Popular</h2>
        <h2>Top</h2>
        <h2>Upcoming</h2>
      </div>
      <div>
        <SearchMovies />
      </div>
    </nav>
  );
}

import Image from 'next/image';
import { MdOutlineStarBorder } from 'react-icons/md';
import Link from 'next/link';
import { PropsLayoutUpcomingMovies } from '../lib/types';
export default function LayoutUpcomingMovies({
  id,
  image,
  original_title,
  popularity,
  release_date,
  overview,
}: PropsLayoutUpcomingMovies) {
  return (
    <Link
      href={`/movies/${id}`}
      className="border border-slate-300 mx-auto justify-center p-3 space-y-2 rounded-md hover:bg-slate-100 cursor-pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${image}`}
        width={400}
        height={400}
        className="object-cover rounded-md"
        alt="image-movie"
      />
      <div className="flex justify-between items-center">
        <h1 className="font-bold ">{original_title}</h1>
        <div className="flex items-center">
          <MdOutlineStarBorder />
          <p className="text-sm">{Math.floor(popularity)}</p>
        </div>
      </div>
      <p className="text-xs">{release_date}</p>
      <p className="line-clamp-3 text-sm font-base mt-2">{overview}</p>
    </Link>
  );
}

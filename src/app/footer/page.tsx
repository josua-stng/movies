import { FaCopyright } from 'react-icons/fa';
export default function FooterMovies() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <h3 className="font-mono text-center mt-4 mb-4 text-slate-500 text-sm flex justify-center items-center gap-1">
      Copyright
      <span>
        <FaCopyright className="w-3 h-4" />
      </span>
      {currentYear} Movies
    </h3>
  );
}

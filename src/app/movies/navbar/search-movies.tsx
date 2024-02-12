import { Input } from '@/components/ui/input';
export default function SearchMovies() {
  return (
    <Input
      placeholder="search movies"
      type="text"
      className="placeholder:italic"
    />
  );
}

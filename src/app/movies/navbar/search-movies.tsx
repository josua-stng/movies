'use client';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
export default function SearchMovies() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search === '') {
      router.push('/');
      return;
    }
    router.push(`/search?query=${search}`);
  };
  return (
    <form onSubmit={handleSubmit} className="hidden sm:inline-block">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search movies"
        type="text"
        className="placeholder:italic"
      />
    </form>
  );
}

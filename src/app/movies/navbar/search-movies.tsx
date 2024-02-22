'use client';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
export default function SearchMovies() {
  const [searchParams, setSearchParams] = useState('');
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchParams === '') {
      router.push('/');
      return;
    }
    router.push(`/search?query=${searchParams}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
        placeholder="search movies"
        type="text"
        className="placeholder:italic"
      />
    </form>
  );
}

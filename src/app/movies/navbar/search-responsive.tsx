'use client';
import { FaSearch } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { MouseEvent, useState } from 'react';
export default function SearchMoviesDetail() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const router = useRouter();
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (search === '') {
      router.push('/');
      return;
    }
    router.push(`/search?query=${search}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FaSearch className="text-white text-xl sm:hidden" />
      </DialogTrigger>
      <DialogContent className="w-80">
        <DialogHeader>
          <DialogTitle>Search Movies</DialogTitle>
        </DialogHeader>
        <div>
          <Input
            placeholder="search movies"
            className="border border-slate-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

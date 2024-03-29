'use client';
import useTopMovies from '../query/movies/use-fetch-top-movies';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { SkeletonCarouselMovies } from '../lib/skeleton-carousel-movies';
import { CarouselTopMovies } from '../lib/types';
export default function CarouselTopMovies() {
  const { data: movies, isPending } = useTopMovies();
  if (isPending) {
    return <SkeletonCarouselMovies />;
  }
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <h1 className="font-bold ml-2 text-xl italic mt-3 mb-1">Top Movies</h1>
      <CarouselContent className="ml-1">
        {movies?.map((movie: CarouselTopMovies) => {
          return (
            <CarouselItem
              key={movie.id}
              className="pl-1 md:basis-1/4 lg:basis-1/6"
            >
              <Link href={`/movies/${movie.id}`} className="">
                <Card className="hover:bg-slate-200 cursor-pointer">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt="image-movie"
                      width={500}
                      height={200}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </CardContent>
                  <div className=" ml-3 mt-1 space-y-1 mb-2">
                    <p className="line-clamp-1 font-bold text-sm">
                      {movie.original_title}
                    </p>
                    <p className="text-xs">{movie.release_date}</p>
                  </div>
                </Card>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

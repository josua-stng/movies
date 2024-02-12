'use client';
import useTrendingMovies from '@/app/query/movies/use-fetch-trending-movies';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
type PropsMovie = {
  id: string;
  backdrop_path: string;
  original_title: string;
  release_date: number;
};
export function CarouselMovies() {
  const { data: movies } = useTrendingMovies();
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent className="-ml-1">
        {movies?.map((movie: PropsMovie) => {
          return (
            <CarouselItem
              key={movie.id}
              className="pl-1 md:basis-1/4 lg:basis-1/6"
            >
              <div className="p-1">
                <Card className="hover:bg-slate-200 cursor-pointer">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt="image-movie"
                      width={500}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                  <div className=" ml-3 mt-1 space-y-1 mb-2">
                    <p className="line-clamp-1 font-bold text-sm">
                      {movie.original_title}
                    </p>
                    <p className="text-xs">{movie.release_date}</p>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
              <p>ea</p>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

'use client';

import { SkeletonCarouselMovies } from '@/app/lib/skeleton-carousel-movies';
import useTrendingMovies from '@/app/query/movies/use-fetch-trending-movies';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import 'animate.css';
import TrendingMovie from './trending-movie';
import { CarouselTrendingMovies } from '@/app/lib/types';

export function CarouselMovies() {
  const { data: movies, isPending: loading } = useTrendingMovies();
  if (loading) {
    return <SkeletonCarouselMovies />;
  }
  return (
    <Carousel className="w-full max-w-7xl mx-auto">
      <h1 className="font-bold ml-2 text-xl italic mt-3 mb-1 ">
        Trending Movies
      </h1>
      <CarouselContent className="ml-1 animate__animated    ">
        {movies?.map((movie: CarouselTrendingMovies) => {
          return (
            <TrendingMovie
              key={movie.id}
              id={movie.id}
              image={movie.backdrop_path}
              original_title={movie.original_title}
              release_date={movie.release_date}
            />
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

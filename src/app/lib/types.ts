export type CarouselTrendingMovies = {
  id: string;
  backdrop_path: string;
  original_title: string;
  release_date: number;
};

export type PopularMovies = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};

export type TopMovies = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};

export type CarouselTopMovies = {
  id: string;
  backdrop_path: string;
  original_title: string;
  release_date: number;
};

export type UpcomingMovies = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};

export type PropsTrendingMovies = {
  id: string;
  image: string;
  original_title: string;
  release_date: number;
};

export type PropsCarouselTrendingMovies = {
  id: string;
  backdrop_path: string;
  original_title: string;
  release_date: number;
};

export type PropsPopularMovies = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};

export type PropsLayoutPopularMovies = {
  id: number;
  image: string;
  original_title: string;
  popularity: number;
  release_date: number;
  overview: string;
};

export type PropsTopMovies = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};

export type PropsLayoutTopMovies = {
  id: number;
  image: string;
  original_title: string;
  popularity: number;
  release_date: number;
  overview: string;
};

export type PropsCarouselTopMovies = {
  id: string;
  backdrop_path: string;
  original_title: string;
  release_date: number;
};

export type PropsUpcomingMovies = {
  id: number;
  original_title: string;
  release_date: number;
  popularity: number;
  backdrop_path: string;
  overview: string;
};

export type PropsLayoutUpcomingMovies = {
  id: number;
  image: string;
  original_title: string;
  popularity: number;
  release_date: number;
  overview: string;
};

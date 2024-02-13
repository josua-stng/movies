'use client';
import useDetailTrendingMovies from '@/app/query/movies/use-fetch-detail-trending-movies';

export default function MovieDetail({ params }: { params: { slug: any } }) {
  const { data } = useDetailTrendingMovies(params.slug);
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

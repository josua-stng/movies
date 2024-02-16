'use client';
import useDetailTrendingMovies from '@/app/query/movies/use-fetch-detail-trending-movies';
import ImageMovieDetail from './image-movie-detail';
import RecomendationMovie from './recomendation';
import SkeletonDetailMovies from '@/app/lib/skeleteon-detail-movies';
type PropsProductionType = {
  id: number;
  name: string;
};

export default function MovieDetail({ params }: { params: { slug: any } }) {
  const { data, isPending: loading } = useDetailTrendingMovies(params.slug);
  if (loading) {
    return <SkeletonDetailMovies />;
  }

  return (
    <div>
      <div className="bg-gray-300 mt-10 p-10 md:flex mx-auto gap-5 space-y-3">
        <ImageMovieDetail
          imageSource={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        />

        <section className="space-y-3">
          <h1 className="text-center font-bold text-xl font-sans">
            {data?.original_title} (<span>{data?.release_date}</span>)
          </h1>
          <ul className="flex gap-5 md:list-disc bg-gray-200 px-2 py-2 justify-center rounded-md">
            <li>{data?.status}</li>
            <li>{data?.genres[0].name}</li>
            <li>{data?.popularity}</li>
          </ul>

          <div className="md:max-w-5xl space-y-2">
            <p className="italic">{data?.tagline}</p>
            <h3 className="font-semibold text-lg">Description</h3>
            <p className="font-sans font-medium">{data?.overview}</p>
            <h2 className="font-bold text-lg">Studio</h2>
            <div className="grid md:grid-cols-2 max-w-2xl pl-5">
              {data?.production_companies.map(
                (production: PropsProductionType) => {
                  return (
                    <ul key={production.id} className="flex list-disc">
                      <li>{production.name}</li>
                    </ul>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </div>
      <RecomendationMovie movie_id={params.slug} />
    </div>
  );
}

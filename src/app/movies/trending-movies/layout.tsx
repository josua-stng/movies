import { PropsTrendingMovies } from '@/app/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
export default function LayoutTrendingMovies({
  id,
  image,
  original_title,
  release_date,
}: PropsTrendingMovies) {
  return (
    <CarouselItem className="pl-1 md:basis-1/4 lg:basis-1/6">
      <Link href={`/movies/${id}`} className="">
        <Card className="hover:bg-slate-200 cursor-pointer">
          <CardContent className="flex aspect-square items-center justify-center p-2">
            <Image
              src={`https://image.tmdb.org/t/p/w500${image}`}
              alt="image-movie"
              width={500}
              height={200}
              className="w-full h-full object-cover rounded-md"
            />
          </CardContent>
          <div className=" ml-3 mt-1 space-y-1 mb-2">
            <p className="line-clamp-1 font-bold text-sm">{original_title}</p>
            <p className="text-xs">{release_date}</p>
          </div>
        </Card>
      </Link>
    </CarouselItem>
  );
}

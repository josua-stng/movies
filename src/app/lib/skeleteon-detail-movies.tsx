import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonDetailMovies() {
  return (
    <div className="mt-14 bg-gray-300 p-10">
      <div className="flex flex-col md:flex-row mx-auto justify-center items-center space-y-3 space-x-4">
        <div>
          <Skeleton className="w-64 md:w-80 h-96 md:h-[400px] bg-gray-500" />
        </div>
        <div className="space-y-3">
          <Skeleton className="w-40 h-7 bg-gray-500 mx-auto" />
          <div className="flex md:justify-center space-x-3">
            <Skeleton className="w-20 h-7 bg-gray-500" />
            <Skeleton className="w-20 h-7 bg-gray-500" />
            <Skeleton className="w-20 h-7 bg-gray-500" />
          </div>
          <Skeleton className="w-44 h-7 bg-gray-500" />
          <Skeleton className="w-32 h-7 bg-gray-500" />
          <Skeleton className="w-44 md:w-[1100px] h-7 bg-gray-500" />
          <Skeleton className="w-64 h-7 bg-gray-500" />
          <Skeleton className="w-64 h-7 bg-gray-500 md:w-0" />
        </div>
      </div>
    </div>
  );
}

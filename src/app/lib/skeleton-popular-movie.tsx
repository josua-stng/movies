import { Skeleton } from '@/components/ui/skeleton';
export default function SkeletonPopularMovie() {
  return (
    <div className="mt-10">
      <Skeleton className="w-[120px] h-[20px] bg-gray-300 ml-5" />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 max-w-8xl mx-auto gap-4 justify-center items-center">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="p-5 space-y-2">
            <Skeleton className="h-[150px] w-[330px] md:w-[260px] lg:w-[280px] rounded-xl bg-gray-300" />
            <div className="flex justify-between  lg:max-w-72">
              <Skeleton className="w-[50px] h-[20px] bg-gray-300" />
              <div className="flex gap-1">
                <Skeleton className="w-[40px] h-[20px] bg-gray-300" />
                <Skeleton className="w-[50px] h-[20px] bg-gray-300" />
              </div>
            </div>
            <Skeleton className="w-[90px] h-[20px] bg-gray-300" />
            <Skeleton className="w-[320px] md:w-[200px] lg:w-[280px] h-[20px] bg-gray-300" />
            <Skeleton className="w-[320px] md:w-[200px] lg:w-[280px] h-[20px] bg-gray-300" />
            <Skeleton className="w-[320px] md:w-[200px] lg:w-[280px] h-[20px] bg-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

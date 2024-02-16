import Image from 'next/image';

type PropsImageMovieDetail = {
  imageSource: string;
};
export default function ImageMovieDetail({
  imageSource,
}: PropsImageMovieDetail) {
  return (
    <>
      <Image
        src={imageSource}
        alt="image detail trending"
        width={300}
        height={200}
        className="rounded-md mx-auto md:mx-0 "
      />
    </>
  );
}

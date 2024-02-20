import MovieInfo from '@/app/components/movie-info';
import MovieVideo from '@/app/components/movie-video';
import { Suspense } from 'react';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <h3 className='text-lg font-bold'>영화정보</h3>
      <Suspense fallback={<h1>정보를 불러오는중</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h3 className='text-lg font-bold'>영상보기</h3>
      <Suspense fallback={<h1>영상을 불러오는중</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </>
  );
}

import MovieInfo from '@/app/components/movie-info';
import MovieVideo from '@/app/components/movie-video';
import { Suspense } from 'react';

export default async function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className='p-24'>
      <Suspense fallback={<h1>loading Info..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <div>--------------------</div>
      <Suspense fallback={<h1>loading Video..</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </main>
  );
}

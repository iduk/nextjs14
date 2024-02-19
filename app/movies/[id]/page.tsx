import { API_URL } from '@/app/(home)/page';

async function getMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieItem({
  params: { id },
}: {
  params: { id: string };
}) {
  const movies = await getMovies(id);

  return (
    <main className='p-24'>
      <p>movieID. <strong>{movies.id}</strong></p>
      <h1 className='text-3xl'>
        {movies.title}
      </h1>
    </main>
  );
}

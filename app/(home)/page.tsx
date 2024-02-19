import Link from 'next/link';

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovie() {
  console.log('fetch!'); // 서버에서만 표시됨
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

interface HomeProps {
  id: string | number;
  title: string;
}

export default async function Home() {
  const movies = await getMovie();

  return (
    <main className='p-24'>
      <h1 className='text-gray-400 p-8'>🏠 Home</h1>
      <div className='border border-gray-500 p-8'>
        <ul>
          {movies.map((movie: HomeProps) => (
            <li key={movie.id}>
              <Link className='underline' href={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

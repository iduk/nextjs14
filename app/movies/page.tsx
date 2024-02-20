/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
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
  poster_path: string;
}

export default async function MoviePage() {
  const movies = await getMovie();

  return (
    <main className='relative w-screen'>
      <div className='border border-gray-500 p-8'>
        <ul className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4'>
          {movies.map((movie: HomeProps) => (
            <li
              key={movie.id}
              className='group relative flex flex-col items-start'
            >
              <Link className='underline' href={`/movies/${movie.id}`}>
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  style={{
                    objectFit: 'contain',
                  }}
                />
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

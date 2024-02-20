import variables from '@/app/styles/variables.module.scss'

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
    <div className='mx-auto w-full max-w-7xl lg:px-8'>
      <div className='relative px-4 sm:px-8 lg:px-12'>
        <h1 style={{ color: variables.primaryColor }} className='py-8 font-bold text-5xl'>Home Contents</h1>
        <p>Hello?</p>
      </div>
    </div>
  );
}

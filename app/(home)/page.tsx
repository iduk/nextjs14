import variables from '@/app/styles/variables.module.scss';
import Image from 'next/image';
import pixelDuk from '@/app/images/pixelDuk.svg';

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
        <h1
          style={{ color: variables.primaryColor }}
          className='py-8 font-bold text-5xl'
        >
          Home Contents
        </h1>
        <p>Hello?</p>
      </div>
      <hr />
      <section className='px-4 sm:px-8 lg:px-12'>
        <h2 className='text-2xl pb-8'>Image Fill</h2>
        <div className='flex justify-center gap-8 my-8'>
          <div
            style={{ position: 'relative', width: '300px', height: '300px' }}
          >
            <Image
              alt='pixelDuk'
              src={pixelDuk}
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div
            style={{ position: 'relative', width: '300px', height: '300px' }}
          >
            <Image
              alt='pixelDuk'
              src={pixelDuk}
              fill
              sizes='100vw'
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div
            style={{ position: 'relative', width: '300px', height: '300px' }}
          >
            <Image
              alt='pixelDuk'
              src={pixelDuk}
              quality={100}
              fill
              sizes='100vw'
              style={{
                objectFit: 'none',
              }}
            />
          </div>
        </div>

        <h2 className='text-2xl pb-8'>Image Response</h2>
        <div className='flex justify-center gap-8 my-8'>
          <Image
            alt='pixelDuk'
            src={pixelDuk}
            width={300}
            height={300}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </div>
  );
}

'use client'

export default function MoviesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <h1 className='text-5xl pb-6'>Movie</h1>
      
      {children}
    </main>
  );
}

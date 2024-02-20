'use client';

import { usePathname } from 'next/navigation';

export default function MoviesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <main className='flex flex-col justify-between p-24'>
      <div className='flex items-center gap-4 mb-16'>
        <div>
          <button className='inline-flex rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group'>
            Back
          </button>
        </div>
        <p>{pathname}</p>
      </div>

      {children}
    </main>
  );
}

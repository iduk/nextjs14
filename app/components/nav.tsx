'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Movies', path: '/movies' },
]

export default function Nav() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <header className='top-0 z-10 h-16 pt-6'>

    <div className='relative flex gap-4'>
      <div className='flex flex-1'></div>
      <div className='flex flex-1 justify-end md:justify-center'>
        <div className='pointer-events-auto md:hidden' data-headlessui-state=''>
          <button
            className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
            type='button'
            aria-expanded='false'
            data-headlessui-state=''
            id='headlessui-popover-button-:R2miqla:'
          >
            Menu
            <svg
              viewBox='0 0 8 6'
              aria-hidden='true'
              className='ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'
            >
              <path
                d='M1.75 1.75 4 4.25l2.25-2.5'
                fill='none'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div
          style={{
            position: 'fixed',
            top: '1px',
            left: '1px',
            width: '1px',
            height: '0',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: '0',
            display: 'none',
          }}
        ></div>
        <nav className='pointer-events-auto hidden md:block'>
          <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
            {NavLinks.map((link,index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`relative block px-3 py-2 transition hover:text-gray-500 dark:hover:text-gray-400 ${isActive(link.path) ? 'text-primary-500' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className='flex justify-end md:flex-1'>
        <div className='pointer-events-auto'>
          <Link href='/login'
            className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 text-sm'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
    </header>
  );
}

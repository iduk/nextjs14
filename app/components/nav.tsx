'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <div className='bg-gray-600 p-10 text-center'>
      <ul className='flex justify-center gap-4'>
        <li>
          <Link className='text-white hover:text-gray-300' href='/'>
            Home {pathname === '/' ? '🐝' : ''}
          </Link>
        </li>
        <li>
          <Link className='text-white hover:text-gray-300' href='/about'>
            About {pathname === '/about' ? '🐝' : ''}
          </Link>
        </li>
        <li>
          <Link className='text-white hover:text-gray-300' href='/blog'>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}

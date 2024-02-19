import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: "댄스윗미소개",
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='p-8'>
      <p className='flex justify-center gap-4 p-4 border border-gray-300'>
        AboutLayout:
        <Link className='underline' href="/about/intro">Intro</Link>
        <Link className='underline' href="/about/team">Team</Link>
      </p>
      {children}
    </div>
  );
}

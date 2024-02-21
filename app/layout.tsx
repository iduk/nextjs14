import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/nav';
import '@/app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'DD',
    template: 'DD | %s',
  },
  description: '댄스윗미',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='p-4'>
          <Nav />
        </div>
        <main className='relative w-screen'>
          {children}
        </main>
      </body>
    </html>
  );
}

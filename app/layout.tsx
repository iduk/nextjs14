import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from './components/nav';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'DD',
    // absolute: '2',
    template: 'DD | %s'
  },
  description: "댄스윗미",
}

export default function RootLayout({
  children,
  danceTeam,
}: Readonly<{
  children: React.ReactNode;
  danceTeam: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        {danceTeam}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({ weight: ['400', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Able Group Holding',
  description: 'Able Group Holding',
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}

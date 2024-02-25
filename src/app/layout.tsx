import './globals.css';

import type { Metadata } from 'next';

/* FONT */
import { Lexend } from 'next/font/google';
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Birebir',
  description: 'Made by ...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={lexend.className}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { PERSONAL_INFO } from '@/lib/data';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description: PERSONAL_INFO.valueProp,
  openGraph: {
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.valueProp,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {UserProvider} from '@/contexts/UserContext';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Assessment',
  description: 'A crud assessment to manage users',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </UserProvider>
  );
}

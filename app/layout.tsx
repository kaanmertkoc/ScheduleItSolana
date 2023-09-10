import type { Metadata } from 'next';
import './globals.css';
import Sidebar from './src/components/Sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'Schedule It',
  description: 'Schedule It web application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Sidebar />
      <body className='bg-bg'>{children}</body>
    </html>
  );
}

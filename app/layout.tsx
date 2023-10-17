'use client';

import './globals.css';
import Sidebar from './src/components/Sidebar/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-bg'>
        <>
          <Sidebar />
          {children}
        </>
      </body>
    </html>
  );
}

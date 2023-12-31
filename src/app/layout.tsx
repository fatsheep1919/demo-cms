import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

import Head from '@/component/Head';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='flex justify-center h-screen'>
          <div className='flex flex-col items-center w-4/5 h-full'>
            <Head />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

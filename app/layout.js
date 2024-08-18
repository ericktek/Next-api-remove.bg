import { Poppins, Roboto, Montserrat } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600','700'] });

export const metadata = {
  title: 'bg.remove',
  description: 'remove background from images using AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${poppins.variable} ${roboto.variable} ${roboto.montserrat} font-montserrat`}>
        {children}
      </body>
    </html>
  );
}

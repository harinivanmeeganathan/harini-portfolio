import './globals.css';import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: 'Harini Vanmeeganathan Lakshmi',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
     <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import Footer from '../components/Footer';
import Header from '../components/Header';
import './global.css';
import { Inter } from 'next/font/google';
export const metadata = {
  title: 'Starbucks Coffee Company',
  description:
    'More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.',
  icons: {
    icon: [
      {
        url: '/starbucks.ico',
        href: '/starbucks.ico'
      }
    ]
  }
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} font-sans`} lang="en">
      <body className="max-w-screen-2xl mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

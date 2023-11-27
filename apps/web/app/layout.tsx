import Footer from '../components/footer';
import Header from '../components/header';
import './global.css';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

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
  const cookie = cookies();
  const token = cookie.get('token');

  return (
    <html className={`${inter.variable} font-sans`} lang="en">
      <body className="max-w-screen-2xl mx-auto">
        <Header token={token} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import './global.css';
import { Inter } from 'next/font/google';
export const metadata = {
  title: 'Starbucks',
  description:
    'More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.',
  icons: {
    icon: [
      {
        url: '/starbucks.iso',
        href: '/starbucks.iso'
      }
    ]
  }
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  );
}

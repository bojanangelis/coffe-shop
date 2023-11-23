import './global.css';

export const metadata = {
  title: 'Starbucks',
  description: 'best coffee shop out there!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

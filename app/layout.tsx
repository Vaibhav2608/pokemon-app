import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pokemon Website',
  description: 'Pokemon Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#F0F0F0]`}>{children}</body>
    </html>
  );
}

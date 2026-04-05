/**
 * layout.tsx
 */

// Node Modules
import type { Metadata } from 'next';

// Components
import Navbar from 'components/Navbar';

// Providers
import { PostHogProvider } from './providers';

// Styles
import './globals.css';

export const metadata: Metadata = {
  title: 'ppak.net',
  description: 'I like building stuff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogProvider>
          <Navbar />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}

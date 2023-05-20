/**
 * layout.tsx
 * Required root layout for app.
 */

// Node Modules
import type { Metadata } from 'next';

// Styles
import './globals.css'; // These styles apply to every route in the app.

export const metadata = {
  title: 'ppak.net',
  description: 'Welcome',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import '../styles/globals.css';
import type { Metadata, Viewport } from 'next';

const siteUrl = process.env['NEXT_PUBLIC_SITE_URL'] ?? 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vu Hoang An | Angular Frontend Developer',
    template: '%s | Vu Hoang An',
  },
  description:
    'Angular-focused frontend developer portfolio featuring enterprise architecture, performance optimization, and modern UI engineering.',
  applicationName: 'Vu Hoang An Portfolio',
  category: 'technology',
  keywords: [
    'Angular Developer',
    'Frontend Developer',
    'TypeScript',
    'NgRx',
    'RxJS',
    'GraphQL',
    'Portfolio',
    'Enterprise Applications',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Vu Hoang An Portfolio',
    title: 'Vu Hoang An | Angular Frontend Developer',
    description:
      'Explore enterprise projects, architecture showcases, and frontend engineering capabilities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vu Hoang An | Angular Frontend Developer',
    description:
      'Portfolio showcasing enterprise Angular development, state management, and performance optimization.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1120',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

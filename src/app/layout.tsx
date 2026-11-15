
import type { Metadata, Viewport } from 'next';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { PageTransition } from '@/components/ui/PageTransition';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'TranscriptoBot | AI Transcription & Meeting Intelligence',
    template: '%s | TranscriptoBot',
  },
  description:
    'Transform audio and video into searchable transcripts, multilingual translations, AI summaries, and actionable insights with TranscriptoBot.',
  applicationName: 'TranscriptoBot',
  keywords: [
    'AI transcription',
    'speech to text',
    'audio transcription',
    'video transcription',
    'AI meeting assistant',
    'multilingual translation',
    'Whisper AI',
    'meeting summaries',
    'speaker diarization',
    'TranscriptoBot',
  ],
  authors: [{ name: 'TranscriptoBot' }],
  creator: 'TranscriptoBot',
  publisher: 'TranscriptoBot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://transcriptobot.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://transcriptobot.com',
    title: 'TranscriptoBot | AI Transcription & Meeting Intelligence',
    description:
      'Convert conversations into searchable transcripts, translations, summaries, and actionable insights.',
    siteName: 'TranscriptoBot',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TranscriptoBot - AI Transcription & Meeting Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TranscriptoBot | AI Transcription & Meeting Intelligence',
    description:
      'AI-powered transcription, translation, and meeting intelligence.',
    images: ['/og-image.png'],
    creator: '@transcriptobot',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070b14',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
      </head>
      <body className="min-h-screen bg-[#070b14] text-white antialiased">
        <ScrollToTop />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

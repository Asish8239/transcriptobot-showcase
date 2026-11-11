
import type { Metadata, Viewport } from 'next';
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
  openGraph: {
    type: 'website',
    title: 'TranscriptoBot | AI Transcription & Meeting Intelligence',
    description:
      'Convert conversations into searchable transcripts, translations, summaries, and actionable insights.',
    siteName: 'TranscriptoBot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TranscriptoBot | AI Transcription & Meeting Intelligence',
    description:
      'AI-powered transcription, translation, and meeting intelligence.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
      <body className="min-h-screen bg-[#070b14] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yoopi - Voyage plus. Paye moins.',
  description:
    'On scanne les vols depuis tes aeroports 24/7 et on t\'alerte quand un prix chute de -30% ou plus. Tu reserves en un clic.',
  keywords: ['vols', 'deals', 'voyage', 'avion', 'pas cher', 'bons plans', 'alertes'],
  authors: [{ name: 'Yoopi' }],
  openGraph: {
    title: 'Yoopi - Voyage plus. Paye moins.',
    description:
      'On scanne les vols depuis tes aeroports 24/7 et on t\'alerte quand un prix chute de -30% ou plus.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Yoopi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoopi - Voyage plus. Paye moins.',
    description:
      'On scanne les vols depuis tes aeroports 24/7 et on t\'alerte quand un prix chute de -30% ou plus.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

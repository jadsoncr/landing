import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { landingCopy } from "@/lib/landingCopy";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jadsoncampos.com'),
  title: landingCopy.seo.title,
  description: landingCopy.seo.description,
  keywords: landingCopy.seo.keywords,
  verification: {
    google: "google2473cac25dbe387e",
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.ico', sizes: 'any' }
    ],
    apple: '/logo.svg',
    shortcut: '/logo.ico',
  },
  openGraph: {
    title: landingCopy.seo.title,
    description: landingCopy.seo.description,
    url: 'https://jadsoncampos.com',
    siteName: 'Jadson Campos',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 600,
        alt: 'Jadson Campos - Arquitetura Operacional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: landingCopy.seo.title,
    description: landingCopy.seo.description,
    images: ['/logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="alternate icon" type="image/x-icon" href="/logo.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

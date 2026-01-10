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
  title: landingCopy.seo.title,
  description: landingCopy.seo.description,
  keywords: landingCopy.seo.keywords,
  verification: {
    google: "google2473cac25dbe387e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

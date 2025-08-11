import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Kartik Agarwal - Quant Researcher | Ex-Software Engineer",
  description: "...",
  keywords: [...],
  authors: [{ name: "Kartik Agarwal" }],
  creator: "Kartik Agarwal",
  publisher: "Kartik Agarwal",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kartik-agarwal.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartik-agarwal.com",
    title: "...",
    description: "...",
    siteName: "Kartik Agarwal's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "...",
    description: "...",
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

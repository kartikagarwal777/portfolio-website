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
  title: "Kartik Agarwal - Alpha Quant Researcher & Software Engineer",
  description: "Personal website of Kartik Agarwal, an Alpha Quant Researcher and Software Engineer with expertise in systematic trading strategies and machine learning.",
  keywords: ["Kartik Agarwal", "Quant Researcher", "Software Engineer", "Machine Learning", "Systematic Trading", "Financial Engineering", "Portfolio Management"],
  authors: [{ name: "Kartik Agarwal" }],
  creator: "Kartik Agarwal",
  publisher: "Kartik Agarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartikagarwal.netlify.app",
    title: "Kartik Agarwal - Alpha Quant Researcher & Software Engineer",
    description: "Personal website of Kartik Agarwal, an Alpha Quant Researcher and Software Engineer with expertise in systematic trading strategies and machine learning.",
    siteName: "Kartik Agarwal's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Agarwal - Alpha Quant Researcher & Software Engineer",
    description: "Personal website of Kartik Agarwal, an Alpha Quant Researcher and Software Engineer with expertise in systematic trading strategies and machine learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

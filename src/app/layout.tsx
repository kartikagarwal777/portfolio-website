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
  description: "Kartik Agarwal, a Quant Researcher and Former Software Engineer with expertise in quant research, global macro, machine learning and building research infrastructure.",
  keywords: ["Kartik Agarwal", "Quant Researcher", "QMS Capital", "Global Macro", "Software Engineer", "Machine Learning", "Systematic Trading", "Financial Engineering", "Portfolio Management", "Data Science", "Python", "Quantitative Analysis"],
  authors: [{ name: "Kartik Agarwal" }],
  creator: "Kartik Agarwal",
  publisher: "Kartik Agarwal",
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://kartik-agarwal.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kartik-agarwal.com",
    title: "Kartik Agarwal - Quant Researcher | Ex-Software Engineer",
    description: "Kartik Agarwal, a Quant Researcher and Former Software Engineer with expertise in quant research, global macro, machine learning and building research infrastructure.",
    siteName: "Kartik Agarwal's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Agarwal - Quant Researcher | Ex-Software Engineer",
    description: "Kartik Agarwal, a Quant Researcher and Former Software Engineer with expertise in quant research, global macro, machine learning and building research infrastructure.",
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

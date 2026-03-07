import type { Metadata } from "next";
import { JetBrains_Mono, Source_Sans_3, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
        className={`${sourceSans.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono, Source_Sans_3, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = "https://kartik-agarwal.com";
const siteTitle = "Kartik Agarwal | Alpha Quant Researcher";
const siteDescription =
  "Kartik Agarwal is an alpha quant researcher specializing in systematic investing, macro signals, machine learning, portfolio construction, and research systems.";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Kartik Agarwal",
  },
  description: siteDescription,
  applicationName: "Kartik Agarwal Portfolio",
  keywords: [
    "Kartik Agarwal",
    "Alpha Quant Researcher",
    "Quantitative Researcher",
    "Systematic Investing",
    "Macro Research",
    "Machine Learning",
    "Portfolio Construction",
    "Financial Engineering",
  ],
  authors: [{ name: "Kartik Agarwal", url: siteUrl }],
  creator: "Kartik Agarwal",
  publisher: "Kartik Agarwal",
  category: "Finance and Technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: "Kartik Agarwal",
    images: [
      {
        url: "/og-kartik-agarwal.png",
        width: 1200,
        height: 630,
        alt: "Kartik Agarwal — Alpha Quant Researcher",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-kartik-agarwal.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Kartik Agarwal",
      url: `${siteUrl}/`,
      email: "mailto:kartikagarwal777@gmail.com",
      telephone: "+1-424-440-9728",
      jobTitle: "Alpha Quant Researcher",
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Raleigh",
        addressRegion: "NC",
        addressCountry: "US",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "UCLA Anderson School of Management",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Vellore Institute of Technology",
        },
      ],
      knowsAbout: [
        "Systematic investing",
        "Alpha research",
        "Macroeconomic modelling",
        "Machine learning",
        "Portfolio construction",
        "Statistical arbitrage",
        "Financial engineering",
        "Research data pipelines",
      ],
      sameAs: [
        "https://www.linkedin.com/in/kartik-agarwal/",
        "https://kartikag.substack.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Kartik Agarwal",
      description: siteDescription,
      inLanguage: "en-US",
      author: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "en-US",
      dateModified: "2026-07-24T00:00:00-04:00",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <body
        className={`${sourceSans.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          id="portfolio-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}

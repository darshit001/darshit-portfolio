import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import Cursor3D from "@/components/ui/Cursor3D";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); // trigger-build-1

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darshit-radadiya.vercel.app"),
  title: "Darshit Radadiya | AI Engineer & Agentic AI Specialist",
  description: 'Darshit Radadiya — AI Engineer building real-world AI solutions. Specializing in Agentic AI, RAG Pipelines, LLMs, Voice Agents, and Automation. Based in Ahmedabad, India.',
  keywords: [
    "Darshit Radadiya",
    "Darshit Radadiya portfolio",
    "Darshit Radadiya AI engineer",
    "AI engineer Ahmedabad",
    "LangChain developer",
    "RAG pipeline engineer",
    "Agentic AI specialist",
    "LangGraph developer",
    "AI portfolio",
    "AI engineer India",
  ],
  authors: [{ name: "Darshit Radadiya" }],
  creator: "Darshit Radadiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darshit-radadiya.vercel.app",
    title: "Darshit Radadiya | AI Engineer & Agentic AI Specialist",
    description:
      "AI Engineer specializing in LangChain, RAG pipelines, and Agentic AI Systems — building intelligent, scalable applications.",
    siteName: "Darshit Radadiya Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Darshit Radadiya — AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshit Radadiya | AI Engineer & Agentic AI Specialist",
    description:
      "AI Engineer specializing in LangChain, RAG, and Agentic AI Systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://darshit-radadiya.vercel.app",
  },
  verification: {
    google: "MZ27dxiWnKSpiGxm4SioEq_8_fcRtFDeuYeqHhe45JA",
    other: {
      "msvalidate.01": "ED93B478B88199D0CC41BAF8E5DA5575A",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darshit Radadiya",
  url: "https://darshit-radadiya.vercel.app",
  jobTitle: "AI Engineer",
  description:
    "AI Engineer specializing in LangChain, LangGraph, RAG pipelines, and Agentic AI Systems",
  sameAs: [
    "https://github.com/darshit001",
    "https://linkedin.com/in/darshit-radadiya-918975230/",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "LJ University, Ahmedabad",
  },
  knowsAbout: [
    "LangChain",
    "LangGraph",
    "RAG Architectures",
    "Agentic AI",
    "FastAPI",
    "Python",
    "Multi-Agent Systems",
    "OpenAI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-midnight text-text selection:bg-primary selection:text-midnight" suppressHydrationWarning>
        <Cursor3D />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

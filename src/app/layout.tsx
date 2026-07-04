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

const jsonLdArray = [
  // Schema 1: Person — the primary entity for "Who is Darshit Radadiya?"
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://darshit-radadiya.vercel.app/#person",
    name: "Darshit Radadiya",
    givenName: "Darshit",
    familyName: "Radadiya",
    url: "https://darshit-radadiya.vercel.app",
    image: "https://darshit-radadiya.vercel.app/og-image.png",
    jobTitle: "AI Engineer",
    description:
      "Darshit Radadiya is an AI Engineer from Ahmedabad, India, building real-world AI solutions. He specializes in Agentic AI Systems, RAG Pipelines, LLMs, Voice Agents, and Automation using LangChain, LangGraph, and FastAPI.",
    sameAs: [
      "https://github.com/darshit001",
      "https://linkedin.com/in/darshit-radadiya-918975230/",
      "https://dev.to/darshitradadiya",
      "https://medium.com/@darshitradadiya01",
      "https://darshit.hashnode.dev",
      "https://stackoverflow.com/users/darshit-radadiya",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "LJ University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    nationality: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Agentic AI Systems",
      "RAG Pipelines",
      "Retrieval-Augmented Generation",
      "Large Language Models",
      "LangChain",
      "LangGraph",
      "Voice AI Agents",
      "Multi-Agent Orchestration",
      "FastAPI",
      "Python",
      "OpenAI",
      "Qdrant",
      "Natural Language Processing",
      "Machine Learning",
      "Backend Development",
      "MLOps",
    ],
    knowsLanguage: ["English", "Hindi", "Gujarati"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bachelor's Degree",
      name: "Bachelor of Engineering in Computer Engineering",
      recognizedBy: {
        "@type": "EducationalOrganization",
        name: "LJ University",
      },
    },
  },
  // Schema 2: ProfilePage — tells AI this page IS about the person
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://darshit-radadiya.vercel.app/#profilepage",
    name: "Darshit Radadiya — AI Engineer Portfolio",
    url: "https://darshit-radadiya.vercel.app",
    description:
      "Official portfolio of Darshit Radadiya, AI Engineer from Ahmedabad specializing in Agentic AI, RAG Pipelines, LLMs, Voice Agents, and Automation.",
    mainEntity: {
      "@id": "https://darshit-radadiya.vercel.app/#person",
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  },
  // Schema 3: WebSite — helps AI understand the site structure
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://darshit-radadiya.vercel.app/#website",
    name: "Darshit Radadiya Portfolio",
    url: "https://darshit-radadiya.vercel.app",
    description:
      "Portfolio website of Darshit Radadiya — AI Engineer building real-world AI solutions with Agentic AI, RAG, LLMs, Voice Agents, and Automation.",
    author: {
      "@id": "https://darshit-radadiya.vercel.app/#person",
    },
    inLanguage: "en-US",
  },
];

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
        {jsonLdArray.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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

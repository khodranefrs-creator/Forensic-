import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "The Forensic Neuroscientist — Neuroscience, Education & Forensic Insight",
    template: "%s | The Forensic Neuroscientist",
  },
  applicationName: site.name,
  description: site.description,
  keywords: [
    "forensic neuroscience",
    "neuroscience education",
    "professional training",
    "forensic consultation",
    "brain science",
    "human behavior",
    "scientific communication",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title:
      "The Forensic Neuroscientist — Neuroscience, Education & Forensic Insight",
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Forensic Neuroscientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Forensic Neuroscientist — Neuroscience, Education & Forensic Insight",
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#08222f",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  description: site.description,
  url: siteUrl,
  logo: `${siteUrl}/weblogo.png`,
  sameAs: [site.youtube.channelUrl],
  knowsAbout: [
    "Forensic neuroscience",
    "Neuroscience education",
    "Professional training",
    "Scientific communication",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#content"
          className="fixed left-4 top-4 z-[120] -translate-y-24 bg-ink px-4 py-3 text-sm font-semibold text-cream transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteNav />
        <main
          id="content"
          tabIndex={-1}
          className="pt-20 outline-none nav:pl-[var(--rail-width)] nav:pt-0"
        >
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

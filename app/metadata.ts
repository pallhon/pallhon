import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://pallhon.com'),
  title: "Pallhon",
  description: "family is everything <3 make sure you love them!",
  creator: "Pallhon",
  keywords: "Pallhon, Pallhorn, Pallhon.com, Pallhon.de",
  alternates: {
    canonical: "https://pallhon.com",
    languages: {
      "en-US": "https://pallhon.com",
      "de-DE": "https://pallhon.de",
    },
  },
  openGraph: {
    title: {
      default: "Pallhon",
      template: "%s | Pallhon",
    },
    description: "family is everything <3 make sure you love them!",
    url: "https://pallhon.com",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pallhon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallhon",
    description:
      "Pallhon.com - family is everything <3 make sure you love them!",
    images: ["/opengraph-image"],
  },
}; 
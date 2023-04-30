import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";

import { getGradient } from "@/lib/api";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pallhon",
  description: "family is everything <3 make sure you love them!",
  creator: "Pallhon",
  keywords: "Pallhon, Pallhorn",
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
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gradient = await getGradient();

  // const gradient = await data[Math.floor(Math.random() * data.length)];
  const degreeArray = [0, 45, 90, 135, 180, 225, 270, 315, 45, 45];

  const degree = degreeArray[Math.floor(Math.random() * degreeArray.length)];

  // console.log(degree);
  // console.log(gradient);
  return (
    <html lang="en">
      <body
        className={`${inter.variable} h-screen font-sans subpixel-antialiased min-h-screen w-full overflow-x-hidden  flex flex-col justify-center items-center`}
        style={{
          backgroundImage: `linear-gradient(${degree}deg, ${gradient.colors.join(
            ","
          )})`,
        }}
      >
        {children}
        <footer className="absolute bottom-8 font-medium group mix-blend-plus-lighter	invert	">
          <Balancer>
            <span className="">
              Family is everything{" "}
              <span className=" group-hover:hidden inline-block transition duration-200 ">
                {"<3"}
              </span>
              <span className=" group-hover:inline-block hidden transition duration-200 group-hover:hue-rotate-90 ">
                ❤️
              </span>{" "}
            </span>
            <span>&#183;</span>
            <span> </span>
            <a
              href={`https://uigradients.com/#${gradient.name
                .replace(/\s/g, "")
                .trim()}`}
              className="hover:underline "
            >
              Theme: {gradient.name}
            </a>
          </Balancer>
        </footer>
      </body>
    </html>
  );
}

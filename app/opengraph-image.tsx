import { ImageResponse } from "next/og";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { getGradient } from "@/lib/api";

export const alt = "Pallhon.com";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const revalidate = 300;

export default async function og() {
  const gradient = await getGradient();

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center bg-gray-50"
        style={{
          backgroundImage: `linear-gradient(${gradient.degree}deg, ${gradient.colors.join(
            ","
          )})`,
        }}
      >
        <h1 tw="text-9xl text-white font-sans font-black tracking-tight" >
          Pallhon
        </h1>
      </div>
    ),
    size
  );
}

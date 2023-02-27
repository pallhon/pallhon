import Image from "next/image";
import { Inter } from "next/font/google";
import MotionText from "./MotionText";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const inter = Inter({ subsets: ["latin"] });

async function getGradient() {
  const res = await fetch(
    "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getGradient();

  const gradient = data[Math.floor(Math.random() * data.length)];
  const degreeArray = [0, 45, 90, 135, 180, 225, 270, 315, 45, 45];

  const degree = degreeArray[Math.floor(Math.random() * degreeArray.length)];

  // console.log(degree);

  return (
    <main
      className="h-screen w-full overflow-x-hidden mix-blend-plus-lighter	invert flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `linear-gradient(${degree}deg, ${gradient.colors.join(
          ","
        )})`,
      }}
    >
      <MotionText text="Pallhon" />
      <footer className="absolute bottom-8 font-medium">
        <Balancer>
          <span className="">Family is everything {"<3"} </span>
          <span>&#183;</span>
          <span> </span>
          <Link
            href={`https://uigradients.com/#${gradient.name
              .replace(/\s/g, "")
              .trim()}`}
            className="hover:underline "
          >
            Theme: {gradient.name}
          </Link>
        </Balancer>
      </footer>
    </main>
  );
}

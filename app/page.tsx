import Image from "next/image";
import { Inter } from "next/font/google";
import MotionText from "./MotionText";
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
      <footer className="absolute bottom-8 font-medium group 	">
        <Balancer>
          <span className="">
            Family is everything{" "}
            <span className=" group-hover:hidden inline-block transition duration-200 ">
              {"<3"}
            </span>
            <span className=" group-hover:inline-block hidden transition duration-200 ">
              {"❤️"}
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
    </main>
  );
}

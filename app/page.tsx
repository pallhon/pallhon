import { Suspense } from "react";

import MotionText from "./MotionText";

export default async function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden mix-blend-plus-lighter	invert flex flex-col justify-center items-center">
      <Suspense
        fallback={
          <h1 className="text-5xl md:text-7xl xl:text-9xl font-bold bg-blend-darken">
            Pallhon
          </h1>
        }
      >
        <MotionText text="Pallhon" />
      </Suspense>
    </main>
  );
}

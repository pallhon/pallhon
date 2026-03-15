export type GradientType = {
  name: string;
  colors: string[];
  degree: number;
};

const WINDOW_MS = 120_000; // 2-minute windows

/** Mulberry32 — simple seeded 32-bit PRNG */
function mulberry32(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Returns the ms-timestamp when the current gradient window expires */
export function getGradientExpiry(): number {
  const window = Math.floor(Date.now() / WINDOW_MS);
  return (window + 1) * WINDOW_MS;
}

export async function getGradient(): Promise<GradientType> {
  const res = await fetch(
    "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json",
    { next: { revalidate: 120 } }
  );

  let data: { name: string; colors: string[] }[];
  if (!res.ok) {
    data = [{ name: "Peach", colors: ["#ED4264", "#FFEDBC"] }];
  } else {
    data = await res.json();
  }

  const seed = Math.floor(Date.now() / WINDOW_MS);
  const rand = mulberry32(seed);

  const index = Math.floor(rand() * data.length);
  const degreeArray = [0, 45, 90, 135, 180, 225, 270, 315, 45, 45];
  const degree = degreeArray[Math.floor(rand() * degreeArray.length)];

  return { ...data[index], degree };
}

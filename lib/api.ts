// create a type for the folling object
// { name: "Peach", colors: ["#ED4264", "#FFEDBC"] }
export type GradientType = {
  name: string;
  colors: string[];
};

export async function getGradient(): Promise<GradientType> {
  const res = await fetch(
    "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json",
    { next: { revalidate: 120 } }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    return { name: "Peach", colors: ["#ED4264", "#FFEDBC"] };
  }
  const data = await res.json();
  return data[Math.floor(Math.random() * data.length)];
}

import { getAllRecipes } from "@/lib/mock-spoonacular";

export default function Home() {
  const recipesList = getAllRecipes();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>NextPlate</h1>
    </div>
  );
}

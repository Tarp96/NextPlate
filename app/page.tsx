import { getAllRecipes } from "@/lib/mock-spoonacular";
import RecipeGrid from "@/components/RecipeGrid";

export default async function Home() {
  const allRecipes = await getAllRecipes();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>NextPlate</h1>
      <RecipeGrid recipeList={allRecipes} />
    </div>
  );
}

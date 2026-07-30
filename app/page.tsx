import { getAllRecipes } from "@/lib/mock-spoonacular";
import { Recipe } from "@/lib/types";

export default async function Home() {
  const recipesList: Recipe[] = await getAllRecipes();

  const displayRecipes = recipesList.map((recipe) => (
    <li key={recipe.id}>{recipe.title}</li>
  ));

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>NextPlate</h1>
      <ul>{displayRecipes}</ul>
    </div>
  );
}

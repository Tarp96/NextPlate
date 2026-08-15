import { getAllRecipes } from "@/lib/mock-spoonacular";
import RecipeGrid from "@/components/RecipeGrid";
import Searchbar from "@/components/Searchbar";
import FilterButton from "@/components/FilterButton";

type HomeProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { query } = (await searchParams) || "";
  const allRecipes = await getAllRecipes();
  let isVegan = false;

  const filteredRecipes = query
    ? allRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()),
      )
    : allRecipes;

  const filterVegan = query
    ? filteredRecipes.filter((recipe) => recipe.vegan)
    : allRecipes.filter((recipe) => recipe.vegan);

  return (
    <div className="flex flex-col items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-7xl px-6 py-8">
        <h1 className="mb-6 text-4xl font-bold">NextPlate</h1>

        <Searchbar query={query} />
        <FilterButton isVegan={isVegan} label="Vegan" />

        <RecipeGrid recipeList={isVegan ? filterVegan : filteredRecipes} />
      </div>
    </div>
  );
}

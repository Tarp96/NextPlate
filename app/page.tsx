import { getAllRecipes } from "@/lib/mock-spoonacular";
import Searchbar from "@/components/home/SearchBar/Searchbar";
import RecipeSection from "@/components/home/RecipeSection/RecipeSection";

type HomeProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { query } = (await searchParams) || "";
  const allRecipes = await getAllRecipes();

  const filteredRecipes = query
    ? allRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()),
      )
    : allRecipes;

  return (
    <div className="flex flex-col items-center bg-zinc-50 font-sans">
      <div className="w-full max-w-7xl px-6 py-8">
        <h1 className="mb-6 text-4xl font-bold">NextPlate</h1>

        <Searchbar query={query} />

        <RecipeSection recipeList={filteredRecipes} />
      </div>
    </div>
  );
}

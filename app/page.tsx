import { getAllRecipes } from "@/lib/mock-spoonacular";
import RecipeGrid from "@/components/RecipeGrid";
import Form from "next/form";

export default async function Home({ searchParams }) {
  const { query } = (await searchParams) || "";
  const allRecipes = await getAllRecipes();

  const filteredRecipes = query
    ? allRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase()),
      )
    : allRecipes;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="mb-6 text-4xl font-bold">NextPlate</h1>

      <Form action="/" className="mb-8 w-full max-w-md">
        <input
          type="text"
          name="query"
          placeholder="Search for recipes..."
          defaultValue={query}
          autoComplete="off"
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        />
      </Form>

      <RecipeGrid recipeList={filteredRecipes} />
    </div>
  );
}

import { getAllRecipes } from "@/lib/mock-spoonacular";
import RecipeGrid from "@/components/RecipeGrid";
import Form from "next/form";
import { Search } from "lucide-react";

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

      <Form action="/" className="relative mb-8 w-full max-w-md">
        <input
          type="text"
          name="query"
          placeholder="Search for recipes..."
          defaultValue={query}
          autoComplete="off"
          className="w-full rounded-xl border border-zinc-300 bg-white py-3 pl-4 pr-12 text-zinc-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        />

        <button
          type="submit"
          aria-label="Search recipes"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:hover:bg-zinc-800"
        >
          <Search className="h-5 w-5" />
        </button>
      </Form>

      <RecipeGrid recipeList={filteredRecipes} />
    </div>
  );
}

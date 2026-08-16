import { getRecipeById } from "@/lib/mock-spoonacular";

type RecipeDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipeDetailsPage({
  params,
}: RecipeDetailsPageProps) {
  const { id } = await params;
  const recipeDetails = await getRecipeById(+id);

  console.log(recipeDetails);

  console.log(id);
  return <h1>{id}</h1>;
}

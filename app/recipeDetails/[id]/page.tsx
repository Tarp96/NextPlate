import { getRecipeById } from "@/lib/mock-spoonacular";
import Image from "next/image";

type RecipeDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RecipeDetailsPage({
  params,
}: RecipeDetailsPageProps) {
  const { id } = await params;
  const recipe = await getRecipeById(+id);

  const ingredientsDisplay = recipe?.extendedIngredients.map((ingredient) => (
    <li>
      {ingredient.name} {ingredient.amount}
    </li>
  ));

  console.log(id);
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {recipe?.title}
          </h1>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={recipe?.image ?? ""}
            alt={recipe?.title ?? ""}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}

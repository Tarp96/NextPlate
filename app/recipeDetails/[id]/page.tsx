import { getRecipeById } from "@/lib/mock-spoonacular";
import Image from "next/image";
import { Clock, Utensils } from "lucide-react";
import Tag from "@/components/Tag";
import IngredientsSection from "@/components/IngredientsSection";

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

  console.log(id);

  if (!recipe) {
    return null;
  }

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
            src={recipe?.image}
            alt={recipe?.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">
            <Clock className="h-5 w-5 text-slate-600" />

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Ready in
              </p>
              <p className="font-semibold text-slate-800">
                {recipe.readyInMinutes} min
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3">
            <Utensils className="h-5 w-5 text-slate-600" />

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Servings
              </p>
              <p className="font-semibold text-slate-800">{recipe.servings}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {recipe.cuisines?.map((cuisine) => (
              <Tag key={cuisine} label={cuisine} variant="badge" />
            ))}

            {recipe.vegan && <Tag label="Vegan" variant="badge" />}

            {recipe.vegetarian && !recipe.vegan && (
              <Tag label="Vegetarian" variant="badge" />
            )}

            {recipe.glutenFree && <Tag label="Gluten Free" variant="badge" />}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="mb-5 flex items-center justify-between gap-8">
          <h2 className="text-2xl font-semibold text-zinc-900">Ingredients</h2>

          <button
            type="button"
            className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700"
          >
            US
          </button>
        </div>

        <IngredientsSection ingredientList={recipe.extendedIngredients} />
      </section>
    </>
  );
}

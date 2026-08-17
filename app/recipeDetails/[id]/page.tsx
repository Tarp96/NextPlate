import { getRecipeById } from "@/lib/mock-spoonacular";
import Image from "next/image";
import { Clock, Utensils } from "lucide-react";
import FilterButton from "@/components/FilterButton";

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
              <FilterButton key={cuisine} label={cuisine} variant="badge" />
            ))}

            {recipe.vegan && <FilterButton label="Vegan" variant="badge" />}

            {recipe.vegetarian && !recipe.vegan && (
              <FilterButton label="Vegetarian" variant="badge" />
            )}

            {recipe.glutenFree && (
              <FilterButton label="Gluten Free" variant="badge" />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

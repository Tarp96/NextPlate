import { getRecipeById } from "@/lib/mock-spoonacular";
import Image from "next/image";
import { Clock, ThumbsUp, Utensils } from "lucide-react";
import Tag from "@/components/Tag";
import IngredientsSection from "@/components/IngredientsSection";
import RecipeStat from "@/components/RecipeStat";

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

  const displayAnalyzedInstructions = recipe.analyzedInstructions[0].steps.map(
    (step) => (
      <li key={step.number} className="flex gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-semibold text-green-700">
          {step.number}
        </span>

        <p className="leading-7 text-zinc-700">{step.step}</p>
      </li>
    ),
  );

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
          <RecipeStat
            icon={Clock}
            label="Ready in"
            value={`${recipe.readyInMinutes} min`}
          />

          <RecipeStat
            icon={Utensils}
            label="Servings"
            value={recipe.servings}
          />

          <RecipeStat icon={ThumbsUp} value={recipe.aggregateLikes} />

          <div className="mt-4 flex flex-wrap gap-2">
            {recipe.cuisines?.map((cuisine) => (
              <Tag key={cuisine} label={cuisine} variant="badge" />
            ))}

            {recipe.vegan && <Tag label="Vegan" variant="badge" />}

            {recipe.vegetarian && !recipe.vegan && (
              <Tag label="Vegetarian" variant="badge" />
            )}

            {recipe.glutenFree && <Tag label="Gluten Free" variant="badge" />}

            {recipe.dairyFree && <Tag label="Dairy Free" variant="badge" />}

            {recipe.dishTypes.length > 0 && (
              <Tag label={recipe.dishTypes[0]} variant="badge" />
            )}
          </div>
        </div>
      </section>
      <IngredientsSection ingredientList={recipe.extendedIngredients} />
      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900">
          Instructions
        </h2>

        <ol className="space-y-6">{displayAnalyzedInstructions}</ol>
      </section>
    </>
  );
}

import type { Recipe } from "@/lib/types";
import RecipeCard from "./RecipeCard";

type RecipeGridProps = {
  recipeList: Recipe[];
};

export default function RecipeGrid({ recipeList }: RecipeGridProps) {
  const displayList = recipeList.map((item) => (
    <RecipeCard
      key={item.id}
      id={item.id}
      title={item.title}
      imageSrc={item.image}
      readyInMinutes={item.readyInMinutes}
      vegetarian={item.vegetarian}
      vegan={item.vegan}
    />
  ));

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayList}
    </div>
  );
}

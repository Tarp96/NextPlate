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

  return <div>{displayList}</div>;
}

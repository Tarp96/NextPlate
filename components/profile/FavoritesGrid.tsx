import { Favorite } from "@/lib/types";
import FavoriteMealCard from "./FavoriteMealCard";

type FavoritesGridProps = {
  recipeList: Favorite[];
};

export default function FavoritesGrid({ recipeList }: FavoritesGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipeList.map((favorite) => (
        <li key={favorite.id}>
          {
            <FavoriteMealCard
              recipe_id={favorite.id}
              image={favorite.image ?? ""}
              title={favorite.title ?? ""}
            />
          }
        </li>
      ))}
    </ul>
  );
}

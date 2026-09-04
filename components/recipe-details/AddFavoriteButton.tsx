"use client";
import { addFavorites } from "@/lib/actions/favorites";

export default function AddFavoriteButton({
  recipe,
}: {
  recipe: { id: number; title: string; image: string };
}) {
  return (
    <button
      onClick={() =>
        addFavorites({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
        })
      }
    >
      Add to Favorites
    </button>
  );
}

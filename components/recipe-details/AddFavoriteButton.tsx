"use client";

import { addFavorites } from "@/lib/actions/favorites";

export default function AddFavoriteButton({
  recipe,
}: {
  recipe: { id: number; title: string; image: string };
}) {
  return (
    <button
      type="button"
      onClick={() =>
        addFavorites({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
        })
      }
      className="
  inline-flex min-h-11 items-center justify-center gap-2
  rounded-2xl bg-green-700 px-5 py-3
  text-sm font-semibold text-white shadow-sm
  transition-colors hover:bg-green-800 active:bg-green-900
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-green-600 focus-visible:ring-offset-2
"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
      Add to Favorites
    </button>
  );
}

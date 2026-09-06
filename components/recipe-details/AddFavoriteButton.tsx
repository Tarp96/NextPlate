"use client";

import { addFavorites } from "@/lib/actions/favorites";
import { useState } from "react";

export default function AddFavoriteButton({
  recipe,
}: {
  recipe: { id: number; title: string; image: string };
}) {
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);
    setMessage(null);

    const result = await addFavorites(recipe);

    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage("Saved to favorites");
    }

    setPending(false);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={pending}
        className="
  inline-flex min-h-11 items-center justify-center gap-2
  rounded-2xl bg-green-700 px-5 py-3
  text-sm font-semibold text-white shadow-sm
  transition-colors hover:bg-green-800 active:bg-green-900
  focus-visible:outline-none focus-visible:ring-2
  focus-visible:ring-green-600 focus-visible:ring-offset-2
"
      >
        {pending ? "Saving..." : "Add to Favorites"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

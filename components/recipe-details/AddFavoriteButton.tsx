"use client";

import { addFavorites } from "@/lib/actions/favorites";
import { useState } from "react";

type Feedback = {
  type: "success" | "error";
  message: string;
};

export default function AddFavoriteButton({
  recipe,
}: {
  recipe: { id: number; title: string; image: string };
}) {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);
    setFeedback(null);

    try {
      const result = await addFavorites(recipe);

      if (result.error) {
        setFeedback({
          type: "error",
          message: result.error,
        });
        return;
      }

      setFeedback({
        type: "success",
        message: "Saved to favorites",
      });
    } catch {
      setFeedback({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setPending(false);
    }
  }

  const saved = feedback?.type === "success";

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={pending || saved}
        className="
          inline-flex min-h-11 items-center justify-center gap-2
          rounded-2xl bg-green-700 px-5 py-3
          text-sm font-semibold text-white shadow-sm
          transition-colors
          hover:bg-green-800 active:bg-green-900
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-green-600 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:bg-green-700/60
          disabled:shadow-none
        "
      >
        {pending ? (
          <>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5 animate-spin"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-25"
              />
              <path
                fill="currentColor"
                d="M21 12a9 9 0 0 0-9-9v3a6 6 0 0 1 6 6h3Z"
                className="opacity-90"
              />
            </svg>
            Saving…
          </>
        ) : (
          <>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill={saved ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>

            {saved ? "Saved" : "Add to Favorites"}
          </>
        )}
      </button>

      {feedback && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`flex items-center gap-1.5 text-sm font-medium ${
            feedback.type === "error" ? "text-red-600" : "text-green-700"
          }`}
        >
          <span aria-hidden="true">
            {feedback.type === "error" ? "●" : "✓"}
          </span>
          {feedback.message}
        </p>
      )}
    </div>
  );
}

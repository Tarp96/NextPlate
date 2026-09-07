"use client";

import { useState } from "react";
import type { Feedback } from "@/lib/types";
import { deleteFavorite } from "@/lib/actions/favorites";

export default function DeleteFavoriteButton(recipeId: number) {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);
    setFeedback(null);

    try {
      const result = await deleteFavorite(recipeId);

      if (result.error) {
        setFeedback({
          type: "error",
          message: result.error,
        });
        return;
      }

      setFeedback({
        type: "success",
        message: "Removed favorites",
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

  const deleted = feedback?.type === "success";

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={pending || deleted}
        className="
      inline-flex min-h-11 items-center justify-center gap-2
      rounded-2xl bg-red-600 px-5 py-3
      text-sm font-semibold text-white shadow-sm
      transition-colors
      hover:bg-red-700 active:bg-red-800
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-red-500 focus-visible:ring-offset-2
      disabled:cursor-not-allowed disabled:bg-red-600/60
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
            Deleting…
          </>
        ) : (
          <>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 6V4h8v2"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 6l-1 14H6L5 6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 11v5M14 11v5"
              />
            </svg>

            {deleted ? "Deleted" : "Delete from Favorites"}
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

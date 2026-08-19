"use client";
import { useState } from "react";

import { ExtendedIngredient } from "@/lib/types";

type IngredientsSectionProps = {
  ingredientList: ExtendedIngredient[];
};

export default function IngredientsSection({
  ingredientList,
}: IngredientsSectionProps) {
  const [metric, setMetric] = useState(false);

  function handleClick() {
    setMetric((prev) => !prev);
  }

  const recipeIngredients = ingredientList.map((ingredient) => (
    <li
      key={ingredient.id}
      className="flex items-center justify-between border-b border-zinc-100 pb-3 last:border-b-0"
    >
      <span className="capitalize text-zinc-800">{ingredient.name}</span>

      <span className="text-sm font-medium text-zinc-500">
        {ingredient.measures.us.amount}{" "}
        {metric
          ? ingredient.measures.us.unitShort
          : ingredient.measures.metric.unitShort}
      </span>
    </li>
  ));

  return (
    <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex items-center justify-between gap-8">
        <h2 className="text-2xl font-semibold text-zinc-900">Ingredients</h2>

        <button
          type="button"
          onClick={handleClick}
          aria-label={`Switch to ${metric ? "US" : "Metric"} measurements`}
          className="flex cursor-pointer items-center rounded-full border border-green-200 bg-green-50 p-1 text-sm font-medium"
        >
          <span
            className={`rounded-full px-3 py-1.5 transition ${
              !metric ? "bg-green-600 text-white shadow-sm" : "text-green-700"
            }`}
          >
            Metric
          </span>

          <span
            className={`rounded-full px-3 py-1.5 transition ${
              metric ? "bg-green-600 text-white shadow-sm" : "text-green-700"
            }`}
          >
            US
          </span>
        </button>
      </div>

      <ul className="space-y-3">{recipeIngredients}</ul>
    </section>
  );
}

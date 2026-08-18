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

  const recipeIngredients = ingredientList.map((ingredient) => (
    <li
      key={ingredient.id}
      className="flex items-center justify-between border-b border-zinc-100 pb-3 last:border-b-0"
    >
      <span className="capitalize text-zinc-800">{ingredient.name}</span>

      <span className="text-sm font-medium text-zinc-500">
        {ingredient.measures.us.amount} {ingredient.measures.us.unitShort}
      </span>
    </li>
  ));

  return <ul className="space-y-3">{recipeIngredients}</ul>;
}

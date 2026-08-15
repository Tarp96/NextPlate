"use client";

import { Recipe } from "@/lib/types";
import { useState } from "react";
import FilterButton from "./FilterButton";
import RecipeGrid from "./RecipeGrid";

type RecipeSectionProps = {
  recipeList: Recipe[];
};

export default function RecipeSection({ recipeList }: RecipeSectionProps) {
  const [isVegan, setIsVegan] = useState(false);

  const displayRecipelist = isVegan
    ? recipeList.filter((recipe) => recipe.vegan)
    : recipeList;

  return (
    <>
      <FilterButton
        label="Vegan"
        onClickAction={() => setIsVegan((prev) => !prev)}
      />

      <RecipeGrid recipeList={displayRecipelist} />
    </>
  );
}

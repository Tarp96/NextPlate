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
  const [vegetarian, setIsVegetarian] = useState(false);
  const [dairyFree, setIsDairyFree] = useState(false);
  const [glutenFree, setIsGlutenFree] = useState(false);

  const displayRecipelist = isVegan
    ? recipeList.filter((recipe) => recipe.vegan)
    : recipeList;

  return (
    <>
      <FilterButton
        label="Vegan"
        onClickAction={() => setIsVegan((prev) => !prev)}
      />

      <FilterButton
        label="Vegetarian"
        onClickAction={() => setIsVegetarian((prev) => !prev)}
      />
      <FilterButton
        label="Dairy Free"
        onClickAction={() => setIsDairyFree((prev) => !prev)}
      />
      <FilterButton
        label="Gluten Free"
        onClickAction={() => setIsGlutenFree((prev) => !prev)}
      />

      <RecipeGrid recipeList={displayRecipelist} />
    </>
  );
}

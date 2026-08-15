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

  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    dairyFree: false,
    glutenFree: false,
  });

  function toggleFilter(filter: keyof typeof filters) {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  }

  const displayRecipeList = recipeList.filter((recipe) => {
    if (filters.vegan && !recipe.vegan) return false;
    if (filters.vegetarian && !recipe.vegetarian) return false;
    if (filters.dairyFree && !recipe.dairyFree) return false;
    if (filters.glutenFree && !recipe.glutenFree) return false;

    return true;
  });

  return (
    <>
      <FilterButton label="Vegan" onClickAction={() => toggleFilter("vegan")} />

      <FilterButton
        label="Vegetarian"
        onClickAction={() => toggleFilter("vegetarian")}
      />

      <FilterButton
        label="Dairy Free"
        onClickAction={() => toggleFilter("dairyFree")}
      />

      <FilterButton
        label="Gluten Free"
        onClickAction={() => toggleFilter("glutenFree")}
      />

      <RecipeGrid recipeList={displayRecipeList} />
    </>
  );
}

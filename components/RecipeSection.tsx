"use client";

import { Recipe } from "@/lib/types";
import { useState } from "react";
import RecipeGrid from "./RecipeGrid";
import Tag from "./Tag";

type RecipeSectionProps = {
  recipeList: Recipe[];
};

export default function RecipeSection({ recipeList }: RecipeSectionProps) {
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

  const filterButtons = [
    { label: "Vegan", filter: "vegan" },
    { label: "Vegetarian", filter: "vegetarian" },
    { label: "Dairy Free", filter: "dairyFree" },
    { label: "Gluten Free", filter: "glutenFree" },
  ] as const;

  return (
    <>
      <div className="mb-8 flex gap-2">
        {filterButtons.map(({ label, filter }) => (
          <Tag
            key={filter}
            label={label}
            active={filters[filter]}
            onClickAction={() => toggleFilter(filter)}
          />
        ))}
      </div>

      <RecipeGrid recipeList={displayRecipeList} />
    </>
  );
}

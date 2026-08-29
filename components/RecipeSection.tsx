"use client";

import { Recipe } from "@/lib/types";
import { useState } from "react";
import RecipeGrid from "./RecipeGrid";
import Tag from "./Tag";

type RecipeSectionProps = {
  recipeList: Recipe[];
};

type SortOption =
  | "fastest"
  | "slowest"
  | "nameAscending"
  | "nameDescending"
  | "highestRated"
  | "newest";

  type RecipeComparator = (a: Recipe, b: Recipe) => number; 

export default function RecipeSection({ recipeList }: RecipeSectionProps) {
  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    dairyFree: false,
    glutenFree: false,
  });
  
  const [isSorted, setIsSorted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default");

  function toggleFilter(filter: keyof typeof filters) {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  }

  function toggleOpen(){
    setIsOpen(prev => !prev)
  }

  function sortList(){
    setIsSorted(prev => !prev)
  }

  const sortingOptions: Record<SortOption, RecipeComparator> = {
    fastest: (a, b) => a.readyInMinutes - b.readyInMinutes, 

    slowest: (a, b) => b.readyInMinutes - a.readyInMinutes,

    nameAscending: (a, b) => a.title.localeCompare(b.title),

    nameDescending: (a, b) => b.title.localeCompare(a.title),

    highestRated: (a, b) => b.aggregateLikes - a.aggregateLikes,
}

  const filteredRecipeList = recipeList.filter((recipe) => {
    if (filters.vegan && !recipe.vegan) return false;
    if (filters.vegetarian && !recipe.vegetarian) return false;
    if (filters.dairyFree && !recipe.dairyFree) return false;
    if (filters.glutenFree && !recipe.glutenFree) return false;

    return true;
  });

  const displayRecipeList = isSorted ? 
  [...filteredRecipeList].sort((a, b) => a.readyInMinutes - b.readyInMinutes)
  : filteredRecipeList


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

        <button onClick={toggleOpen}>Filter</button>

        {isOpen && <button onClick={sortList}>Time</button> }
      </div>

      <RecipeGrid recipeList={displayRecipeList} />
    </>
  );
}

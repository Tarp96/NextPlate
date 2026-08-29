"use client";

import { Recipe } from "@/lib/types";
import { useState } from "react";
import RecipeGrid from "./RecipeGrid";
import Tag from "../../ui/Tag";
import { SortOption, SelectedSortOption, RecipeComparator } from "@/lib/types";
import SortButton from "./SortButton";

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

  const [isOpen, setIsOpen] = useState(false);
  const [sortByOption, setSortByOption] =
    useState<SelectedSortOption>("default");

  const sortingIsActive = isOpen || sortByOption !== "default";

  function toggleFilter(filter: keyof typeof filters) {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  }

  const sortingOptions: Record<SortOption, RecipeComparator> = {
    fastest: (a, b) => a.readyInMinutes - b.readyInMinutes,

    slowest: (a, b) => b.readyInMinutes - a.readyInMinutes,

    nameAscending: (a, b) => a.title.localeCompare(b.title),

    nameDescending: (a, b) => b.title.localeCompare(a.title),

    highestRated: (a, b) => b.aggregateLikes - a.aggregateLikes,
  };

  function handleSortSelection(option: SelectedSortOption) {
    setSortByOption(option);
    setIsOpen(false);
  }

  const filteredRecipeList = recipeList.filter((recipe) => {
    if (filters.vegan && !recipe.vegan) return false;
    if (filters.vegetarian && !recipe.vegetarian) return false;
    if (filters.dairyFree && !recipe.dairyFree) return false;
    if (filters.glutenFree && !recipe.glutenFree) return false;

    return true;
  });

  const displayRecipeList =
    sortByOption === "default"
      ? filteredRecipeList
      : [...filteredRecipeList].sort(sortingOptions[sortByOption]);

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

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-haspopup="menu"
            className={`
      inline-flex cursor-pointer items-center justify-center gap-2
      rounded-full border px-4 py-2 text-sm font-medium transition
      ${
        sortingIsActive
          ? "border-green-600 bg-green-600 text-white"
          : `border-zinc-300 bg-white text-zinc-700
             hover:border-green-500 hover:bg-green-50
             hover:text-green-700`
      }
    `}
          >
            Sort
            <span
              aria-hidden="true"
              className={`text-xs transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div
              role="menu"
              className="
        absolute right-0 z-20 mt-2 w-56 overflow-hidden
        rounded-xl border border-zinc-200 bg-white py-2
        shadow-lg
      "
            >
              <SortButton
                label="Default"
                option="default"
                selectedOption={sortByOption}
                onSelect={handleSortSelection}
              />

              <SortButton
                label="Cooking time: shortest"
                option="fastest"
                selectedOption={sortByOption}
                onSelect={handleSortSelection}
              />

              <SortButton
                label="Cooking time: longest"
                option="slowest"
                selectedOption={sortByOption}
                onSelect={handleSortSelection}
              />

              <SortButton
                label="Name: A–Z"
                option="nameAscending"
                selectedOption={sortByOption}
                onSelect={handleSortSelection}
              />

              <SortButton
                label="Name: Z–A"
                option="nameDescending"
                selectedOption={sortByOption}
                onSelect={handleSortSelection}
              />

              <SortButton
                label="Most popular"
                option="highestRated"
                selectedOption={sortByOption}
                onSelect={handleSortSelection}
              />
            </div>
          )}
        </div>
      </div>

      <RecipeGrid recipeList={displayRecipeList} />
    </>
  );
}

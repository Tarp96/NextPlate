import { mockRecipes } from "./mock-data";

export async function getAllRecipes() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockRecipes;
}

export async function getRecipeById(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockRecipes.find((recipe) => recipe.id === id);
}

import { mockRecipes } from "./mock-data";

const MOCK_DELAY = 500;

function delay(ms = MOCK_DELAY): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAllRecipes() {
  await delay();
  return mockRecipes;
}

export async function getRecipeById(id: number) {
  await delay();

  return mockRecipes.find((recipe) => recipe.id === id);
}

export async function searchRecipeByName(query: string) {
  await delay();

  return mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase()),
  );
}

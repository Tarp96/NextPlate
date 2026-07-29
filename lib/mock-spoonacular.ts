import { mockRecipes } from "./mock-data";

const MOCK_DELAY = 500;
const SHOULD_FAIL = false;

function delay(ms = MOCK_DELAY): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAllRecipes() {
  await delay();

  if (SHOULD_FAIL) {
    throw new Error("Failed to fetch Recipes");
  }
  return mockRecipes;
}

export async function getRecipeById(id: number) {
  await delay();
  if (SHOULD_FAIL) {
    throw new Error("Failed to get recipe");
  }
  return mockRecipes.find((recipe) => recipe.id === id);
}

export async function searchRecipeByName(query: string) {
  await delay();

  if (SHOULD_FAIL) {
    throw new Error(`Could not find recipe named ${query}`);
  }

  return mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(query.toLowerCase()),
  );
}

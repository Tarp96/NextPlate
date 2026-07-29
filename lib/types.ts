export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;

  readyInMinutes: number;
  servings: number;

  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;

  cheap?: boolean;
  veryPopular?: boolean;
  sustainable?: boolean;
  lowFodmap?: boolean;

  healthScore: number;
  pricePerServing: number;

  weightWatcherSmartPoints?: number;
  gaps?: string;

  preparationMinutes?: number;
  cookingMinutes?: number;

  aggregateLikes?: number;

  creditsText?: string;
  license?: string;
  sourceName?: string;
  sourceUrl?: string;
  summary?: string;

  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions?: string[];

  nutrition: Nutrition;
};

export type Nutrition = {
  nutrients: Nutrient[];
};

export type Nutrient = {
  name: string;
  amount: number;
  unit: string;
};

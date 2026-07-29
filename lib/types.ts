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
  cheap: boolean;
  veryPopular: boolean;
  healthScore: number;
  pricePerServing: number;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
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

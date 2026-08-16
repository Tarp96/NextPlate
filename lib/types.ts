export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;

  servings: number;
  readyInMinutes: number;

  sourceUrl: string;
  spoonacularSourceUrl: string;
  sourceName: string;
  creditsText: string;
  license: string | null;

  aggregateLikes: number;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  weightWatcherSmartPoints: number;

  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  ketogenic: boolean;
  whole30: boolean;
  cheap: boolean;

  gaps: string;

  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];

  extendedIngredients: ExtendedIngredient[];
  analyzedInstructions: AnalyzedInstruction[];

  instructions: string;
};

export type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: IngredientMeasures;
};

export type IngredientMeasures = {
  us: Measure;
  metric: Measure;
};

export type Measure = {
  amount: number;
  unitShort: string;
  unitLong: string;
};

export type AnalyzedInstruction = {
  name: string;
  steps: InstructionStep[];
};

export type InstructionStep = {
  number: number;
  step: string;
  ingredients: InstructionIngredient[];
  equipment: InstructionEquipment[];
};

export type InstructionIngredient = {
  id: number;
  name: string;
  localizedName: string;
  image: string;
};

export type InstructionEquipment = {
  id: number;
  name: string;
  localizedName: string;
  image: string;
};

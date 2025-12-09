export interface Recipe {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  isVegetarian: boolean;
  isVegan: boolean;
  ingredients: RecipeIngredient[];
  steps: string[];
  tips?: string[];
  tags: string[];
}

export interface RecipeIngredient {
  productId?: string;
  name: string;
  quantity: string;
  isOptional?: boolean;
}

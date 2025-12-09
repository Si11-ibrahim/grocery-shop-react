export interface Festival {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  bannerImage?: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  featuredProductIds: string[];
  recipeIds: string[];
  theme: FestivalTheme;
}

export interface FestivalTheme {
  primaryColor: string;
  accentColor: string;
}

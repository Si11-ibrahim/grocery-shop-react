export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  unit: string;
  category: string;
  subcategory?: string;
  brand?: string;
  images: string[];
  inStock: boolean;
  stockQuantity?: number;
  rating?: number;
  reviewCount?: number;
  isVegetarian?: boolean;
  isVegan?: boolean;
  tags?: string[];
}

export interface ProductFilters {
  category?: string;
  subcategory?: string;
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  isVegetarian?: boolean;
  search?: string;
  sortBy?: ProductSortOption;
}

export type ProductSortOption =
  | 'relevance'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc'
  | 'rating'
  | 'newest';

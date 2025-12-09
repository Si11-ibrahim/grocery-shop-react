export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  productCount: number;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  productCount?: number;
}

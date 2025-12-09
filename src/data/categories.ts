import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Fruits & Vegetables',
    slug: 'fruits-vegetables',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400',
    description: 'Fresh fruits and vegetables delivered daily',
    productCount: 156,
    subcategories: [
      { id: 'sub-1', name: 'Fresh Fruits', slug: 'fresh-fruits', productCount: 45 },
      { id: 'sub-2', name: 'Fresh Vegetables', slug: 'fresh-vegetables', productCount: 68 },
      { id: 'sub-3', name: 'Exotic Fruits', slug: 'exotic-fruits', productCount: 23 },
      { id: 'sub-4', name: 'Organic Produce', slug: 'organic-produce', productCount: 20 },
    ],
  },
  {
    id: 'cat-2',
    name: 'Dairy & Eggs',
    slug: 'dairy-eggs',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400',
    description: 'Fresh milk, paneer, curd, and eggs',
    productCount: 89,
    subcategories: [
      { id: 'sub-5', name: 'Milk', slug: 'milk', productCount: 18 },
      { id: 'sub-6', name: 'Curd & Buttermilk', slug: 'curd-buttermilk', productCount: 22 },
      { id: 'sub-7', name: 'Paneer & Cheese', slug: 'paneer-cheese', productCount: 28 },
      { id: 'sub-8', name: 'Eggs', slug: 'eggs', productCount: 21 },
    ],
  },
  {
    id: 'cat-3',
    name: 'Atta, Rice & Dal',
    slug: 'atta-rice-dal',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    description: 'Staples for every Indian kitchen',
    productCount: 124,
    subcategories: [
      { id: 'sub-9', name: 'Atta & Flour', slug: 'atta-flour', productCount: 35 },
      { id: 'sub-10', name: 'Rice', slug: 'rice', productCount: 42 },
      { id: 'sub-11', name: 'Dal & Pulses', slug: 'dal-pulses', productCount: 47 },
    ],
  },
  {
    id: 'cat-4',
    name: 'Spices & Masala',
    slug: 'spices-masala',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400',
    description: 'Authentic Indian spices and masalas',
    productCount: 178,
    subcategories: [
      { id: 'sub-12', name: 'Whole Spices', slug: 'whole-spices', productCount: 45 },
      { id: 'sub-13', name: 'Ground Spices', slug: 'ground-spices', productCount: 52 },
      { id: 'sub-14', name: 'Blended Masalas', slug: 'blended-masalas', productCount: 48 },
      { id: 'sub-15', name: 'Salt & Sugar', slug: 'salt-sugar', productCount: 33 },
    ],
  },
  {
    id: 'cat-5',
    name: 'Oils & Ghee',
    slug: 'oils-ghee',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400',
    description: 'Cooking oils and pure ghee',
    productCount: 67,
    subcategories: [
      { id: 'sub-16', name: 'Cooking Oil', slug: 'cooking-oil', productCount: 32 },
      { id: 'sub-17', name: 'Ghee & Vanaspati', slug: 'ghee-vanaspati', productCount: 18 },
      { id: 'sub-18', name: 'Olive & Specialty Oil', slug: 'olive-specialty', productCount: 17 },
    ],
  },
  {
    id: 'cat-6',
    name: 'Snacks & Namkeen',
    slug: 'snacks-namkeen',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400',
    description: 'Crispy snacks and traditional namkeen',
    productCount: 145,
    subcategories: [
      { id: 'sub-19', name: 'Namkeen', slug: 'namkeen', productCount: 48 },
      { id: 'sub-20', name: 'Chips & Crisps', slug: 'chips-crisps', productCount: 35 },
      { id: 'sub-21', name: 'Biscuits & Cookies', slug: 'biscuits-cookies', productCount: 42 },
      { id: 'sub-22', name: 'Sweets', slug: 'sweets', productCount: 20 },
    ],
  },
  {
    id: 'cat-7',
    name: 'Beverages',
    slug: 'beverages',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400',
    description: 'Tea, coffee, and refreshing drinks',
    productCount: 98,
    subcategories: [
      { id: 'sub-23', name: 'Tea', slug: 'tea', productCount: 28 },
      { id: 'sub-24', name: 'Coffee', slug: 'coffee', productCount: 22 },
      { id: 'sub-25', name: 'Health Drinks', slug: 'health-drinks', productCount: 18 },
      { id: 'sub-26', name: 'Juices', slug: 'juices', productCount: 30 },
    ],
  },
  {
    id: 'cat-8',
    name: 'Personal Care',
    slug: 'personal-care',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
    description: 'Skincare, haircare, and hygiene essentials',
    productCount: 112,
    subcategories: [
      { id: 'sub-27', name: 'Hair Care', slug: 'hair-care', productCount: 32 },
      { id: 'sub-28', name: 'Skin Care', slug: 'skin-care', productCount: 38 },
      { id: 'sub-29', name: 'Oral Care', slug: 'oral-care', productCount: 22 },
      { id: 'sub-30', name: 'Bath & Body', slug: 'bath-body', productCount: 20 },
    ],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getFeaturedCategories = () => categories.slice(0, 6);

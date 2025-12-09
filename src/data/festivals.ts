import type { Festival } from '@/types';

export const festivals: Festival[] = [
  {
    id: 'fest-1',
    name: 'Diwali Specials',
    slug: 'diwali-specials',
    description: 'Celebrate the festival of lights with our curated collection of sweets, dry fruits, and puja essentials.',
    image: 'https://images.unsplash.com/photo-1605196560547-b2f7281b7355?w=600',
    bannerImage: 'https://images.unsplash.com/photo-1574265935498-ed3c5ce98e97?w=1200',
    startDate: '2024-10-20',
    endDate: '2024-11-15',
    isActive: true,
    featuredProductIds: ['prod-1', 'prod-12', 'prod-9', 'prod-4'],
    recipeIds: ['recipe-4'],
    theme: {
      primaryColor: '#FFD700',
      accentColor: '#FF6B00',
    },
  },
  {
    id: 'fest-2',
    name: 'Holi Colors',
    slug: 'holi-colors',
    description: 'Add sweetness to your Holi celebration with traditional thandai, gujiyas, and festive colors.',
    image: 'https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?w=600',
    startDate: '2025-03-01',
    endDate: '2025-03-20',
    isActive: false,
    featuredProductIds: [],
    recipeIds: [],
    theme: {
      primaryColor: '#FF1493',
      accentColor: '#00CED1',
    },
  },
  {
    id: 'fest-3',
    name: 'Navratri Fasting',
    slug: 'navratri-fasting',
    description: 'Special vrat-friendly foods including sabudana, kuttu atta, and sendha namak for your Navratri fast.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600',
    startDate: '2024-10-03',
    endDate: '2024-10-12',
    isActive: false,
    featuredProductIds: [],
    recipeIds: [],
    theme: {
      primaryColor: '#FF6347',
      accentColor: '#FFD700',
    },
  },
];

export const getActiveFestival = () => festivals.find((f) => f.isActive);

export const getFestivalBySlug = (slug: string) => festivals.find((f) => f.slug === slug);

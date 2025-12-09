import { HeroBanner } from './HeroBanner';
import { FeaturedCategories } from './FeaturedCategories';
import { TrendingProducts } from './TrendingProducts';
import { FestivalBanner } from './FestivalBanner';
import { RecipeSection } from './RecipeSection';

export function HomePage() {
  return (
    <div>
      <HeroBanner />
      <FeaturedCategories />
      <FestivalBanner />
      <TrendingProducts />
      <RecipeSection />
    </div>
  );
}

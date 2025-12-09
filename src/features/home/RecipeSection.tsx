import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat } from 'lucide-react';
import { RecipeCard } from '@/components/common';
import { getFeaturedRecipes } from '@/data';

export function RecipeSection() {
  const recipes = getFeaturedRecipes();

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ChefHat className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Cook This Week
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
              Recipe Inspiration
            </h2>
          </div>
          <Link
            to="/recipes"
            className="hidden sm:flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors"
          >
            All Recipes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 text-accent font-medium"
          >
            View All Recipes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

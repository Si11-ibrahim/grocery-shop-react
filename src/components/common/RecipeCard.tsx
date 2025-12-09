import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat } from 'lucide-react';
import { cn } from '@/utils';
import { Badge } from '@/components/ui';
import type { Recipe } from '@/types';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

const difficultyColors = {
  easy: 'success',
  medium: 'warning',
  hard: 'error',
} as const;

export function RecipeCard({ recipe, className }: RecipeCardProps) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Link to={`/recipes/${recipe.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className={cn(
          'group bg-background rounded-xl overflow-hidden',
          'hover:shadow-lg transition-shadow duration-300',
          className
        )}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant={difficultyColors[recipe.difficulty]}>
              {recipe.difficulty}
            </Badge>
          </div>
          {recipe.isVegetarian && (
            <div className="absolute top-3 right-3 w-5 h-5 rounded-sm border-2 border-success flex items-center justify-center bg-background">
              <div className="w-2 h-2 rounded-full bg-success" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-primary mb-2 group-hover:text-accent transition-colors">
            {recipe.name}
          </h3>

          <p className="text-sm text-text-secondary line-clamp-2 mb-4">
            {recipe.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{totalTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>{recipe.ingredients.length} items</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

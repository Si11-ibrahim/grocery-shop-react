import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  variant?: 'circle' | 'card';
  className?: string;
}

export function CategoryCard({
  category,
  variant = 'circle',
  className,
}: CategoryCardProps) {
  if (variant === 'circle') {
    return (
      <Link to={`/categories/${category.slug}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className={cn('text-center group cursor-pointer', className)}
        >
          <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-surface ring-2 ring-transparent group-hover:ring-accent transition-all duration-300">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
            {category.name}
          </h3>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link to={`/categories/${category.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className={cn(
          'group relative overflow-hidden rounded-xl bg-surface p-6',
          'hover:shadow-lg transition-shadow duration-300',
          className
        )}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-background flex-shrink-0">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-primary group-hover:text-accent transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-text-secondary">
              {category.productCount} items
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

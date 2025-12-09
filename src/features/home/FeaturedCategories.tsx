import { motion } from 'framer-motion';
import { CategoryCard } from '@/components/common';
import { getFeaturedCategories } from '@/data';

export function FeaturedCategories() {
  const categories = getFeaturedCategories();

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-2">
            Shop by Category
          </h2>
          <p className="text-text-secondary">
            Explore our wide range of Indian groceries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CategoryCard category={category} variant="circle" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

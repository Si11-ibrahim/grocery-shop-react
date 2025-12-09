import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/common';
import { getTrendingProducts } from '@/data';

export function TrendingProducts() {
  const products = getTrendingProducts();

  return (
    <section className="py-12 lg:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-2">
              Trending Now
            </h2>
            <p className="text-text-secondary">
              Popular picks from our customers
            </p>
          </div>
          <Link
            to="/products"
            className="hidden sm:flex items-center gap-2 text-accent font-medium hover:text-accent-dark transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-medium"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

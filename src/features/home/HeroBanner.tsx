import { motion } from 'framer-motion';
import { SearchBar } from '@/components/common';

export function HeroBanner() {
  return (
    <section className="relative bg-surface py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-accent" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Logo Mark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">
              Welcome to
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mb-4 tracking-tight">
            Saffron
          </h1>
          <p className="text-xl text-accent font-medium mb-2">Pure Indian Essentials</p>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Premium quality groceries, authentic spices, and fresh produce delivered to your doorstep.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto"
          >
            <SearchBar variant="hero" />
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-8 mt-10 text-sm text-text-secondary"
          >
            <div>
              <span className="font-semibold text-primary text-lg">1000+</span>
              <p>Products</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <span className="font-semibold text-primary text-lg">50+</span>
              <p>Recipes</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <span className="font-semibold text-primary text-lg">Free</span>
              <p>Delivery*</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

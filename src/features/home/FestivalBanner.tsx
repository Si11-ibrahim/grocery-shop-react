import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui';
import { getActiveFestival } from '@/data';

export function FestivalBanner() {
  const festival = getActiveFestival();

  if (!festival) return null;

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/90"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4"
              >
                <Sparkles className="w-4 h-4" />
                Festival Special
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
                {festival.name}
              </h2>
              <p className="text-white/80 mb-6 max-w-md">
                {festival.description}
              </p>

              <Link to={`/festivals/${festival.slug}`}>
                <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Collection
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div className="lg:w-1/3">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={festival.image}
                alt={festival.name}
                className="w-64 h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

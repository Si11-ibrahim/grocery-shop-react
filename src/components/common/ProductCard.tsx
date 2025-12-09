import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, ShoppingBag } from 'lucide-react';
import { cn } from '@/utils';
import { Badge } from '@/components/ui';
import { PriceDisplay } from './PriceDisplay';
import { QuantitySelector } from './QuantitySelector';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { addToCart, updateQuantity, selectCartItems } from '@/features/cart/cartSlice';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [isAdded, setIsAdded] = useState(false);

  const cartItem = cartItems.find((item) => item.productId === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'group relative bg-background rounded-xl p-4 transition-shadow duration-300',
        'hover:shadow-lg',
        className
      )}
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="success">{discount}% OFF</Badge>
        </div>
      )}

      {/* Product Image */}
      <Link to={`/products/${product.slug}`}>
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-surface">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <span className="text-white font-medium">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-medium text-primary line-clamp-2 hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-text-secondary">{product.unit}</p>

        <div className="flex items-center justify-between pt-2">
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            showDiscount={false}
          />

          {/* Add to Cart / Quantity */}
          <AnimatePresence mode="wait">
            {quantity === 0 ? (
              <motion.button
                key="add"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={cn(
                  'flex items-center justify-center w-9 h-9 rounded-full transition-colors',
                  'bg-primary text-white hover:bg-primary/90',
                  'disabled:bg-border disabled:cursor-not-allowed'
                )}
              >
                {isAdded ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </motion.button>
            ) : (
              <motion.div
                key="quantity"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => handleQuantityChange(quantity + 1)}
                  onDecrease={() => handleQuantityChange(quantity - 1)}
                  size="sm"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Quick Add Indicator */}
      <AnimatePresence>
        {isAdded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-2 right-2 bg-success text-white px-2 py-1 rounded-full text-xs flex items-center gap-1"
          >
            <ShoppingBag className="w-3 h-3" />
            Added
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

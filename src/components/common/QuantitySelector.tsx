import { Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md';
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
  size = 'md',
}: QuantitySelectorProps) {
  const sizeClasses = {
    sm: 'h-7 text-sm',
    md: 'h-9 text-base',
  };

  const buttonClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center border border-border rounded-lg overflow-hidden',
        sizeClasses[size]
      )}
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onDecrease}
        disabled={quantity <= min}
        className={cn(
          'flex items-center justify-center bg-surface hover:bg-border transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          buttonClasses[size]
        )}
      >
        <Minus className="w-4 h-4" />
      </motion.button>
      <motion.span
        key={quantity}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        className={cn(
          'flex items-center justify-center font-medium min-w-[2.5rem]',
          sizeClasses[size]
        )}
      >
        {quantity}
      </motion.span>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onIncrease}
        disabled={quantity >= max}
        className={cn(
          'flex items-center justify-center bg-surface hover:bg-border transition-colors',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          buttonClasses[size]
        )}
      >
        <Plus className="w-4 h-4" />
      </motion.button>
    </div>
  );
}

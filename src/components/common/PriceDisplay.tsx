import { cn } from '@/utils';
import { formatPrice, calculateDiscount } from '@/utils';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  size?: 'sm' | 'md' | 'lg';
  showDiscount?: boolean;
  className?: string;
}

export function PriceDisplay({
  price,
  originalPrice,
  size = 'md',
  showDiscount = true,
  className,
}: PriceDisplayProps) {
  const discount = originalPrice ? calculateDiscount(originalPrice, price) : 0;

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className={cn('font-semibold text-primary', sizeClasses[size])}>
        {formatPrice(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <>
          <span
            className={cn(
              'text-text-secondary line-through',
              size === 'lg' ? 'text-base' : 'text-sm'
            )}
          >
            {formatPrice(originalPrice)}
          </span>
          {showDiscount && (
            <span className="text-success text-sm font-medium">
              {discount}% off
            </span>
          )}
        </>
      )}
    </div>
  );
}

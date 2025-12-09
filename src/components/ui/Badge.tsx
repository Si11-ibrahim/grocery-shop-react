import { cn } from '@/utils';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'accent';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface text-text-secondary',
  success: 'bg-success-light text-success',
  warning: 'bg-warning-light text-warning',
  error: 'bg-error-light text-error',
  accent: 'bg-accent-light text-accent-dark',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

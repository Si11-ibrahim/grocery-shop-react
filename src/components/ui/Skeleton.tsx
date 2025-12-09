import { cn } from '@/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-surface rounded-md',
        className
      )}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-background rounded-xl p-4">
      <Skeleton className="aspect-square rounded-lg mb-4" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-3 w-1/2 mb-3" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="text-center">
      <Skeleton className="w-20 h-20 rounded-full mx-auto mb-3" />
      <Skeleton className="h-4 w-16 mx-auto" />
    </div>
  );
}

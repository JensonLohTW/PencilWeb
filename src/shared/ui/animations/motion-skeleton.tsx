import { cn } from '@/shared/lib/cn'

interface MotionSkeletonProps {
  className?: string
  lines?: number
  withHeading?: boolean
}

export function MotionSkeleton({
  className,
  lines = 3,
  withHeading = true,
}: MotionSkeletonProps) {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className={cn('space-y-4 rounded-2xl border border-pencil-200/80 bg-white/80 p-6', className)}
    >
      <span className="sr-only">Loading content</span>
      {withHeading ? <div className="skeleton-shimmer h-8 w-2/3 rounded-md" /> : null}
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'skeleton-shimmer h-4 rounded',
            index === lines - 1 ? 'w-1/2' : 'w-full',
          )}
        />
      ))}
    </div>
  )
}

export function MotionSkeletonGrid({
  className,
  count = 3,
}: {
  className?: string
  count?: number
}) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 xl:grid-cols-3', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <MotionSkeleton
          key={index}
          withHeading
          lines={3}
        />
      ))}
    </div>
  )
}

import { MotionSkeleton, MotionSkeletonGrid } from '@/shared/ui/animations/motion-skeleton'

export default function Loading() {
  return (
    <div className="page-gradient px-6 py-16 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <MotionSkeleton withHeading lines={3} className="glass-pro" />
        <MotionSkeletonGrid count={2} />
        <MotionSkeletonGrid count={3} />
      </div>
    </div>
  )
}

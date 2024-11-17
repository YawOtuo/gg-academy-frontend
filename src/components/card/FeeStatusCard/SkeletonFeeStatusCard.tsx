import { Skeleton } from "@/components/ui/skeleton";

function SkeletonFeeStatusCard() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="w-full h-10" />
    </div>
  );
}

export default SkeletonFeeStatusCard;

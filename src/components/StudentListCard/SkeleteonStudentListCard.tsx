import { Skeleton } from "../ui/skeleton";

function SkeletonStudentListCard() {
  return (
    <div className="w-full flex items-center gap-3">
      <Skeleton className="w-[10%] h-10"/>
      <Skeleton className="w-full h-10" />
    </div>
  );
}

export default SkeletonStudentListCard;

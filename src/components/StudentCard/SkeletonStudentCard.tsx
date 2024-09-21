import { Skeleton } from "../ui/skeleton";

function SkeletonStudentCard() {
  return (
    <div className="w-full flex items-center gap-3">
      <Skeleton className=" w-[30%] h-24" />
      <Skeleton className=" w-full h-24" />
    </div>
  );
}

export default SkeletonStudentCard;

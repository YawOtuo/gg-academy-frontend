import { Skeleton } from "../ui/skeleton";

function SkeletonStudentCard() {
  return (
    <div className="w-full flex items-center gap-3 h-8">
      <Skeleton className=" w-[5%] h-full" />
      <Skeleton className=" w-full h-full" />
    </div>
  );
}

export default SkeletonStudentCard;

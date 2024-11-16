import FetchingState from "@/components/FetchingState";
import StudentCard from "@/components/StudentCard";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import useStudents from "@/lib/hooks/useStudent";
import Link from "next/link";
import { LuArrowRightCircle } from "react-icons/lu";

function RecentlyRegisteredStudents() {
  const { students, studentsLoading } = useStudents();

  return (
    <div className="flex flex-col gap-5 w-full items-start">
      <div className="flex flex-col items-start gap-0 text-slate-600  ">
        <p className=" text-sm">Recently Registered Students</p>
      </div>{" "}
      <FetchingState
        className="w-full flex flex-col gap-2  "
        success={students?.map((r, index) => (
          <StudentCard key={index} student={r} />
        ))}
        loading={<SkeletonStudentCard />}
        isLoading={studentsLoading}
        skeletonCount={5}
        isError={null}
      />
      <Link href={"/students"}>
        <p className=" flex items-center gap-2 text-xs">
          See All <LuArrowRightCircle className="ml-1" />
        </p>
      </Link>
    </div>
  );
}

export default RecentlyRegisteredStudents;

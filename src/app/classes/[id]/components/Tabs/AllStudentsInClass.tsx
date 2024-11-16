import FetchingState from "@/components/FetchingState";
import StudentCard from "@/components/StudentCard";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import StudentGridTitle from "@/components/StudentGridTitle";
import useClass, { useFetchStudentsInClass } from "@/lib/hooks/useClass";
import { Class } from "@/lib/types/class";

type Props = {
  classId: number;
};
function AllStudentsInClass({ classId }: Props) {
  const { students, isLoading, error } = useFetchStudentsInClass(classId);
  return (
    <div className="flex flex-col gap-5">
      <StudentGridTitle />
      <FetchingState
        className="w-full flex flex-col gap-5  "
        skeletonCount={5}
        isError={error}
        isLoading={isLoading}
        loading={<SkeletonStudentCard />}
        success={students?.map((r) => (
          <StudentCard key={r.id} student={r} />
        ))}
        isEmpty={students && students.length < 1}
        nullComponent={<div>No students records found</div>}
      />{" "}
    </div>
  );
}

export default AllStudentsInClass;

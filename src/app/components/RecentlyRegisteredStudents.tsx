import FetchingState from "@/components/FetchingState";
import StudentCard from "@/components/StudentCard";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import useStudents from "@/lib/hooks/student";

function RecentlyRegisteredStudents() {
  const { students, studentsLoading } = useStudents();

  return (
    <div className="flex flex-col gap-5 mt-10 py-5">
      <h4>Recently Registered Students</h4>
      <FetchingState
        className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5  "
        success={students?.map((r, index) => (
          <StudentCard key={index} student={r} />
        ))}
        loading={<SkeletonStudentCard />}
        isLoading={studentsLoading}
        skeletonCount={5}
        isError={null}
      />
    </div>
  );
}

export default RecentlyRegisteredStudents;

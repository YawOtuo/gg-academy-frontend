import AttendanceCard from "@/components/AttendanceCard";
import SkeletonAttendanceCard from "@/components/AttendanceCard/SkeletonAttendanceCard";
import FetchingState from "@/components/FetchingState";
import AddAttendanceModal from "@/components/Modals/AddAttendanceModal";
import { useFetchAttendanceForStudent } from "@/lib/hooks/useAttendance";
import { Student } from "@/lib/types/student";

type Props = {
  student: Student;
};
function StudentAttendance({ student }: Props) {
  const { attendance, isLoading, error } = useFetchAttendanceForStudent(
    student?.id
  );
  return (
    <div className="flex flex-col gap-5 lg:gap-10 items-start">
      {student && (
        <AddAttendanceModal studentId={student.id} classId={student.class?.id} />
      )}
      <FetchingState
        className="w-full flex flex-col gap-5  "
        skeletonCount={5}
        isError={error}
        isLoading={isLoading}
        loading={<SkeletonAttendanceCard />}
        success={attendance?.map((r) => (
          <AttendanceCard classId={student.class?.id} key={r.id} attendance={r} />
        ))}
        isEmpty={attendance && attendance.length < 1}
        nullComponent={<div>No attendance records found</div>}
      />{" "}
    </div>
  );
}

export default StudentAttendance;

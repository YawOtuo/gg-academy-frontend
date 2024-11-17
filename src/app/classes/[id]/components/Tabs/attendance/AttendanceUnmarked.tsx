import AttendanceCard from "@/components/card/AttendanceCard";
import AttendanceGridTitle from "@/components/AttendanceGridTitle";
import FetchingState from "@/components/FetchingState";
import StudentCard from "@/components/StudentCard";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import { useFetchAttendanceNotMarked } from "@/lib/hooks/useAttendance";
import { formatDate } from "@/lib/utils/date";
import Link from "next/link";
import AttendanceLabel from "./AttendanceLabel";
import AttendanceUnmarkedCard from "@/components/card/AttendanceUnmarkedCard";

type Props = {
  classId: number;
};
function AttendanceUnmarked({ classId }: Props) {
  const { data, isLoading, isError } = useFetchAttendanceNotMarked(classId);
  return (
    <div className="w-full flex flex-col gap-5">
      <AttendanceGridTitle />

      <FetchingState
        className="flex flex-col  gap-5 w-full"
        success={
          // Iterate over the grouped data array
          (data || []).map(({ date, students }, index) => (
            <div key={index} className="w-full">
              <AttendanceLabel date={date} />

              {/* Iterate over the attendance records for each date */}
              {students?.map((r) => (
                <AttendanceUnmarkedCard
                  key={r.id}
                  classId={classId}
                  date={date}
                  student={r}
                />
              ))}
            </div>
          ))
        }
        loading={<SkeletonStudentCard />}
        skeletonCount={10}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default AttendanceUnmarked;

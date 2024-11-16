import AttendanceCard from "@/components/AttendanceCard";
import FetchingState from "@/components/FetchingState";
import StudentCard from "@/components/StudentCard";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import {
  useFetchAttendanceForClass,
  useFetchAttendanceNotMarked,
} from "@/lib/hooks/useAttendance";
import { formatDate } from "@/lib/utils/date";
import Link from "next/link";
import AttendanceLabel from "./AttendanceLabel";

type Props = {
  classId: number;
};
function AttendanceAbsent({ classId }: Props) {
  const { attendance, isLoading, error } = useFetchAttendanceForClass(
    "absent",
    classId
  );
  return (
    <div>
      <FetchingState
        className="flex flex-col  gap-5"
        success={
          // Iterate over the grouped data array
          (attendance || []).map(({ date, items }, index) => (
            <div key={index} className="w-full">
              <AttendanceLabel date={date} />

              {/* Iterate over the attendance records for each date */}
              {items?.map((r) => (
                <AttendanceCard
                  classId={classId}
                  key={r.id}
                  attendance={r}
                />
              ))}
            </div>
          ))
        }
        loading={<SkeletonStudentCard />}
        skeletonCount={10}
        isLoading={isLoading}
        isError={error}
      />
    </div>
  );
}

export default AttendanceAbsent;

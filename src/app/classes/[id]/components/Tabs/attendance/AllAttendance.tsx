import AttendanceCard from "@/components/card/AttendanceCard";
import AttendanceGridTitle from "@/components/AttendanceGridTitle";
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
function AllAttendance({ classId }: Props) {
  const { attendance, isLoading, error } = useFetchAttendanceForClass(
    "all",
    classId
  );
  return (
    <div className="w-full flex flex-col gap-5">
      <AttendanceGridTitle />
      <FetchingState
        className="flex flex-col  gap-5 w-full"
        success={
          // Iterate over the grouped data array
          (attendance || []).map(({ date, items }, index) => (
            <div key={index} className="w-full">
              <AttendanceLabel date={date} />
              {items?.map((r) => (
                <AttendanceCard classId={classId} attendance={r} key={r.id} />
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

export default AllAttendance;

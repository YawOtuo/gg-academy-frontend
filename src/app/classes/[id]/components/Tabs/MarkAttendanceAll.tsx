import FetchingState from "@/components/FetchingState";
import StudentCard from "@/components/StudentCard";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import { useFetchAttendanceNotMarked } from "@/lib/hooks/useAttendance";
import AttendanceAbsent from "./attendance/AttendanceAbsent";
import AttendancePresent from "./attendance/AttendancePresent";
import CustomTabs from "@/components/ui/CustomTabs";
import AllAttendance from "./attendance/AllAttendance";
import AttendanceUnmarked from "./attendance/AttendanceUnmarked";

type Props = {
  classId: number;
};
function MarkAttendance({ classId }: Props) {
  const { data, isLoading, isError } = useFetchAttendanceNotMarked(classId);
  const tabs = [
    {
      value: "all",
      label: "All",
      content: <AllAttendance classId={classId} />,
    },
    {
      value: "present",
      label: "Present",
      content: <AttendancePresent classId={classId} />,
    },
    {
      value: "absent",
      label: "Absent",
      content: <AttendanceAbsent classId={classId} />,
    },
    {
      value: "unmarked",
      label: "Unmarked",
      content: <AttendanceUnmarked classId={classId} />,
    },
  ];
  return (
    <div>
      Mark Attendance
      <CustomTabs tabs={tabs} defaultValue="all" />
    </div>
  );
}

export default MarkAttendance;

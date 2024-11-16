import FetchingState from "@/components/FetchingState";
import StudentCard from "@/components/StudentCard";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import { useFetchAttendanceNotMarked } from "@/lib/hooks/useAttendance";
import AttendanceAbsent from "./attendance/AttendanceAbsent";
import AttendancePresent from "./attendance/AttendancePresent";
import CustomTabs from "@/components/ui/CustomTabs";
import AllAttendance from "./attendance/AllAttendance";
import AllFees from "./fees/AllFees";
import StudentFeesPaid from "./fees/StudentFeesPaid";
import StudentFeesUnpaid from "./fees/StudentFeesUnpaid";

type Props = {
  classId: number;
};
function StudentsFees({ classId }: Props) {
  const { data, isLoading, isError } = useFetchAttendanceNotMarked(classId);
  const tabs = [
    {
      value: "all",
      label: "All Fee Payments",
      content: <AllFees classId={classId} />,
    },
    {
      value: "fees-paid",
      label: "Paid",
      content: <StudentFeesPaid classId={classId} />,
    },
    {
      value: "fees-paid-partial",
      label: "Partial",
      content: <StudentFeesPaid classId={classId} />,
    },
    {
      value: "fees-unpaid",
      label: "Unpaid",
      content: <StudentFeesUnpaid classId={classId} />,
    },
  ];
  return (
    <div>
      Student Fees
      <CustomTabs tabs={tabs} defaultValue="all" />
    </div>
  );
}

export default StudentsFees;

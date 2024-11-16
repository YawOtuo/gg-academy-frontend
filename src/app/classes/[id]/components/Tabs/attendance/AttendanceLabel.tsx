import { formatDate } from "@/lib/utils/date";

type Props = {
  date: string;
};
function AttendanceLabel({ date }: Props) {
  return <p className="text-slate-600 text-sm">Attendance for {formatDate(date)}</p>;
}

export default AttendanceLabel;

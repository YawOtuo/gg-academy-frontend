import { ClassAttendanceResponse } from "@/lib/api/attendance";
import { Attendance } from "@/lib/types/attendance";
import { Student } from "@/lib/types/student";
import { formatDate } from "@/lib/utils/date";
import { FC } from "react";
import AddAttendanceModal from "../../Modals/AddAttendanceModal";
import AcceptAttendanceTick from "../../AcceptAttendanceTick";
import MarkAttendanceAsAbsentModal from "../../Modals/MarkAttendanceAsAbsentModal";

type AttendanceUnmarkedCardProps = {
  student: Student;
  date: string;
  classId: number;
};

const AttendanceUnmarkedCard: FC<AttendanceUnmarkedCardProps> = ({
  student,
  date,
  classId,
}) => {
  return (
    <div className="w-full grid grid-cols-1  lg:grid-cols-4 items-center justify-center  bg-white border rounded-lg px-5 py-3 mb-4">
      <div className="col-span-2">{student?.name}</div>
      <div className="flex items-center mt-3"></div>
      {/* 
      {student?.extra_information && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm">{student?.extra_information}</p>
        </div>
      )} */}

      <div className="flex items-center gap-5">
        <AcceptAttendanceTick classId={classId} student={student} date={date} />

        <MarkAttendanceAsAbsentModal
          classId={classId}
          student={student}
          date={date}
        />
      </div>
    </div>
  );
};

export default AttendanceUnmarkedCard;

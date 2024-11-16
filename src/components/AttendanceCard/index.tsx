import { ClassAttendanceResponse } from "@/lib/api/attendance";
import { Attendance } from "@/lib/types/attendance";
import { formatDate } from "@/lib/utils/date";
import { FC } from "react";
import { MdEdit } from "react-icons/md";
import AddAttendanceModal from "../Modals/AddAttendanceModal";
import DeleteAttendanceModal from "../Modals/DeleteAttendanceModal";

type AttendanceCardProps = {
  attendance: Attendance;
  classId: number;
};

const AttendanceCard: FC<AttendanceCardProps> = ({ attendance, classId }) => {
  return (
    <div className="w-full grid grid-cols-1  lg:grid-cols-5 items-center justify-center  bg-white border rounded-lg px-5 py-3 mb-4">
      <div className="col-span-2">{attendance?.student?.name}</div>
      <div className="flex items-center mt-3">
        <span
          className={`inline-block py-1 px-3 rounded-full text-white text-sm ${
            attendance.status === "present"
              ? "bg-green-500"
              : attendance.status === "absent"
              ? "bg-red-500"
              : "bg-yellow-500"
          }`}>
          {attendance.status}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-gray-600 text-sm">{attendance.extra_information}</p>
      </div>

      <div className="flex items-center gap-5">
        <AddAttendanceModal
          edit
          initialData={attendance}
          classId={classId}
          studentId={attendance?.student?.id}
        />

        <DeleteAttendanceModal attendance={attendance} />
      </div>
    </div>
  );
};

export default AttendanceCard;

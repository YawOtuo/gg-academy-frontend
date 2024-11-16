import useAttendance from "@/lib/hooks/useAttendance";
import { Button } from "../ui/button";
import { BsCheckAll } from "react-icons/bs";
import { Student } from "@/lib/types/student";

type Props = {
  classId: number;
  student: Student;
  date: string;
};

function AcceptAttendanceTick({ classId, student, date }: Props) {
  const { addAttendance } = useAttendance();
  return (
    <Button
      className=""
      variant={"link"}
      onClick={() =>
        addAttendance({
          classId,
          studentId: student.id,
          date,
          status: "present",
        })
      }>
      <BsCheckAll className="text-green-600 text-3xl" />
    </Button>
  );
}

export default AcceptAttendanceTick;

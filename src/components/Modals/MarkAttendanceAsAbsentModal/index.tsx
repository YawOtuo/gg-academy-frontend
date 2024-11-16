import React, { useEffect } from "react"; // Import useEffect
import { Button } from "../../ui/button";
import useDisclosure from "@/lib/hooks/useDisclosure";
import { MdCancel, MdDeleteSweep } from "react-icons/md";
import { useRouter } from "next/navigation";
import CustomDialog from "@/components/ui/CustomModal";
import useAttendance from "@/lib/hooks/useAttendance";
import { Attendance } from "@/lib/types/attendance";
import { Student } from "@/lib/types/student";

type MarkAttendanceAsAbsentModal = {
  classId: number; // Data to populate form for editing
  student?: Student;
  date: string;
};

function MarkAttendanceAsAbsentModal({
  classId,
  student,
  date,
}: MarkAttendanceAsAbsentModal) {
  const { addAttendance } = useAttendance();
  const { open, setOpen } = useDisclosure();
  const router = useRouter();

  return (
    <div>
      <CustomDialog
      size={"xl"}
        open={open}
        setOpen={setOpen}
        trigger={
          <Button variant={"link"} size={"sm"}>
            <MdCancel className="text-2xl text-red-500 " />
          </Button>
        }
        body={
          <div className="flex flex-col students-start gap-5">
            <div className="flex flex-col gap-5">
              <h5>
                Are you sure you want to mark{" "}
                <span className="font-bold capitalize">{student?.name}</span> as
                absent
              </h5>
            </div>
            <div className="flex students-center justify-center gap-5 w-full">
              <Button
                variant={"secondary"}
                type="submit"
                onClick={() => setOpen(false)}>
                Cancel
              </Button>

              <Button
                variant={"destructive"}
                type="submit"
                onClick={() => {
                  addAttendance({
                    classId,
                    studentId: Number(student?.id),
                    date: date,
                    status: "absent",
                  });
                  // router.back()
                  setOpen(false);
                }}>
                Mark Absent
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default MarkAttendanceAsAbsentModal;

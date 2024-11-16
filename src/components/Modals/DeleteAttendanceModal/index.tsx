import React, { useEffect } from "react"; // Import useEffect
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import useDisclosure from "@/lib/hooks/useDisclosure";
import { MdDeleteSweep } from "react-icons/md";
import { useRouter } from "next/navigation";
import CustomDialog from "@/components/ui/CustomModal";
import useAttendance from "@/lib/hooks/useAttendance";
import { Attendance } from "@/lib/types/attendance";

type DeleteAttendanceModalProps = {
  attendance: Attendance; // Data to populate form for editing
  className?: string;
};

function DeleteAttendanceModal({
  attendance,
  className,
}: DeleteAttendanceModalProps) {
  const { deleteAttendanceById } = useAttendance();
  const { open, setOpen } = useDisclosure();
  const router = useRouter();

  return (
    <div>
      <CustomDialog
        open={open}
        setOpen={setOpen}
        trigger={
          <Button variant={"secondary"} size={"sm"}>
            <MdDeleteSweep /> 
          </Button>
        }
        body={
          <div className="flex flex-col students-start gap-5">
            <div className="flex flex-col gap-5">
              <h5>
                Are you sure you want to delete{" "}
                <span className="font-bold capitalize">
                  Delete attendance for {attendance?.date}
                </span>{" "}
                from your farm
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
                  deleteAttendanceById(attendance.id);
                  // router.back()
                  setOpen(false);
                }}>
                Delete
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default DeleteAttendanceModal;

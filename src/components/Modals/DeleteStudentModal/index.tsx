import React, { useEffect } from "react"; // Import useEffect
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import CustomInput from "@/components/ui/CustomInput";
import useDisclosure from "@/lib/hooks/useDisclosure";
import { CiCirclePlus, CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { useRouter } from "next/navigation";
import useStudents from "@/lib/hooks/useStudent";
import CustomDialog from "@/components/ui/CustomModal";
import { Student } from "@/lib/types/student";

type DeletestudentModalProps = {
  student: Student; // Data to populate form for editing
  className?: string;
};

function DeletestudentModal({ student, className }: DeletestudentModalProps) {
  const { deleteStudentById } = useStudents();
  const { open, setOpen } = useDisclosure();
  const router = useRouter();

  return (
    <div>
      <CustomDialog
        open={open}
        setOpen={setOpen}
        trigger={
          <Button variant={"destructive"} size={"sm"}>
            <MdDeleteSweep /> Delete {student?.name}
          </Button>
        }
        body={
          <div className="flex flex-col students-start gap-5">
            <div className="flex flex-col gap-5">
              <h5>
                Are you sure you want to delete{" "}
                <span className="font-bold capitalize">{student?.name}</span>{" "}
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
                  deleteStudentById(student.id);
                  router.push("/students");
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

export default DeletestudentModal;

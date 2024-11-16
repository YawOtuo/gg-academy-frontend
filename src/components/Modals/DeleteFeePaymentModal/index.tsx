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
import useFeePayment from "@/lib/hooks/useFeePayment";
import { FeePayment } from "@/lib/types/fees";

type DeleteFeePaymentModalProps = {
  payment: FeePayment; // Data to populate form for editing
  className?: string;
};

function DeleteFeePaymentModal({ payment, className }: DeleteFeePaymentModalProps) {
  const { deleteFeePaymentById } = useFeePayment();
  const { open, setOpen } = useDisclosure();
  const router = useRouter();

  return (
    <div>
      <CustomDialog
        open={open}
        setOpen={setOpen}
        trigger={
          <Button variant={"destructive"} size={"sm"}>
            <MdDeleteSweep /> Delete Payment
          </Button>
        }
        body={
          <div className="flex flex-col students-start gap-5">
            <div className="flex flex-col gap-5">
              <h5>
                Are you sure you want to delete{" "}
                <span className="font-bold capitalize">{payment?.amountPaid} by {payment?.student?.name}</span>{" "}
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
                  deleteFeePaymentById(payment?.id);
                  // router.push("/students");
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

export default DeleteFeePaymentModal;

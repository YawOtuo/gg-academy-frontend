import useDisclosure from "@/lib/hooks/useDisclosure";
import { Button } from "../../ui/button";
import CustomDialog from "../../ui/CustomModal";
import CreateFeePaymentForm from "./AddFeePaymentForm";

type Props = {
  studentId?: number;
  edit?: boolean;
  selectStudent?: boolean;
  classId?: number;
};

function AddFeePaymentModal({ studentId, edit, selectStudent, classId }: Props) {
  const { open, setOpen } = useDisclosure();
  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      trigger={<Button>Add Fee Payment</Button>}
      body={
        <div>
          <CreateFeePaymentForm
            classId={classId}
            edit={edit}
            selectStudent={selectStudent}
            setOpen={setOpen}
            studentId={studentId}
          />
        </div>
      }
    />
  );
}

export default AddFeePaymentModal;

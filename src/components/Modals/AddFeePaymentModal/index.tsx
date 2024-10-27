import useDisclosure from "@/lib/hooks/useDisclosure";
import { Button } from "../../ui/button";
import CustomDialog from "../../ui/CustomModal";
import CreateFeePaymentForm from "./AddFeePaymentForm";

type Props = {
  id: number;
  edit?: boolean;
};

function AddFeePaymentModal({ id, edit }: Props) {
  const { open, setOpen } = useDisclosure();
  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      trigger={<Button>Add Fee Payment</Button>}
      body={
        <div>
          <CreateFeePaymentForm edit={edit} setOpen={setOpen} studentId={id} />
        </div>
      }
    />
  );
}

export default AddFeePaymentModal;

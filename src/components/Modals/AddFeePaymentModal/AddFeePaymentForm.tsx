import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/CustomInput";
import { CreateFeeBody } from "@/lib/api/fees";
import useFeePayment from "@/lib/hooks/useFeePayment";
import React from "react";
import { useForm } from "react-hook-form";

interface CreateFeePaymentFormProps {
  studentId: number;
  defaultValues?: Partial<CreateFeeBody>;
  setOpen: any;
  edit?: boolean;
}

const CreateFeePaymentForm: React.FC<CreateFeePaymentFormProps> = ({
  studentId,
  setOpen,
  defaultValues,
  edit,
}) => {
  const { addFeePayment, updateFeePaymentById } = useFeePayment();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFeeBody>({
    defaultValues: {
      amountPaid: defaultValues?.amountPaid || 0,
      paymentDate: defaultValues?.paymentDate || new Date().toISOString(),
      paymentMethod: defaultValues?.paymentMethod || "",
    },
  });

  const onSubmit = async (data: CreateFeeBody) => {
    data.studentId = studentId
    if (edit) {
      await updateFeePaymentById(studentId, data);
    } else {
      await addFeePayment({ ...data, studentId });
    }
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <CustomInput
        label="Amount Paid"
        type="number"
        {...register("amountPaid", { required: "Amount paid is required" })}
        errorText={errors.amountPaid?.message}
      />

      <CustomInput
        label="Payment Date"
        type="date"
        {...register("paymentDate", { required: "Payment date is required" })}
        errorText={errors.paymentDate?.message}
      />

      <CustomInput
        label="Payment Method"
        {...register("paymentMethod", {
          required: "Payment method is required",
        })}
        errorText={errors.paymentMethod?.message}
      />

      <Button type="submit">Submit Payment</Button>
    </form>
  );
};

export default CreateFeePaymentForm;

import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect";
import { CreateFeeBody } from "@/lib/api/fees";
import { useFetchStudentsInClass } from "@/lib/hooks/useClass";
import useFeePayment from "@/lib/hooks/useFeePayment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface CreateFeePaymentFormProps {
  studentId?: number;
  defaultValues?: Partial<CreateFeeBody>;
  setOpen: any;
  edit?: boolean;
  selectStudent?: boolean;
  classId?: number;
}

const CreateFeePaymentForm: React.FC<CreateFeePaymentFormProps> = ({
  studentId,
  setOpen,
  defaultValues,
  selectStudent,
  classId,
  edit,
}) => {
  const { addFeePayment, updateFeePaymentById } = useFeePayment();
  const [selectedStudentId, setSelectedStudentId] = useState<number>(
    Number(studentId)
  );

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
    setOpen(false);

    data.studentId = selectedStudentId;
    if (edit) {
      await updateFeePaymentById(Number(studentId), data);
    } else {
      await addFeePayment({ ...data, studentId: selectedStudentId });
    }
  };

  const { students, isLoading, error } = useFetchStudentsInClass(
    Number(classId)
  );

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

      {selectStudent && students && (
        <CustomSelect
          data={students}
          valueField="id"
          labelField="name"
          placeholder="Select a student"
          onChange={(value) => setSelectedStudentId(Number(value))}
          label="Student"
        />
      )}

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

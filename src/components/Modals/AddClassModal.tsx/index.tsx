import { Student } from "@/lib/types/student";
import { FormProvider, useForm } from "react-hook-form";
import useStudents from "@/lib/hooks/useStudent";
import { AddStudentBody } from "@/lib/api/students";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CreateClassBody } from "@/lib/api/class";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomDialog from "@/components/ui/CustomModal";
import useClass from "@/lib/hooks/useClass";

type Props = {
  classId?: number;
  initialData?: CreateClassBody;
  edit?: boolean;
};

function AddClassModal({ initialData, edit, classId }: Props) {
  const { addClass, updateClassById } = useClass();
  const [open, setOpen] = useState(false);
  const methods = useForm<CreateClassBody>({
    defaultValues: {
      ...initialData,
    },
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit = async (data: CreateClassBody) => {
    try {
      if (edit) {
        await updateClassById(Number(classId), data);
      } else {
        await addClass(data);

      }

      setOpen(false);
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      size={"xl"}
      trigger={
        !edit ? (
          <Button>Create a new class</Button>
        ) : (
          <Button variant={"secondary"}>Edit Student Details</Button>
        )
      }
      body={
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-primary font-bold"> New Student</h3>
          </div>

          <div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)} // Use the onSubmit function here
                className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col gap-5">
                    <Input {...register("name")} label="Name" required />
                    <Input {...register("feeAmount")} label="Fee" required />
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <Button
                    size={"lg"}
                    type="submit"
                    disabled={isSubmitting || !isValid}>
                    {!edit ? "Create Student" : "Edit Student"}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      }
    />
  );
}

export default AddClassModal;

import { Student } from "@/lib/types/student";
import { Button } from "../ui/button";
import CustomDialog from "../ui/CustomModal";
import { Input } from "../ui/input";
import { FormProvider, useForm } from "react-hook-form";
import useStudents from "@/lib/hooks/student";
import { AddStudentBody } from "@/lib/api/students";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

type Props = {
  initialData?: AddStudentBody;
  edit?: boolean;
};

function AddStudentModal({ initialData, edit }: Props) {
  const { addStudent } = useStudents();
  const [open, setOpen] = useState(false);
  const methods = useForm<AddStudentBody>({
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


  const onSubmit = async (data: AddStudentBody) => {
    try {
      toast({
        title: "Submitting",
      });
      await addStudent(data);

      setOpen(false);
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      size={"7xl"}
      trigger={
        !edit ? (
          <Button>Add a Student</Button>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                  <div className="flex flex-col gap-5">
                    <Input {...register("name")} label="Name" />
                    <Input {...register("age")} type="number" label="Age" />
                    <Input
                      {...register("dateOfBirth")}
                      label="Date of Birth"
                      type="date"
                    />
                    <Input {...register("email")} type="email" label="Email" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Input {...register("gender")} label="gender" />{" "}
                    <Input {...register("nationality")} label="nationality" />
                    <Input
                      {...register("contactInformation")}
                      label="contact Information"
                    />
                    <Input {...register("address")} label="address" />
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

export default AddStudentModal;

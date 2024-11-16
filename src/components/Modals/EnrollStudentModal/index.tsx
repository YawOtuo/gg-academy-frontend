import { Student } from "@/lib/types/student";
import { FormProvider, useForm } from "react-hook-form";
import useStudents from "@/lib/hooks/useStudent";
import { AddStudentBody, StudentFeesResponse } from "@/lib/api/students";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CreateClassBody } from "@/lib/api/class";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomDialog from "@/components/ui/CustomModal";
import useClass from "@/lib/hooks/useClass";

type Props = {
  initialData?: Student;
  edit?: boolean;
  student: Student;
};
type FormType = {
  classId: number;
  studentId: number;
};

function EnrollStudentModal({ initialData, edit, student }: Props) {
  const { addStudentToClass, classes, classesError, classesLoading } =
    useClass();
  const [open, setOpen] = useState(false);
  const methods = useForm<FormType>({
  
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  // useEffect(() => {
  //   if (initialData) {
  //     reset(initialData);
  //   }
  // }, [initialData, reset]);

  const onSubmit = async (data: FormType) => {
    addStudentToClass({
      classId: data.classId,
      studentId: student.id,
    });
    setOpen(false);
  };

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      size={"xl"}
      trigger={<Button variant={"secondary"}>Enroll Student</Button>}
      body={
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-primary font-bold">Enroll Student</h3>
          </div>

          <div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)} // Use the onSubmit function here
                className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-5 w-full">
               

                  {/* Display list of classes */}
                  <div className="flex flex-col gap-2 mt-5">
                    <label className="font-semibold">Select Class</label>
                    {classesLoading ? (
                      <p>Loading classes...</p>
                    ) : classesError ? (
                      <p>Error loading classes.</p>
                    ) : (
                      <select
                        {...register("classId")}
                        className="w-full p-2 border rounded-md">
                        <option value="">Select a class</option>
                        {classes?.map((classItem) => (
                          <option key={classItem.id} value={classItem.id}>
                            {classItem.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>

                <div className="flex justify-end w-full">
                  <Button size={"lg"} type="submit">
                    Enroll Student
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

export default EnrollStudentModal;

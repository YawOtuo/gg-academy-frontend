import { FormProvider, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomDialog from "@/components/ui/CustomModal";
import useAttendance from "@/lib/hooks/useAttendance"; // Import your attendance hook
import { CreateAttendanceBody } from "@/lib/api/attendance"; // Make sure this path is correct
import CustomSelect from "@/components/ui/CustomSelect";
import { Attendance, AttendanceTypes } from "@/lib/types/attendance";

type Props = {
  classId: number;
  studentId: number;
  initialData?: Attendance;
  edit?: boolean;
};

// Helper function to format the date to YYYY-MM-DD
const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toISOString().split("T")[0]; // Format as YYYY-MM-DD
};

function AddAttendanceModal({ initialData, edit, classId, studentId }: Props) {
  const { addAttendance, updateAttendanceById } = useAttendance();
  const [open, setOpen] = useState(false);
  const methods = useForm<CreateAttendanceBody>({
    defaultValues: {
      ...initialData,
      date: initialData?.date ? formatDate(initialData.date) : "", // Format date here
    },
  });

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isValid },
  } = methods;

  useEffect(() => {
    if (initialData) {
      reset({
        ...initialData,
        date: initialData.date ? formatDate(initialData.date) : "", // Reset with formatted date
      });
    }
  }, [initialData, reset]);

  const onSubmit = async (data: CreateAttendanceBody) => {
    try {
      if (edit) {
        data.classId = classId;
        data.studentId = studentId;
        await updateAttendanceById(Number(initialData?.id), data);
      } else {
        await addAttendance({ ...data, classId, studentId });
      }
      setOpen(false);
    } catch (error) {
      console.error("Failed to add or update attendance:", error);
    }
  };

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      size={"xl"}
      trigger={
        !edit ? (
          <Button>Create Attendance Record</Button>
        ) : (
          <Button variant={"secondary"}>Edit Attendance</Button>
        )
      }
      body={
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-primary font-bold">Attendance Record</h3>
          </div>

          <div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col gap-5">
                    <CustomSelect
                      initialValue={initialData?.status}
                      data={[
                        { id: "present", name: "Present" },
                        { id: "absent", name: "Absent" },
                        { id: "late", name: "Late" },
                      ]}
                      valueField="id"
                      labelField="name"
                      onChange={(selected) => {
                        setValue("status", selected as AttendanceTypes); // Set the status attribute when it changes
                      }}
                    />
                  </div>

                  <Input
                    {...register("date")}
                    label="Date"
                    type="date"
                    required
                  />
                  <Input
                    {...register("extra_information")}
                    label="Extra Information"
                  />
                </div>
                <div className="flex justify-end w-full">
                  <Button
                    size={"lg"}
                    type="submit"
                    disabled={isSubmitting || !isValid}>
                    {!edit ? "Create Attendance" : "Update Attendance"}
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

export default AddAttendanceModal;

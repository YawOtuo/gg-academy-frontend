import DeletestudentModal from "@/components/Modals/DeleteStudentModal";
import EnrollStudentModal from "@/components/Modals/EnrollStudentModal";
import { useGetStudent } from "@/lib/hooks/useStudent";
import { useParams } from "next/navigation";

type InfoProps = {
  label: string;
  value?: string | number;
};
const Info = ({ label, value }: InfoProps) => {
  return (
    <div className=" py-1 w-full capitalize  rounded-md">
      <span className="text-slate-600"> {label}: </span>
      {value}
    </div>
  );
};

const Details = () => {
  const params = useParams();
  const {
    data: student,
    isLoading,
    isError,
  } = useGetStudent(Number(params?.id));
  return (
    <div className="flex flex-col gap-5 items-start">
      {student && <EnrollStudentModal student={student} />}
      <div className="grid grid-cols-1 lg:grid-cols-3 px-1  gap-1 lg:gap-3 w-full ">
        <div className="flex flex-col gap-1 lg:gap-3">
          <Info label={"name"} value={student?.name} />
          <Info label={"Email"} value={student?.email} />
          <Info label={"Age"} value={student?.age} />
          <Info label={"Date Of Birth"} value={student?.dateOfBirth} />
        </div>
        <div className="flex flex-col gap-1 lg:gap-3">
          <Info
            label={"Contact Information"}
            value={student?.contactInformation}
          />
          <Info label={"Gender"} value={student?.gender} />
          <Info label={"Nationality"} value={student?.nationality} />
          <Info label={"Address"} value={student?.address} />
        </div>{" "}
      </div>
      <div className="flex flex-col gap-1 lg:gap-3 items-end w-full">
        {/* <Info label={"name"} value={student?.name} />
          <Info label={"Email"} value={student?.email} />
          <Info label={"Age"} value={student?.age} />
          <Info label={"Date Of Birth"} value={student?.dateOfBirth} /> */}
        {student && <DeletestudentModal student={student} />}{" "}
      </div>
    </div>
  );
};

export default Details;

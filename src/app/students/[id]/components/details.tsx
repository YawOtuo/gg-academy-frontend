import { useGetStudent } from "@/lib/hooks/useStudent";
import { useParams } from "next/navigation";

type InfoProps = {
  label: string;
  value?: string | number;
};
const Info = ({ label, value }: InfoProps) => {
  return (
    <div className="px-5 py-1 w-full capitalize  rounded-md">
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
    <div className="grid grid-cols-1 lg:grid-cols-3 px-1 py-10 gap-5 w-full gap-y-5">
      <div className="flex flex-col gap-5">
        <Info label={"name"} value={student?.name} />
        <Info label={"Email"} value={student?.email} />
        <Info label={"Age"} value={student?.age} />
        <Info label={"Date Of Birth"} value={student?.dateOfBirth} />
      </div>
      <div className="flex flex-col gap-5">
        <Info
          label={"Contact Information"}
          value={student?.contactInformation}
        />
        <Info label={"Gender"} value={student?.gender} />
        <Info label={"Nationality"} value={student?.nationality} />
        <Info label={"Address"} value={student?.address} />
      </div>{" "}
      <div className="flex flex-col gap-5">
        {/* <Info label={"name"} value={student?.name} />
        <Info label={"Email"} value={student?.email} />
        <Info label={"Age"} value={student?.age} />
        <Info label={"Date Of Birth"} value={student?.dateOfBirth} /> */}
      </div>
    </div>
  );
};

export default Details;

"use client";
import MainDetails from "./components/mainDetails";
import Details from "./components/details";

import CustomTabs from "@/components/ui/CustomTabs";
import Fees from "./components/fees";
import BackButton from "@/components/ui/BackButton";
import StudentAttendance from "./components/student-attendance";
import { useGetStudent } from "@/lib/hooks/useStudent";

type Props = {
  params: {
    id: number;
  };
};
const Page = ({ params }: Props) => {
  const { data: student } = useGetStudent(params?.id);
  const tabs = [
    {
      value: "Details",
      label: "Details",
      content: <Details />,
    },
    {
      value: "Fees",
      label: "Fees",
      content: <Fees id={params.id} />,
    },
    {
      value: "Attendance",
      label: "Attendance",
      content: student ? <StudentAttendance student={student} /> : null,
    },
  ];
  return (
    <div className="">
      <BackButton />
      <div className="flex flex-col gap-5 mb-10 m items-start justify-center py-5  ">
        <div className="w-full">
          <MainDetails />
        </div>
        <div className=" flex flex-col gap-2 w-full">
          <CustomTabs tabs={tabs} defaultValue="Details" />
        </div>
      </div>
    </div>
  );
};

export default Page;

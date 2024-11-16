"use client";
import { useGetClass } from "@/lib/hooks/useClass";
import MarkAttendance from "./components/Tabs/MarkAttendanceAll";
import StudentFeesPaid from "./components/Tabs/fees/StudentFeesPaid";
import StudentFeesUnpaid from "./components/Tabs/fees/StudentFeesUnpaid";
import CustomTabs from "@/components/ui/CustomTabs";
import AllStudentsInClass from "./components/Tabs/AllStudentsInClass";
import AllFees from "./components/Tabs/fees/AllFees";
import StudentsFees from "./components/Tabs/StudentFees";
import AddClassModal from "@/components/Modals/AddClassModal.tsx";

type Props = {
  params: {
    id: number;
  };
};
function Page({ params }: Props) {
  const tabs = [
    {
      value: "students",
      label: "All Students",
      content: <AllStudentsInClass classId={params.id} />,
    },
    {
      value: "attendance",
      label: "Attendance",
      content: <MarkAttendance classId={params.id} />,
    },
    {
      value: "fees",
      label: "Fee Payments",
      content: <StudentsFees classId={params.id} />,
    },
  ];
  const { data, isLoading, isError } = useGetClass(params.id);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="capitalize">{data?.name}</h1>
          <p>Fee Amount: {data?.feeAmount}</p>
          <AddClassModal edit initialData={{
            id: data?.id as number,
            name: data?.name as string,
            feeAmount: data?.feeAmount as number,

          }}/>
          <CustomTabs tabs={tabs} defaultValue="students" />
        </div>
      )}
    </div>
  );
}

export default Page;

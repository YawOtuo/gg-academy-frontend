import FeeCard from "@/components/FeeCard";
import SkeletonFeeCard from "@/components/FeeCard/SkeletonFeeCard";
import FetchingState from "@/components/FetchingState";

import {
  useGetFeeByStudent,
  useGetFeeForClass,
  useGetFeesPaidByStudents,
} from "@/lib/hooks/useFeePayment";
import Link from "next/link";
import FeePaymentGridTitle from "./FeePaymentGridTitle";
import FeeStatusCard from "@/components/card/FeeStatusCard";
import SkeletonFeeStatusCard from "@/components/card/FeeStatusCard/SkeletonFeeStatusCard";
import FeeStatusGridTitle from "./FeeStatusGridTitle";

type Props = {
  classId: number;
};
function StudentFeesPaidPartial({ classId }: Props) {
  const { data, isLoading, isError } = useGetFeesPaidByStudents(
    classId,
    "partial"
  );
  return (
    <div className="flex flex-col gap-5">
      <FeeStatusGridTitle />
    
      <FetchingState
        className="flex flex-col gap-5"
        success={data?.map((r, index) => (
          <FeeStatusCard key={index} fee={r} />
        ))}
        loading={<SkeletonFeeStatusCard />}
        skeletonCount={10}
        isLoading={isLoading}
        isEmpty={data && data?.length === 0}
        nullComponent={<div>No fees paid partially</div>}
        isError={isError}
      />
    </div>
  );
}

export default StudentFeesPaidPartial;

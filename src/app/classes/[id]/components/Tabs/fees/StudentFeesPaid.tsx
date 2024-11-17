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
function StudentFeesPaid({ classId }: Props) {
  const { data, isLoading, isError } = useGetFeesPaidByStudents(
    classId,
    "paid"
  );
  return (
    <div className="flex flex-col gap-5">
      <FeeStatusGridTitle />
      <FetchingState
        isEmpty={data && data?.length === 0}
        className="flex flex-col gap-5"
        success={data?.map((r, index) => (
          <FeeStatusCard key={index} fee={r} />
        ))}
        loading={<SkeletonFeeStatusCard />}
        skeletonCount={10}
        isLoading={isLoading}
        isError={isError}
        nullComponent={<div>No fees paid in full</div>}
      />
    </div>
  );
}

export default StudentFeesPaid;

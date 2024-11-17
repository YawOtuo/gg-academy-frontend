import FeeStatusCard from "@/components/card/FeeStatusCard";
import SkeletonFeeCard from "@/components/FeeCard/SkeletonFeeCard";
import FetchingState from "@/components/FetchingState";

import {
  useGetFeeByStudent,
  useGetFeeForClass,
  useGetFeesPaidByStudents,
} from "@/lib/hooks/useFeePayment";
import Link from "next/link";
import FeeStatusGridTitle from "./FeeStatusGridTitle";
import SkeletonFeeStatusCard from "@/components/card/FeeStatusCard/SkeletonFeeStatusCard";

type Props = {
  classId: number;
};
function StudentFeesUnpaid({ classId }: Props) {
  const { data, isLoading, isError } = useGetFeesPaidByStudents(
    classId,
    "unpaid"
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
        isError={isError}
        isEmpty={data && data?.length === 0}
        nullComponent={<div>No fees unpaid</div>}
      />
    </div>
  );
}

export default StudentFeesUnpaid;

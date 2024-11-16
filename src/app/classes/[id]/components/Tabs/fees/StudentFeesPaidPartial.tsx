import FeeCard from "@/components/FeeCard";
import SkeletonFeeCard from "@/components/FeeCard/SkeletonFeeCard";
import FetchingState from "@/components/FetchingState";

import {
  useGetFeeByStudent,
  useGetFeeForClass,
} from "@/lib/hooks/useFeePayment";
import Link from "next/link";
import FeePaymentGridTitle from "./FeePaymentGridTitle";

type Props = {
  classId: number;
};
function StudentFeesPaidPartial({ classId }: Props) {
  const { data, isLoading, isError } = useGetFeeForClass("partial", classId);
  return (
    <div className="flex flex-col gap-5">
      <FeePaymentGridTitle />

      <FetchingState
        className="flex flex-col gap-5"
        success={data?.map((r, index) => (
          <Link key={index} className="w-full" href={`/students/${r?.id}`}>
            {" "}
            <FeeCard fee={r} />
          </Link>
        ))}
        loading={<SkeletonFeeCard />}
        skeletonCount={10}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}

export default StudentFeesPaidPartial;

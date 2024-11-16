import FeeCard from "@/components/FeeCard";
import SkeletonFeeCard from "@/components/FeeCard/SkeletonFeeCard";
import FetchingState from "@/components/FetchingState";

import {
  useGetFeeByStudent,
  useGetFeeForClass,
} from "@/lib/hooks/useFeePayment";
import Link from "next/link";
import FeePaymentGridTitle from "./FeePaymentGridTitle";
import AddFeePaymentModal from "@/components/Modals/AddFeePaymentModal";

type Props = {
  classId: number;
};
function AllFees({ classId }: Props) {
  const { data, isLoading, isError } = useGetFeeForClass("all", classId);
  return (
    <div className="flex flex-col gap-5 items-start">
      <FeePaymentGridTitle />
      <AddFeePaymentModal classId={classId} selectStudent />
      <FetchingState
        className="flex flex-col w-full gap-5"
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

export default AllFees;

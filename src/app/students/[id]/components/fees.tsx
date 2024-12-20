import FeeCard from "@/components/FeeCard";
import SkeletonFeeCard from "@/components/FeeCard/SkeletonFeeCard";
import FetchingState from "@/components/FetchingState";
import AddFeePaymentModal from "@/components/Modals/AddFeePaymentModal";
import useFeePayment, {
  useGetFeeByStudent,
  useGetFeePayment,
} from "@/lib/hooks/useFeePayment";

type Props = {
  id: number;
};
export default function Fees({ id }: Props) {
  const { data, isLoading, isError } = useGetFeeByStudent(id);
  return (
    <div className="flex flex-col gap-5 lg:gap-10 items-start">
      <AddFeePaymentModal studentId={id} />
      <FetchingState
        className="w-full flex flex-col gap-5  "
        skeletonCount={5}
        isError={isError}
        isLoading={isLoading}
        loading={<SkeletonFeeCard />}
        success={data?.map((r) => (
          <FeeCard key={r.id} fee={r} />
        ))}
        isEmpty={data && data.length < 1}
        nullComponent={<div>No fees found</div>}
      />{" "}
    </div>
  );
}

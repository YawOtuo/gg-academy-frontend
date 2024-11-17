import { FeePayment } from "@/lib/types/fees";
import DeleteFeePaymentModal from "../Modals/DeleteFeePaymentModal";

type Props = {
  fee: FeePayment;
};
function FeeCard({ fee }: Props) {
  return (
    <div className="group flex flex-col  lg:grid grid-cols-7 gap-3  border-[1px] shadow-lg py-2 px-5 rounded-lg hover:bg-slate-600 hover:text-white transition-all cursor-pointer items-start lg:items-center justify-center">
      <p className="text-primary font-semibold text-lg">GHS {fee?.amountPaid}</p>
      <p className="text-sm">
        <span className="text-slate-600 group-hover:text-white">Date:</span>{" "}
        {fee?.paymentDate}
      </p>
      <p className="text-base">{fee?.student?.name}</p>
      <p className="uppercase text-xs"><span className="lg:hidden capitalize">Status:</span> {fee?.status}</p>
      <p className="text-sm">
        <span className="text-slate-600 group-hover:text-white">Method: </span>
        {fee?.paymentMethod || "N/A"}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-slate-600 group-hover:text-white">
          Remaining Balance:
        </p>
        <p>GHS {fee?.remainingBalance}</p>
      </div>{" "}
      <div>
        <DeleteFeePaymentModal payment={fee} />
      </div>
    </div>
  );
}

export default FeeCard;

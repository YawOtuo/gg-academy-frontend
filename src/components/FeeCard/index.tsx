import { FeePayment } from "@/lib/types/fees";

type Props = {
  fee: FeePayment;
};
function FeeCard({ fee }: Props) {
  return (
    <div className="group flex flex-col gap-3 items-start justify-center border-[1px] shadow-lg py-5 px-5 rounded-lg hover:bg-slate-600 hover:text-white transition-all cursor-pointer">
      <p className="text-primary font-semibold text-lg">GHS {fee.amountPaid}</p>
      <div className="flex items-center justify-center gap-2 ">
        <p className="text-sm">
          <span className="text-slate-600 group-hover:text-white">Date:</span> {fee.paymentDate}
        </p>
      </div>{" "}
      <p className="text-sm">
        <span className="text-slate-600 group-hover:text-white">Method: </span>
        {fee.paymentMethod}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-slate-600 group-hover:text-white">Remaining Balance</p>
        <p>GHS {fee.remainingBalance}</p>
      </div>{" "}
    </div>
  );
}

export default FeeCard;

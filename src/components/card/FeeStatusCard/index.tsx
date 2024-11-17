import { FeeStatusByClassType } from "@/lib/api/fees";
import Link from "next/link";
type Props = {
  fee: FeeStatusByClassType;
};

function FeeStatusCard({ fee }: Props) {
  return (
    <div className="flex flex-col lg:grid grid-cols-4 gap-1 lg:gap-5 shadow-sm p-5 rounded-md border">
      <div>{fee.student.name}</div>
      <div>
        <span className="lg:hidden text-slate-600">Amount Paid:</span> GHS {fee.totalPaid}
      </div>
      <div>
        <span className="lg:hidden text-slate-600">Remaining Balance:</span> GHS{" "}
        {fee.remainingBalance}
      </div>
      <Link
        href={`/students/${fee.student.id}`}
        className="text-xs text-primary-600">
        View Student
      </Link>
    </div>
  );
}

export default FeeStatusCard;

function FeePaymentGridTitle() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-5 w-full gap-5 items-center justify-center text-sm text-slate-600 px-5">
      <div className="">Amount</div>
      <div>Payment Date</div>
      <div>Student</div>

      <div>Payment Method</div>
      <div>Remaining Balance</div>
    </div>
  );
}

export default FeePaymentGridTitle;

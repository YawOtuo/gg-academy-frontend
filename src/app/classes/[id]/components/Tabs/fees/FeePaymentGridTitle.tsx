function FeePaymentGridTitle() {
  return (
    <div className="hidden lg:grid  lg:grid-cols-7 w-full gap-5 items-center justify-center text-sm text-slate-600 px-5">
      <div className="">Amount</div>
      <div>Payment Date</div>
      <div>Student</div>
      <div>Status</div>
      <div>Payment Method</div>
      <div>Remaining Balance</div>
    </div>
  );
}

export default FeePaymentGridTitle;

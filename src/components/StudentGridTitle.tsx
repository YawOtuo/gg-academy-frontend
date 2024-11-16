function StudentGridTitle() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-5 w-full gap-5 items-center justify-center text-sm text-slate-600 px-5">
      <div className="col-span-2">Name</div>
      <div>Class</div>
      <div>Age</div>
    </div>
  );
}

export default StudentGridTitle;

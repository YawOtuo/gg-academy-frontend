"use client";

import { Student } from "@/lib/types/student";
import { PiStudentBold } from "react-icons/pi";

type Props = {
  student: Student;
};
const StudentListCard = ({ student }: Props) => {
  return (
    <div
      className=" py-3 px-5 grid grid-cols-5
     hover:bg-secondary border-[1px] rounded-md gap-3">
      <div className="h-full rounded-md bg-slate-100 col-span-2 py-10"></div>

      <div className="flex flex-col w-full capitalize h-full col-span-3">
        <p>{student.name}</p>
        <p className="text-xs">Level :{student?.class?.name}</p>
        <p className="text-xs">{student.gender}</p>
      </div>
    </div>
  );
};

export default StudentListCard;

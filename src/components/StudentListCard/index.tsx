"use client";

import { Student } from "@/lib/types/student";
import { PiStudentBold } from "react-icons/pi";

type Props = {
  student: Student;
};
const StudentListCard = ({ student }: Props) => {
  return (
    <div
      className="my-1 p-3 px-6 flex justify-start items-center
     hover:bg-secondary border-[1px] rounded-md">
      <div className="flex gap-5 w-full items-center">
        <PiStudentBold size="20" />

        <div className="flex flex-col w-full capitalize">
          <p>{student.name}</p>
          <p className="text-xs">Level :{student.level}</p>
          <p className="text-xs">{student.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentListCard;

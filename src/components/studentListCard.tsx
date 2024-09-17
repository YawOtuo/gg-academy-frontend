"use client";

import { PiStudentBold } from "react-icons/pi";

type Props = {
  name: string
}
const StudentListCard = ({ name }:  Props) => {
  return (
    <div  className="my-1 p-3 px-6 flex justify-start items-center
     hover:bg-secondary border-[1px] rounded-md">
      <div className="flex gap-5 w-full items-center">
        <PiStudentBold size="20" />

        <div className="w-full">{name}</div>
      </div>
    </div>
  );
};



export default StudentListCard;

"use client";

import { Student } from "@/lib/types/student";
import { PiStudentBold } from "react-icons/pi";
import { FaLayerGroup, FaVenusMars } from "react-icons/fa";

type Props = {
  student: Student;
};

const StudentListCard = ({ student }: Props) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-200 flex items-center gap-6">
      
      {/* Student Icon */}
      <div className="flex-shrink-0 text-primary bg-secondary/10 p-3 rounded-full">
        <PiStudentBold size="28" />
      </div>

      {/* Student Information in a Row */}
      <div className="flex items-center text-gray-800 w-full justify-between">
        
        {/* Student Name */}
        <p className="font-semibold text-base flex-shrink-0">{student.name}</p>
        
        {/* Level */}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <FaLayerGroup className="text-secondary" />
          <span>Level: {student?.class?.name}</span>
        </div>

        {/* Gender */}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <FaVenusMars className="text-secondary" />
          <span>{student.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentListCard;

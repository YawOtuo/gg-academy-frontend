"use client";

import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { motion } from "framer-motion";
import { Student } from "@/lib/types/student";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  student: Student;
};

const StudentCard = ({ student }: Props) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-6 gap-4 shadow-md border rounded-lg w-full overflow-hidden bg-white">
      
      {/* Student Image or Skeleton */}
      <div className="col-span-2 relative h-full w-full">
        {student.image ? (
          <OptimizedImage
            src={student.image}
            className="w-full h-full object-cover rounded-l-lg"
            alt="Student image"
          />
        ) : (
          <Skeleton className="w-full h-full rounded-l-lg" />
        )}
      </div>

      {/* Student Details */}
      <div className="col-span-4 p-4 flex flex-col justify-between h-full">
        <div className="flex flex-col space-y-1">
          <h4 className="text-lg font-semibold text-gray-800 capitalize">{student.name}</h4>
          <p className="text-sm text-gray-600">Age: {student.age}</p>
        </div>

        {/* View Button */}
        <div className="mt-4 flex justify-end">
          <Link href={`/students/${student.id}`}>
            <Button variant="link" className="text-sm flex items-center gap-2 text-primary">
              View
              <MdArrowRightAlt className="text-xl" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentCard;

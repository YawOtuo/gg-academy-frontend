"use client";

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
      className="grid grid-cols-1 lg:grid-cols-5 items-center justify-center gap-1 md:gap-4  border rounded-lg w-full overflow-hidden bg-white px-5 py-1 hover:bg-primary-200 transition-all cursor-pointer hover:shadow-lg hover:scale-[1.01]">
      {/* Student Image or Skeleton */}
      <div className="flex items-center justify-start gap-5 w-full col-span-2">
        <div className=" relative w-12 rounded-full aspect-square ">
          {student.image ? (
            <OptimizedImage
              src={student.image}
              className="w-full h-full object-cover rounded-l-lg aspect-square max-w-[200px]"
              alt="Student image"
            />
          ) : (
            <div className="w-12 aspect-square  bg-slate-50 rounded-full"></div>
          )}
        </div>

        <p className=" font-normal  capitalize">{student.name}</p>
      </div>

      {/* Student Details */}

      <p className=" text-xs capitalize">{student.class?.name}</p>
      <p className=" text-xs capitalize">{student?.age} years</p>
      <div className="mt-4 flex justify start md:justify-end items-center">
        <Link href={`/students/${student.id}`}>
          <Button
            variant="link"
            className="text-sm flex items-center gap-2 text-primary">
            View
            <MdArrowRightAlt className="text-xl" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default StudentCard;

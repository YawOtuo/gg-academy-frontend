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
      className="grid grid-cols-6 items-center gap-5 shadow-sm border-2 rounded-lg w-full">
      {student.image ? (
        <OptimizedImage
          src={student.image}
          className="col-span-2 aspect-[4/3] w-full h-full "
          variant="cover"
          alt="Student image"
        />
      ) : (
        <Skeleton className="col-span-2 w-full h-full" />
      )}
      <div className="col-span-4 items-start gap-1 flex flex-col justify-between w-full h-full capitalize py-3">
        <div className="text-base ">
          {" "}
          <h4>{student.name}</h4>
          <p className="text-sm">{student.age}</p>
          <p className="text-sm">{student.dateOfBirth}</p>
        </div>
        <div className="flex justify-end w-full px-5">
          <Link href={`/students/${student.id}`}>
            <Button
              variant={"link"}
              className="text-xs flex items-center gap-3">
              View
              <MdArrowRightAlt className="text-primary text-2xl" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentCard;

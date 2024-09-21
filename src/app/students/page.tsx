"use client";
import StudentCard from "@/components/StudentCard";
import Search from "@/components/search";
import StudentListCard from "@/components/StudentListCard";
import { styled } from "@stitches/react";
import Link from "next/link";

import FilterNav from "../components/filternav";
import useStudents from "@/lib/hooks/student";
import FetchingState from "@/components/FetchingState";
import SkeletonStudentListCard from "@/components/StudentListCard/SkeleteonStudentListCard";

const Page = () => {
  const { students, studentsLoading, studentsError } = useStudents();

  return (
    <div className="py-10 flex flex-col justify-center items-center px-5 gap-5">
   
      <div className="w-full flex justify-center">
        <FilterNav />
      </div>
      <FetchingState className="flex flex-col gap-2"
        success={students?.map((r, index) => (
          <Link key={index} className="w-full" href={`/students/${r?.id}`}>
            {" "}
            <StudentListCard student={r} />
          </Link>
        ))}
        loading={<SkeletonStudentListCard />}
        skeletonCount={10}
        isLoading={studentsLoading}
        isError={studentsError}
      />
    </div>
  );
};

export default Page;

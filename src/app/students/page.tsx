"use client";
import StudentCard from "@/components/StudentCard";
import Search from "@/components/search";
import { styled } from "@stitches/react";
import Link from "next/link";

import FilterNav from "../components/filternav";
import useStudents from "@/lib/hooks/useStudent";
import FetchingState from "@/components/FetchingState";
import SkeletonStudentCard from "@/components/StudentCard/SkeletonStudentCard";
import StudentGridTitle from "@/components/StudentGridTitle";

const Page = () => {
  const { students, studentsLoading, studentsError } = useStudents();

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-center">
        <FilterNav />
      </div>
      <StudentGridTitle />
      <FetchingState
        className="flex flex-col  gap-5"
        success={students?.map((r, index) => (
          <Link key={index} className="w-full" href={`/students/${r?.id}`}>
            {" "}
            <StudentCard student={r} />
          </Link>
        ))}
        loading={<SkeletonStudentCard />}
        skeletonCount={10}
        isLoading={studentsLoading}
        isError={studentsError}
      />
    </div>
  );
};

export default Page;

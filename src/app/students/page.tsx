"use client";
import StudentCard from "@/components/StudentCard";
import Search from "@/components/search";
import StudentListCard from "@/components/studentListCard";
import Button from "@/ui/button";
import { styled } from "@stitches/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { fetchStudents } from "./api";
import axios from "axios";
import { useAllStudents } from "@/lib/hooks/student.hook";
import Pagination from "./components/pagination";

const Page = () => {
  const { data: students } = useAllStudents();

  return (
    <Root className="py-10 flex flex-col justify-center items-center">
      <div className="flex gap-5 items-center w-full">
        <Search />
        <Button className="flex gap-3 items-center max-h-[45px]">
          <AiOutlinePlusCircle size="30" color="white" />
          New
        </Button>
      </div>
      <div className="w-full flex justify-center">
        <Pagination />
      </div>
      <div className="gap-3 w-full px-5 flex flex-col items-center justify-center mt-10">
        {students?.data.map((r, index) => (
          <Link key={index} className="w-full" href={`/students/${r?.id}`}>
            {" "}
            <StudentListCard name={r?.name} index={r?.id} />
          </Link>
        ))}
      </div>
    </Root>
  );
};

const Root = styled("div", {});

export default Page;

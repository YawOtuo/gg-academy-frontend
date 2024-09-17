"use client";
import StudentCard from "@/components/StudentCard";
import Search from "@/components/search";
import StudentListCard from "@/components/studentListCard";
import { styled } from "@stitches/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { fetchStudents } from "../../lib/api/students";
import axios from "axios";
import { useAllStudents } from "@/lib/hooks/student.hook";
import Pagination from "./components/filternav";
import FilterNav from "./components/filternav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Page = () => {
  const { data: students } = useAllStudents();

  return (
    <div className="py-10 flex flex-col justify-center items-center px-5">
      <div className="flex flex-col gap-5  items-start  w-full">
        <div className="max-w-[700px] w-full">
          {" "}
          <Search />
        </div>

      </div>
      <div className="w-full flex justify-center">
        <FilterNav />
      </div>
      <motion.div layout className="gap-3 w-full px-5 flex flex-col items-center justify-center mt-10">
        {students?.data.map((r, index) => (
          <Link key={index} className="w-full" href={`/students/${r?.id}`}>
            {" "}
            <StudentListCard name={r?.name} index={r?.id} />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};


export default Page;

"use client";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Button from "@/ui/button";
import { styled } from "@stitches/react";
import MainDetails from "../components/mainDetails";
import Details from "../components/details";
import { useStudentById } from "@/lib/hooks/student.hook";
import { useParams } from "next/navigation";

const Page = () => {


  return (
    <div className="px-1 lg:px-5">
      <div className="px-1 lg:px-5 py-10">
        <Details />
      </div>
    </div>
  );
};

export default Page;

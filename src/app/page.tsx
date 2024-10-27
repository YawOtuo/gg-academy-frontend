"use client";

import StudentCard from "@/components/StudentCard";
import CountCard from "@/components/countCard";
import Navbar from "@/components/navbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import RecentlyRegisteredStudents from "./components/RecentlyRegisteredStudents";
import Welcome from "./components/Welcome";
import useStudents from "@/lib/hooks/useStudent";

export default function Home() {
  const {students} = useStudents()
  return (
    <div className="w-full">
      <Navbar />

      <Welcome />

      <div className="w-full flex flex-col md:flex-row flex-wrap pt-5 gap-5 mt-5  items-start">
        <Link href={"/students"} className="w-full md:w-fit">
          <CountCard title="Students" count={students?.length ?? 0} />
        </Link>
        {/* <CountCard title="Teachers" count={40} /> */}
      </div>
      <RecentlyRegisteredStudents />
    </div>
  );
}

"use client";

import StudentCard from "@/components/StudentCard";
import CountCard from "@/components/countCard";
import Navbar from "@/components/navbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import RecentlyRegisteredStudents from "./components/RecentlyRegisteredStudents";

export default function Home() {
  return (
    <div className="w-full py-5">
      <Navbar />

      <div className="w-full flex flex-col md:flex-row flex-wrap pt-5 gap-5 mt-5 px-5 items-start">
        <Link href={"/students"} className="w-full md:w-fit">
          <CountCard title="Students" count={40} />
        </Link>
        <CountCard title="Teachers" count={40} />
      </div>
      <RecentlyRegisteredStudents />
    </div>
  );
}

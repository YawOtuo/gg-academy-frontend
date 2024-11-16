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
import useClass from "@/lib/hooks/useClass";

export default function Home() {
  const { students } = useStudents();
  const { classes } = useClass();
  return (
    <div className="w-full flex flex-col gap-5 items-start">
      <Navbar />

      <Welcome />

      <div className="flex flex-col md:flex-row gap-3 items-start">
        <Link href={"/students"} className="w-full md:w-fit">
          <CountCard title="Students" count={students?.length ?? 0} />
        </Link>

        <Link href={"/classes"} className="w-full md:w-fit">
          <CountCard title="Classes" count={classes?.length ?? 0} />
        </Link>
      </div>
      {/* <CountCard title="Teachers" count={40} /> */}
      <RecentlyRegisteredStudents />
    </div>
  );
}

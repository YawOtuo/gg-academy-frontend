"use client";

import StudentCard from "@/components/StudentCard";
import CountCard from "@/components/countCard";
import Navbar from "@/components/navbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { students } from "./api";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full py-5">
      <Navbar />

      <div className="w-full flex flex-col md:flex-row flex-wrap pt-5 gap-5 mt-5 px-5 items-start">
        <Link href={"/students"} className="w-full md:w-fit" >
          <CountCard title="Students" count={40} />
        </Link>
        <CountCard title="Teachers" count={40} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5 mt-10 px-5">
        {/* <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}> */}
          {students.map((r, index) => (
            // <SwiperSlide key={index}>
              <StudentCard name={r["name"]} picture={r["picture"]} />
            // </SwiperSlide>
          ))}
        {/* </Swiper> */}
      </div>
    </div>
  );
}

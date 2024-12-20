import React from "react";
import { MobileMenuDetails } from "./MobileMenuDetails";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useDashboardMobileStore } from "./useDashboardMobileNavStore";

const MobileMenuArea = (props: any) => {
  const { setDashboardMobileMenu } = useDashboardMobileStore();
  0;
  return (
    <div className={"flex flex-col "}>
      <div className="flex flex-col lg:gap-10">
        <div className={"flex items-center px-8 "}>
          <div
            className={"flex w-full flex-row items-center justify-between  "}>
            <Link href={"/"} className="w-full">
              <div className="relative w-full">
                {" "}
               <p className="text-white font-bold">GENIE GEM ACADEMY<span className="text-primary">ly</span></p>
              </div>
            </Link>
            <button className="relative transition-transform duration-300 hover:rotate-[360deg] lg:right-10">
              <AiFillCloseCircle
                onClick={() => setDashboardMobileMenu(false)}
                color="white"
                size={30}
              />
            </button>
          </div>
        </div>
        <div className={"mt-16"}>
          <MobileMenuDetails />
        </div>
      </div>
    </div>
  );
};

export default MobileMenuArea;

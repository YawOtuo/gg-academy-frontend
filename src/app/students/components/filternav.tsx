"use client";

import { styled } from "@stitches/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { AiOutlineAppstoreAdd, AiOutlinePlusCircle } from "react-icons/ai";
import { Button } from "@/components/ui/button";

const FilterNav = () => {
  const [active, setActive] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the router is ready before accessing its properties
    if (pathname) {
      console.log(pathname);
      const currentURL = pathname; // Use router.asPath to get the current URL

      if (currentURL.includes("settings")) {
        setActive("settings");
      } else {
        setActive("not");
      }
    }
  }, [pathname]);
  return (
    <div className="flex gap-7  w-full items-start">
      <div className="flex gap-3 w-full h-full">
        <Link href={"/"}>
          <Button>
            <MdKeyboardArrowLeft size={24} />
          </Button>
        </Link>
        <Link href={"/students/new"}>
          <Button className="flex gap-3 items-center ">
            <AiOutlinePlusCircle size="20" />
            Add
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FilterNav;

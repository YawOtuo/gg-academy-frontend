"use client";

import { styled } from "@stitches/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { DiGhostSmall } from "react-icons/di";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const Pagination = () => {
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
    <Root className="flex gap-7 items-center">
      <Link
        href={"/"}
        className="w-full md:max-w-[83px] min-w-[70px]
                max-w-[52px] aspect-square bg-[#E4A951] rounded-full flex
                items-center justify-center hover:scale-[1.02]">
        <MdKeyboardArrowLeft color="white" size={24} />
      </Link>

      <div className="flex gap-8 w-full h-full">
        <PgItem 
        >
          <DiGhostSmall width="24" height={"24"} />
          <p>All</p>
        </PgItem>
        <Link href="/students/new">
          <PgItem
            type={active == "settings" ? "active" : ""}
            >
            <AiOutlineAppstoreAdd
              size="24"
              color={active == "settings" ? "white" : "#B0B0B0"}
            />
            <p>Add</p>
          </PgItem>
        </Link>
      </div>

    </Root>
  );
};

const Root = styled("div", {
  borderBottom:"1px solid #D9D9D9",
  paddingInline: "3rem",
  paddingBlock: "1rem",
  width:"fit-content",

  "@media screen and (max-width:768px)": {
    width:"100%",
  },
});

const PgItem = styled("button", {
  display: "flex",
  minWidth: "123px",
  minHeight: "67px",
  flexDirection: "column",
  paddingBlock: "0.875rem",
  paddingInline: "1rem",
  color: "#B0B0B0",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
  fontWeight: "600",
  gap: "0.775rem",
  borderRadius: "0.75rem",

  "@media screen and (max-width:768px)": {
    flexDirection: "row",
    maxHeight: "52px",
    maxWidth: "155px",
    minHeight: "40px",
    minWidth:"100px",
  },

  "&:hover": {
    backgroundColor: "#8a8a8a25",
    color: "#E4A951",
    scale: "1.05",
  },

  variants: {
    type: {
      active: {
        backgroundColor: "#396261",
        color: "white",
      },
    },
  },
});
export default Pagination;

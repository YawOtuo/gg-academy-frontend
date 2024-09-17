"use client";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Button from "@/ui/button";
import { styled } from "@stitches/react";
import MainDetails from "../components/mainDetails";
import Details from "../components/details";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="px-5 ">
      <div className="grid grid-cols-2 lg:grid-cols-3 mb-10 mt-5  items-start justify-center p-5 border-b-[#D9D9D9] border-b">
        <div className="col-span-2 lg:col-span-1">
          <MainDetails />
        </div>
        <div className="col-span-2 flex flex-col gap-2 ">
          <div className="flex">
            <div>
              <Link href={"/students/1"}>
                <Navigation>Details</Navigation>
              </Link>
            </div>
            <div>
              <Link href={"/students/1/fees"}>
                <Navigation>Fees</Navigation>
              </Link>
            </div>
            <div>
              <Link href={"/students/1"}>
                <Navigation>Others</Navigation>
              </Link>
            </div>
          </div>
          <div className="px-5 py-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Navigation = styled("button", {
  paddingInline: "1rem",
  paddingBlock: "0.5rem",
  minWidth: "200px",
  "&:hover": {
    backgroundColor: "$yellow100",
    borderBottom: "2px solid grey",
  },
  variants: {
    type: {
      active: {
        borderBottom: "2px solid grey",
      },
    },
  },
});
export default Layout;

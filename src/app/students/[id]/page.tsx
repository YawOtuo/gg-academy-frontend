"use client";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { styled } from "@stitches/react";
import MainDetails from "./components/mainDetails";
import Details from "./components/details";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";
import CustomTabs from "@/components/ui/CustomTabs";
import Fees from "./components/fees";
import { toast } from "@/hooks/use-toast";

const tabs = [
  {
    value: "Details",
    label: "Details",
    content: <Details />,
  },
  {
    value: "Fees",
    label: "Fees",
    content: <Fees />,
  },
  // {
  //   value: "profile",
  //   label: "Profile",
  //   content: "Update your profile information here.",
  // },
];

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5 ">
      <div className="flex flex-col gap-10 mb-10 mt-5  items-start justify-center p-5  ">
        <div className="w-full">
          <MainDetails />

        </div>
        <div className=" flex flex-col gap-2 w-full">
          <CustomTabs tabs={tabs} defaultValue="Details" />
        </div>
      </div>
    </div>
  );
};

export default Page;

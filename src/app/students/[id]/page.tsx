"use client";
import MainDetails from "./components/mainDetails";
import Details from "./components/details";

import CustomTabs from "@/components/ui/CustomTabs";
import Fees from "./components/fees";

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

const Page = () => {
  return (
    <div className="px-5 ">
      <div className="flex flex-col gap-10 mb-10 mt-5  items-start justify-center py-5  ">
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

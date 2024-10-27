"use client";
import MainDetails from "./components/mainDetails";
import Details from "./components/details";

import CustomTabs from "@/components/ui/CustomTabs";
import Fees from "./components/fees";
import BackButton from "@/components/ui/BackButton";

type Props = {
  params: {
    id: number;
  };
};
const Page = ({ params }: Props) => {
  const tabs = [
    {
      value: "Details",
      label: "Details",
      content: <Details />,
    },
    {
      value: "Fees",
      label: "Fees",
      content: <Fees id={params.id} />,
    },
    // {
    //   value: "profile",
    //   label: "Profile",
    //   content: "Update your profile information here.",
    // },
  ];
  return (
    <div className="">
      <BackButton />
      <div className="flex flex-col gap-5 mb-10 m items-start justify-center py-5  ">
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

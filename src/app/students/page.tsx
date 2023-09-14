import StudentCard from "@/components/StudentCard";
import Search from "@/components/search";
import StudentListCard from "@/components/studentListCard";
import Button from "@/ui/button";
import { styled } from "@stitches/react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Page = () => {
  return (
    <Root className="py-20 flex flex-col justify-center items-center">
      <div className="flex gap-5 items-center">
        <Search />
        <Button className="flex gap-3 items-center ">
          <AiOutlinePlusCircle size="30" color="#E4A951"/>
          New
        </Button>
      </div>
      <div className="gap-3 w-full px-5 flex flex-wrap items-center justify-center mt-10">
        {Array.from({ length: 15 }).map((r, index) => (
          <Link key={index} className="" href={`/students/${index}`}>
            {" "}
            <StudentListCard name="Kojo" />
          </Link>
        ))}
      </div>
    </Root>
  );
};

const Root = styled("div", {});

export default Page;

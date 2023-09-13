import StudentCard from "@/components/StudentCard";
import Search from "@/components/search";
import StudentListCard from "@/components/studentListCard";
import { styled } from "@stitches/react";
import Link from "next/link";

const Page = () => {
  return (
    <Root className="py-5 flex flex-col justify-center items-center">
      <Search />

      <div className="gap-3 w-full px-5 flex flex-col items-center justify-center pt-5">
        {Array.from({ length: 15 }).map((r, index) => (
          <Link key={index} 
          className="w-full"
          href={`/students/${index}`}>
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

"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../ui/input";
import { useSearch } from "./useSearch";
import FetchingState from "../FetchingState";
import StudentCard from "../StudentCard";
import SkeletonStudentCard from "../StudentCard/SkeletonStudentCard";

const Search = () => {
  const { query, handleInputChange, students, isLoading } = useSearch();
  return (
    <div className="flex relative  w-full  justify-center flex-col gap-5 items-start">
      <div className="relative w-full max-w-sm">
        <Input
          type="text"
          className="w-full font-semibold  "
          placeholder="Enter Student's  name"
          value={query}
          onChange={handleInputChange}
        />
        <div className="absolute right-[10px] flex items-center bottom-2">
          <AiOutlineSearch className="text-primary text-xl" />
        </div>
      </div>
      <FetchingState
        className="flex flex-col gap-5"
        isLoading={isLoading}
        isError={false}
        success={students?.map((r) => (
          <StudentCard key={r.id} student={r} />
        ))}
        loading={<SkeletonStudentCard />}
        skeletonCount={5}
      />
    </div>
  );
};

export default Search;

"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="flex relative items-center w-full justify-center">
      <Input type="text" className="w-full" />
      <div className="absolute right-[10px] flex items-center">
        <AiOutlineSearch className="text-primary text-xl" />
      </div>
    </div>
  );
};

export default Search;

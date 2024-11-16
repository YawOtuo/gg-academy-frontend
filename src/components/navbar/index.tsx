"use client";

import Search from "../search";
import { IoMdNotifications, IoMdPerson } from "react-icons/io";
import { styled } from "@stitches/react";
import SideNav from "../sideNav";
import Hamburger from "@/app/Hamburger";

const Navbar = () => {
  return (
    <Root className="flex justify-between items-start w-full gap-3">
      <Hamburger />

      {/* <h1 className="text-lg text-brand">Dashboard</h1> */}
      <div className="flex justify-around gap-10 items-center w-full">
        <Search />
        {/* <IoMdNotifications className="text-primary" size={30} /> */}
        <div className="flex items-center">
          <IoMdPerson className="text-primary" size={30} />
          Username
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  paddingInline: "1rem",
});
export default Navbar;

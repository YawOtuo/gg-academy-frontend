"use client";
import { styled } from "../../../stiches.config";
import { BiWorld } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { GiHamburgerMenu, GiTeacher } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { byellow } from "@/assets/colors";
import { useState } from "react";

const SideNav = () => {
  return (
    <Root className={`flex flex-col  gap-4 h-full`}>
      <GText>
        GENIE GEM
        
      </GText>
      <div className="gap-6 flex flex-col">
        <NavItem>
          <BiWorld color={byellow} />
          Dashboard
        </NavItem>
        <NavItem>
          <PiStudentBold color={byellow} /> Students
        </NavItem>
        <NavItem>
          {" "}
          <GiTeacher color={byellow} /> Teachers
        </NavItem>
        <NavItem>
          {" "}
          <MdOutlineAccountCircle color={byellow} /> Account
        </NavItem>
        <NavItem>
          {" "}
          <IoMdNotifications color={byellow} /> Notifications
        </NavItem>
      </div>
    </Root>
  );
};

export default SideNav;

const Root = styled("div", {
  paddingInline: "1rem",
  backgroundColor: "$yellow100",
  paddingBlock: "2rem",

  "@media screen and (max-width:768px)": {
    // display:"none",
    width: "100%",
    position: "relative",
    justifyContent: "start",
    minWidth: "300px",
    transition:"ease-in-out",
  },
});

const NavItem = styled("div", {
  minHeight: "40px",
  maxHeight: "50px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const GText = styled("h1", {
  color: "$yellow900",
  fontWeight: "600",
  fontSize: "2rem",
});

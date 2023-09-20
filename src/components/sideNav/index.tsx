"use client";
import { styled } from "../../../stiches.config";
import { BiWorld } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { GiHamburgerMenu, GiTeacher } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { byellow } from "@/assets/colors";
import { useState } from "react";
import Link from "next/link";

const SideNav = (props) => {
  return (
    <Root className={`flex flex-col items-center gap-4 h-full  ${props.display ? " md:flex flex-col w-[300px] "  : " w-0 md:min-w-[300px]"} ease-in-out  duration-[1000ms] transition-[width]  h-full z-[99]`}>
      <GText>
       <Link href="/"> GENIE GEM</Link>
        
      </GText>
      <div className="gap-6 flex flex-col max-w-[90%]">
          <Link href={'/'}  >
            <NavItem>
              <BiWorld color={byellow} />
              Dashboard
            </NavItem>
          </Link>
         <Link href={'/students'}> <NavItem><PiStudentBold color={byellow} /> Students</NavItem></Link>
          {" "}
         <Link href={'/'} > <NavItem><GiTeacher color={byellow} /> Teachers</NavItem></Link>
          {" "}
          <Link href={'/'} ><NavItem><MdOutlineAccountCircle color={byellow} /> Account</NavItem></Link>
          {" "}
          <Link href={'/'} ><NavItem><IoMdNotifications color={byellow} /> Notifications</NavItem></Link>
      </div>
    </Root>
  );
};

export default SideNav;

const Root = styled("div", {
  paddingInline: "1rem",
  backgroundColor: "$yellow100",
  paddingBlock: "2rem",
  minHeight:"100vh",
  height:"100%",
  overflow:"hidden",
  

  "@media screen and (max-width:768px)": {
    // display:"none",

    paddingInline:"0rem",
    justifyContent: "start",
    // transition:"ease-in-out",
    zIndex:"999",
  },
});

const NavItem = styled("button", {
  minHeight: "40px",
  maxHeight: "50px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  width:"100%",


  "&:hover":{
    backgroundColor:"$yellow100",
    borderRight:"3px solid $yellow900"
  }
});

const GText = styled("button", {
  color: "$yellow900",
  fontWeight: "600",
  fontSize: "2rem",
});

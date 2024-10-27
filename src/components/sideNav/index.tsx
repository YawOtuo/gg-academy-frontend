"use client";
import { styled } from "../../../stiches.config";
import { BiWorld } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { GiHamburgerMenu, GiTeacher } from "react-icons/gi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  url: string;
};

const NavItem = ({ icon, label, url }: NavItemProps) => (
  <Link href={url}>
    <motion.div
      className="flex items-center gap-2 py-2
    text-base px-3 rounded-md border-2 hover:border-primary
    "
      whileHover={{
        scale: 1.03,
        borderWidth: "2px",
      }}>
      {icon}
      <p className="text-base"> {label}</p>
    </motion.div>
  </Link>
);

// Store the nav items in a JSON array
const navItems = [
  {
    icon: <BiWorld className="text-primary" />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <PiStudentBold className="text-primary" />,
    label: "Students",
    url: "/students",
  },
  // {
  //   icon: <GiTeacher className="text-primary" />,
  //   label: "Teachers",
  //   url: "/teachers",
  // },
  {
    icon: <MdOutlineAccountCircle className="text-primary" />,
    label: "Account",
    url: "/account",
  },
  {
    icon: <IoMdNotifications className="text-primary" />,
    label: "Notifications",
    url: "/notifications",
  },
];

const SideNav = () => {
  return (
    <div
      className={`flex flex-col items-center gap-4 h-screen sticky top-0 ease-in-out duration-[1000ms]  bg-yellow-50 px-5 py-5`}>
      <Link href="/" className="w-full  text-2xl font-semibold text-primary">
        Genie Gem
      </Link>
      <div className="gap-3 flex flex-col w-full">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNav;

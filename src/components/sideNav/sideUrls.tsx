import { BiWorld } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { MdClass, MdOutlineAccountCircle } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export const navItems = [
    {
      icon: <BiWorld  />,
      label: "Dashboard",
      url: "/",
    },
    {
      icon: <PiStudentBold  />,
      label: "Students",
      url: "/students",
    },
    {
      icon: <MdClass  />,
      label: "Classes",
      url: "/classes",
    },
    {
      icon: <MdOutlineAccountCircle  />,
      label: "Account",
      url: "/account",
    },
    {
      icon: <IoMdNotifications  />,
      label: "Notifications",
      url: "/notifications",
    },
  ];
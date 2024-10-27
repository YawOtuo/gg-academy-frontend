"use client";

import { useDashboardMobileStore } from "@/components/DashboardMobileNavbar/components/useDashboardMobileNavStore";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMenu } from "react-icons/md";

function Hamburger() {
  const { setDashboardMobileMenu } = useDashboardMobileStore();
  return (
      <button
        className="absolute top-1 right-5 md:hidden z-[500]"
        onClick={() => setDashboardMobileMenu(true)}>
        <MdMenu size={40} className="text-primary" />
      </button>
  );
}

export default Hamburger;

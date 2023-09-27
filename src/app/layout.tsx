"use client";

import SideNav from "@/components/sideNav";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { byellow } from "@/assets/colors";
import Providers from "@/utils/provider";
// import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [display, setDisplay] = useState(false);

  useEffect(()=>{
    if(window.screen.width > 768){
      setDisplay(true)
    }
  },[window.screen.width])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen max-w-[1728px] overflow-hidden ">
            <button
              className="absolute top-1 left-1 md:hidden z-[500]"
              onClick={(e) => setDisplay(!display)}>
              <GiHamburgerMenu size={40} color={byellow} />
            </button>
            <div className="w-full max-w-[300px]">
              <SideNav display={display} />
            </div>

            <div className=" md:w-4/5">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

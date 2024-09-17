import SideNav from "@/components/sideNav";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "swiper/css/bundle";
import { GiHamburgerMenu } from "react-icons/gi";
import { byellow } from "@/assets/colors";
import Providers from "@/utils/provider";
// import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenieGem",
  description: "Education",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  authors: [
    {
      name: "YawOtuo",
      url: "https://www.linkedin.com/in/yaw-otuo/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icon512_rounded.png" },
    { rel: "icon", url: "icon512_rounded.png" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen max-w-[1728px] overflow-hidden ">
            <button className="absolute top-1 left-1 md:hidden z-[500]">
              <GiHamburgerMenu size={40} color={byellow} />
            </button>
            <div className="w-full max-w-[300px]">
              {/* <SideNav display={display} /> */}
            </div>

            <div className=" md:w-4/5">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

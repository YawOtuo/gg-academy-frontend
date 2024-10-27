import SideNav from "@/components/sideNav";
import "./globals.css";
import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import "swiper/css/bundle";
import { GiHamburgerMenu } from "react-icons/gi";
import Providers from "@/lib/utils/provider";
import { Toaster } from "@/components/ui/toaster";
// import { useState } from "react";
const inter = Open_Sans({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";
import DashboardMobileMenuWrapper from "@/components/DashboardMobileNavbar/DashboardMobileMenuWrapper";
import Hamburger from "./Hamburger";

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
    { rel: "apple-touch-icon", url: "/icon512_rounded.png" },
    { rel: "icon", url: "/icon512_rounded.png" },
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
          <DashboardMobileMenuWrapper>
            <div className="flex min-h-screen max-w-[1728px] overflow-hidden ">
              <Hamburger />
              <div className="w-full max-w-[300px] hidden lg:block">
                <SideNav />
              </div>

              <div className=" w-full lg:w-4/5 p-5">{children}</div>
              {/* <LoadingIndicator /> */}
              <NextTopLoader color="#E4A951" />

              <Toaster />
            </div>
          </DashboardMobileMenuWrapper>
        </Providers>
      </body>
    </html>
  );
}

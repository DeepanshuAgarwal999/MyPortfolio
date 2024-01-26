"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/SideBarLinks";
import { Button } from "@/components/ui/button";
import BgEffect from "@/components/BgEffect";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="h-full flex flex-col gap-6 pt-16">
      {sidebarLinks?.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? " text-white rounded-3xl"
                  : "text-gray-400 hover:text-white hover:bg-slate-900 rounded-3xl"
              } flex justify-start items-center gap-4 bg-transparent p-4`}
              style={{ backgroundColor: isActive ? "#818CF8" : "" }}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`invert`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};
const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/leftbaricons/hamburger.png"
            width={30}
            height={30}
            alt="Menu"
            className="invert sm:hidden cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-[#000000] text-white border-none"
        >
          <Link href="/">
            <p className="font-semibold text-2xl pt-5 ml-4 font-spaceGrotesk   ">
              Deepanshu <span className="text-primary-500">Agarwal</span>
            </p>
          </Link>
          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
            <>
              <div className="flex gap-3 flex-col pt-10">
                <SheetClose asChild>
                  <Link href="/skills">
                    <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full">
                      <span className="primary-text-gradient">Skills</span>
                    </button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/connect">
                    <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full">
                      Connect with Me
                    </button>
                  </Link>
                </SheetClose>
                <BgEffect />
              </div>
            </>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/SideBarLinks";
import BgEffect from "../BgEffect";
const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36  max-sm:hidden lg:w-[266px] text-white">
      <div className=" flex flex-1 flex-col gap-6 ">
        {sidebarLinks?.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? " text-white bg-[#7f8cff] rounded-3xl"
                  : "text-gray-400 hover:text-white hover:bg-slate-900 rounded-3xl"
              } flex justify-start items-center gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={26}
                height={26}
                className="invert"
              />
              <p
                className={`${
                  isActive ? "font-semibold" : "font-normal"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center flex-col items-center pt-5 gap-3">
        <Link href={"/skills"} className="w-full">
          <button className="xl:hidden rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full">
            skills
          </button>
        </Link>
        <Link href="/" className="w-full">
          <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full">
            Socials
          </button>
        </Link>
      </div>
      <BgEffect />
    </section>
  );
};

export default LeftSidebar;

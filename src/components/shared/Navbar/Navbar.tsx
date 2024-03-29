import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#111828] fixed z-50 w-full gap-5 p-6 shadow-light-300  sm:px-12 border-b border-[#202020]">
      <Link
        href="/"
        className="flex sm:flex-row flex-col gap-x-1  items-center"
      >
        <p className="text-white text-xl sm:text-3xl sm:font-semibold">
          Deepanshu
        </p>
        <p className="text-white text-xl sm:text-3xl sm:font-semibold max-sm:self-start">
          Agarwal
        </p>
      </Link>
      <div className="flex-between gap-5">
        <MobileNav />
      </div>
      <Link href="/connect" className="max-sm:hidden ">
        <button
          type="button"
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 "
        >
          Connect with Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;

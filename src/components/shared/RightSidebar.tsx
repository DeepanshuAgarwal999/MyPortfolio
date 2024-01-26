"use client";
import React from "react";
import Image from "next/image";
import { Skills } from "@/constants/SideBarLinks";
import BgEffect from "../BgEffect";
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 max-xl:hidden w-[200px] text-white">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Skills & Expertise</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px] overflow-y-auto no-scrollbar h-[300px]">
          {Skills?.map((skill) => (
            <div
              key={skill._id}
              className="flex cursor-pointer items-center justify-between gap-2 "
            >
              <p className="">{skill.name}</p>
              <Image
                src={`${skill.logo}`}
                alt="skill logo"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
      
      <BgEffect />
    </section>
  );
};

export default RightSidebar;

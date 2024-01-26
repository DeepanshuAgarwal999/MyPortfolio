import Image from "next/image";
import React from "react";

interface Props {
  color: string;
  title: string;
  imgUrl: string;
}

const Badge = ({ color = "red", title, imgUrl }: Props) => {
  console.log(color);

  return (
      <div
        className={`flex h-[40px] w-[155px]  justify-center items-center gap-x-1.5 rounded-md bg-[red]/10 px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-blue-400/30`}
      >
        <Image src={imgUrl} width={20} height={20} alt="skill logo" />
        <span
          style={{ color: color, opacity: 0.8 }}
          className="font-semibold text-xs"
        >
          {title}
        </span>
      </div>
  );
};

export default Badge;

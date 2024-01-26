import Image from "next/image";
import React from "react";

const SkillCard = ({ logo, title }) => {
  return (
      <div className="bg-white/5 p-6 sm:p-10 flex items-center justify-between">
        <Image src={logo} alt="logo" width={30} height={30}/>
        <p className="text-xl text-white font-semibold text-nowrap">{title}</p>
      </div>
  );
};

export default SkillCard;

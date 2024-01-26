import BgEffect from "@/components/BgEffect";


import React from "react";

const Education = () => {
  return (
    <section className="py-28 px-16 relative isolate">
      <div className="bg-[#000000]/120 text-white/90 ring-1 ring-inset ring-gray-400/30 p-10">
        <h1 className="text-indigo-600 text-3xl font-semibold">Education</h1>
        <div>
          <h2 className="font-semibold text-xl mt-4">
            Bachelor of Technology (B.Tech)
          </h2>
          <p className="text-lg mt-2">
            Currently Pursuing From - KIET Group of Institutions, MuradNagar
          </p>
          <p className="mt-2 font-semibold">
            Year of Admission: 2021 Expected Graduation: 2025
          </p>
          <p className="text-lg mt-5 leading-8">
            I am currently in the third year of my Bachelor's in Technology
            (B.Tech) program at
            <span className="font-semibold border-b pb-1 ml-1">
              KIET Group of Institutions
            </span>
            . This esteemed institution has provided me with a comprehensive and
            rigorous education in the field of
            <span className="font-semibold border-b pb-1 ml-1">
              Information Technology
            </span>
            , equipping me with the knowledge and skills necessary for a
            successful career in technology.
          </p>
          <h1 className="font-semibold text-xl mt-10">
            Higher Secondary Education
          </h1>
          <h2 className="mt-2 text-lg"> Class 12 (Senior Secondary)</h2>
          <p className="italic text-gray-500 font-semibold">
            Dehradun Public School
          </p>
          <ul className="mt-4">
            <li>Year of Passing: 2021</li>
            <li> Percentage: 85.6%</li>
          </ul>
          <h1 className="font-semibold text-xl mt-6">Secondary Education</h1>
          <h2 className="mt-2 text-lg">Class 10 (Secondary) </h2>
          <p className="italic text-gray-500 font-semibold">
            Dehradun Public School
          </p>
          <ul className="mt-4">
            <li>Year of Passing: 2019</li>
            <li> Percentage: 87.4%</li>
          </ul>
        </div>
        <BgEffect />
      </div>
    </section>
  );
};

export default Education;

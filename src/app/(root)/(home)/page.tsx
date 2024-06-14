import BgEffect from "@/components/BgEffect";
import React from "react";
import TextAnimation from "./components/TextAnimation";
import Image from "next/image";
import profileImg from '../../../../public/assets/images/profile.jpeg'

const HomePage = () => {
  return (
    <div className="bg-black">
      {/* Header */}

      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 pb-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center">
            <h2 className="text-3xl font-bold text-indigo-400 sm:text-5xl  tracking-wide sm:!leading-[3.75rem]">
              A Passionate Full Stack Developer
              <span className="text-[#53ec86] ml-2">|</span>
              <span className="text-indigo-300 ml-2">Bridging Code and Creativity</span>{" "}
              {/* <span className="text-[#53ec86] ml-2">Grow </span>Their Products */}
            </h2>
          </div>

          {/* CTA section */}
          <div className="relative isolate -z-10 mt-14  overflow-y-hidden">
            <div className="mx-auto w-full">
              <div className="mx-auto flex w-full justify-between flex-col gap-8 bg-white/5 px-4 py-14 ring-1 ring-white/10 sm:rounded-3xl sm:p-6 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-12">
                <div className="w-full flex-auto">
                  <h1 className="text-3xl font-semibold tracking-tight text-white ">Hi 👋 there,</h1>
                  <h2 className="text-3xl font-semibold tracking-tight text-white mt-4">
                    <span className="text-indigo-500"> I am</span>&nbsp;
                    <TextAnimation />
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    “I am a full-stack web developer with experience in
                    third-party open-source platforms like Appwrite. I am
                    proficient in front-end technologies like HTML, CSS,
                    JavaScript, and React. I am also skilled in back-end
                    technologies like Node.js, Express.js, and MongoDB. I am
                    passionate about building robust and user-friendly web
                    applications.”
                  </p>
                </div>
                <Image
                  className="h-96 max-lg:hidden  w-full flex-none rounded-full object-cover shadow-xl lg:aspect-square  lg:max-w-sm"
                  src={profileImg}
                  alt=""
                  height={260}
                  width={260}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
        <BgEffect />
      </main>
    </div>
  );
};

export default HomePage;

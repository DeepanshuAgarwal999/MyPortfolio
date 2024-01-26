import React from "react";

const AboutMe = () => {
  return (
    <div className=" px-6 py-36 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-300">
        <h1 className="text-2xl sm:text-2xl font-semibold leading-8 text-indigo-600">
          About Me
        </h1>
        <p className="mt-4 text-lg tracking-tight text-white/90 sm:text-xl">
          Hello there! I&apos;m Deepanshu Agarwal, a passionate and results-driven
          Full Stack Web Developer with a keen interest in creating dynamic and
          user-friendly websites. I try to bring a unique blend of technical
          skills and creative thinking to every project I undertake.
        </p>
        <h1 className="mt-6 text-xl font-semibold tracking-tight text-indigo-400 sm:text-2xl text-center">
          How I get into this
        </h1>
        <p className="mt-2 text-lg leading-8">
          My journey into the world of web development began in the second year
          of my college when I was tasked with creating a project centered
          around web development. Little did I know that this assignment would
          ignite a spark within me and set me on a path of exploration and
          creativity.
        </p>
        <h1 className="mt-6 text-xl font-semibold tracking-tight text-indigo-500 sm:text-2xl text-center">
          Technical Expertise
        </h1>
        <p className="mt-2 text-lg leading-8">
          As a Full Stack Web Developer, I specialize in both front-end and
          back-end technologies. On the front-end, I excel in crafting
          responsive and intuitive user interfaces using HTML, CSS, and
          JavaScript. I have hands-on experience with popular front-end
          libraries and frameworks such as React.js and Next js.
          <span className="inline-block mt-2">
            On the <span className="font-semibold">back-end</span>, I leverage
            my skills in designing robust and scalable server-side architecture.
            My toolkit includes languages like Node.js, and Java, coupled with
            frameworks such as Express.js,Nest js. I&apose;m well-versed in working
            with databases like MongoDB, MySQL, and PostgreSQL, ensuring
            seamless data management.
          </span>
        </p>
        <h1 className="mt-6 text-xl font-semibold tracking-tight text-indigo-600 sm:text-2xl text-center">
          Continuous Learning
        </h1>
        <p className="mt-2 text-lg leading-8">
          The ever-changing landscape of web development keeps me on my toes. I
          am dedicated to continuous learning, always exploring new
          technologies, tools, and best practices to stay ahead of the curve and
          bring fresh perspectives to my projects.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

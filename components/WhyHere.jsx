import React from "react";
import { LuCircleDollarSign } from "react-icons/lu";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { PiUsersFour } from "react-icons/pi";

const WhyHere = () => {
  const whyhere = [
    {
      name: "Maximum Visibility",
      desc: "Get your startup in front of thousands of potential customers, investors, and partners.",
      icon: <AiOutlineExpandAlt />,
    },
    {
      name: "Targeted Audience",
      desc: "Reach an audience of tech-savvy individuals actively looking for innovative solutions.",
      icon: <PiUsersFour />,
    },
    {
      name: "Affordable Exposure",
      desc: "Get premium exposure for your startup at a fraction of the cost of traditional advertising.",
      icon: <LuCircleDollarSign />,
    },
  ];

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start lg:container w-[95vw] gap-7">
        <h2 className="text-4xl font-medium text-center self-center">
          Why Showcase Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5">
          {whyhere.map((why, index) => (
            <div
              className="flex flex-col justify-start items-start w-full rounded-lg bg-zinc-900 shadow-md p-5 gap-1 border-[3px] border-zinc-700 hover:border-orange-400 transition duration-500 ease-in-out cursor-pointer"
              key={index}
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-orange-400 to-cyan-400 text-slate-50 rounded-md p-2 text-2xl">
                {why.icon}
              </div>
              <h3 className="text-2xl font-medium mt-1">{why.name}</h3>
              <p className="text-lg">{why.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHere;

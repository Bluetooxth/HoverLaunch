import React from "react";
import { FiZap } from "react-icons/fi";
import { FaSearchengin } from "react-icons/fa";
import { GrCursor } from "react-icons/gr";

const HowItWorks = () => {
  const howworks = [
    {
      name: "Reserve Your Spot",
      desc: "Choose an available slot in our grid to showcase your startup's logo or icon.",
      icon: <FaSearchengin />,
    },
    {
      name: "Engage Users",
      desc: "Users hover over your icon to see your startup's name and click to visit your website.",
      icon: <GrCursor />,
    },
    {
      name: "Grow Your Business",
      desc: "Gain exposure, attract potential customers, and connect with other innovators in the tech space.",
      icon: <FiZap />,
    },
  ];

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start lg:container w-[95vw] gap-7">
        <h2 className="text-4xl font-medium text-center self-center">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5">
          {howworks.map((howwork, index) => (
            <div
              className="flex flex-col justify-start items-start w-full rounded-lg bg-zinc-900 shadow-md p-5 gap-1 border-[3px] border-zinc-700 hover:border-orange-400 transition duration-500 ease-in-out cursor-pointer"
              key={index}
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-orange-400 to-cyan-400 text-slate-50 rounded-md p-2 text-2xl">
                {howwork.icon}
              </div>
              <h3 className="text-2xl font-medium mt-1">{howwork.name}</h3>
              <p className="text-lg">{howwork.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

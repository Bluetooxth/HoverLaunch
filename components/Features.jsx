import React from "react";
import { FiZap } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrDocumentPerformance } from "react-icons/gr";

const Features = () => {
  const features = [
    {
      name: "Global Exposure",
      desc: "Showcase your startup to a worldwide audience of potential customers and investors.",
      icon: <AiOutlineGlobal />,
    },
    {
      name: "Performance Metrics",
      desc: "Access detailed analytics on views, clicks, and engagement with your startup's listing.",
      icon: <GrDocumentPerformance />,
    },
    {
      name: "Instant Traffic",
      desc: "Drive immediate traffic to your website with a single click from interested visitors.",
      icon: <FiZap />,
    },
  ];

  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-start lg:container w-[95vw] gap-7">
        <h2 className="text-4xl font-medium text-center self-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5">
          {features.map((feature, index) => (
            <div
              className="flex flex-col justify-start items-start w-full rounded-lg bg-zinc-800 shadow-md p-5 gap-1 border-[3px] border-transparent hover:border-orange-400 transition duration-500 ease-in-out cursor-pointer"
              key={index}
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-orange-400 to-cyan-400 text-slate-50 rounded-md p-2 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-medium mt-1">{feature.name}</h3>
              <p className="text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

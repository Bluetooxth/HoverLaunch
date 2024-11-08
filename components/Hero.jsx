import Link from "next/link";
import React from "react";
import { LiaHourglassStartSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-center items-center lg:container w-[95vw] px-5 gap-5 py-[300px]">
        <h2 className="text-6xl md:text-7xl font-semibold text-center">
          Welcome to{" "}
          <span
            className=""
            style={{
              background: "linear-gradient(90deg, #fb923c, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            HoverLaunch
          </span>
        </h2>
        <p className="text-lg text-center max-w-[600px]">
          Showcase your links, startups and projects to a global audience of
          tech enthusiasts, investors, and potential customers.
        </p>
        <Link href={'#email'} className="py-2 px-5 bg-orange-500 hover:bg-orange-600 transition duration-500 ease-in-out rounded-md text-lg cursor-pointer flex items-center gap-2">
          Reserve Your Spot <LiaHourglassStartSolid className="inline-block" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;

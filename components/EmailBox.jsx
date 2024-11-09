import React from "react";
import { HiArrowRight } from "react-icons/hi";

const EmailBox = () => {
  return (
    <section className="flex justify-center items-start w-full" id="email">
      <div className="flex flex-col justify-start items-start lg:container w-[95vw] gap-7">
        <div className="flex justify-center items-start w-full gap-5">
          <div className="flex flex-col justify-start items-center w-full rounded-lg bg-zinc-900 shadow-md px-5 py-7 gap-3 max-w-[650px]">
            <h3 className="text-3xl font-medium mt-1">Reserve Your Spot</h3>
            <p className="text-lg max-w-[450px] text-center">
              Interested in showcasing your startup? Get in touch with us!
            </p>
            <div className="flex flex-col justify-start items-center w-full gap-5">
              <input
                type="email"
                placeholder="you@yourdomain.com"
                className="w-full py-1 md:py-2 px-5 bg-zinc-900 text-lg text-slate-50 rounded-md border-2 border-zinc-700 outline-none"
              />
              <button className="py-1 md:py-2 px-5 bg-orange-500 hover:bg-orange-600 transition duration-500 ease-in-out text-slate-50 rounded-md text-lg cursor-pointer w-full flex justify-center items-center gap-2 text-center">
                Get Information{" "}
                <HiArrowRight className="inline-block text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailBox;

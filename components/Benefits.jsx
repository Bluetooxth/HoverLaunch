import React from "react";

const Benefits = () => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-center lg:container w-[95vw] px-5 gap-7">
        <h2 className="text-3xl font-medium">Benefits for Startups</h2>
        <ul className="list-disc list-inside text-left max-w-[500px] mx-auto text-gray-300 text-lg">
          <li>Increased visibility in the tech ecosystem</li>
          <li>Targeted audience of tech enthusiasts</li>
          <li>Affordable exposure for your startup</li>
          <li>Connect with potential customers and partners</li>
          <li>Gain valuable feedback and insights</li>
          <li>Showcase your product or service to a global audience</li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;

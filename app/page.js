import Benefits from "@/components/Benefits";
import EmailBox from "@/components/EmailBox";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import WhyHere from "@/components/WhyHere";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="space-y-16 pb-16">
        <Hero />
        <WhyHere />
        <Features />
        <HowItWorks />
        <EmailBox />
        <Benefits />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

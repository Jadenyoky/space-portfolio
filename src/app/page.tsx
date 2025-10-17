"use client";
import React from "react";
import HeroSection from "@/components/heroSection";
import ProjectSection from "@/components/projectSection";
import ServiceSection from "@/components/serviceSection";
import ContactSection from "@/components/contactSection";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
};

export default Page;

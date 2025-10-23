"use client";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceSection = () => {
  const services = [
    {
      name: "Front-End Development",
      description:
        "Crafting clean, interactive, and responsive interfaces using React & Next with Tailwind CSS.",
      image: "images/services/front-end.png",
      borderColor: "border-[var(--bg-two)]",
    },
    {
      name: "full-stack development websites",
      description:
        "Powering your website with real-time databases, authentication, and more.",
      image: "images/services/fullstack.png",

      borderColor: "border-[var(--bg-two)]",
    },
    {
      name: "E-Commerce development websites",
      description:
        "Building complete online stores with product management, cart systems, and secure checkout — fully customized to your business needs.",
      image: "images/services/ecommerce.png",
      borderColor: "border-[var(--bg-two)]",
    },
  ];
  return (
    <div
      id="services"
      className="relative min-h-svh w-full bg-cover bg-no-repeat bg-center flex flex-col gap-10 items-center justify-between p-10 text-white"
    >
      <div className="flex flex-col gap-4">
        <h1
          className="font-[Inconsolata] text-4xl font-bold text-center text-green-500"
          data-aos="fade-down"
        >
          Services
        </h1>
        <p
          className="font-[Asap] text-2xl font-bold text-center text-[var(--text)] "
          data-aos="fade-up"
        >
          What I can do for you
        </p>
      </div>
      <div className="flex flex-row flex-wrap max-md:flex-col gap-4">
        {services.map((service, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
              key={i}
              className={`bg-[var(--bg-three)] relative flex-1 border ${service.borderColor} rounded-lg shadow-2xl px-8 py-6 flex flex-col gap-6 text-pretty max-md:items-center max-md:text-center`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-32 h-32"
              />
              <div className="flex flex-col gap-4">
                <h1 className=" font-bold font-[Asap] capitalize">
                  {service.name}
                </h1>
                <p className=" font-[inconsolata] text-[var(--text)] text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="text-[var(--text)] w-10 h-10 rounded-full flex items-center justify-center opacity-0
        animate-[waveOne_2s_ease-in-out_infinite_2s]
        cursor-pointer hover:text-green-500
        "
        onClick={() => {
          const projectsSection = document.getElementById("projects");
          projectsSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <i className="fi fi-br-angle-right text-2xl rotate-90"></i>
      </div>
    </div>
  );
};

export default ServiceSection;

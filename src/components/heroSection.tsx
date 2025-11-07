"use client";
import React, { useEffect, useRef, useState } from "react";
import TypeIt from "typeit";
import Aos from "aos";
import "aos/dist/aos.css";
import LogoLoop from "./LogoLoop";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import _ from "lodash";

const HeroSection = () => {
  const [showStars, setShowStars] = useState(false);
  const [skills, setskills] = useState<any>([]);
  const element = useRef(null) as any;
  const skillsArray = [
    {
      name: "html",
      img: "images/skills/html-5.png",
    },
    {
      name: "css",
      img: "images/skills/css-3.png",
    },
    {
      name: "javascript",
      img: "images/skills/js.png",
    },
    {
      name: "typescript",
      img: "images/skills/ts.png",
    },
    {
      name: "api",
      img: "images/skills/api.png",
    },
    {
      name: "react",
      img: "images/skills/react.png",
    },
    {
      name: "next",
      img: "images/skills/next.png",
    },
    {
      name: "tailwind",
      img: "images/skills/tailwind.png",
    },
    {
      name: "pwa",
      img: "images/skills/pwa.png",
    },
    {
      name: "firebase",
      img: "images/skills/firebase.png",
    },
    {
      name: "gsap",
      img: "images/skills/gsap.png",
    },
    {
      name: "framer motion",
      img: "images/skills/framer-motion.png",
    },
    {
      name: "vercel",
      img: "images/skills/vercel.png",
    },
    {
      name: "figma",
      img: "images/skills/figma.png",
    },
    {
      name: "canva",
      img: "images/skills/canva.png",
    },
  ];

  const handleShuffle = () => {
    const shuffle = _.shuffle(skillsArray);
    setskills(shuffle);
  };

  useEffect(() => {
    Aos.init({
      once: true,
      offset: 50,
    });
    const typing = new TypeIt(element.current, {
      speed: 30,
      deleteSpeed: 30,
      waitUntilVisible: true,
      loop: true,
      cursorChar: "_",
    })
      .type(`<span style="color:var(--coral);">Front-End Developer </span>`)
      .pause(3000)
      .delete()
      .type(`<span style="color:var(--cyan);">Back-End Developer </span>`)
      .pause(3000)
      .delete()
      .type(`<span style="color:var(--text);">UX/UI Designer </span>`)
      .pause(3000)
      .delete()
      .type(`<span style="color:var(--green);">Graphic Designer </span>`)
      .pause(3000)
      .go();

    setShowStars(true);

    handleShuffle();

    return () => typing.destroy();
  }, []);

  const skillsComponent = skills.map((skill: any, i: number) => ({
    node: (
      <div>
        <div className="flex max-md:hidden">
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                data-aos="zoom-in"
                data-aos-delay={500 + i * 100}
                key={i}
                className="cursor-pointer"
              >
                <img
                  className="w-12 max-sm:w-10 opacity-50 hover:opacity-100"
                  src={skill.img}
                  alt={skill.name}
                />
              </div>
            </TooltipTrigger>

            <TooltipContent side="top" className="max-md:hidden">
              <p className="capitalize">{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="hidden max-md:flex">
          <Popover>
            <PopoverTrigger asChild>
              <div data-aos="zoom-in" data-aos-delay={500 + i * 100} key={i}>
                <img
                  className="w-12 max-sm:w-10"
                  src={skill.img}
                  alt={skill.name}
                />
              </div>
            </PopoverTrigger>

            <PopoverContent
              side="top"
              className="max-md:flex w-fit h-2 bg-black border-0 text-white justify-center items-center text-xs"
              sideOffset={14}
            >
              <p className="capitalize">{skill.name}</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    ),
  }));

  return (
    <div
      id="hero"
      className="relative min-h-svh w-full bg-cover bg-no-repeat bg-center flex flex-col gap-5 items-center justify-evenly max-md:p-0"
      style={{ backgroundImage: "url('images/bg_intro.png')" }}
    >
      <div className="relative ">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--green)]">
          <img
            className="object-cover rounded-full"
            src="images/avatar.jpg"
            alt="Avatar Image"
          />
        </div>
        <div
          className="absolute bottom-0 right-0 text-3xl text-[var(--bg)] bg-[var(--green)] rounded-full flex items-center justify-center rotate-110"
          data-aos="zoom-in"
        >
          <i className="fi fi-sr-comment-code -m-[0.5px]"></i>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 text-center">
        <p className=" text-white/70 font-[Inconsolata] tracking-wider">
          Hello World! <br /> My name is{" "}
          <span className="text-[var(--green)] font-bold">Ahmed Hussien</span> &
          I am
        </p>
        <div
          id="title"
          ref={element}
          className="min-h-[60px] font-[Asap] text-5xl max-sm:text-2xl font-bold text-[var(--coral)]"
        ></div>
      </div>

      <div className="flex gap-5 flex-wrap justify-center uppercase w-full">
        <LogoLoop
          logos={skillsComponent}
          speed={40}
          direction="left"
          logoHeight={70}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor={`var(--bg)`}
          ariaLabel="Technology partners"
        />
      </div>

      <div
        className="text-[var(--text)] w-10 h-10 rounded-full flex items-center justify-center opacity-0
        animate-[waveOne_2s_ease-in-out_infinite_2s]
        cursor-pointer hover:text-[var(--green)]
        "
        onClick={() => {
          const servicesSection = document.getElementById("services");
          servicesSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <i className="fi fi-br-angle-right text-2xl rotate-90"></i>
      </div>

      {showStars && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(50)].map((item, i) => (
            <span
              data-aos="fade"
              data-aos-delay={1000 + i * 200}
              key={i}
              className="absolute bg-[var(--text)] rounded-full opacity-20 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 2}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;

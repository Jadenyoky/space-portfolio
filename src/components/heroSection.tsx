"use client";
import React, { useEffect, useRef, useState } from "react";
import TypeIt from "typeit";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [showStars, setShowStars] = useState(false);
  const element = useRef(null) as any;
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
      .type("Front-End Developer ")
      .pause(3000)
      .delete()
      .type("Back-End Developer ")
      .pause(3000)
      .delete()
      .type("UX/UI Designer ")
      .pause(3000)
      .delete()
      .type("Graphic Designer ")
      .pause(3000)
      .go();

    setShowStars(true);
    return () => typing.destroy();
  }, []);

  const skills = [
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
  ];

  return (
    <div
      id="hero"
      className="relative min-h-svh w-full bg-cover bg-no-repeat bg-center flex flex-col gap-5 items-center justify-evenly p-10"
      style={{ backgroundImage: "url('images/bg_intro.png')" }}
    >
      <div className="relative ">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-500">
          <img
            className="object-cover rounded-full"
            src="images/avatar.jpg"
            alt="Avatar Image"
          />
        </div>
        <div
          className="absolute bottom-0 right-0 text-3xl text-[var(--bg)] bg-green-500 rounded-full flex items-center justify-center rotate-110"
          data-aos="zoom-in"
        >
          <i className="fi fi-sr-comment-code -m-[0.5px]"></i>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 text-center">
        <p className=" text-white/70 font-[Inconsolata] tracking-wider">
          Hello World! <br /> My name is{" "}
          <span className="text-green-500 font-bold">Ahmed Hussien</span> & I am
        </p>
        <div
          id="title"
          ref={element}
          className="min-h-[60px] font-[Asap] text-5xl max-sm:text-2xl font-bold text-green-500"
        ></div>
      </div>

      <div className="flex gap-5 flex-wrap justify-center uppercase">
        {skills.map((skill, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={500 + i * 100}
              key={i}
              className="bg-[var(--bg-two)] text-[var(--text)] px-4 py-2 max-sm:py-4 rounded-full flex items-center justify-center gap-3"
            >
              <img className="w-5 h-5" src={skill.img} alt={skill.name} />
              <p className="font-[maven_pro] max-sm:hidden ">{skill.name}</p>
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

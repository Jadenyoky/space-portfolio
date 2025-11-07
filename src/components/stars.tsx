"use client";
import React from "react";

const Stars = () => {
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

  const animations = [
    "float-up",
    "float-down",
    "float-left",
    "float-right",
    "rotate-slow",
    "pulse-fade",
  ];
  const colors = ["var(--coral)", "var(--cyan)", "var(--green)", "var(--text)"];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(skillsArray.length)].map((item, i) => (
        <span
          key={i}
          className={`absolute rounded-full opacity-0 ${
            animations[Math.floor(Math.random() * animations.length)]
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 2}px`,
            height: `${Math.random() * 2 + 1}px`,
            backgroundColor: `${
              colors[Math.floor(Math.random() * colors.length)]
            }`,
          }}
        ></span>
      ))}
      {[...Array(skillsArray.length)].map((item, i) => (
        <span
          key={i}
          className={`absolute rounded-full opacity-0 ${
            animations[Math.floor(Math.random() * animations.length)]
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `24px`,
            height: `24px`,
          }}
        >
          <img
            className="object-cover opacity-20"
            src={`${skillsArray[i]?.img}`}
            alt={`${skillsArray[i]?.name}`}
          />
        </span>
      ))}
    </div>
  );
};

export default Stars;

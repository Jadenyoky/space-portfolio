"use client";
import React from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      name: "quran lite",
      bgColor: "bg-cyan-500",
      category: "Front-End",
      shadowColor: "shadow-cyan-500/50",
      description: "Read chapters of quran with each chapter in page manually",
      links: {
        github: "https://github.com/Jadenyoky/quran-react",
        stream: "https://quran-114.web.app",
      },
      technologies: ["react", "css-3", "pwa"],
    },
    {
      id: 2,
      name: "to do list",
      bgColor: "bg-blue-500",
      category: "Front-End",
      shadowColor: "shadow-blue-500/50",
      description: "Simple to do list with remove and saved current list",
      links: {
        github: "https://github.com/Jadenyoky/to-do-list",
        stream: "https://todolist44024.web.app",
      },
      technologies: ["react", "css-3", "pwa"],
    },
    {
      id: 3,
      name: "pokemon",
      bgColor: "bg-orange-500",
      category: "Front-End",
      shadowColor: "shadow-orange-500/50",
      description: "Pokemon data with describe each card",
      links: {
        github: "https://github.com/Jadenyoky/pokemon-api",
        stream: "https://poke-242.web.app",
      },
      technologies: ["react", "css-3", "api", "pwa"],
    },
    {
      id: 4,
      name: "yugioh!",
      bgColor: "bg-green-500",
      category: "Front-End",
      shadowColor: "shadow-green-500/50",
      description: "Yugioh data cards with properties each card",
      links: {
        github: "https://github.com/Jadenyoky/yugi-api",
        stream: "https://yugi-0.web.app",
      },
      technologies: ["react", "css-3", "api", "pwa"],
    },
    {
      id: 5,
      name: "quran advanced",
      bgColor: "bg-black",
      category: "Front-End",
      shadowColor: "shadow-black/50",
      description:
        "Read, listen and search quran chapters with dynamically navigation",
      links: {
        github: "https://github.com/Jadenyoky/quran-api",
        stream: "https://quran-04.web.app",
      },
      technologies: ["react", "css-3", "api", "pwa"],
    },
    {
      id: 6,
      name: "portfolio",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/50",
      description: "Simple portfolio to collect some projects made by me",
      links: {
        github: "https://github.com/Jadenyoky/my-portfolio",
        stream: "https://portfolio-40.web.app",
      },
      technologies: ["react", "css-3", "pwa"],
    },
    {
      id: 7,
      name: "tic-tac-toe game",
      bgColor: "bg-yellow-500",
      category: "Front-End",
      shadowColor: "shadow-yellow-500/50",
      description: "Simple x-o game to play with anyone",
      links: {
        github: "https://github.com/Jadenyoky/x-o-game",
        stream: "https://jadenyoky.github.io/x-o-game",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      id: 8,
      name: "hint word game",
      bgColor: "bg-blue-500",
      category: "Front-End",
      shadowColor: "shadow-blue-500/50",
      description:
        "Hint word game with different modes, categories and score for every complete word",
      links: {
        github: "https://github.com/Jadenyoky/hint-word-game",
        stream: "https://hint-word-game.vercel.app",
      },
      technologies: ["next", "css-3", "pwa"],
    },
    {
      id: 9,
      name: "password random",
      bgColor: "bg-green-500",
      category: "Front-End",
      shadowColor: "shadow-green-500/50",
      description:
        "Password generator with specific type, copy, update and saved list",
      links: {
        github: "https://github.com/Jadenyoky/password-random",
        stream: "https://password-random.vercel.app",
      },
      technologies: ["next", "css-3", "pwa"],
    },
    {
      id: 10,
      name: "password random",
      bgColor: "bg-green-500",
      category: "Front-End",
      shadowColor: "shadow-green-500/50",
      description:
        "Password generator with specific type, copy, update and saved list",
      links: {
        github: "https://github.com/Jadenyoky/password-random",
        stream: "https://password-random.vercel.app",
      },
      technologies: ["next", "css-3", "pwa"],
    },
    {
      id: 11,
      name: "challenges",
      bgColor: "bg-yellow-500",
      category: "Front-End",
      shadowColor: "shadow-yellow-500/50",
      description:
        "Challenges finished code it from front-end-mentor with some details",
      links: {
        github: "https://github.com/Jadenyoky/challenges",
        stream: "https://challenges-lyart.vercel.app",
      },
      technologies: ["next", "css-3", "tailwind", "pwa"],
    },
    {
      id: 12,
      name: "multi step form",
      bgColor: "bg-indigo-500",
      category: "Front-End",
      shadowColor: "shadow-indigo-500/50",
      description:
        "simulate sign up , login with dynamic navigation, validation and avatar page",
      links: {
        github: "https://github.com/Jadenyoky/yup-hook-form",
        stream: "https://yup-form-rouge.vercel.app",
      },
      technologies: ["next", "tailwind", "pwa"],
    },
  ];

  return (
    <div
      id="projects"
      className="relative min-h-svh w-full bg-cover bg-no-repeat bg-center flex flex-col gap-20 max-md:gap-10 items-center justify-between py-20 px-10 text-white"
    >
      <div className="flex flex-col gap-4">
        <h1
          className="font-[Inconsolata] text-4xl font-bold text-center text-cyan-500"
          data-aos="fade-down"
        >
          Projects
        </h1>
        <p
          className="font-[Asap] text-2xl font-bold text-center text-[var(--text)] "
          data-aos="fade-up"
        >
          Some of my recent works
        </p>
      </div>
      <div className="flex gap-5 flex-wrap justify-center max-md:justify-center w-full">
        {projects.map((project, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={200 + i * 100}
              key={i}
              className={`relative max-w-xs bg-[var(--bg-three)] rounded-lg p-4 flex flex-col gap-6 text-pretty
              `}
            >
              <div
                className={`relative aspect-video p-4 ${project.bgColor} rounded-lg overflow-hidden`}
              >
                {" "}
                <img
                  src={`images/projects/${project.name}/01.png`}
                  alt={project.name}
                  className="object-cover rounded-lg"
                />
                <img
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 200}
                  src={`images/projects/${project.name}/02.png`}
                  alt={project.name}
                  className={`object-cover rounded-lg absolute -bottom-14 right-4 w-1/4 shadow-2xl ${project.shadowColor}`}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <h1 className="font-[Asap] font-bold capitalize">
                    {project.name}
                  </h1>
                </div>
                <p className="font-[Maven_Pro] text-sm text-[var(--text)]">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between flex-wrap gap-4 items-center ">
                <div className="flex gap-4">
                  {project.technologies.map((tech, index) => (
                    <img
                      key={index}
                      src={`/images/skills/${tech}.png`}
                      alt={tech}
                      className={`fi fi-brands-${tech} w-5 h-w-5`}
                    ></img>
                  ))}
                </div>
                <p className="font-[inconsolata] text-xs opacity-50">
                  {project.category}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 *:flex-1 font-[inconsolata] text-sm text-[var(--text)] *:p-2 *:bg-[var(--bg)] *:rounded-md *:cursor-pointer">
                <Link
                  className="flex gap-2 items-center justify-center hover:bg-cyan-500 hover:text-[var(--bg)] transition"
                  href={project.links.github}
                  target="_blank"
                >
                  <i className="fi fi-brands-github translate-y-0.5"></i>
                  <span>github</span>
                </Link>
                <Link
                  className="flex gap-2 items-center justify-center hover:bg-green-500 hover:text-[var(--bg)] transition"
                  href={project.links.stream}
                  target="_blank"
                >
                  <i className="fi fi-sr-signal-stream translate-y-0.5"></i>
                  <span>stream</span>
                </Link>
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
          const contactSection = document.getElementById("contact");
          contactSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <i className="fi fi-br-angle-right text-2xl rotate-90"></i>
      </div>
    </div>
  );
};

export default ProjectSection;

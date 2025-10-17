"use client";
import React from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectSection = () => {
  const projects = [
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
    },
    {
      name: "sadasd",
      image: "images/avatar.jpg",
      bgColor: "bg-amber-500",
      category: "Front-End",
      shadowColor: "shadow-amber-500/20",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Exercitationem dignissimos tempore unde soluta temporibus",
      links: {
        github: "https://github.com/Jadenyoky",
        stream: "https://github.com/Jadenyoky",
      },
      technologies: ["html-5", "css-3", "js"],
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
              className={`relative max-w-xs bg-[var(--bg-three)] rounded-lg p-4 flex flex-col gap-6 text-balance
              `}
            >
              <div
                className={`aspect-video p-4 ${project.bgColor} rounded-lg overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-[Asap] font-bold">sadasd</h1>
                </div>
                <h1 className="font-[Maven_Pro] text-sm text-[var(--text)]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem dignissimos tempore unde soluta sapiente
                  temporibus
                </h1>
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

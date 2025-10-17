"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const ContactSection = () => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    Aos.init({
      once: true,
      offset: 50,
    });
    setShowStars(true);
  });

  const social = [
    {
      name: "whatsapp",
      link: "https://wa.link/h4ygpi",
      icon: "fi fi-brands-whatsapp",
      hoverColor: "hover:text-green-300",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/jaden.yoky2014",
      icon: "fi fi-brands-facebook",
      hoverColor: "hover:text-cyan-300",
    },
    {
      name: "telegram",
      link: "https://t.me/jadenyoky",
      icon: "fi fi-brands-telegram",
      hoverColor: "hover:text-amber-300",
    },
    {
      name: "github",
      link: "https://github.com/Jadenyoky",
      icon: "fi fi-brands-github",
      hoverColor: "hover:text-orange-300",
    },
  ];
  return (
    <div
      id="contact"
      className="relative min-h-svh w-full bg-cover bg-no-repeat bg-center flex flex-col gap-10 items-center justify-between p-10"
      style={{ backgroundImage: "url('images/bg_end.png')" }}
    >
      <div className="flex flex-col gap-4">
        <h1
          className="font-[Inconsolata] text-4xl font-bold text-center text-green-500"
          data-aos="fade-down"
        >
          Contact
        </h1>
        <p
          className="font-[Asap] text-2xl font-bold text-center text-[var(--text)] "
          data-aos="fade-up"
        >
          Let’s turn your ideas into pixels and code
        </p>
      </div>

      <div className="min-w-xs max-sm:min-w-full flex flex-col gap-4 ">
        {social.map((item, i) => {
          return (
            <Link
              data-aos="fade-up"
              data-aos-delay={200 + i * 100}
              key={i}
              href={item.link}
              target="_blank"
              className={`bg-[var(--bg-three)] text-[var(--text)] flex justify-between w-full p-5 items-center rounded-lg 
              ${item.hoverColor} transition max-sm:max-w-full capitalize `}
            >
              <div className="flex items-center gap-4 ">
                <i
                  className={`${item.icon} text-2xl cursor-pointer translate-y-1`}
                ></i>
                <p className="font-[Inconsolata]">{item.name}</p>
              </div>
              <i className="fi fi-br-angle-right -rotate-45"></i>
            </Link>
          );
        })}
      </div>

      <div
        className="text-[var(--text)] w-10 h-10 rounded-full flex items-center justify-center opacity-0
        animate-[waveOne_2s_ease-in-out_infinite_2s]
        cursor-pointer hover:text-green-500
        "
        onClick={() => {
          const heroSection = document.getElementById("hero");
          heroSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <i className="fi fi-br-angle-right text-2xl -rotate-90"></i>
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

export default ContactSection;

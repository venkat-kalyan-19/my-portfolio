import React from "react";
import HeroImg from "../assets/hero.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";


const Hero = () => {

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="w-1/2 flex-col">
        <h1 className="text-white text-4xl font-hero-font">
          Hi, <br /> Im <span className="text-black">Venkata Kalyan</span>
          <p>Im a Frontend Developer</p>
        </h1>
        <div className="flex py-10">
        <a 
        href="https://www.linkedin.com/in/venkata-kalyan2003" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pr-5 hover:text-white"
      >
        <AiOutlineLinkedin size={40} />
      </a>
      <a 
        href="https://github.com/venkat-kalyan-19" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pr-5 hover:text-white"
      >
        <AiOutlineGithub size={40} />
      </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} />
    </section>
  );
};

export default Hero;

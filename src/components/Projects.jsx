import React from "react";
import websiteImg1 from "../assets/calculator.jpg";
import websiteImg2 from "../assets/weather.jpg";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-1/2">
        <div className="flex justify-center">
          <h1 className="text-4xl  border-b-4  mb-5 w-[140px] font-bold">
            Projects
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-30 gap-5">
          <div className="relative">
            <img className="h-[200px] w-[200px]" src={websiteImg1} />
            <div className="absolute left-0 right-0 bottom-0 bottom-[45] top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                A calculator App using JavaSctipt.
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[200px]" src={websiteImg2} />
            <div className="absolute left-0 right-0 bottom-0 bottom-[45] top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">Weather app using with a API.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

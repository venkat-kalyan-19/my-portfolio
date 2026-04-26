import React from "react";
import ResumeImg from "../assets/resume.jpg";


const Resume = () => {
  const config = {
    link: 'https://docs.google.com/document/d/1StpeaSvJ4Ewtt_MTJj6FYHcgkNpR5aDD?rtpof=true&usp=drive_fs'
  }
  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className='w-[300px]'src={ResumeImg} />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl  border-b-4  mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume <a className="bg-primary px-5  font-bold hover:border-2 border-white rounded" href={config.link}>Download</a>

          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;

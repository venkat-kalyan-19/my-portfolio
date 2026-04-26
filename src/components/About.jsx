import React from 'react'
import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4  mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hi, My name is venkata kalyan. i am a FullStack Developer. i built beautiful websites with react.js and tailwind CSS on Frontend Development.</p>
        <p className='pb-5'>i am proficent in FullStack Developer skills like react.js, redux, redux tool kit, axios, tailwind CSS, SaSS, Css3 and Node.js, Express.js, MongoDB, SQL and Git, Github and many more.</p>
        </div>
        
        </div>
    </section>
  )
}

export default About
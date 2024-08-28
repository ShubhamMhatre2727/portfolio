import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  return (
    <div id='Skills' className='Skills flex justify-center items-center'>
        <div className="Glass w-96 sm:w-3/5 py-5 flex flex-col justify-center items-center">
            <h1 className='text-4xl mb-4'>Skills</h1>
            <div className='flex flex-wrap justify-center gap-6 [&>*]:w-20 md:[&>*]:w-32 [&>*]:grayscale hover:[&>*]:grayscale-0 hover:[&>*]:scale-105 transition'>
                <img title="HTML" src="\images\skills\html-5-svgrepo-com.svg" alt="" />
                <img title="CSS" src="\images\skills\css-3-svgrepo-com.svg" alt="" />
                <img title="JavaScript" src="\images\skills\js-official-svgrepo-com.svg" alt="" />
                <img title="Java" src="\images\skills\java-4-logo-svgrepo-com.svg" alt="" />
                <img title="Python" src="\images\skills\python-svgrepo-com.svg" alt="" />
                <img title="Flask" src="\images\skills\flask-svgrepo-com.svg" alt="" />
                <img title="Node.js" src="\images\skills\node-js-svgrepo-com.svg" alt="" />
                <img title="React.js" src="\images\skills\react-svgrepo-com.svg" alt="" />
                <img title="Figma" src="\images\skills\figma-svgrepo-com.svg" alt="" />
                <img title="Firebase" src="\images\skills\firebase-svgrepo-com.svg" alt="" />
                <img title="Git" src="\images\skills\git-svgrepo-com.svg" alt="" />
                <img title="GitHub" src="\images\skills\github-142-svgrepo-com.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Skills
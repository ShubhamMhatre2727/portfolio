import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

export const Home = () => {

    useGSAP(()=>{
        gsap.fromTo(".Home",{
            filter: "brightness(0%)"
        },{
            delay:1,
            filter: "brightness(100%)",
        })

        const tl = gsap.timeline();

        tl.fromTo(["#heading","#description"],{
            translateX:-600,
        },{
            translateX:0,
            delay:1,
            stagger:0.1
        })

        // hr tag animation start at same time as h1
        tl.fromTo("hr",{
            width:0,
        },{
            width:"100%",
            duration:2
        },"<")

        tl.fromTo("#home-footer > img",{
            opacity:0,
        },{
            opacity:1
        })

        tl.fromTo("a",{
            rotateX:90,
            translateY:-14,
        },{
            rotateX:0,
            translateY:0,
            ease: "bounce.out",
            stagger:0.1
        })
        
    },[])

  return (
    <div id="Home" className='Home'>
        <div className='h-[90%] flex flex-col md:items-start justify-center items-center px-10'>
            <h1 id='heading' className='sm:text-6xl text-4xl text-white font-semibold'>Shubham Mhatre</h1>
            <p id='description' className='md:w-[40%] sm:w-96 w-80 sm:text-lg md:text-start text-center text-sm'>I’m Web Developer from Panvel graduated in ‘Information Technology’ from saraswati college of engineering, kharghar.</p>
            <div className=' flex gap-2 text-white text-xs md:text-sm  tracking-widest font-semibold mt-4'>
                <a href='#Projects' className='bg-white bg-opacity-25 rounded-md px-4 py-1 border-2 border-transparent hover:border-gray-300'>
                    See My Work
                </a>
                <a className='bg-purple-800 bg-opacity-65 rounded-md px-8 py-1 border-2 border-transparent hover:border-gray-300'>
                    Resume
                </a>
            </div>
        </div>
        <div id="home-footer" className="h-[10%] w-full md:px-10 px-4 flex gap-3 font-semibold -translate-y-20 sm:translate-y-0 cursor-pointer">
            <div className='sm:w-[90%] w-[65%] flex items-center justify-start text-xs'>
                <hr className='w-full border border-gray-400'/>&gt;
            </div>
            <img src="\images\linkedin-svgrepo-com.svg" alt="" />
            <img src="\images\github-svgrepo-com.svg" alt="" />
        </div>
    </div>
  )
}

import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {

  useGSAP(()=>{
    gsap.fromTo(".Contact",{
      backgroundSize:"200%",
      backgroundPositionY:30,
    },{
      backgroundPositionY:100,
      scrollTrigger:{
        trigger:".Contact",
        scrub:true,
        start:"top 30%",
        end:"+=700"
      }
    })

    gsap.fromTo(".Contact > .Glass",{
      opacity:0
    },{
      opacity:1,
      scrollTrigger:{
        trigger:".Contact > .Glass",
        scrub:true,
        start:"top 40%",
        end:"+=100"
      }
    })
  },[])

  return (
    <div id='Contact' className='Contact relative grid items-center justify-center'>
      <div className='border Glass w-96 h-80 md:w-[50vw] sm:w-[60vw] md:h-3/5 flex flex-col items-center justify-center'>
        <p className="text-xs text-purple-600 tracking-widest">Get In Touch</p>
        <h1 className="text-4xl font-semibold text-white">Contact</h1>
        <form className="md:[&>*]:w-96 [&>*]:w-64 [&>*]:mt-4">
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <textarea placeholder="Message" rows="4"/>
          <input type="submit" value="send"/>
        </form>
      </div>
      <p className='absolute bottom-0 w-full text-center font-sans'>Copyright@2024 Shubham Mhatre</p>
    </div>
  )
}

export default Contact
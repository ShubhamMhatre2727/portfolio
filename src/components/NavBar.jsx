import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const NavBar = () => {

  const timeline = gsap.timeline({paused:true})
  useGSAP(()=>{
    timeline
      .to("#top",{y:6,},"adjust")
      .to("#mid",{opacity:0,},"adjust")
      .to("#bottom",{y:-6,},"adjust")
      .to("#top",{transformOrigin:'center center', rotateZ:45},"rotate")
      .to("#bottom",{transformOrigin:'center center', rotateZ:-45},"rotate")
  })

  let flag = 1;
  function handleNav(){
    if(flag == 0){
      flag = 1;
      timeline.reverse()

        gsap.to("nav > li",{
          translateY: -180,
          stagger:-0.2
        })
      
    }
    else{
      flag=0;
      timeline.play();
        gsap.to("nav > li",{
          translateY: 0,
          stagger:0.2,
        })
    }
  }

  return (
    <nav className="fixed z-10 list-none w-full flex flex-col sm:flex-row items-end cursor-pointer text-3xl sm:text-sm [&>*]:w-full sm:[&>*]:w-auto sm:justify-center sm:gap-6 [&>*]:text-end [&>*]:bg-black sm:[&>*]:bg-transparent sm:bg-transparents sm:translate-y-2 [&>*]:bg-opacity-35 ">
      <svg onClick={handleNav} className="hamburger sm:hidden h-10" xmlns="http://www.w3.org/2000/svg">
  <line id="top" x1="93%" y1="35%" y2="35%" x2="99%" stroke="gray" strokeWidth={2}/>
  <line id="mid" x1="93%" y1="50%" y2="50%" x2="99%" stroke="gray" strokeWidth={2}/>
  <line id="bottom" x1="93%" y1="65%" y2="65%" x2="99%" stroke="gray" strokeWidth={2}/>
</svg>
      <li className="hover:text-white -translate-y-20 sm:translate-y-0"><a href="#Home">Home</a></li>
      <li className="hover:text-white -translate-y-28 sm:translate-y-0"><a href="#Skills">Skills</a></li>
      <li className="hover:text-white -translate-y-36 sm:translate-y-0"><a href="#Projects">Projects</a></li>
      <li className="hover:text-white -translate-y-44 sm:translate-y-0"><a href="#Contact">Contact</a></li>
    </nav>
  );
};

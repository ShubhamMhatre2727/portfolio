import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

  useGSAP(()=>{
    gsap.fromTo(".Projects",{
      backgroundSize:"300%",
      backgroundPosition:"center"
    },{
      
      backgroundSize:"160%",
      scrollTrigger:{
        trigger:".Projects",
        start: "top 70%",
        scrub:1
      }
    })

    gsap.fromTo(".Card",{
      scale:3,
      opacity:0,
    },{
      
      scale:1,
      opacity:1,
      scrollTrigger:{
        trigger:".Projects",
        start: "top bottom",
        end:"top 70%",
        scrub:1
      }
    })

    gsap.utils.toArray([[".Projects > h1","50px"],[".Projects p","14px"]]).forEach((el)=>{
      gsap.fromTo(el[0],{
        fontSize:"40vw",
      },{
        
        fontSize:el[1],
        scrollTrigger:{
          trigger:".Projects",
          start: "top bottom",
          end:"top 40%",
          scrub:1,
        },
        ease:"sine.inOut"
      })
    })
    
  },[])

  return (
    <div id="Projects" className="Projects flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold my-4 text-white">PROJECTS</h1>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
        <div className="Card md:w-80 md:h-56">
          <div className="bg-orange-200">
            <img src="\images\projects\apple-website.jpg" alt="" />
            <p>apple website</p>
          </div>
        </div>
        <div className="Card md:w-80 md:h-56">
          <div className="bg-cyan-500">
            <img src="\images\projects\file-share.jpg" alt="" />
            <p>file share</p>
          </div>
        </div>
        <div className="Card md:w-80 md:h-56">
          <div className="bg-gray-500">
            <img src="\images\projects\spotify-lyrics-generator.jpg" alt="" />
            <p>spotify lyrics generator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

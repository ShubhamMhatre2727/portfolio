import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

  return (
    <div id="Projects" className="Projects flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold my-4 text-white">PROJECTS</h1>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-20 overflow-y-auto pt-9">
        {
          projects.map((item)=>(
            <div className="Card md:w-80 md:h-56">
          <div className="bg-orange-300">
            <img src={item.poster_path} alt="" />
            <p>{item.title}</p>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
}

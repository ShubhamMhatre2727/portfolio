import { div } from "motion/react-client";

export default function Projects() {
  const list = [
    {
      title:"apple website",
      img:'/images/projects/apple-website.jpg',
    },
    {
      title:"file share",
      img:'/images/projects/file-share.jpg',
    },
    {
      title:"spotify lyrics generator",
      img:'/images/projects/spotify-lyrics-generator.jpg',
    },
    {
      title:"movie recommendation system",
      img:'/images/projects/recommendation-system.jpg',
    },
    {
      title:"nitro energy",
      img:'/images/projects/nitro-energy.jpg',
    },
    {
      title:"real estates website",
      img:'/images/projects/real-estates-website.jpg',
    },
  ]
  return (
    <div id="Projects" className="Projects h-fit bg-slate-500 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold my-4 text-white">PROJECTS</h1>
      <div className="flex flex-wrap justify-around gap-y-4">

        {
          list.map((project)=>{
            return(
              <div className="w-2/5 border border-black hover:scale-105">
                <p className="size-full border-2 border-white hover:scale-75">
                  {project.title}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

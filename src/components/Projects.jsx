export default function Projects() {

  return (
    <div id="Projects" className="Projects flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold my-4 text-white">PROJECTS</h1>
      <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-20 overflow-y-auto pt-9">

        <div className="Card md:w-80 md:h-56">
          <div className="bg-orange-300">
            <img src="\images\projects\apple-website.jpg" alt="" />
            <p>apple website</p>
          </div>
        </div>
        <div className="Card md:w-80 md:h-56">
          <div className="bg-orange-300">
            <img src="\images\projects\file-share.jpg" alt="" />
            <p>file-share</p>
          </div>
        </div>
        <div className="Card md:w-80 md:h-56">
          <div className="bg-orange-300">
            <img src="\images\projects\spotify-lyrics-generator.jpg" alt="" />
            <p>spotify-lyrics-generator</p>
          </div>
        </div>
        <div className="Card md:w-80 md:h-56">
          <div className="bg-orange-300">
            <img src="\images\projects\recommendation-system.jpg" alt="" />
            <p>file-share</p>
          </div>
        </div>
        <div className="Card md:w-80 md:h-56">
          <div className="bg-orange-300">
            <img src="\images\projects\sentiment-analyzer.jpg" alt="" />
            <p>sentiment analyzer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

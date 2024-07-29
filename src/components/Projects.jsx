export default function Projects() {
  return (
    <div className="Projects flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold my-4 text-white">PROJECTS</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="Card sm:w-80 sm:h-56">
          <div className="bg-orange-200">
            <img src="public\images\projects\apple-website.jpg" alt="" />
            <p>apple website</p>
          </div>
        </div>
        <div className="Card sm:w-80 sm:h-56">
          <div className="bg-cyan-500">
            <img src="public\images\projects\file-share.jpg" alt="" />
            <p>file share</p>
          </div>
        </div>
        <div className="Card sm:w-80 sm:h-56">
          <div className="bg-gray-500">
            <img src="public\images\projects\spotify-lyrics-generator.jpg" alt="" />
            <p>spotify lyrics generator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
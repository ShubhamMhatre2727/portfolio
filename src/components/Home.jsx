import React from "react";

export const Home = () => {
    return (
        <div className="Home">
            <div className="h-[90%] flex flex-col md:items-start justify-center items-center px-10">
                <h1 className="sm:text-[60px] text-[42px] text-white font-semibold">
                    Shubham Mhatre
                </h1>
                <p className="md:w-[40%] sm:w-96 w-80 sm:text-lg md:text-start text-center text-sm">
                    I’m Web Developer from Panvel graduated in ‘Information
                    Technology’ from saraswati college of engineering, kharghar.
                </p>
                <div className="flex gap-2 text-white text-xs md:text-sm  tracking-widest font-semibold mt-4">
                    <button className="bg-white bg-opacity-25 rounded-md px-4 py-1 border-2 border-transparent hover:border-gray-300">
                        <h1 className="text-white">See My Work</h1>
                    </button>
                    <button className="bg-purple-800 bg-opacity-65 rounded-md px-8 py-1 border-2 border-transparent hover:border-gray-300">
                        <h1 className="text-white">Resume</h1>
                    </button>
                </div>
            </div>
            <div className="h-[10%] w-full md:px-10 px-4 flex gap-3 font-semibold cursor-pointer">
                <div className="sm:w-[90%] w-[55%] flex items-center justify-start text-xs">
                    <p className="w-full border border-gray-400" />
                    &gt;
                </div>
                <img
                    className=""
                    src="public\images\linkedin-svgrepo-com.svg"
                    alt=""
                />
                <img src="public\images\github-svgrepo-com.svg" alt="" />
            </div>
        </div>
    );
};

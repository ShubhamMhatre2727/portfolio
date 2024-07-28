import React from 'react';

export const Home = () => {
  return (
    <div className='Home'>
        <div className='h-[90%] flex flex-col justify-center items-center'>
            <h1 className='text-[42px] text-white font-semibold'>Shubham Mhatre</h1>
            <p className='md:w-[60%] text-gray-100 text-center text-sm font-semibold mx-2'>I’m Web Developer from Panvel graduated in ‘Information Technology’ from saraswati college of engineering, kharghar.</p>
            <div className='flex gap-2 text-white text-xs  tracking-widest font-semibold mt-4'>
                <button className='bg-white bg-opacity-25 rounded-sm px-4 py-1 border border-transparent hover:border-white'>
                    <h1 className='text-white'>See My Work</h1>
                </button>
                <button className='bg-purple-800 bg-opacity-65 rounded-sm px-8 py-1 border border-transparent hover:border-white'>
                    <h1 className='text-white'>Resume</h1>
                </button>
            </div>
        </div>
        <div className="h-[10%] w-full">
            <img src="public/right-arrow-svgrepo-com.svg" alt=""/>
            <h3>LinkedIn</h3>
            <h3>Instagram</h3>
        </div>
    </div>
  )
}

import React from 'react';

export const Home = () => {
  return (
    <div className='Home'>
        <div className='h-full flex flex-col justify-center'>
            <h1 className='text-[52px] text-white font-semibold'>Shubham Mhatre</h1>
            <p className='w-[60%] text-gray-300'>I’m Full Stack Developer from navi graduated in ‘Information Technology’ from saraswati college of engineering, kharghar.</p>
            <div className='flex gap-2 text-white text-xs  tracking-widest font-semibold'>
                <button className='bg-white bg-opacity-15 rounded-sm px-4 py-1'>
                    <h1 className='text-white'>See My Work</h1>
                </button>
                <button className='bg-blue-800 bg-opacity-25 rounded-sm px-4 py-1'>
                    <h1 className='text-white'>See My Work</h1>
                </button>
            </div>
        </div>
    </div>
  )
}

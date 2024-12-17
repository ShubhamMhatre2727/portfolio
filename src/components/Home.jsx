import {motion} from "motion/react";

export const Home = () => {
    const variant1 = {
        closed:{x:-800},
        open:{x:0, transition:{duration:0.8}}
    }
    const variant_a = {
        closed:{y:-90},
        open: {y:0, transition:{duration:0.5}}
    }
    const variant_hr = {
        closed:{x:-500},
        open:{x:0, transition:{duration:0.5}}
    }

    const variant_img={
        closed:{opacity:0},
        open:{opacity:1}
    }
  return (
    <motion.div initial="closed" animate="open" transition={{staggerChildren:0.4}} id="Home" className="Home relative text-shadow flex flex-col items-center md:items-start justify-center text-center md:text-start">
        <motion.h1 variants={variant1} className="text-4xl  sm:text-6xl text-white font-bold">
            Shubham Mhatre
        </motion.h1>
        <motion.p variants={variant1} className="w-4/5 sm:w-1/2 sm:text-xl">
        I’m Web Developer from Panvel graduated in ‘Information Technology’ from saraswati college of engineering, kharghar.
        </motion.p>
        <div className="flex gap-x-4 mt-4 text-white tracking-widest text-sm overflow-y-hidden">
        <motion.a variants={variant_a} href='#Projects' className='bg-white bg-opacity-25 rounded-md px-4 py-1 border-2 border-transparent hover:border-gray-300'>
                    See My Work
                </motion.a>
                <motion.a variants={variant_a} className='bg-purple-800 bg-opacity-65 rounded-md px-8 py-1 border-2 border-transparent hover:border-gray-300'>
                    Resume
                </motion.a>
        </div>
        <div id="home-footer" className="absolute bottom-0 h-[10%] w-full md:px-10 px-4 flex gap-3 font-semibold">
            <motion.div variants={variant_hr} className='sm:w-[90%] w-[65%] flex items-center justify-start text-xs'>
                <hr className='w-full border border-gray-400'/>&gt;
            </motion.div>
            <motion.img variants={variant_img} src="\images\linkedin-svgrepo-com.svg" alt="" />
            <motion.img variants={variant_img} src="\images\github-svgrepo-com.svg" alt="" />
        </div>
    </motion.div>
  )
}
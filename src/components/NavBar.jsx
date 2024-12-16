import {motion, useCycle} from "motion/react";
import Hamburger from "./Hamburger";
import { delay } from "motion";

export const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const variant_a = {
    closed:{
      x:500,
    },
    open:{
      x:0,
      transition:{
        ease:"linear",
        duration:0.4,
      }
    }
  }

  return (
    <motion.nav animate={isOpen? 'open':window.innerWidth > 500 ?"open":'closed'} transition={isOpen && {staggerChildren:0.07}} className="fixed z-10 w-full sm:flex justify-center gap-4">
      <Hamburger toggle={toggleOpen} isOpen={isOpen}/>
      <motion.a variants={variant_a} className="w-full sm:w-fit block text-end sm:text-center px-4 py-2 sm:bg-transparent" href="#Home">Home</motion.a>
      <motion.a variants={variant_a} className="w-full sm:w-fit block text-end sm:text-center px-4 py-2 sm:bg-transparent" href="#Skills">Skills</motion.a>
      <motion.a variants={variant_a} className="w-full sm:w-fit block text-end sm:text-center px-4 py-2 sm:bg-transparent" href="#Projects">Projects</motion.a>
      <motion.a variants={variant_a} className="w-full sm:w-fit block text-end sm:text-center px-4 py-2 sm:bg-transparent" href="#Contact">Contact</motion.a>
    </motion.nav>
  );
};

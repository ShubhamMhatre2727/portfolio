import {motion} from "motion/react"
function Hamburger({toggle, isOpen}) {
  return (
    <svg onClick={toggle}  className="hamburger w-full px-4 sm:hidden h-10" xmlns="http://www.w3.org/2000/svg">
  <motion.line animate={isOpen?{rotate:45, y:6}:{rotate:0, y:0}} transition={{ease:"linear"}} id="top" x1="93%" y1="35%" y2="35%" x2="99%" stroke="gray" strokeWidth={2}/>
  <motion.line animate={isOpen ?{opacity:0}:{opacity:1}} transition={{ease:"linear"}} id="mid" x1="93%" y1="50%" y2="50%" x2="99%" stroke="gray" strokeWidth={2}/>
  <motion.line animate={isOpen?{rotate:-45, y:-6}:{rotate:0, y:0}} transition={{ease:"linear"}} id="bottom" x1="93%" y1="65%" y2="65%" x2="99%" stroke="gray" strokeWidth={2}/>
</svg>
  )
}

export default Hamburger
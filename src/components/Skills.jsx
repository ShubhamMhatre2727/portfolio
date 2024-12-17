import {motion} from "motion/react";

const Skills = () => {
  const skillsList = [
    ['HTML','/images/skills/html-5-svgrepo-com.svg'],
    ['CSS','/images/skills/css-3-svgrepo-com.svg'],
    ['JavaScript','/images/skills/js-official-svgrepo-com.svg'],
    ['Java','/images/skills/java-4-logo-svgrepo-com.svg'],
    ['Python','/images/skills/python-svgrepo-com.svg'],
    ['Flask','/images/skills/flask-svgrepo-com.svg'],
    ['Node.js','/images/skills/node-js-svgrepo-com.svg'],
    ['React.js','/images/skills/react-svgrepo-com.svg'],
    ['Figma','/images/skills/figma-svgrepo-com.svg'],
    ['Firebase','/images/skills/firebase-svgrepo-com.svg'],
    ['Git','/images/skills/git-svgrepo-com.svg'],
    ['GitHub','/images/skills/github-142-svgrepo-com.svg'],
  ]
  return (
    <motion.div id='Skills' className='Skills flex justify-center items-center'>
        <div className="Glass w-96 sm:w-3/5 py-5 flex flex-col justify-center items-center">
            <h1 className='text-4xl mb-4'>Skills</h1>
            <div className="flex flex-wrap justify-center gap-6">
              {
                skillsList.map((skill)=>{
                  return(
                    <motion.img title={skill[0]} src={skill[1]} width={80} className="grayscale hover:grayscale-0 hover:scale-110 transition-all"/>
                  )
                })
              }
            </div>
        </div>
    </motion.div>
  )
}

export default Skills
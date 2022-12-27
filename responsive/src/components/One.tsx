import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LeftSide from "./LeftSide";


interface Color{
    color: string
}

const One = (props:Color) => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
      });


      scrollYProgress.onChange(e =>{
        console.log(e)
      })

      
      


    return ( 
        <motion.div className={` ${props.color} scroll-snapping flex justify-end`}>
           <motion.div className=" w-4/6 h-full bg-blue-900 flex flex-row gray justify-end p-24">
                <motion.img className="" src="firstone.png" alt="first" 
                initial={{
                    y:'-100vh'
                }}

                transition={{
                    duration:1.5
                }}
                
                animate={{
                    y:0
                }} 
                
                />
                <motion.img className="" src="firsttwo.png" alt="first" 
                initial={{
                    y:'+100vh'
                }}

                transition={{
                    duration:1.5
                }}
                
                animate={{
                    y:0
                }} 

                />
            </motion.div>
        </motion.div>
        
     )
}
    
export default One;    
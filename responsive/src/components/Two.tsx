import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LeftSide from "./LeftSide";
import { useInView } from "framer-motion";


interface Color{
    color: string
}

const Two = (props:Color) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
      });


      scrollYProgress.onChange(e =>{
        console.log(e)
      })

      
      


    return ( 
        <motion.div className={` ${props.color} scroll-snapping flex justify-end`}>
           <motion.div className=" w-4/6 h-screen bg-blue-900 flex flex-row gray justify-end ">
                <motion.img ref={ref} className=" h-[700px] ml-auto" src="secondone.png" alt="first" 
                style={{
                    transform: isInView ? "none" : "translateY(-10px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}
                
                />
                <motion.img className=" h-[700px]  ml-auto mt-auto" src="secondtwo.png" alt="first" 
                style={{
                    transform: isInView ? "none" : "translateY(10px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}

                />
            </motion.div>
        </motion.div>
        
     )
}
    
export default Two;    
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LeftSide from "./LeftSide";


interface Color{
    color: string
}

const Section = (props:Color) => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
      });


      scrollYProgress.onChange(e =>{
        console.log(e)
      })

      const cardVariants = {
        offscreen: {
          opacity:0
        },
        onscreen: {
            opacity:1, 
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      }


    return ( 
        <motion.div className={`  ${props.color} scroll-snapping`}
        
        >
           <motion.div className=" w-full h-screen bg-gray-700 flex flex-col items-end justify-end pb-11 pr-11 gray">
                <motion.h1 initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 1 }}
                variants={cardVariants}  className="text-5xl font-bold" ref={ref}>ABC 678</motion.h1>
                <motion.p>Placeholder</motion.p>
                <motion.p>Lorem ipsum</motion.p>
                <motion.p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum</motion.p>
            </motion.div>
        </motion.div>
     );
}
    
export default Section;    
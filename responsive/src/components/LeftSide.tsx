import { motion } from "framer-motion";


const LeftSide = () => {


    return ( 
        <div className="fixed w-2/5 h-screen bg-blue-500 flex flex-col justify-end pb-44 pl-24 z-10">
                <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0, scale: 0.5 }} animate={{
                    opacity: 1,
                    scale: 1
                }}
                
                transition={{ 
                    duration: 0.5
                 }}
                
                >ABC8</motion.h1>
                <p>Best since 2017</p>
                <p>We offer a wide range of </p>
                <p>Web development and App development</p>
            </div>
     );
}
 
export default LeftSide;
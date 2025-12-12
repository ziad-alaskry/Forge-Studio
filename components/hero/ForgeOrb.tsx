import {motion } from "framer-motion";

const ForgeOrb = () => {
    return ( 
        <motion.div 
        initial= {{y:40, opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{duration:1.2 ,ease: "easeOut"}}
        className="w-40 h-40 sm:w-56 sm:h-56
        rounded-full bg-gradient-to-br from-forgeBlue to-forgeMetal
        shadow-forgeGlow blur-[0.5px]"/>
    )
}

export default ForgeOrb;
import {motion} from 'framer-motion';

const ForgeParallaxGlow = () => {
    return (
        <motion.div 
        initial= {{opacity: 0 , scale:0.7}}
        animate={{opacity: 0.6 , scale: 1}}
        transition={{duration:2, ease: "easeOut"}}
        className='absolute inset-0 -z-10
        bg-gradient-to-br from-forgeBlue/30 to-transparent
        blur-[120px]'/>
    )
}

export default ForgeParallaxGlow;
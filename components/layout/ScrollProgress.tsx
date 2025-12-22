"use client"
import {motion, useScroll} from "motion/react" 

export default function ScrollProgress()  {
    const {scrollYProgress} = useScroll(); 

    return (
        <>
            <motion.div
            id="scroll-progress"
            style={{
                scaleX:scrollYProgress,
                top:0,
                left:0,
                right:0,
                height:5,
                originX:0,
                backgroundColor: "rgba(179, 152, 103, 0.4)"
            }}
            ></motion.div>
        </>
    )
}
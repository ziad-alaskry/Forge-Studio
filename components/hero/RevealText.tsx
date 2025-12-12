import {motion} from 'framer-motion';
import {FC, ReactNode} from 'react';

interface RevealTextProps {
    children: ReactNode;
    delay?:number;
}

const RevealText: FC<RevealTextProps> = ({children , delay}) => {
    return (
        <motion.div 
        initial={{ opacity:0, y:20 }}
        animate={{ opacity: 1, y:0 }}
        transition={{delay, duration:0.8 , ease: "easeOut"}}
        >
            {children}
        </motion.div>
    )
}

export default RevealText;
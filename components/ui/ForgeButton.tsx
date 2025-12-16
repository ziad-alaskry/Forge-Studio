import {FC} from 'react';

type ForgeButtonVariant = "primary" | "secondary";

interface ForgeButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: ForgeButtonVariant;
}

const ForgeButton: FC<ForgeButtonProps> = ({label, onClick, type= "button" , variant="primary"}) =>{
    
    const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all";
    const variants = {
        primary:"bg-forgeBlue text-black hover:opacity-80",
        secondary:"border border-frogeBlue text-forgeBlue hover:bg-forgeBlue/50"
    };

    
    return (
        <button 
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]}`} >
            {label}
        </button>
    )
}

export default ForgeButton;